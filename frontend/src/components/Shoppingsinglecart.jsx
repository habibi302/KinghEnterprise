import { keyframes } from "@emotion/react";
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

function Shoppingsinglecart(props){
    const [isHover, setIsHover] = useState(false);
    var old_cartData = [];
    var new_cartData = [];
    const navigate = useNavigate();

    function setIsHoverTrue(){
        setIsHover(true);
    }

    function setIsHoverFalse(){
        setIsHover(false);
    }

    function close(){

        old_cartData = JSON.parse(localStorage.getItem("productsInCart"));

        localStorage.clear();

        for(var i=0; i<Number(old_cartData.length); i++){
            if(!(props.id === i)){
                new_cartData.push(old_cartData[i]);
            }
        }

        localStorage.setItem("productsInCart",JSON.stringify(new_cartData));

        navigate("");

    }

    return(
        <>
        <div className="row text-warning justify-content-center pt-2" onMouseEnter={setIsHoverTrue} onMouseOut={setIsHoverFalse}>
                <div className="col-2 bg-warning p-2 text-center rounded" onMouseEnter={setIsHoverTrue}>
                <img className="rounded" style={{width: "100%"}} onMouseEnter={setIsHoverTrue} src={"http://localhost:3001/"+props.imgurl} alt=""/></div>
                <div className="col-2 text-center" onMouseEnter={setIsHoverTrue}>{props.title}</div>
                <div className="col-2 text-center" onMouseEnter={setIsHoverTrue}>${props.price}</div>
                <div className="col-2" onMouseEnter={setIsHoverTrue}>
                    <div className="container" onMouseEnter={setIsHoverTrue}>
                        <div className="row" onMouseEnter={setIsHoverTrue}>
                            <div className="col-12 text-center" onMouseEnter={setIsHoverTrue}><p onMouseEnter={setIsHoverTrue}>{props.qty}</p></div>
                        </div>
                    </div>
                </div>
                <div className="col-3" onMouseEnter={setIsHoverTrue}>
                    <div className="container" onMouseEnter={setIsHoverTrue}>
                        <div className="row" onMouseEnter={setIsHoverTrue}>
                            <div className="col-8 text-center pt-2" onMouseEnter={setIsHoverTrue}>${Number(props.price)*Number(props.qty)}</div>
                            <div style={{visibility: isHover ? "visible" : "hidden"}} className="col-4 text-right pt-2" onMouseEnter={setIsHoverTrue}>
                            <i onMouseEnter={setIsHoverTrue} onClick={close} className="fas fa-times" style={{color: "red", cursor:"pointer"}}></i>
                            </div>
                         </div>
                        </div>
                </div>
            </div>

            <hr/>
            </>
    );
}

export default Shoppingsinglecart;