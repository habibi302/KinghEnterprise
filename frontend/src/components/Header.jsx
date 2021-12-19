import React from "react";
import logo from "../images/logo.png"

function Header(){

  return(
    <nav class="navbar navbar-expand-lg navbar-warning bg-warning header">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img className="logoattr" src={logo} alt="logo"/></a>
    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/shop">SHOP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gallery">GALLERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">CONTACT</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Search</button>
        <i class="bi bi-cart"></i>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header;