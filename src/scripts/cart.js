var cookie = require('js-cookie')

var CART = 'cart';

module.exports = function () {
    return {
        // this object is the public API accessible to other modules
        init: function () {
            cookie.set(CART, {
                restaurant: {
                    name: 'Burgers Ahoy!',
                    eta: '30 - 40mins'
                },
                items: [
                    {
                        name: 'Tom Yump Soup',
                        price: 400,
                        quantity: 1,
                        notes: "Less spicy",
                    }
                ]
            })
        },
        summary: function () {
            return cookie.getJSON(CART)
        }
    }
}()