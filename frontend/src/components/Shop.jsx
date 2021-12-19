import React, {useState, useEffect} from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Axios from "axios";


function Shop(){

    const [data, setData] = useState([]);
    useEffect(()=>{
  try {
    Axios.get("http://localhost:3001/shopproductread").then((response)=>{
      setData(response.data);
    });
  } catch (error) {
    console.log(error);
  }
  
    }, []);

    return(
        <>
        <Header />
        <div className="container shop-attr">
              <div className="row">
              {
                  data.map((val,key)=>{
                      return(
                        <ProductCard title={val.title} price={val.price} imgurl={val.imgurl}/>
                      )
                  })
              }
              </div>
            </div>
        <Copyright />
        </>
    )
}

export default Shop;