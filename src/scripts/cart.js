var cookie = require('js-cookie')

const CART_STORAGE_KEY = 'cart';

// TODO remove mock data
const INITIAL_CART_STATE = {
    vendor: {
        vendorName: 'Burgers Ahoy!',
        deliveryTime: '30 - 40 mins'
    },
    items: [
        {
            itemName: 'Tom Yump Soup',
            itemPrice: 400,
            quantity: 1,
            notes: "Less spicy",
        }
    ]
};


module.exports = function () {

    // IN EACH FUNCTION, DO NOT FORGET TO RETRIEVE THE CART INFO FROM LOCAL STORAGE
    // AND ALSO TO SAVE IT AT THE END

    return {
        // this object is the public API accessible to other modules
        init: function () {
            // empty cart at initialization with no restaurant set
            cookie.set(CART_STORAGE_KEY, INITIAL_CART_STATE);
        },
        summary: function () {
            return cookie.getJSON(CART_STORAGE_KEY);
        },
        addItemToCart: function ({ vendor, item }) {
            const cart = cookie.getJSON(CART_STORAGE_KEY) || INITIAL_CART_STATE;

            // if vendor is set
            if (vendor.vendorName) {
                // check if user is tyring to add item from same vendor
                if (vendor.vendorName === cart.vendor.vendorName) {
                    // add item and return true for success
                    cart.items.add(item);
                    cookie.set(CART_STORAGE_KEY, cart);
                    return null;
                } else {
                    // else return false with error message indicate why
                    return `You may only order items from one vendor at a time. 
                    You have currently chosen ${cart.vendor.vendorName}.`
                }
            } else {
                cart = INITIAL_CART_STATE // Reset cart
                cart.vendor = vendor; // Initialize vendor details
                cart.items.add(item) // Add item to cart
                cookie.set(CART_STORAGE_KEY, cart);
            }
        },
        clearCart: function () {
            this.init();
        },
    }
}()