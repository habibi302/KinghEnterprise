import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Hometexts from "./Hometexts";
import Footer from "./Footer";
import Copyright from "./Copyright";


function Home() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Hometexts />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;