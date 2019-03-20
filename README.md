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

const paystack = use('PayStack')

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

		    let response = await paystack.initializeTransaction({
		      callback_url:"https://example.com/hooks/paystack", 
		      amount: 3000, 
		      email: "xyz@abc.com"
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

- [Ifeora Okechukwu <Head Of Technology - Oparand>](https://twitter.com/isocroft)
- [Ahmad Abdul-Aziz <Software Engineer>](https://twitter.com/dev_amaz)
    
## Contributing

[npm-image]: https://img.shields.io/npm/v/adonisjs-paystack.svg?style=flat-square
[npm-url]: https://npmjs.org/package/adonisjs-paystack

[travis-image]: https://img.shields.io/travis/stitchng/adonis-paystack/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/stitchng/adonis-paystack

[coveralls-image]: https://img.shields.io/coveralls/stitchng/adonis-paystack/develop.svg?style=flat-square

[coveralls-url]: https://coveralls.io/github/stitchng/adonis-paystack
