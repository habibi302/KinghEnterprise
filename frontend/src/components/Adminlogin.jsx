import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Secret from "./Secret";
import { useNavigate } from "react-router-dom";
localStorage.setItem("islogedin",false);


const islogedin = localStorage.getItem("islogedin");



function Adminlogin(){

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");

    function addName(event){
        setName(event.target.value);
    }

    function addPassword(event){
            setPassword(event.target.value);
    }

    function loginAction(){
        navigate("/admindashboard/orders", {state: {username: name, pass: password}});
    }
   

    return(
        <div className="form-container">
        <main class="form-signin">
            <div>
                <h1 class="h3 mb-3 fw-normal text-warning ms-5 ps-3">Please sign in</h1>

                <div class="form-floating">
                <input type="text" class="form-control" value={name} onChange={addName} name="name" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" value={password} onChange={addPassword} name="password" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-warning text-white" type="submit" onClick={loginAction}>Sign in</button>
            </div>
        </main>
        </div>
    );
}

export default Adminlogin;