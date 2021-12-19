const mongoose = require("mongoose");


const productSchema = ({
    title: String,
    imgurl: String
});

const Product = mongoose.model("populerproduct",productSchema);
module.exports = Product;