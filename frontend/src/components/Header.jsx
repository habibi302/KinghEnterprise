import React, { useEffect, useState } from "react";
import logo from "../images/logo.png"
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Header(Props){

  const [char_,setChar] = useState("");
  const [data, setData] =  useState([]);
  const navigate = useNavigate();
  const [shouldPassData, setShouldPassData] = useState(false);

  function addChar(event){
    setChar(event.target.value);
  }

  function SearchProduct(e){

    e.preventDefault();

      try {
        Axios.post("http://localhost:3001/findproduct",{keyword: char_}).then((response)=>{
          setData(response.data);
        });
      } catch (error) {
        console.log(error);
      } 

      setShouldPassData(true);
  }

  useEffect(()=>{

        if(shouldPassData){
          navigate("/searchproduct",{state: data});
        }

  },[data])

  return(
    <nav className="navbar navbar-expand-lg navbar-warning bg-warning header">
  <div className="container-fluid">
    <Link className="nbstyle" to="/"><h1 className="nbstyle2" alt="logo">Kingh-Enterprise</h1></Link>
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">SHOP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">GALLERY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>
      {Props.showSearchBar
      ?
      <form className="d-flex" onSubmit={SearchProduct}>
        <input className="form-control me-2" type="search" value={char_} autoFocus={Props.ShouldFocused} onClick={(e)=> { e.preventDefault();}} onChange={addChar} placeholder="Search"/>
        <button type="button" className="btn btn-outline-light btn-large" onClick={SearchProduct}>Search</button>
        <i className="bi bi-cart"></i>
      </form>
      :
      ""
      }
    </div>
  </div>
</nav>
  )
}

Header.defaultProps={
  SdhouldFocused: false,
  showSearchBar: true
}

export default Header;