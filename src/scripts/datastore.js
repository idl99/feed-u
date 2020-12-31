const data = {
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
            "vendorId": "v1",
            "vendorImageLocation": "../assets/vendor_list_view_images/burgers_ahouy.jpg",
            "vendorName": "Burgers Ahouy!",
            "vendorCatergories": [
                "Burgers",
                "American",
                "Mexican"
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
    ],

    pastOrders: [
        {
            "pastOrderId": "ord1",
            "vendorCoverImageLocation": "",
            "vendorLogoImageLocation": "../assets/stories_images/story-big.png",
            "vendorName": "Burger Ahoy!",
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
            "vendorCoverImageLocation": "",
            "vendorLogoImageLocation": "../assets/stories_images/story-big.png",
            "vendorName": "Burger Ahoy!",
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
        getAllOrders: function () {
            return data.pastOrders;
        },
        getSpecificOrder: function (pastOrderId) {
            const order = data.pastOrders.find(order => order.pastOrderId == pastOrderId);
            return order;
        }
    }
}()