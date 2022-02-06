const mongoose = require("mongoose");


const orderSchema = ({
    name: String,
    cName: String,
    country: String,
    address: String,
    town: String,
    state: String,
    zipCode: Number,
    phoneNumber: Number,
    email: String,
    subTotal: String,
    total: String,
    message: String,
    imgurl: String,
    orderedProduct: Array
});

const Order = mongoose.model("order",orderSchema);
module.exports = Order;