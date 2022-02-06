import React, {useState, useEffect} from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Axios from "axios";
import Carticon from "./Carticon";


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
        <div>
        <Header />
        <div className="container shop-attr" style={{minHeight:"70vh"}}>
              <div className="row">
              {
                  data.map((val,key)=>{
                      return(
                        <ProductCard key={key} title={val.title} price={val.price1+"-$"+val.price2} pID={val._id} imgurl={val.imgurl}/>
                      )
                  })
              }
              </div>
            </div>

            <Carticon />
            
        <Copyright />
        </div>
    )
}

export default Shop;