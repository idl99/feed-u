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

/**
 * https://github.com/jquery/demos.jquerymobile.com/blob/master/1.4.5/panel-external/index.html
 */
$(document).one("ready", function () {

    var panelMarkup = `
        <div data-role="panel" id="leftpanel1" data-position="left" data-display="reveal" data-theme="a">

        <h3>Left Panel: Reveal</h3>
        <p>This panel is positioned on the left with the reveal display mode. The panel markup is <em>after</em> the header, content and footer in the source order.</p>
        <p>To close, click off the panel, swipe left or right, hit the Esc key, or use the button below:</p>
        <a href="#demo-links" data-rel="close" class="ui-btn ui-shadow ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-left ui-btn-inline">Close panel</a>

        </div>
    `

    // Add the panel to the body
    $('body').append(panelMarkup);

    // Manually initialize the panel
    $("body>[data-role='panel']").panel();
})
