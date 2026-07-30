import React, { useEffect } from "react";
import About from "./About";
import './AboutS.css'

const AboutS = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  
  return (
    <div>
      <About />

      <div className=" container about-section-container">
        {/* About Us Section */}
        <section>
          <button className="our" aria-expanded="true" aria-controls="about-us-content">
            About Us
          </button>
          <p id="about-us-content" className="about-paragraph" style={{ whiteSpace: "pre-line" }}>
           Credence Investments and Technology Services (CITS) is a dynamic and client-focused Investments and Technology Services company that delivers comprehensive financial and technology solutions to Individuals, public and private sector organizations.
            <span className="them">
             CITS is a dedicated team of extensively experienced professionals in the domain of management, finance and Technology. Each of our consultants specializes in a particular discipline like Finance, Marketing, Operations, Human Resources, Legal,
Strategy, Consulting & Information Technology.
            </span>
            <span className="them">
              Our research has shown that even some highly educated professionals like engineers, doctors and others often lack fundamental knowledge about money and technology. This realization makes us think about the situation of those who are less educated or have low literacy about money and technology. Therefore, inspired by this insight, we founded Credence Investments and Technology Services.

            </span>

            <span className="them">
            Word “Credence” in our company name reflects our commitment to the principle of “To Believe”. At CITS, we are driven by the pursuit of ensuring that every client firmly believes in the solutions we provide. Our ultimate goal is to empower individuals and businesses alike by bridging the knowledge gap and offering comprehensive financial and technological guidance. 
            </span>

            <span className="them">
             Individuals, small companies, startups and government agencies are the target segments for our company because they often lack the broad range of knowledge and expertise required to launch, digitize and scale up their business. We also help our clients to enter new markets globally & launch new products or setup new businesses. 
            </span>

            <span className="them">
             CITS can also play a major role in taking over some of the non-core activities of firms so as to enable them focus on their core business. There is a serious need in the market place, and certainly the significant demand for the type of consulting services we provide at affordable rates. Hence CITS is trying to fill this gap and cater to the market demand across the globe.
            </span>
          </p>
        </section>

        {/* Our purpose */}

         <section>
          <button className="our" aria-expanded="false" aria-controls="our-vision-content">
            Our Purpose
          </button>
          <p id="our-vision-content" className="about-paragraph ">
            We exist to make financial knowledge and technology accessible to all—empowering people from every walk of life and enabling businesses to grow, innovate, and contribute meaningfully to society.
          </p>
        </section>


         {/* Our Vision Section */}
        <section>
          <button className="our" aria-expanded="false" aria-controls="our-vision-content">
            Our Vision
          </button>
          <p id="our-vision-content" className="about-paragraph">
            Empowering individuals with financial literacy to achieve financial independence and transforming businesses through innovative fintech and technology services to achieve digital transformation.
          </p>
        </section>

        {/* Our Mission Section */}
        <section>
          <button className="our" aria-expanded="false" aria-controls="our-mission-content">
            Our Mission
          </button>
          <ul id="our-mission-content" className="about-paragraph">
            <li>Deliver high-quality, scalable IT solutions tailored to client needs. </li>
            <li>Build innovative Fin-Tech products especially in Mutual funds Industry. </li>
            <li>Increase financial literacy among individuals to achieve financial independence.</li>
            <li>Build lasting partnerships with clients and stakeholders. </li>
            <li>Foster innovation and continuous improvement.</li>
          </ul>
        </section>

        {/* Our Value Section */}
        <section>
          <button className="our" aria-expanded="false" aria-controls="our-value-content">
            Our Value
          </button>
          <ul id="our-value-content" className="about-paragraph">
            <li> <strong> Integrity:  </strong> Operating with the highest ethical standards and transparency.</li>
            <li> <strong>Excellence: </strong>  Delivering top-tier service and innovative solutions.</li>
            <li> <strong>Client Focus:</strong> Prioritizing client goals and aligning strategies accordingly.</li>
            <li> <strong>Innovation:</strong> Leveraging technology and insights to stay ahead.</li>
            <li> <strong>Accountability:</strong> Owning outcomes and building long-term trust.</li>
          </ul>
        </section>

       
      </div>
    </div>
  );
};

export default AboutS;
