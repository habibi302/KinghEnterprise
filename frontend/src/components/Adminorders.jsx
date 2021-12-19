import React from "react";
import Adminheader from "./Adminheader";

function Adminorders(){
    return(
        <>
        <div class="container mt-3">
  <h2>Orders</h2>        
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Product Name</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    )
}

export default Adminorders;