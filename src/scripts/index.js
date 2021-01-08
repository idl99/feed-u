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

// $(document).one("pagebeforecreate", function () {
//     console.log('Adding the navigation panel to the page...');
    // var markup = 
    // `<div data-role="panel" id="navigation-menu" data-position-fixed="true">
    //     <span>Navigation menu goes here</span>
    // </div>

    // <div data-role="header" data-position="fixed" id="home-header" data-tap-toggle="false">
    //     <a id="navigation-menu-hamburger" href="#navigation-menu"
    //         class="ui-btn ui-shadow ui-corner-all ui-icon-bars ui-btn-icon-notext ui-btn-inline">Delete</a>
    //     <h4>LOGO</h4>
    // </div>`;
    // document.write(markup);

    // $(function() {
    // $( "body>[data-role='panel']" ).panel();
    // });
    // $.get('navigation_side_bar.html', function (data) {
    //     //$(data).prependTo($.mobile.pageContainer); //or .prependTo("body");
    //     $.mobile.pageContainer.prepend(data);
    //     $("[data-role=panel]").panel().enhanceWithin(); // initialize panel
    // }, "html");

// });