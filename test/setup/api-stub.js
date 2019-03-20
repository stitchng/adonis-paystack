'use strict'

const PaystackStub = function (key) {
  this.apiKey = key
}

PaystackStub.prototype.createCustomer = function () {}
PaystackStub.prototype.createInvoice = function () {}

module.exports = PaystackStub
