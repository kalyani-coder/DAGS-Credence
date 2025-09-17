import React from "react";
import about from "../assets/PNG/ABOUT US.png";
import { FaUsers, FaBullseye, FaRocket } from "react-icons/fa";
import AboutS from "./AboutS";
import "../App.css";

export default function About() {
  return (

    <div className="container ">
    <section className="section-gradient abtmain " id="about">
      <div className="row align-items-center g-5">
       
        <div className="col-lg-7">
      <h6 className="hed">Technology Driven Advisory!</h6>
                      <h1 className="head1 ">
                        ABOUT{" "}
                        <span className="funds">
                          {" "}
                          <br />
                          US
                        </span>
                      </h1>
                      <p className=" ">
                        Empowering Individuals with financial literacy to achieve financial
independence & Transforming businesses through innovative fin-tech and
technology solutions to achieve Digital Transformation.
                      </p>
        </div>

       <div className="col-lg-5 d-flex justify-content-center">
          <img src={about} alt="About Credence" className="img-fluid rounded" style={{maxHeight: '340px'}}/>
        </div>

      </div>

      
      {/* <AboutS/> */}
    </section>

    </div>
  );
}
