import React from "react";
import {useNavigate} from "react-router-dom";

function ProductCard(Props){
    const navigate = useNavigate();

   function navigatetoProductDetails() {
        navigate("/shop/product/"+Props.title, {state: {productID: Props.pID}});
    }
    return(
        <div className="col-lg-3 col-md-6 populer-product-card-container">
            <div className="populer-product-card">
            <img onClick={navigatetoProductDetails} style={{cursor: "pointer"}} className="populer-product-card-image" src={"http://localhost:3001/"+Props.imgurl} alt="Shop Product" />
            <p onClick={navigatetoProductDetails} style={{cursor: "pointer"}}>{Props.title}</p>
            <h6 onClick={navigatetoProductDetails} style={{cursor: "pointer"}} className="price-range">${Props.price}</h6>
            <button type="button" className="btn btn-warning add-to-card-btn" onClick={navigatetoProductDetails}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;