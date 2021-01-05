// // Stripe API (Node.js)
// const Stripe = require('stripe');
// const stripeAPI = Stripe('sk_test_51I3c8WBYsXgRXg4suIS6WCRMMcfMsNgopWokzuqiKXSo6pmVX00zIk7Up6ukdjZLEY6YfpclJ1lAUCBKpl6Y4fe600CfNE584P');

const $ = require('jquery');

const SECRET_KEY = 'sk_test_51I3c8WBYsXgRXg4suIS6WCRMMcfMsNgopWokzuqiKXSo6pmVX00zIk7Up6ukdjZLEY6YfpclJ1lAUCBKpl6Y4fe600CfNE584P';

module.exports = function () {
    return {
        createSessionToSaveCardDetails: function (options, success, error) {
            return $.ajax({
                type: "POST",
                dataType: "json",
                url: "https://api.stripe.com/v1/checkout/sessions",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', `Bearer ${SECRET_KEY}`);
                },
                data: {
                    payment_method_types: ['card'],
                    mode: 'setup', // only setup the payment method, without charging any initial payment
                    ...options
                },
                success: (response) => success(response),
                error: error,
            })
        }
    }
}()