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
                "vendorRatingValue": 4.6,
                "vendorNoOfRatings": 100
            },
            "location": "Colombo 3",
            "deliveryTime": "25-30 mins",
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
                "vendorRatingValue": 4.8,
                "vendorNoOfRatings": 99
            },
            "location": "Colombo 3",
            "deliveryTime": "15-20 mins",
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
                "vendorRatingValue": 4.5,
                "vendorNoOfRatings": 150
            },
            "location": "Colombo 3",
            "deliveryTime": "5-10 mins",
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
                }
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