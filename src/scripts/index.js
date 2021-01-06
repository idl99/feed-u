var $ = require('jquery')
$.mobile = require('jquery-mobile')

var cart = require('./cart');
cart.init();

var user = require('./user')
user.init();

var datastore = require('./datastore')

var utils = require('./utils')

var payment = require('./payment')

window.app = {
    cart,
    user,
    datastore,
    utils,
    payment,
}

/**
 * Remove Google Maps from the document before hiding the current page to load the next.
 * Since we are using AJAX navigation between the pages, Google will show us an error 
 * indicating that we are trying to load the Google Maps API script multiple times.
 * The code given below prevents that issue by resetting the source code set on the window (window.google)
 * each time the Google Maps API script is loaded.
 */
$(document).on("pagecontainerbeforehide", function (event, ui) {
    console.log('Page going to hide ... removing Google Maps scripts')
    window.google = undefined;
})