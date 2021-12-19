import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";

function Secret(){
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(()=>{
    try {
      Axios.get("http://localhost:3001/adminlogin").then((response)=>{
        setData(response.data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
    
      }, []);


      function loginAction(){
        if(data.username === location.state.username){
          if(data.password === location.state.pass){
            
          }
        }
        else{
          return null;
        }
      }

      console.log(loginAction());

    return(
      <>

        {loginAction()?
        <div>This is the Secret page</div>
        :
        navigate("/admin",{state: "Wrong username and password"})
        }
       
      </>
    )
}

export default Secret;