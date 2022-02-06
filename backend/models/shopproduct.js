const mongoose = require("mongoose");


const productSchema = ({
    title: String,
    desc: String,
    size1: String,
    price1: String,
    size1: String,
    price2: String,
    size2: String,
    imgurl: String
});

const ShopProduct = mongoose.model("shopproduct",productSchema);
module.exports = ShopProduct;