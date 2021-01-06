var cookie = require('js-cookie');

const USER = "user";

const DEFAULT_USER = {
    profile: {
        name: "John Doe",
        points: 547,
    },
    payment: {
        stripe_customer_id: 'cus_IhWwxopENtlI1P'
    },
    location: {
        display: "Nugegoda, Delkanda",
    },
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