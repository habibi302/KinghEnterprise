import React, { useState, useEffect } from "react";
import design from '../images/design.jpg';
import print from '../images/print.jpg';
import PopulerProductCard from "./PopulerProductCard";
import image from "../images/image.jpg";
import Axios from "axios";


function Hometexts(){

  const [data, setData] = useState([]);
  useEffect(()=>{
try {
  Axios.get("http://localhost:3001/populerproducts").then((response)=>{
    setData(response.data);
  });
} catch (error) {
  console.log(error);
}

  }, []);


    return(
<div className="hometexts">
            <h1 className="titleStyle">WHO WE ARE</h1>
            <p className="descriptionStyle">Kingh Enterprise is a minority Veteran owned company.</p>
        
 <div className="maincontainer">
    <div className="who-we-are">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 className="sub-title">DESIGN</h2>
            <p className="descriptionStyle">We offer a variety of graphic design services and products.</p>
            <img src={design} alt="laptop" />
          </div>
          <div class="col-lg-6">
          <h2 className="sub-title">PRINT</h2>
            <p className="descriptionStyle">We specialize in the short to medium production prints of graphics, signage and banners for POP display etc.</p>
            <img src={print} alt="printer" />
          </div>
        </div>
      </div>
    </div> 
    <div className="horizontalrow-container">
    <hr className="horizontalrow" />
    </div>


      <div className="what-we-print">
      <h1 className="titleStyle">WHAT WE PRINT</h1>
            <p className="descriptionStyle">Banners/ yard signs/ postcards/ flyers/ apparel/ hats/ more</p>
            <img className="what-we-print-image-style" src={image} alt="" />
      </div>


      <div className="horizontalrow-container">
    <hr className="horizontalrow" />
    </div>


      <div className="popular-products">
      <h1 className="titleStyle">POPULER PRODUCTS</h1>
            <p className="descriptionStyle">Grab attention with a banner or sidewalk graphic of any size to showcase a special event or add pop to your windows to display your brand. <br />
Show your organization or business pride and advertise at the same time with a partial or full vehicle wrap.</p>
            <br />
            <div className="container">
              <div className="row">
              {data.map((val,key)=>{
                  return(
                    <PopulerProductCard title={val.title} imgurl={val.imgurl}/>
                  )
              })}
              </div>
            </div>
            
      </div>


      <div className="horizontalrow-container">
    <hr className="horizontalrow" />
    </div>


  </div>
</div>
    );
}

export default Hometexts;