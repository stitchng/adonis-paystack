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

let PayStackStub = null

test.group('AdonisJS FlutterwaveRave Test(s)', (group) => {
  group.beforeEach(() => {
    PayStackStub = require('./setup/api-stub.js')

    this.config = new Config()
    this.env = new Env()
  })

  test('instantiate without errors or side-effects [yet]', (assert) => {
    this.config.set('paystack.apiKey', 'FLWPUBK-e64d8e6748e94f8a309e09349ebc8e4e-C')
    this.env.set('NODE_ENV', 'development')

    const PayStackInstance = new PayStack(PayStackStub, this.config, this.env)

    assert.isTrue(typeof PayStackInstance.agent.createCustomer === 'function')
    assert.isTrue(typeof PayStackInstance.agent.createInvoice === 'function')
  })
})
