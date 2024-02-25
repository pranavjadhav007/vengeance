import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
          <br></br>
            <h1 className="title"><b>Hacking Service for College Students</b> 
            <p><i>Discover the potential of Exploiting things.</i> </p> </h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              {/* <img src="./v_logo.png" alt="hero" /> */}
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                {/* <img src="./threelines.svg" alt="threelines" /> */}
              </div>
              {/* <img className="logo" src="logo.svg" alt="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner safe">

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
