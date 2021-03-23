'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const PayStackAPIWrapper = require('paystack-node')

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
      const paystack = new PayStack(PayStackAPIWrapper, Config, Env)

      return paystack
    })

    this.app.alias('Adonis/Addons/PayStack', 'PayStack')

    this.app.singleton('Adonis/Addons/PayStack.FeesCalulator', () => {
      return new PayStackAPIWrapper.Fees()
    })

    this.app.alias('Adonis/Addons/PayStack.FeesCalulator', 'PayStack.FeesCalulator')
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
