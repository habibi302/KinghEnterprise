import React, {useState, useEffect} from "react";
import Axios from "axios";
import {useLocation, Outlet, Routes, Route,BrowserRouter as Router} from "react-router-dom";
import Adminheader from "./Adminheader";

localStorage.setItem("islogedin",false);

const isLogedIn = localStorage.getItem("islogedin");

function Admindashboard(){

    const location = useLocation();

    const [data, setData] = useState([]);
    useEffect(()=>{
  try {
    Axios.get("http://localhost:3001/adminlogin").then((response)=>{
      setData(response.data[0]);
    });
  } catch (error) {
    console.log(error);
  }
  
    }, []);

    function loginAction(){
        if(isLogedIn){
            return true;
        }else{
            if(location.username === null){
                return false;
            }else{
        if(data.username === location.state.username){
          if(data.password === location.state.pass){
            localStorage.setItem("islogedin",true);
            return true;
          }
        }
        else{
          return true;
        }
    }
      }
    }

    return(
        <>
            {loginAction()?
            <>
                <Adminheader />
                <Outlet />
            </>
            :
            <>
                <h1>Wrong password or username!</h1>
            </>
            }
        </>
    )
}

export default Admindashboard;