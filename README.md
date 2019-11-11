# adonis-paystack
An addon/plugin package to provide PayStack payment services in AdonisJS 4.1+

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls][coveralls-image]][coveralls-url]

<img src="http://res.cloudinary.com/adonisjs/image/upload/q_100/v1497112678/adonis-purple_pzkmzt.svg" width="200px" align="right" hspace="30px" vspace="140px">

## Getting Started

>Install from the NPM Registry

```bash

    $ adonis install adonisjs-paystack

```

>Make use of it inside a HTTP/Web Socket Controller(s)

```js

const Paystack = use('PayStack')

/**
 * This class handles all requests for 
 * the checkout flow of the app
 *
 * @class CheckOutController
 */
class CheckOutController {
	/**
	 * Begin Transaction Process
	 *
	 * @method initTransaction
	 *
	 * @param  {Object} context.request
	 * @param  {Object} context.response
	 *
	 * @return {Promise}
	 */
	async initTransaction({ request, response }) {

		    //.....

		    let response = await Paystack.initializeTransaction({
		      callback_url:"https://locahost:3333/trans/hooks/paystack", 
		      amount: 3000, 
		      email: "xyz@abc.com"
		    })

		    return await response.status(200).json({
		      data: response.body
		    })
	}

	async fetchCustomer({ request, response }){

			//.....

			let response = await Paystack.getCustomer({
				customer_id:'CUS_reu3738we993wsnqah'
			})

			return await response.status(200).json({
		      data: response.body
		    })
	}

}

module.exports = CheckOutController

```

## License

MIT

## Running Tests

```bash

    npm i

```

```bash

	npm run lint

    npm run test

```

## Credits

- [Ifeora Okechukwu](https://twitter.com/isocroft)
- [Ahmad Abdul-Aziz](https://twitter.com/dev_amaz)
    
## Contributing

See the [CONTRIBUTING.md](https://github.com/stitchng/adonis-paystack/blob/master/CONTRIBUTING.md) file for info

## Support 

**Coolcodes** is a non-profit software foundation (collective) created by **Oparand** - parent company of StitchNG, Synergixe based in Abuja, Nigeria. You'll find an overview of all our work and supported open source projects on our [Facebook Page](https://www.facebook.com/coolcodes/).

>Follow us on facebook if you can to get the latest open source software/freeware news and infomation.

Does your business depend on our open projects? Reach out and support us on [Patreon](https://www.patreon.com/coolcodes/). All pledges will be dedicated to allocating workforce on maintenance and new awesome stuff.

[npm-image]: https://img.shields.io/npm/v/adonisjs-paystack.svg?style=flat-square
[npm-url]: https://npmjs.org/package/adonisjs-paystack

[travis-image]: https://img.shields.io/travis/stitchng/adonis-paystack/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/stitchng/adonis-paystack

[coveralls-image]: https://img.shields.io/coveralls/stitchng/adonis-paystack/develop.svg?style=flat-square

[coveralls-url]: https://coveralls.io/github/stitchng/adonis-paystack
