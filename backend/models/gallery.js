const mongoose = require("mongoose");


const gallerySchema = ({
    src: String,
    width: Number,
    height: Number
});

const GalleryPhotos = mongoose.model("gallery",gallerySchema);
module.exports = GalleryPhotos;
