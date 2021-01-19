// const user = require('./user');

const data = Object.freeze({
    vendors: [
        {
            "vendorId": "v1",
            "vendorImageLocation": "../assets/vendor_list_view_images/burgers_ahouy.jpg",
            "vendorName": "Burgers Ahouy!",
            "vendorCatergories": [
                "Burgers",
                "American"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.6,
                "vendorNoOfRatings": 100
            },
            "location": "Colombo 3",
            "deliveryTime": "25-30 mins",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/tom_yum_soup_800x800.jpg",
                    "itemId": "v1i1",
                    "itemTitle": "Tom Yum Soup",
                    "itemDescription": "Picked from the fresh vegetables and fish from the with special Chicken Broth.",
                    "itemRatings": {
                        "itemRatingValue": 4.6,
                        "itemNoOfRatings": 47
                    },
                    "itemPrice": 800
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/southern-chicken.jpg",
                    "itemId": "v1i2",
                    "itemTitle": "Crispy Chicken Burger",
                    "itemDescription": "Crispy, Chicky, Crispy Chicken Burger. It’s pretty much self-explanatory.",
                    "itemRatings": {
                        "itemRatingValue": 4.0,
                        "itemNoOfRatings": 10
                    },
                    "itemPrice": 450
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/hawaiian_burger_pineapple.jpg",
                    "itemId": "v1i3",
                    "itemTitle": "Hawaiian Burger",
                    "itemDescription": "Yes! Pineapples go on burgers too. Don’t let others tell you otherwise.",
                    "itemRatings": {
                        "itemRatingValue": 4.8,
                        "itemNoOfRatings": 45
                    },
                    "itemPrice": 600
                }
            ],
        },
        {
            "vendorId": "v2",
            "vendorImageLocation": "../assets/vendor_page_images/pizza-uhd-4k-wallpaper.jpg",
            "vendorName": "Pizza Palpatha",
            "vendorCatergories": [
                "Italian",
                "American",
                "Pizza"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.8,
                "vendorNoOfRatings": 99
            },
            "location": "Colombo 5",
            "deliveryTime": "15-20 mins",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/pizza-melted-cheese-tomatoes-wallpaper-preview.jpg",
                    "itemId": "v2i1",
                    "itemTitle": "Cheese Lovers Pizza",
                    "itemDescription": "Rich tomato sauce with a triple layer of mozzarella cheese.",
                    "itemRatings": {
                        "itemRatingValue": 4.5,
                        "itemNoOfRatings": 55
                    },
                    "itemPrice": 500
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/41-417283_596343-title-italian-pizza-food-pizza-meal-lunch.jpg",
                    "itemId": "v2i2",
                    "itemTitle": "Chicken Bacon Pizza",
                    "itemDescription": "Chicken bacon, onions & green chillies with a double layer of mozzarella cheese.",
                    "itemRatings": {
                        "itemRatingValue": 4.9,
                        "itemNoOfRatings": 90
                    },
                    "itemPrice": 300
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/istockphoto-489809469-612x612.jpg",
                    "itemId": "v2i3",
                    "itemTitle": "Devilled Chicken Pizza",
                    "itemDescription": "Devilled chicken in spicy sauce with a double layer of mozzarella cheese.",
                    "itemRatings": {
                        "itemRatingValue": 4.1,
                        "itemNoOfRatings": 75
                    },
                    "itemPrice": 470
                }
            ],
        },
        {
            "vendorId": "v3",
            "vendorImageLocation": "../assets/vendor_page_images/YAMU_rice_image.jpg",
            "vendorName": "Bathui Pol Sambolai",
            "vendorCatergories": [
                "Rice",
                "Sri Lankan"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.5,
                "vendorNoOfRatings": 150
            },
            "location": "Colombo 7",
            "deliveryTime": "5-10 mins",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/prawns_with_race.jpg",
                    "itemId": "v3i1",
                    "itemTitle": "Prawn Curry and Rice",
                    "itemDescription": "Prawn curry prepared to special Goa recipe with thick coconut gravy.",
                    "itemRatings": {
                        "itemRatingValue": 4.2,
                        "itemNoOfRatings": 21
                    },
                    "itemPrice": 575
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/fish-curry-6-850x1275.jpg",
                    "itemId": "v3i2",
                    "itemTitle": "Fish Rice and Curry",
                    "itemDescription": "Thalapath Fish, 4 curries and papadam enhriched with the Sri Lankan taste.",
                    "itemRatings": {
                        "itemRatingValue": 4.2,
                        "itemNoOfRatings": 21
                    },
                    "itemPrice": 575
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/Coconut-Chicken-Curry.jpg",
                    "itemId": "v3i3",
                    "itemTitle": "Chicken Rice and Curry",
                    "itemDescription": "With 4 curries and papadam mixed with Sri Lankan spices.",
                    "itemRatings": {
                        "itemRatingValue": 4.4,
                        "itemNoOfRatings": 65
                    },
                    "itemPrice": 350
                },
            ],
        },
        {
            "vendorId": "v4",
            "vendorImageLocation": "../assets/vendor_page_images/pasta_with_sauce.jpeg",
            "vendorName": "The Impasta",
            "vendorCatergories": [
                "Pasta",
                "Italian"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.1,
                "vendorNoOfRatings": 82
            },
            "location": "Colombo 1",
            "deliveryTime": "25-40 mins",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/new_brushchetta_pasta.jpg",
                    "itemId": "v4i1",
                    "itemTitle": "Brushcetta Pasta",
                    "itemDescription": "This Bruschetta Pasta with fresh tomatoes, basil, garlic, and olive oil.",
                    "itemRatings": {
                        "itemRatingValue": 4.0,
                        "itemNoOfRatings": 10
                    },
                    "itemPrice": 375
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/mac_and_cheese.jpg",
                    "itemId": "v4i2",
                    "itemTitle": "Cheese Pasta",
                    "itemDescription": "Just remember that a single is a double and a double is a triple at Chicago’s Au Cheval.",
                    "itemRatings": {
                        "itemRatingValue": 4.7,
                        "itemNoOfRatings": 21
                    },
                    "itemPrice": 200
                },
                {
                    "itemImageLocation": "../assets/vendor_page_images/spinach-gorgonzola-pasta.jpg",
                    "itemId": "v4i3",
                    "itemTitle": "Creamy Tomato and Spinach Pasta",
                    "itemDescription": "With special pesto sauce and mozzarella cheese.",
                    "itemRatings": {
                        "itemRatingValue": 3.5,
                        "itemNoOfRatings": 15
                    },
                    "itemPrice": 230
                },
            ],
        },
        {
            "vendorId": "v5",
            "vendorImageLocation": "../assets/vendor_list_view_images/thai_tanic.jpg",
            "vendorName": "Thai Tanic",
            "vendorCatergories": [
                "Soup",
                "Salad",
                "Thai"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.9,
                "vendorNoOfRatings": 29
            },
            "location": "Colombo 1",
            "deliveryTime": "20-35 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v6",
            "vendorImageLocation": "../assets/vendor_list_view_images/pita_pan.jpg",
            "vendorName": "Pita Pan",
            "vendorCatergories": [
                "Burgers",
                "Mediterrenean",
                "Thai"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.3,
                "vendorNoOfRatings": 10
            },
            "location": "Colombo 1",
            "deliveryTime": "12-15 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v7",
            "vendorImageLocation": "../assets/vendor_list_view_images/hoppers_and_betrayals.jpg",
            "vendorName": "Hoppers and Betrayals",
            "vendorCatergories": [
                "Hoppers",
                "Sri Lankan",
                "Indian"
            ],
            "vendorRatings": {
                "vendorRatingValue": 3.9,
                "vendorNoOfRatings": 84
            },
            "location": "Colombo 1",
            "deliveryTime": "22-35 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v8",
            "vendorImageLocation": "../assets/vendor_list_view_images/cutie_pies_and_cupcakes.jpg",
            "vendorName": "Cutie Pies and Cupcakes",
            "vendorCatergories": [
                "Cupcakes",
                "Sweet",
                "Sour"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.4,
                "vendorNoOfRatings": 97
            },
            "location": "Colombo 1",
            "deliveryTime": "35-50 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v9",
            "vendorImageLocation": "../assets/vendor_list_view_images/tikka-k_inta.jpg",
            "vendorName": "Tikka-k Inta",
            "vendorCatergories": [
                "Paratha",
                "Indian"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.9,
                "vendorNoOfRatings": 200
            },
            "location": "Colombo 1",
            "deliveryTime": "40-45 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v10",
            "vendorImageLocation": "../assets/vendor_list_view_images/the_codfather.jpg",
            "vendorName": "The Codfather",
            "vendorCatergories": [
                "Chips",
                "Fried Fish",
                "American"
            ],
            "vendorRatings": {
                "vendorRatingValue": 3.5,
                "vendorNoOfRatings": 73
            },
            "location": "Colombo 1",
            "deliveryTime": "5-15 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v11",
            "vendorImageLocation": "../assets/vendor_list_view_images/the_tipsy_cow.jpg",
            "vendorName": "The Tipsy Cow",
            "vendorCatergories": [
                "Cocktails",
                "Smoothies",
                "Juice"
            ],
            "vendorRatings": {
                "vendorRatingValue": 5.0,
                "vendorNoOfRatings": 55
            },
            "location": "Colombo 1",
            "deliveryTime": "10-30 mins",
            "items": [

            ],
        },
        {
            "vendorId": "v12",
            "vendorImageLocation": "../assets/vendor_list_view_images/the_dairy_godmother.jpg",
            "vendorName": "The Dairy Godmother",
            "vendorCatergories": [
                "Dairy",
                "Milk",
                "Smoothies"
            ],
            "vendorRatings": {
                "vendorRatingValue": 4.0,
                "vendorNoOfRatings": 67
            },
            "location": "Colombo 1",
            "deliveryTime": "20-50 mins",
            "items": [

            ],
        },
    ],
    leaderboard: [
        {
            name: "Ihan Lelwala",
            points: 250
        },
        {
            name: "Vinula Uthsara",
            points: 300
        },
        {
            name: "Thenuka Perera",
            points: 260
        },
        {
            name: "Deshan Koswatte",
            points: 280
        },
    ]
});

