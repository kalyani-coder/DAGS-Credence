import React, { useEffect, useState } from "react";
import first from "../assets/IT/icone.png";
import second from "../assets/IT/ictwo.png";
import third from "../assets/IT/icthree.png";
import fourth from "../assets/IT/icfour.png";
import fifth from "../assets/IT/icfive.png";
import sixth from "../assets/IT/icsix.png";
import seventh from "../assets/IT/icseven.png";
import eighth from "../assets/IT/iceight.png";
import ninth from "../assets/IT/icnine.png";
import tenth from "../assets/IT/icten.png";
import mutual from "../assets/PNG/IT Services.png";
import "./Services.css";
import { useNavigate } from "react-router-dom";

export default function ITServices() {
  const navigate = useNavigate();

  // useEffect(()=>{
  //     window.scrollTo(0, 0);
  //   })

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  const cards = [
    { img: first, title: "Web Development", desc: "Website Development", route: "/webdev" },
    { img: second, title: "Mobile Apps", desc: "iOS & Android Apps", route: "/mobileapps" },
    { img: third, title: "Cloud Migration", desc: "Migrate your web Applications to Cloud", route: "/cloudmigration" },
    { img: fourth, title: "Product Development", desc: "Financial and Automation Products", route: "/productdev" },
    { img: fifth, title: "Software Maintenance", desc: "Maintenance contract for self developed & 3rd party software", route: "/maintenance" },
    { img: sixth, title: "Custom AI/ML & Algo Trading", desc: "AI/ML ideas on MF & Stocks Data", route: "/aiml" },
    { img: seventh, title: "Digital Transformation", desc: "Empowering Businesses for the Future", route: "/trainings" },
    { img: eighth, title: "IT Consulting & Strategy", desc: "Guiding Smarter Technology Decisions", route: "/consulting" },
    { img: ninth, title: "Business Intelligence & Data Analytics", desc: "Unlocking Insights for Growth", route: "/bi" },
    { img: tenth, title: "Helpdesk & Technical Support", desc: "Reliable Assistance, Anytime Anywhere for your non-core activities", route: "/support" }
  ];

const servicesSections = [
  {
    heading: "Client-Centric Approach",
    features: [
      { title: "Understanding business needs before proposing solutions." }
    ]
  },
  {
    heading: "Security First",
    features: [
      { title: "Ensuring data protection, compliance, and robust cybersecurity." }
    ]
  },
  {
    heading: "Reliability & Uptime",
    features: [
      { title: "Minimizing downtime with proactive monitoring and support." }
    ]
  },
  {
    heading: "Scalability",
    features: [
      { title: "Building IT solutions that grow with the client's business." }
    ]
  },
  {
    heading: "Cost-Effectiveness",
    features: [
      { title: "Delivering high-quality IT services at optimized costs." }
    ]
  },
  {
    heading: "Innovation & Modernization",
    features: [
      { title: "Leveraging latest technologies (cloud, AI, automation)." }
    ]
  },
  {
    heading: "Proactive Maintenance",
    features: [
      { title: "Preventing issues before they impact business operations." }
    ]
  },
  {
    heading: "Customization",
    features: [
      { title: "Tailored IT strategies aligned with industry and client goals." }
    ]
  },
  {
    heading: "24/7 Availability",
    features: [
      { title: "Round-the-clock helpdesk and technical support." }
    ]
  },
  {
    heading: "Continuous Improvement",
    features: [
      { title: "Regular upgrades, feedback-driven enhancements, and training." }
    ]
  }
];



  return (
    <div className="services-block-outer">
      <section className="services-section-gradient">
        <div className="services-container-main">
          <h2 className="services-title-hero text-center">IT Services</h2>
          <div className="services-cardgrid">
            {cards.map(({ img, title, desc, route }, idx) => (
              <div key={idx} className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={img} alt={title} className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">{title}</h5>
                <p className="services-carddesc">{desc}</p>
                <button className="services-btncta" disabled>
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* <div className="col-md-4">
            <img src={mutual} alt="Mutual Fund Features" className="services-img-feature img-fluid" />
          </div> */}

      <div className="services-container-main">
             <div className="row p-5">
               <div className="col-md-6 d-flex justify-content-center align-items-center">
                 <img src={mutual} alt="Mutual Fund Features" className="services-img-feature img-fluid" />
               </div>
               <div className="col-md-6 my-2">
                 <button className="services-btncta my-2 ano" aria-expanded="false" aria-controls="services-value-content">
                   Our Priorities
                 </button>
                 <div>
                   {servicesSections.map((section, idx) => (
                     <div key={idx} className="services-accgroup">
                       <div
                         onClick={() => toggleSection(idx)}
                         className="services-acc-header"
                       >
                         <span>{section.heading}</span>
                         <span className="services-acc-toggle"
                           style={{
                             transform: openSection === idx ? "rotate(45deg)" : "rotate(0deg)",
                             transition: "transform 0.2s"
                           }}>
                           {openSection === idx ? "−" : "+"}
                         </span>
                       </div>
                       {openSection === idx && (
                         <ul className="services-acc-list">
                           {section.features.map((feature, fidx) => (
                             <li key={fidx}>
                               <div className="services-feature-title">{feature.title}</div>
                               <div className="services-feature-desc">{feature.description}</div>
                             </li>
                           ))}
                         </ul>
                       )}
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>

    </div>
  );
}
