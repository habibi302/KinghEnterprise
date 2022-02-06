import React from "react";
import { useParams, useLocation} from "react-router-dom";

function Adminproductpetails(){
    const location = useLocation();

    return(
        <>  
        <div className="container mt-5">    

            <div class="card mb-2 ">
                <div class="row">
                    <div class="col-md-4">
                    <img  src={"http://localhost:3001/"+location.state.imgurl} className="images p-1" alt="..."/>
                    </div>
                    <div class="col-md-8 p-4">
                        <h5 class="card-title text-warning fw-bold ">{location.state.title}</h5>
                            <h3 className="text-success"> $38.00 – $110.00</h3>
                        <p class="card-text">{location.state.desc}</p>
                    <small>{location.state.title}</small> <select aria-label="Default select example">
                        <option selected>Options</option>
                        <option value="1">24" X 36" Print Only</option>
                        <option value="2">24" X 36" with Frame</option>
                    
                        </select>
                    </div>
                    </div>
                </div>

            </div>
        </>
        );

}
export default Adminproductpetails;