module.exports = function () {
    return {
        getAllVendors: function () {
            return data.vendors;
        },
        getSpecificVendor: function (vendorId) {
            // returns vendor details for provided vendorId
            const vendor = data.vendors.find(vendor => vendor.vendorId === vendorId);
            return vendor;
        },
        getSpecificItem: function (itemId) {
            // return item details for provided itemId
            const allVendorsItems = data.vendors.flatMap(vendor => vendor.items)
            const item = allVendorsItems.find(item => item.itemId === itemId);
            return item;
        },
        getVendorIdFromVendorName: function (vendorName) {
            const vendor = data.vendors.find(vendor => vendor.vendorName === vendorName);
            return vendor.vendorId;
        },
        updateVendorAndItemRatings: function (vendorId, vendorRating, itemTitles, ratings) {
            // Updates the vendor ratings and item ratings accordingly.

            // Retrieve the vendor using the vendor Id so that it can be updated.
            const vendor = data.vendors.find(vendor => vendor.vendorId === vendorId);

            // Update the vendor ratings and increase the count of no: of rated people.
            vendor.vendorRatings.vendorRatingValue = (parseFloat(vendor.vendorRatings.vendorRatingValue * vendor.vendorRatings.vendorNoOfRatings) + parseFloat(vendorRating)) / (vendor.vendorRatings.vendorNoOfRatings + 1);
            vendor.vendorRatings.vendorNoOfRatings = vendor.vendorRatings.vendorNoOfRatings + 1;

            // Update the ratings of the vendor's items.
            var updatedVendorAndItemRatings = [];
            for (var i = 0; i < itemTitles.length; i++) {
                vendor.items.map(item => {
                    // Update if the item names match.
                    if (item.itemTitle.replace(/\s/g, "") === itemTitles[i]) {
                        updatedVendorAndItemRatings.push({
                            "itemImageLocation": item.itemImageLocation,
                            "itemId": item.itemId,
                            "itemTitle": item.itemTitle,
                            "itemDescription": item.itemDescription,
                            "itemRatings": {
                                "itemRatingValue": (parseFloat(item.itemRatings.itemRatingValue * item.itemRatings.itemNoOfRatings) + parseFloat(ratings[i])) / (item.itemRatings.itemNoOfRatings + 1),
                                "itemNoOfRatings": item.itemRatings.itemNoOfRatings + 1
                            },
                            "itemPrice": item.itemPrice
                        });
                    } else {
                        // Else check if the item is already there and add it if it is not there.
                        if (updatedVendorAndItemRatings.find(updatedItem => updatedItem.itemId === item.itemId) === undefined) {
                            updatedVendorAndItemRatings.push({
                                "itemImageLocation": item.itemImageLocation,
                                "itemId": item.itemId,
                                "itemTitle": item.itemTitle,
                                "itemDescription": item.itemDescription,
                                "itemRatings": {
                                    "itemRatingValue": item.itemRatings.itemRatingValue,
                                    "itemNoOfRatings": item.itemRatings.itemNoOfRatings
                                },
                                "itemPrice": item.itemPrice
                            });
                        }
                    }
                });
            }
            vendor.items = updatedVendorAndItemRatings;

            // CHeck if the update was successfull.
            var test = data.vendors.find(vendor => vendor.vendorId === vendorId);
            console.log("Updated Vendor:", test);
        },
        getLeaderboard: function ({ points }) {
            const loggedInUser = { name: "You", points };
            const leaderboardWithLoggedInUser = [...data.leaderboard, loggedInUser];
            return leaderboardWithLoggedInUser.sort((user1, user2) => user2.points - user1.points)
        }
    }
}()