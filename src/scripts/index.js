var $ = require('jquery')
$.mobile = require('jquery-mobile')

var cart = require('./cart');
cart.init();

var user = require('./user')
user.init();

var datastore = require('./datastore')

window.app = {
    cart,
    user,
    datastore
}