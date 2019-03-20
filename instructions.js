'use strict'

/**
 * adonis-paystack
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 *
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com> | Aziz Abdul <>
 */

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('paystack.js', path.join(__dirname, './config/paystack.js'))
    cli.command.completed('create', 'config/paystack.js')
  } catch (error) {
    // ignore if paystack.js file already exists
  }
}
