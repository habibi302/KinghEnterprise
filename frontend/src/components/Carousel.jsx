import React, {useState, useEffect} from "react";
import Axios from "axios";


function Carousel(){

  const [carouselBanners, setCarouselBanners] = useState([]);
  useEffect(()=>{
try {
  Axios.get("http://localhost:3001/carouselbanners").then((response)=>{
    setCarouselBanners(response.data);
    console.log(carouselBanners);
  });
} catch (error) {
  console.log(error);
}

  }, []);

    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

      {
        carouselBanners.map((val, key)=>{
        return(
            key == 0
            ?
            <div className="carousel-item active" key={key}>
              <img src={val.src} className="d-block w-100" alt="..."/>
            </div>
            :
            <div className="carousel-item" key={key}>
              <img src={val.src} className="d-block w-100" alt="..."/>
            </div>
        )
      })
      }
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;