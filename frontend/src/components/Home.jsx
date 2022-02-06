import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Hometexts from "./Hometexts";
import Footer from "./Footer";
import Carticon from "./Carticon";


function Home() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Hometexts />
      <Footer />
      <div className="copyright-text-style2">
            <p>2021 NAJGRAPHICS LLC. COPYRIGHT © ALL RIGHTS RESERVED. THEME: SHOP ELITE BY THEMESAGA</p>
        </div>

        <Carticon />

    </div>
  );
}

export default Home;