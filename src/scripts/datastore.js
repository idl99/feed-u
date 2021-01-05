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
        }
    }
}()