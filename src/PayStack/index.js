'use strict'

// const Event = use('Event')

class PayStackAPIClient {
  constructor (Agent, Config, Env) {
    let environment = Env.get('NODE_ENV')
    let apiKey = (environment !== 'production') ? Config.get('paystack.apiTestKey') : Config.get('paystack.apiLiveKey')

    this.agent = new Agent(
      apiKey,
      environment
    )
  }
};

module.exports = PayStackAPIClient
