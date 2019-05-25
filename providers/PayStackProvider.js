'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PayStackProvider extends ServiceProvider {
  /**
   * Register method called by ioc container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Adonis/Addons/PayStack', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const Env = this.app.use('Env')
      const PayStack = require('../src/PayStack/index.js')
      const paystack = new PayStack(require('paystack-node'), Config, Env)

      return paystack.agent
    })

    this.app.alias('Adonis/Addons/PayStack', 'PayStack')
  }

  /**
   * Boot the provider
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    ;
  }
}

module.exports = PayStackProvider
