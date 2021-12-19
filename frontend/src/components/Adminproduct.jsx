import React,{useState,useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Adminheader from "./Adminheader";
import Axios from "axios";

function Adminproduct(){

  const navigate = useNavigate();


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
        <button className="add-product-button" onClick={()=>
        navigate("/admindashboard/products/adminproductinsert")
        }><h1 class="text-white">+</h1></button>
        <div class="container mt-3">
  <h2>Products</h2>        
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

export default Adminproduct;