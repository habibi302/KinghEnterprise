const mongoose = require("mongoose");


const logindataSchema = ({
    username: String,
    password: String
});

const Logindata = mongoose.model("admin",logindataSchema);
module.exports = Logindata;