var cookie = require('js-cookie')

const CART_STORAGE_KEY = 'cart';

// TODO remove mock data
// const INITIAL_CART_STATE = {
//     vendor: {
//         vendorName: 'Burgers Ahoy!',
//         deliveryTime: '30 - 40 mins'
//     },
//     items: [
//         {
//             itemName: 'Tom Yump Soup',
//             itemPrice: 400,
//             quantity: 1,
//             notes: "Less spicy",
//         }
//     ]
// };

const INITIAL_CART_STATE = Object.freeze({
    vendor: {
    },
    items: [
    ]
});


module.exports = function () {

    // IN EACH FUNCTION, DO NOT FORGET TO RETRIEVE THE CART INFO FROM LOCAL STORAGE
    // AND ALSO TO SAVE IT AT THE END

    return {
        // this object is the public API accessible to other modules
        init: function () {
            // empty cart at initialization with no restaurant set
            if (!cookie.getJSON(CART_STORAGE_KEY)) {
                cookie.set(CART_STORAGE_KEY, INITIAL_CART_STATE);
            }
        },
        summary: function () {
            /**
             * JSON structure of summary
             * 
             * items: [
             *      {
             *          itemTitle: "name of the item",
             *          quantity: 1,
             *          itemPrice: 400,
             *      }
             * ]
             * 
             */
            return cookie.getJSON(CART_STORAGE_KEY);
        },
        addItemToCart: function ({ vendor, item }) {
            const cart = cookie.getJSON(CART_STORAGE_KEY);

            // if vendor is set
            if (cart.vendor.vendorName) {
                // check if user is tyring to add item from same vendor
                if (cart.vendor.vendorName === vendor.vendorName) {
                    // add item and return true for success
                    cart.items.push(item);
                    cookie.set(CART_STORAGE_KEY, cart);
                    return null;
                } else {
                    // else return false with error message indicate why
                    return `You may only order items from one vendor at a time. 
                    You have currently chosen ${cart.vendor.vendorName}.`
                }
            } else {
                // Reset cart
                // VERY IMPORTANT: using JSON serialization follow with JSON deserialization for deep copy
                // otherwise there is a bug where when you add a new item and try clearing the cart it won't work, 
                // because the INITIAL_CART_STATE object has gotten updated by a reference passed to another named variable
                // Refer https://stackoverflow.com/a/61422332/7803975 for more
                const newCart = JSON.parse(JSON.stringify(INITIAL_CART_STATE)) // Reset cart
                newCart.vendor = vendor; // Initialize vendor details
                newCart.items.push(item) // Add item to cart
                cookie.set(CART_STORAGE_KEY, newCart);
            }
        },
        clearCart: function () {
            console.log('Clearing cart...');
            cookie.set(CART_STORAGE_KEY, INITIAL_CART_STATE);
        },
    }
}()