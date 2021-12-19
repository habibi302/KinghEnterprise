import React from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Productdetails from "./components/Productdetails";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Adminlogin from "./components/Adminlogin";
import Secret from "./components/Secret";
import Admindashboard from "./components/Admindashboard";
import Adminorders from "./components/Adminorders";
import Adminproduct from "./components/Adminproduct";
import Adminproductpetails from "./components/Adminproductpetails";
import Adminproductinsert from "./components/Adminproductinsert";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<h1>404 Not Found!</h1>}/>
          <Route path="admin" element={<Adminlogin />}/>
          <Route path="admindashboard" element={<Admindashboard />}>
            <Route path="orders" element={<Adminorders />}/>
            <Route path="products" element={<Adminproduct />}>
            </Route>
          </Route>
          <Route path="/admindashboard/products/productdetails/:productid" element={<Adminproductpetails />}/>
          <Route path="/admindashboard/products/adminproductinsert" element={<Adminproductinsert />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/productdetails" element={<Productdetails />}/>
        </Routes>
    </Router>
  );
}

export default App;
