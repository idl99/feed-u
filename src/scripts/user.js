var cookie = require('js-cookie');

const USER = "user";

const DEFAULT_USER = {
    profile: {
        name: "John Doe",
        points: 270,
    },
    payment: {
        stripe_customer_id: 'cus_IhWwxopENtlI1P',
    },
    location: {
        display: "Delkanda, Nugegoda",
    },
    favorites: {
        items: [],
        vendors: [],
    }
}

const orders = {
    pastOrders: [
        {
            "pastOrderId": "ord1",
            "vendorCoverImageLocation": "../assets/past_orders/past_order_cover_image.jpg",
            "vendorLogoImageLocation": "../assets/stories_images/story-big.png",
            "vendorName": "Burgers Ahoy!",
            "noOfOrderedItems": 3,
            "price": 1000,
            "date": "Oct 10 at 12:12 PM",
            "vendorRating": 0,
            "vendorComment": "",
            "orderedItems": [
                {
                    "itemName": "Hawaiian Burger",
                    "quantity": 2,
                    "rating": 0,
                    "comment": ""
                },
                {
                    "itemName": "Pudding",
                    "quantity": 2,
                    "rating": 0,
                    "comment": ""
                },
                {
                    "itemName": "Special Chilli Sauce",
                    "quantity": 1,
                    "rating": 0,
                    "comment": ""
                }
            ]
        },
        {
            "pastOrderId": "ord2",
            "vendorCoverImageLocation": "../assets/past_orders/past_order_cover_image.jpg",
            "vendorLogoImageLocation": "../assets/stories_images/story-big.png",
            "vendorName": "Burgers Ahoy!",
            "noOfOrderedItems": 1,
            "price": 500,
            "date": "Oct 01 at 08:30 PM",
            "vendorRating": 4,
            "vendorComment": "The food is great but the quantity is not enough.",
            "orderedItems": [
                {
                    "itemName": "Fish and Chips Burger",
                    "quantity": 2,
                    "rating": 4,
                    "comment": "Great food. Please increase on the quantity a bit."
                },
            ]
        },
    ]
}

module.exports = function () {
    return {
        FAVORITE_TYPES: {
            ITEM: 'item',
            VENDOR: 'vendor',
        },
        init: function () {
            if (!cookie.get(USER)) { // Set cookie only if not already set
                cookie.set(USER, DEFAULT_USER)
            }
        },
        updateLocation: function ({ updatedLocation }) {
            const user = cookie.getJSON(USER);
            user.location.display = updatedLocation;
            cookie.set(USER, user);
            return null;
        },
        getDetails: function () {
            return cookie.getJSON(USER)
        },
        getPaymentDetails: function () {
            return cookie.getJSON(USER).payment
        },
        getAllOrders: function () {
            return orders.pastOrders;
        },
        getSpecificOrder: function (pastOrderId) {
            const order = orders.pastOrders.find(order => order.pastOrderId == pastOrderId);
            return order;
        },
        getFavorites: function () {
            return cookie.getJSON(USER).favorites;
        },
        isItemFavorite: function (type, favoriteItem) {
            const loggedInUser = cookie.getJSON(USER);
            const currentFavorites = loggedInUser.favorites;

            switch (type) {
                case this.FAVORITE_TYPES.VENDOR:
                    return currentFavorites['vendors']
                        .findIndex(vendor => vendor.vendorId === favoriteItem.vendorId) > -1;

                case this.FAVORITE_TYPES.ITEM:
                    return currentFavorites['items']
                        .findIndex(i => i.itemId === favoriteItem.itemId) > -1;
            }

        },
        addFavorite: function (type, favoriteItem) {
            console.log('Adding favorite ...');

            // Retrieve details from cookie
            const loggedInUser = cookie.getJSON(USER);
            const currentFavorites = loggedInUser.favorites;

            // Update favorites
            switch (type) {
                case this.FAVORITE_TYPES.VENDOR:
                    const isVendorAlreadyMarkedFavorite = currentFavorites['vendors'].find(i => i.vendorId === favoriteItem.vendorId)
                    if (!isVendorAlreadyMarkedFavorite) {
                        currentFavorites['vendors'].push(favoriteItem);
                    }
                    break;
                case this.FAVORITE_TYPES.ITEM:
                    const isItemAlreadyMarkedFavorite = currentFavorites['items'].find(i => i.itemId === favoriteItem.itemId)
                    if (!isItemAlreadyMarkedFavorite) {
                        currentFavorites['items'].push(favoriteItem);
                    }
                    break;
            }

            const newFavorites = currentFavorites;
            const updatedUser = { ...loggedInUser, favorites: newFavorites };

            // Set the cookie
            console.log('Updated User ...', updatedUser);
            cookie.set(USER, updatedUser);
        },
        removeFavorite: function (type, favoriteItem) {
            console.log('Removing favorite ...');

            // Retrieve details from cookie
            const loggedInUser = cookie.getJSON(USER);
            const currentFavorites = loggedInUser.favorites;

            // Update favorites
            var newFavorites = {};
            if (type === this.FAVORITE_TYPES.VENDOR) {
                currentFavorites['vendors'] = currentFavorites['vendors'].filter(i => i.vendorId != favoriteItem.vendorId);
                newFavorites = { ...currentFavorites };
            } else if (type === this.FAVORITE_TYPES.ITEM) {
                currentFavorites['items'] = currentFavorites['items'].filter(i => i.itemId != favoriteItem.itemId);
                newFavorites = { ...currentFavorites };
            }

            const updatedUser = { ...loggedInUser, favorites: newFavorites };

            // Set the cookie
            console.log('Updated User ...', updatedUser);
            cookie.set(USER, updatedUser);
        },
        updateSpecificOrder: function (pastOrderId, updatedVendorRating, updatedVendorComment,
            updatedItemNames, updateItemRatings, updatedItemComments) {

            const order = orders.pastOrders.find(order => order.pastOrderId == pastOrderId);
            // Update the vendor rating and comment.
            order.vendorRating = updatedVendorRating
            order.vendorComment = updatedVendorComment

            // Update the item raings and comments.
            var updatedOrderItems = [];
            for (var i = 0; i < updatedItemNames.length; i++) {
                order.orderedItems.map(item => {
                    if (item.itemName.replace(/\s/g, "") === updatedItemNames[i]) {
                        updatedOrderItems.push({
                            "itemName": item.itemName,
                            "quantity": item.quantity,
                            "rating": updateItemRatings[i],
                            "comment": "",
                            // "comment": updatedItemComments[i] // TODO - Comments part Thenuka
                        });
                    }
                });
            }
            order.orderedItems = updatedOrderItems;

            var test = orders.pastOrders.find(order => order.pastOrderId == pastOrderId);
            console.log("Updated Order:", test);
        }
    }
}()
