import React, { useState,useEffect } from "react";
import Adminheader from "./Adminheader";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Adminorders(){

  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
      <div class="container mt-3">
      <h2>Orders</h2>        
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((val,key)=>{
            return (
              <>
              <tr onClick={()=> navigate("/admindashboard/products/productdetails/"+val.title, {state: val})}>
                <td>{val.title}</td>
                <td>{val.price}</td>
                <td><a className="edit-btn btn" href="/">Edit</a></td>
                <td><a className="edit-btn btn" href="/admindashboard/products"  onClick={()=>console.log(val._id)}>Delete</a></td>
            </tr>
              </>
            )
            })
          }
        </tbody>
      </table>
      </div>
      </>
    )
}

export default Adminorders;