const $ = require('jquery');

const SECRET_KEY = 'sk_test_51I3c8WBYsXgRXg4suIS6WCRMMcfMsNgopWokzuqiKXSo6pmVX00zIk7Up6ukdjZLEY6YfpclJ1lAUCBKpl6Y4fe600CfNE584P';

const postToStripeAPI = function ({ url, data, success, error }) {
    return $.ajax({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${SECRET_KEY}`);
        },
        url: "https://api.stripe.com/v1/" + url,
        type: "POST",
        data,
        dataType: "json",
        success,
        error,
    })
}

const getFromStripeAPI = function ({ url, queryParams, success, error }) {
    return $.ajax({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${SECRET_KEY}`);
        },
        url: "https://api.stripe.com/v1/" + url,
        type: "GET",
        data: queryParams,
        dataType: "json",
        success,
        error,
    })
}

module.exports = function () {
    return {
        createSessionToSaveCardDetails: function (options, success, error) {
            return postToStripeAPI({
                url: 'checkout/sessions',
                data: {
                    payment_method_types: ['card'],
                    mode: 'setup', // only setup the payment method, without charging any initial payment
                    ...options
                },
                success,
                error
            })
        },
        getAllCardsForCustomer: function (success, error) {
            const loggedInUser = require('./user').getPaymentDetails();

            // https://stripe.com/docs/api/payment_methods/list?lang=curl
            return getFromStripeAPI({
                url: 'payment_methods',
                queryParams: {
                    customer: loggedInUser.stripe_customer_id,
                    type: 'card'
                },
                success,
                error
            });
        },
        removeCard: function (cardId, success, error) {
            return postToStripeAPI({
                url: `payment_methods/${cardId}/detach`,
                success,
                error
            });
        },
        createCheckoutSession(options, success, error) {
            const loggedInUser = require('./user').getPaymentDetails();

            return postToStripeAPI({
                url: 'checkout/sessions',
                success,
                error,
                data: {
                    customer: loggedInUser.stripe_customer_id,
                    ...options,
                }
            })
        }
    }
}()