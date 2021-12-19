import React from "react";
import Header from "./Header";
import image from "../images/print.jpg";

function productdetails(){
    return(
        <div>
            <Header />

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 product-details-container-left">
                            <img src={image}></img>
                        </div>
                        <div className="col-lg-7 product-details-container-right">
                            <h3>Title</h3>
                            <h6>$200-$110</h6>
                            <p>Portable Sidewalk Signs with Poster Frames, Marker Boards & Changeable Messages</p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-2">
                                                    <h6>Title</h6>
                                                </div>
                                                <div className="col-10">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6">
                                                    <input type="Number" />
                                                </div>
                                                <div className="col-6">
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default productdetails;