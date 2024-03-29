'use strict'

// add testing mock accessibility { paystack-node = v0.2.6+ }
const MockDecorator = function decorator (context) {
  this.context = context
  this.set = function decorationSetter (target, prop, value) {
    if (!target[prop]) {
      this.context['_mock']['__' + prop] = value
    }
  }

  this.get = function decorationGetter (target, prop) {
    /**
     * if node is inspecting then stick to target properties
     */
    if (typeof (prop) === 'symbol' || prop === 'inspect') {
      return target[prop]
    }

    if (prop === 'fake' && typeof target[prop] !== 'function') {
      return this.context.constructor.engageMock.bind(
        this.context.constructor
      )
    }

    if (prop === 'withError' && typeof target[prop] !== 'function') {
      return this.context.constructor.respondWithError.bind(
        this.context.constructor
      )
    }

    if (prop === 'withOutError' && typeof target[prop] !== 'function') {
      return this.context.constructor.respondWithoutError.bind(
        this.context.constructor
      )
    }

    if (prop === 'macro' && typeof target[prop] !== 'function') {
      return this.context.constructor.mockMacro.bind(
        this.context.constructor
      )
    }

    if (prop === 'restore' && typeof target[prop] !== 'function') {
      return this.context.constructor.disengageMock.bind(
        this.context.constructor
      )
    }

    const contextFn = this.context[prop]
    const targetFn = target[prop] || { bind: function noop () { } }
    return typeof contextFn === 'function' ? contextFn.bind(this.context) : targetFn.bind(target)
  }
}

class PayStackAPIClient {
  constructor (Agent, Config, Env) {
    let environment = Env.get('NODE_ENV')
    let apiKey = (environment !== 'production') ? Config.get('paystack.apiTestKey') : Config.get('paystack.apiLiveKey')

    const decorator = new MockDecorator(
      new Agent(apiKey, environment)
    )
    return new Proxy(this, decorator)
  }
};

module.exports = PayStackAPIClient
