import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import learn from "../assets/PNG/LEARNING &.png";
import mutual from "../assets/PNG/MUTUAL.png";
import IT from "../assets/PNG/IT Services.png";
import Services from "./Service";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
// import first from "../assets/first.png";
import one from "../assets/fir.png";
import two from "../assets/sec.png";
import three from "../assets/thi.png";
import four from "../assets/for.png";
import fiv from "../assets/fiv.svg";
import six from "../assets/six.png";
import sev from "../assets/sev.png";
import eig from "../assets/eig.png";
import Pythontwo from "./Pythontwo";
import Quiz from "./Quiz";
import Cloudtwo from "./Cloudtwo";
import Aiml from "./Aiml";
import Quizml from "./Quizml";
import TermsAndConditions from "./TermsConditions";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";
// import "/Users/amardippadghan/Downloads/final-finance/src/Components/AboutS.css";
import '../Components/AboutS.css';
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min";
import SectionRenderer from "./SectionRenderer";

export default function Home() {
  const navigate = useNavigate();
  const sections = [
    {
      title: "Focused expertise & exceptional service",
      highlight: "expertise",
      intro:
        "Credence Investments and Technology Services (CITS) is a dynamic and client-focused Investments and Technology Services company that delivers comprehensive financial and technology solutions to Individuals, public and private sector organizations.",
      sections: [
        "CITS is a dedicated team of extensively experienced professionals in the domain of management, finance and Technology. Each of our consultants specializes in a particular discipline like Finance, Marketing, Operations, Human Resources, Legal, Strategy, Consulting & Information Technology.",
        "Our research has shown that even some highly educated professionals like engineers, doctors and others often lack fundamental knowledge about money and technology. This realization makes us think about the situation of those who are less educated or have low literacy about money and technology. Therefore, inspired by this insight, we founded Credence Investments and Technology Services.",
        "Word “Credence” in our company name reflects our commitment to the principle of “To Believe”. At CITS, we are driven by the pursuit of ensuring that every client firmly believes in the solutions we provide. Our ultimate goal is to empower individuals and businesses alike by bridging the knowledge gap and offering comprehensive financial and technological guidance.",
        "Individuals, small companies, startups and government agencies are the target segments for our company because they often lack the broad range of knowledge and expertise required to launch, digitize and scale up their business. We also help our clients to enter new markets globally & launch new products or setup new businesses.",
        "CITS can also play a major role in taking over some of the non-core activities of firms so as to enable them focus on their core business. There is a serious need in the market place, and certainly the significant demand for the type of consulting services we provide at affordable rates. Hence CITS is trying to fill this gap and cater to the market demand across the globe."
      ],
      contentType: "paragraph",
      columnClass: "col-md-6 py-6"
    },
    {
      title: "Our Mission",
      highlight: "Mission",
      intro: "",
      sections: [
        "Deliver high-quality, scalable IT solutions tailored to client needs.",
        "Build innovative Fin-Tech products especially in Mutual funds Industry.",
        "Increase financial literacy among individuals to achieve financial independence.",
        "Build lasting partnerships with clients and stakeholders.",
        "Foster innovation and continuous improvement."
      ],
      contentType: "numbered",
      columnClass: "col-md-6"
    },
    {
      title: "Our Vision",
      highlight: "Vision",
      intro: "",
      sections: [
        "Empowering Individuals with financial literacy to achieve financial independence.",
        "Transforming businesses through innovative fin-tech and technology Services to achieve Digital Transformation."
      ],
      contentType: "list",
      columnClass: "col-md-6"
    }
  ];
  


  const [showPopup, setShowPopup] = useState(false);
  let timerRef = useRef();

  // useEffect(() => {
  //   timerRef.current = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timerRef.current);
  //   };
  // }, []);


  //  useEffect(() => {
  //   const carouselEl = document.getElementById('carouselExampleDark');
  //   if (carouselEl) {
  //     const carousel = new Carousel(carouselEl, {
  //       interval: 3000,
  //       ride: 'carousel',
  //     });

  //     return () => {
  //       carousel.dispose(); // cleanup on unmount
  //     };
  //   }
  // }, []);

  useEffect(() => {
  const carouselEl = document.getElementById('carouselExampleDark');
  let carousel;
  if (carouselEl) {
    carousel = new Carousel(carouselEl, {
      interval: 6000,
      ride: 'carousel',
    });
  }

  timerRef.current = setTimeout(() => {
    setShowPopup(true);
  }, 9000);

  return () => {
    clearTimeout(timerRef.current);
    if (carousel) carousel.dispose();
  };
}, []);


  return (
    <>
      {/* Fullscreen Carousel */}
      <div className="carousel-wrapper">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{
            minHeight: '91vh',
          }}>
            {/* Slide 1 */}
            <div className="carousel-item active" >
              <div className="slide-section">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-6  ">
                      <h6 className="hed">Technology Driven Advisory!</h6>
                      <h1 className="head1">
                        FINANCIAL{" "}
                        <span className="funds">
                          <br />
                          SERVICES
                        </span>
                      </h1>
                      <p className="leads">
                        Credence offers detailed mutual fund data services,
                        equity research, financial planning, insurance and
                        emergency planning through our in-house developed
                        products and highly experienced professionals.
                      </p>
                      <button
                        className="btn1"
                        onClick={() => navigate("/services")}
                      >
                        View Services
                      </button>
                    </div>
                    <div className="col-md-6 ">
                      <img
                        src={mutual}
                        className="img-fluid"
                        alt="Mutual Funds"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" data-bs-interval="6000">
              <div className="slide-section">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-6 ">
                      <h6 className="hed">Technology Driven Advisory!</h6>
                      <div className="head1">
                        LEARNING & <span className="funds">CERTIFICATION</span>
                      </div>

                      <p className="leads">
                        Credence delivers specialized IT and Financial training
                        services, equipping customers with skills to excel in
                        technology and finance.
                      </p>
                      <button className="btn1" 
                       onClick={() => navigate("/BlogOne")}
                      >View Services</button>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={learn}
                        className="img-fluid"
                        alt="Learning & Certification"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" data-bs-interval="6000">
              <div className="slide-section ">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-6 ">
                      <h6 className="hed">Technology Driven Advisory!</h6>
                      <h1 className="head1">
                        IT{" "}
                        <span className="funds">
                          <br />
                          SERVICES
                        </span>
                      </h1>
                      <p className="leads">
                        Credence provides IT services, including software
                        development, cloud solutions, and consulting, to drive
                        business innovation.
                      </p>
                      <button className="btn1" 
                       onClick={() => navigate("/itservices")}
                      >View Services</button>
                    </div>
                    <div className="col-md-6 ">
                      <img src={IT} className="img-fluid" alt="IT Services" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>

      {/* About / Mission / Vision Section */}
      <section className="about-section py-5">

        <SectionRenderer sections={sections} />


        {/* cards */}

        <div className="credence-stats-container ">
          <div className="credence-stats-row">
            {/* Card 1 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={one}
                    alt="Credence"
                    className="credence-stat-iconimg "
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">20+</span>
                  <br />
                  <span className="credence-stat-subtitle">
                    Years of Industry Experience
                  </span>
                </h5>
                <p className="credence-stat-desc">
                  Highly experienced &amp; trustworthy team
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={two}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">100+</span>
                  <br />
                  <span className="credence-stat-subtitle">Happy Clients</span>
                </h5>
                <p className="credence-stat-desc">
                  Best in class client experience
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={three}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">6+</span>
                  <br />
                  <span className="credence-stat-subtitle">Asset management companies empaneled
</span>
                </h5>
                <p className="credence-stat-desc">
                  Empaneled with Biggest AMC’s in India
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={four}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">2 Cr +</span>
                  <br />
                  <span className="credence-stat-subtitle">AUM</span>
                </h5>
                <p className="credence-stat-desc">
                  Managing AUM of more than 2 Cr for family &amp; friends
                </p>
              </div>
            </div>
          </div>

          <div className="credence-stats-row mt-4">
            {/* Card 5 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={fiv}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">850+</span>
                  <br />
                  <span className="credence-stat-subtitle">
                    Youtube Channel Subscribers
                  </span>
                </h5>
                 <p className="credence-stat-desc">
                 Growing family of engaged subscribers daily.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={six}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">28000+</span>
                  <br />
                  <span className="credence-stat-subtitle">
                    Views on our Youtube Channel
                  </span>
                </h5>
                 <p className="credence-stat-desc">
                 Thousands inspired through every single view.
                </p>
              </div>
            </div>
            {/* Card 7 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={sev}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">600+</span>
                  <br />
                  <span className="credence-stat-subtitle">
                    Hours spent on our Youtube Channel
                  </span>
                </h5>
                 <p className="credence-stat-desc">
                 Content that keeps audiences truly hooked.
                </p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="credence-stat-col">
              <div className="credence-stat-card">
                <div className="credence-stat-icon">
                  <img
                    src={eig}
                    alt="Credence"
                    className="credence-stat-iconimg"
                  />
                </div>
                <h5 className="credence-stat-title">
                  <span className="credence-stat-number">4+</span>
                  <br />
                  <span className="credence-stat-subtitle">
                    Countries watching content on our Channel
                  </span>
                </h5>
                 <p className="credence-stat-desc">
                 Global reach, connecting minds beyond borders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Blog />
       
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        
      </section>

    </>
  );
}
