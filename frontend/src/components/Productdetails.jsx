import React,{useState} from "react";
import Header from "./Header";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";
import Carticon from "./Carticon";

function Productdetails(){
    const location = useLocation();
    const navigate = useNavigate();
    localStorage.setItem("isAdded", "0");

    const [value, setvalue] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const [isReaded, setIsReaded] = useState(false);

    const [data, setData] = useState([]);

    if(!isReaded){
        setIsReaded(true);
  try {
    Axios.get("http://localhost:3001/singleshopproductread/"+location.state.productID).then((response)=>{
      setData(response.data);
      console.log(response.data);
    });
  } catch (error) {

    
    
  }
}
  

    function getPrice(){
        if(value>0){
         if(value===1){
             getSize(data.size1+" Print Only");
            return data.price1;
        }
        else{
                getSize(data.size2+" With Frame");
                return data.price2;
        }
    }
}

function getSize(size){
    if(value>0){
        if(value===1){
           return data.size1+" Print Only";
       }
       else{
               return data.size2+" With Frame";
       }
   }
}

function addQuantity(event){
        setQuantity(event.target.value);
}

   function navigateToCart(){
            const price = getPrice();
            const size = getSize();
            console.log(size); 
           navigate("/checkout/cart", {state: {title: data.title, imgurl: data.imgurl, price: price, qty: quantity, size: size}});
    }
    return (
      <>
        <Header />
            
            <div className="container"> 

                <div className="card m-5">
                    <div className="row g-0">
                    <div className="col-md-4 ">
                    <img  src={"http://localhost:3001/"+data.imgurl} style={{height: "10rem"}} className="images" alt="..."/>
                    </div>
                    <div className="col-md-7 body ">
                    <div className="card-body">
                        <h5 className="card-title text-warning fw-bold ">{data.title}</h5>
                            <h4 className="text-success">${data.price1+"-$"+data.price2}</h4>
                        <p className="card-text">{data.desc}</p>
                    <small>{location.state.title}</small> <select onChange={(event)=>{
                        setvalue(event.target.value);
                    }} aria-label="Default select example">
                        <option defaultValue={"Choose an option"}>Choose an option</option>
                        <option value="1">{data.size1} Print Only</option>
                        <option value="2">{data.size2} with Frame</option>
                    
                        </select>
                        <br /> <br />
                        <input className="number" onChange={addQuantity} type="number" min={1} defaultValue={1}  /> 
                        <button onClick={navigateToCart} className={value > 0 ? "btn bg-warning text-white ms-2" : "btn bg-warning text-white ms-2 disabled"}> Add To Cart</button>
                    <br /> <br />
                
                    <p className="title"> The product is already in your wishlist!  <a href="/" className="ancor">Browse wishlist </a>  </p>
                    <br />
                <br />
                    <p type="button" className="badge bg-warning text-wrap p-3" disabled> SKU: <small> N/A</small></p>
                    </div>
                </div>
            </div>

                </div>
                    
            </div>

                <Carticon />

        </>
    );
}

export default Productdetails;