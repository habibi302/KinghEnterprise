import { Container } from "@mui/material";
import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import Adminheader from "./Adminheader";

function Adminproductinsert(){


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);


    function addTitle(event){
        setTitle(event.target.value);
    }

    function addDescription(event){
        setDescription(event.target.value);
    }

    function addPrice(event){
        setPrice(event.target.value);
    }

    function addImage(event){
        setImage(event.target.files[0]);
    }


    function insertProduct(){

        var fd = new FormData();
        fd.append("title",title);
        fd.append("desc",description);
        fd.append("price",price);
        fd.append("productImage",image);
        
            Axios.post("http://localhost:3001/shopproductinsert",fd).then(function (response) {
                console.log(response);
              })
              .catch(err => console.log(err));
    }

    return(
        <>
        <Adminheader />
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <div class="pt-5">
                            <label htmlFor="titlesm">Title</label>
                            <input class="form-control input-sm" onChange={addTitle} value={title} id="titlesm" type="text"/>
                            </div>
                            <div class="pt-2">
                                <label htmlFor="textArea">Example textarea</label>
                                <textarea class="form-control" onChange={addDescription} value={description} id="textArea" rows="3"></textarea>
                            </div>
                            <div class="pt-2">
                            <label htmlFor="pricesm">Price</label>
                            <input class="form-control input-sm" onChange={addPrice} value={price} id="pricesm" type="text"/>
                            </div>
                            <div class="pt-2">
                            <label htmlFor="formFile">Insert an Image</label>
                            <input class="form-control input-sm" onChange={addImage} type="file" id="formFile"/>
                            </div>
                            <button class="btn btn-warning form-control mt-4 text-white btn-text-size" onClick={insertProduct}>Insert</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminproductinsert;