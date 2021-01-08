var $ = require('jquery')
$.mobile = require('jquery-mobile')

var cart = require('./cart');
cart.init();

var user = require('./user')
user.init();

var datastore = require('./datastore')

var utils = require('./utils')

var payment = require('./payment')

var stripe = require('@stripe/stripe-js');

window.app = {
    cart,
    user,
    datastore,
    utils,
    payment,
    stripe
}

/**
 * Remove following scripts (attached to the window) before hiding the current page to load the next.
 * Since we are using AJAX navigation between the pages, these scripts will thrown us an error 
 * indicating that we are trying to load the scripts multple times.
 * The code given below prevents that issue by resetting the source code set on the window
 * each time the respective script is loaded.
 */
$(document).on("pagecontainerbeforehide", function (event, ui) {
    console.log('Page going to hide ... removing Google Maps scripts')
    window.google = undefined;
    window.Stripe = undefined;
})