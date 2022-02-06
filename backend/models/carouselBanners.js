const mongoose = require("mongoose");


const caroulesBannersSchema = ({
    src: String,
    width: Number,
    height: Number
});

const CarouselBanners = mongoose.model("carouselbanners",caroulesBannersSchema);
module.exports = CarouselBanners;