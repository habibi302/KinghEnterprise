import React, {useState} from "react";
import Header from "./Header";
import { useLocation, useNavigate} from "react-router-dom";
import Shoppingsinglecart from "./Shoppingsinglecart";

function Cart(){
    const navigate = useNavigate();
    const location = useLocation();
    var old_cartData = [];
    var subTotal = 0;


    if (localStorage.getItem("productsInCart") === null) {
        localStorage.setItem("productsInCart","[]");
    }

    old_cartData = JSON.parse(localStorage.getItem("productsInCart"));

    const [isAdded, setIsAdded] = useState(false);




        if(!isAdded){
            if(localStorage.getItem("isAdded") === "0" && (location.state)!==null){
            old_cartData.push({title: location.state.title, price:location.state.price, imgurl: location.state.imgurl, qty: location.state.qty, size: location.state.size});
            localStorage.setItem("productsInCart",JSON.stringify(old_cartData));
            setIsAdded(true);
            localStorage.setItem("isAdded", "1");
        }
    }


    function confirmOrder(){

        navigate("/confirmorder",{state:{sub_total:subTotal, data: old_cartData}});

    }

    function subTotalCalculate(qty,price, key){
        subTotal+=(Number(qty)*Number(price));
    }


    return(
        <>
        <Header />
        <div className="card container mt-5 p-3">
            <div className="row text-white justify-content-center mb-2" >
                <div className="col-2 bg-warning text-center">Image</div>
                <div className="col-2 bg-warning text-center">Product Name</div>
                <div className="col-2 bg-warning text-center">Unit Price</div>
                <div className="col-2 bg-warning text-center" style={{marginLeft:'1px'}}>Quantity</div>
                <div className="col-3 bg-warning text-center"  style={{marginLeft:'1px'}}>Total</div>
            </div>

            <h3 className="text-center p-5 text-danger" style={ old_cartData.length === 0?{visibility:"visible"}:{display:"none"}}>Cart is Empty please Add some product!</h3>
            
            {old_cartData.map((val,key)=>{
                
                {subTotalCalculate(val.qty,val.price)}

                return(

                    <Shoppingsinglecart id = {key} key={key} title={val.title} price={val.price} imgurl={val.imgurl} qty={val.qty}/>
                    
                );

            })}

            <div className="row text-white justify-content-center mb-1 mt-5">
                <div className="col-2"></div>
                <div className="col-4"></div>
                <div className="col-2 bg-warning" style={{marginLeft:'1px'}}>Sub Total</div>
                <div className="col-3 bg-warning"  style={{marginLeft:'1px'}}>${subTotal}</div>
            </div>
            <div className="row text-white justify-content-center mb-1">
                <div className="col-2"></div>
                <div className="col-4"></div>
                <div className="col-2 bg-warning" style={{marginLeft:'1px'}}>Total</div>
                <div className="col-3 bg-warning"  style={{marginLeft:'1px'}}>${subTotal}</div>
            </div>
            <hr />
            <div className="container">
                <div className="row" style={{position: "relative"}}>
                    <div className="col-6 text-start"><button className={old_cartData.length === 0 ? "btn bg-warning text-white disabled" : "btn bg-warning text-white"} onClick={confirmOrder}>Confirm Order</button></div>
                    <div className="col-6 text-end"><button className="btn bg-warning text-white" onClick={()=>{navigate("/shop")}}>Continue Shoping</button></div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Cart;