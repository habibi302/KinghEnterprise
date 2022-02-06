import React from "react";
import {useNavigate} from "react-router-dom";

function Carticon(){
    const navigate = useNavigate();
    return(
        <div style={{position:"sticky", display:"inline", bottom:"10%", right:"90%", paddingLeft:"40px"}}>
      <i className="fas fa-shopping-cart me-5 text-warning shadow" onClick={()=>{navigate("/checkout/cart")}} style={{fontSize:"2rem",background:"white", cursor:"pointer", padding:"15px", borderRadius:"100%"}} ></i>
      </div>
    )
}
export default Carticon;