const mongoose = require("mongoose");


const productSchema = ({
    title: String,
    desc: String,
    price: String,
    imgurl: String
});

const ShopProduct = mongoose.model("shopproduct",productSchema);
module.exports = ShopProduct;