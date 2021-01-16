const user = require('./user');

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
                "vendorRatingValue": 2.6,
                "vendorNoOfRatings": 100
            },
            "location": "Colombo 3",
            "deliveryTime": "25.3",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/tom_yum_soup.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/crispy_chicken_burger.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/hawaiian_burger.jpg",
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
            "vendorImageLocation": "../assets/vendor_list_view_images/pizza_palpatha.jpg",
            "vendorName": "Pizza Palpatha",
            "vendorCatergories": [
                "Italian",
                "American",
                "Pizza"
            ],
            "vendorRatings": {
                "vendorRatingValue": 3.8,
                "vendorNoOfRatings": 99
            },
            "location": "Colombo 5",
            "deliveryTime": "33.6",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/cheese_lovers_pizza.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/chicken_bacon_pizza.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/devilled_chicken_pizza.jpg",
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
            "vendorImageLocation": "../assets/vendor_list_view_images/bathui_pol_sambolai.jpg",
            "vendorName": "Bathui Pol Sambolai",
            "vendorCatergories": [
                "Rice",
                "Sri Lankan"
            ],
            "vendorRatings": {
                "vendorRatingValue": 6.5,
                "vendorNoOfRatings": 150
            },
            "location": "Colombo 7",
            "deliveryTime": "45.4",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/prawn_curry_and_rice.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/fish_rice_and_curry.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/chicken_rice_and_curry.jpg",
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
            "vendorImageLocation": "../assets/vendor_list_view_images/the_impasta.jpg",
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
            "deliveryTime": "52.6",
            "items": [
                {
                    "itemImageLocation": "../assets/vendor_page_images/bruschetta_pasta.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/cheese_pasta.jpg",
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
                    "itemImageLocation": "../assets/vendor_page_images/creamy_tomato_and_spinach_pasta.jpg",
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
        getLeaderboard: function () {
            const { points } = user.getDetails().profile;
            const loggedInUser = { name: "You", points };
            const leaderboardWithLoggedInUser = [...data.leaderboard, loggedInUser];
            return leaderboardWithLoggedInUser.sort((user1, user2) => user2.points - user1.points)
        }
    }
}()