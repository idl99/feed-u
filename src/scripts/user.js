var cookie = require('js-cookie');

const USER = "user";

const DEFAULT_USER = {
    payment: {
        stripe_customer_id: 'cus_IhWwxopENtlI1P'
    },
    location: {
        display: "Nugegoda, Delkanda",
    },
    points: 547,
}

module.exports = function () {
    return {
        init: function () {
            cookie.set(USER, DEFAULT_USER)
        },
        getDetails: function () {
            return cookie.getJSON(USER)
        },
        getPaymentDetails: function () {
            return cookie.getJSON(USER).payment
        }
    }
}()