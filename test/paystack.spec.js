'use strict'

/*
 * adonis-paystack
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { Config, Env } = require('@adonisjs/sink')
const PayStack = require('../src/PayStack/index.js')
const PayStackProvider = require('../providers/PayStackProvider.js')
const { ioc } = require('@adonisjs/fold')

test.group('AdonisJS PayStack Test(s)', (group) => {
  group.beforeEach(() => {
    this.config = new Config()
    this.env = new Env()

    this.config.set('paystack.apiTestKey', 'sk_test_f65a8e6748e94f8a309e09349ebc8e4a')
    this.env.set('NODE_ENV', 'development')
  })

  test('instantiate without errors', (assert) => {
    const PayStackStub = require('./setup/api-stub.js')
    const PayStackInstance = new PayStack(PayStackStub, this.config, this.env)

    assert.isTrue(typeof PayStackInstance.createCustomer === 'function')
    assert.isTrue(typeof PayStackInstance.createInvoice === 'function')
  })

  test('register provider without errors', (assert) => {
    ioc.bind('Adonis/Src/Config', () => {
      return this.config
    })

    ioc.bind('Adonis/Src/Env', () => {
      return this.env
    })
    ioc.alias('Adonis/Src/Env', 'Env')

    const serviceProvider = new PayStackProvider(ioc)
    serviceProvider.register()

    const paystack = ioc.use('Adonis/Addons/PayStack')
    const paystackFeesCalulator = ioc.use('Adonis/Addons/PayStack.FeesCalulator')

    assert.instanceOf(paystack, PayStack)
    // console.log(parseFloat((paystackFeesCalulator.calculateFor(250000) / 100).toFixed(2)))

    paystack.fake()

    assert.isTrue(typeof paystack.chargeCard === 'function')
  })
})
