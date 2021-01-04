var cookie = require('js-cookie');

const USER = "user";

module.exports = function () {
    return {
        init: function () {
            cookie.set(USER, {
                location: {
                    display: "Nugegoda, Delkanda",
                },
                points: 547,
            })
        },
        getDetails: function () {
            return cookie.getJSON(USER)
        }
    }
}()