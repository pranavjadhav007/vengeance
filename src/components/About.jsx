import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>We are here to work for you.</p>
            </div>

            <p className="mid">
            We are a community of skilled hackers. We have spend lot of time in learning, 
            exploring and finding hidden details in the world of technology. Our team consists 
            of passionate individuals with a shared goal of providing you with the best hacking 
            service. Whether it's for personal or professional, our aim is to make sure
            you get your work done. This service is only available for college students residing in
            Kondhwa, Pune -411048 due to limitation in social exploitation.   
            </p>
          </div>
          <div className="banner">
            <img src="gif.gif" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
