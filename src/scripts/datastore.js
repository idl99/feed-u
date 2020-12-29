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
                },
                // TODO remove duplicate item here
                {
                    "itemImageLocation": "../assets/vendor_page_images/tom_yum_soup.jpg",
                    "itemId": "v1i2",
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
            "location": "Colombo 4",
            "deliveryTime": "33-40 mins",
            "items": [
                // TODO remove duplicate items here
                {
                    "itemImageLocation": "../assets/vendor_page_images/tom_yum_soup.jpg",
                    "itemId": "v2i1",
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
        }
    }
}()