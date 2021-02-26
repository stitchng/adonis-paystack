'use strict'

// add testing mock accessibility { paystack-node = v0.2.6+ }
const MockDecorator = function decorator(context) {
  this.context = context;
  this.set = function decorationSetter (target, prop, value) {
    this.context['_mock']['__' + prop] = value;
  }

  this.get = function decorationGetter (target, prop) {
    /**
     * if node is inspecting then stick to target properties
     */
    if (typeof (prop) === 'symbol' || prop === 'inspect') {
      return target[prop]
    }

    if (prop === 'fake' && typeof target[prop] !== 'function') {
      return this.context.constructor.engageMock;
    }

    if (prop === 'macro' && typeof target[prop] !== 'function') {
      return this.context.constructor.mockMacro;
    }

    if (prop === 'restore' && typeof target[prop] !== 'function') {
      return this.context.constructor.disengageMock;
    }

    return this.context[prop] || target[prop]
  }
}

class PayStackAPIClient {
  constructor (Agent, Config, Env) {
    let environment = Env.get('NODE_ENV')
    let apiKey = (environment !== 'production') ? Config.get('paystack.apiTestKey') : Config.get('paystack.apiLiveKey')

    const decorator = new MockDecorator(
      new Agent(apiKey, environment)
    );
    return new Proxy(this, decorator)
  }
};

module.exports = PayStackAPIClient
