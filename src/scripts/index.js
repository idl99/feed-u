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

const screenDimens = {
    iPad: 1024
}

/**
 * This function opens the navigation panel programatically
 * if the screen width is above the specified size
 * 
 * Refer https://forum.jquery.com/topic/responsive-panel-demo-broken-how-to-keep-a-panel-open-on-a-large-window
 */
const evaluatePanelOpen = function () {
    var width = $(window).width();
    if (width >= screenDimens.iPad) {
        console.log('Opening navigation panel');
        $("#navigation-menu").panel("open");
    } else {
        $("#navigation-menu").panel("close");
    }
}

/**
 * https://github.com/jquery/demos.jquerymobile.com/blob/master/1.4.5/panel-external/index.html
 */
$(document).on("ready", function () {
    $.get("navigation_side_bar.html", function (markup) {
        // Add the panel to the body
        $('body').append(markup);

        // Manually initialize the panel
        $("body>[data-role='panel']").panel();
        evaluatePanelOpen();

        $('body').on("pagecontainerchange", function () {
            // Check again when we navigate to another page
            evaluatePanelOpen();
        })

        $(window).on("resize", function () {
            // Check again when the window gets resized (maybe due to change in screen orientation)
            evaluatePanelOpen();
        })
    })
})
