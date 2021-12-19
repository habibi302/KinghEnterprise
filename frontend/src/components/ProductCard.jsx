import React from "react";
import AdbIcon from '@mui/icons-material/Adb';

function PopulerProductCard(Props){
    return(
        <div className="col-lg-3 col-md-6 populer-product-card-container">
            <div className="populer-product-card">
            <img className="populer-product-card-image" src={"http://localhost:3001/"+Props.imgurl} alt="Product Image" />
            <a href="/productdetails">{Props.title}</a>
            <h6 className="price-range">{Props.price}</h6>
            <button type="button" class="btn btn-warning add-to-card-btn">Add to cart</button>
            </div>
        </div>
    )
}

export default PopulerProductCard;