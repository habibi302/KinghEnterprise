import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function Adminheader(){

  return(
 <nav class="navbar navbar-expand-lg navbar-warning bg-warning navbar-fixed-top header">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"/"}><img className="logoattr" src={logo} alt="logo"/></Link>
    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item ">
          <h1 class="ms-5 me-5 text-white">Admin Panel</h1>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" aria-current="page" to={"/admindashboard/orders"}>ORDERS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to={"/admindashboard/products"}>PRODUCTS</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Adminheader;