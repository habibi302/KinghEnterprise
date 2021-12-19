import React from "react";

const quantity = 0;
function PopulerProductCard(Props){
    return(
        <div className="col-lg-3 col-md-6 populer-product-card">
            <img className="populer-product-card-image" src={"http://localhost:3001/"+Props.imgurl} alt="" />
            <h5>{Props.title}<span className="popular-product-count" >({quantity})</span></h5>
        </div>
    )
}

export default PopulerProductCard;