import React from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Productdetails from "./components/Productdetails";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Adminlogin from "./components/Adminlogin";
import Admindashboard from "./components/Admindashboard";
import Adminorders from "./components/Adminorders";
import Adminproduct from "./components/Adminproduct";
import Adminproductpetails from "./components/Adminproductpetails";
import Adminproductinsert from "./components/Adminproductinsert";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Payment from "./components/Payment/Payment";
import Orderconfirmed from "./components/Orderconfirmed";
import SearchProduct from "./components/SearchProduct";


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
          <Route path="/shop/product/:productid" element={<Productdetails />}/>
          <Route path="/admindashboard/products/adminproductinsert" element={<Adminproductinsert />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/checkout/cart" element={<Cart />}/>
          <Route path="/confirmorder" element={<Order />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/checkout" element={<Payment />}/>
          <Route path="/productdetails" element={<Productdetails />}/>
          <Route path="/orderconfirmed" element={<Orderconfirmed />}/>
          <Route path="/searchproduct" element={<SearchProduct />}/>
        </Routes>
    </Router>
  );
}

export default App;