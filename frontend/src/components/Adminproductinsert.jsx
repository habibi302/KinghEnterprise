import { Container } from "@mui/material";
import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import Adminheader from "./Adminheader";
import {useNavigate} from "react-router-dom";

function Adminproductinsert(){


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [SizeOne, setSizeOne] = useState("");
    const [SizeTwo, setSizeTwo] = useState("");
    const [PriceOne, setPriceOne] = useState("");
    const [PriceTwo, setPriceTwo] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();


    function addTitle(event){
        setTitle(event.target.value);
    }

    function addDescription(event){
        setDescription(event.target.value);
    }

    function addSizeOne(event){
        setSizeOne(event.target.value);
    }

    function addPriceOne(event){
        setPriceOne(event.target.value);
    }

    function addSizeTwo(event){
        setSizeTwo(event.target.value);
    }

    function addPriceTwo(event){
        setPriceTwo(event.target.value);
    }

    function addImage(event){
        setImage(event.target.files[0]);
    }


    function insertProduct(){

        var fd = new FormData();
        fd.append("title",title);
        fd.append("desc",description);
        fd.append("size1",SizeOne);
        fd.append("price1",PriceOne);
        fd.append("size2",SizeTwo);
        fd.append("price2",PriceTwo);
        fd.append("productImage",image);
        
            Axios.post("http://localhost:3001/shopproductinsert",fd).then(function (response) {
                console.log(response);
              })
              .catch(err => console.log(err));

              navigate("/admindashboard/products");
    }

    return(
        <>
        <Adminheader />
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <div class="pt-5">
                            <label htmlFor="titlesm" className="form-label">Title</label>
                            <input class="form-control input-sm" onChange={addTitle} value={title} id="titlesm" type="text"/>
                            </div>
                            <div class="pt-2">
                                <label htmlFor="textArea" className="form-label">Description</label>
                                <textarea class="form-control" onChange={addDescription} value={description} id="textArea" rows="3"></textarea>
                            </div>
                            <div class="pt-4">
                            
                            <div className="container p-0">
                                <div className="row">

                                    <div className="col-6">
                                    <label className="form-label">Option 1:</label>
                                    <br/>
                                    <label htmlFor="size1" className="form-label">Size</label>
                                    <input class="form-control input-sm" id="size1" onChange={addSizeOne} type="text" />
                                    <label htmlFor="price1" className="form-label">Price</label>
                                    <input class="form-control input-sm" id="price1" onChange={addPriceOne} type="text" />
                                    </div>

                                    <div className="col-6">
                                    <label className="form-label">Option 2:</label>
                                    <br/>
                                    <label htmlFor="size2" className="form-label">Size</label>
                                    <input class="form-control input-sm" id="size2" onChange={addSizeTwo} type="text" />
                                    <label htmlFor="price1" className="form-label">Price</label>
                                    <input class="form-control input-sm" id="price1" onChange={addPriceTwo} type="text" />
                                    </div>

                                </div>

                            </div>
                            
                            </div>
                            <div class="pt-2">
                            <label className="form-label" htmlFor="formFile">Insert an Image</label>
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