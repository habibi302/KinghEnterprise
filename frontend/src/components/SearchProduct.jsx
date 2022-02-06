import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carticon from './Carticon';
import Copyright from './Copyright';
import Header from './Header';
import ProductCard from './ProductCard';
import {useLocation, useNavigate} from "react-router-dom";

export default function SearchProduct() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
  
      if(location.state === null){
        try {
          Axios.get("http://localhost:3001/shopproductread").then((response)=>{
            setData(response.data);
          });
        } catch (error) {
          console.log(error);
        }
      }else{
        setData(location.state);
      }
  
    }, [location.state]);
  return (
  <div>
      <Header ShouldFocused={true}/>
      <div className="container shop-attr" style={{minHeight:"70vh"}}>
      {data.length > 0 ?
              <div className="row">
              {
                  data.map((val,key)=>{
                      return(
                        <ProductCard key={key} title={val.title} price={val.price1+"-$"+val.price2} pID={val._id} imgurl={val.imgurl}/>
                      )
                  })
              }
              </div>

              :
              <h3 className="text-center m-5 text-denger">No Product Found!</h3>
            }

            </div>
            
            <Carticon />

        <Copyright />
  </div>);
}
