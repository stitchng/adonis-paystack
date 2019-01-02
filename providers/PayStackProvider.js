'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PayStackProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/PayStack', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const PayStack = require('../src/Paystack')
      return (new PayStack(require('@stitchng/paystack'), Config)).agent
    })
  }
}

module.exports = PayStackProvider
