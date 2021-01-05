// // Stripe API (Node.js)
// const Stripe = require('stripe');
// const stripeAPI = Stripe('sk_test_51I3c8WBYsXgRXg4suIS6WCRMMcfMsNgopWokzuqiKXSo6pmVX00zIk7Up6ukdjZLEY6YfpclJ1lAUCBKpl6Y4fe600CfNE584P');

const $ = require('jquery');

const SECRET_KEY = 'sk_test_51I3c8WBYsXgRXg4suIS6WCRMMcfMsNgopWokzuqiKXSo6pmVX00zIk7Up6ukdjZLEY6YfpclJ1lAUCBKpl6Y4fe600CfNE584P';

const postToStripeAPI = function (url, data, success, error) {
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

const getFromStripeAPI = function (url, queryParams, success = () => { }, error = () => { }) {
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
            return postToStripeAPI('checkout/sessions', {
                payment_method_types: ['card'],
                mode: 'setup', // only setup the payment method, without charging any initial payment
                ...options
            }, success, error)
        },
        getAllCardsForCustomer: function (customer, success, error) {
            // https://stripe.com/docs/api/payment_methods/list?lang=curl
            return getFromStripeAPI('payment_methods', { customer, type: 'card' }, success, error);
        }
    }
}()