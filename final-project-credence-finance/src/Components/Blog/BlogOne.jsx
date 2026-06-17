import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import first from "../../assets/blog/Cloud Internship.png";
import second from "../../assets/blog/ML Internship.png";
import third from "../../assets/blog/Python Internship.png";
import fourth from "../../assets/blog/GenAI & Promt engineering.png";
import fifth from "../../assets/blog/Mainframe &amp; Cobol Internship.png";
import sixth from "../../assets/blog/Introduction to Investing.png";
import seven from "../../assets/blog/Stock Market Basics.png";
import eighth from "../../assets/blog/Mutual Funds &amp; ETF’s.png";
import nine from "../../assets/blog/Types of Investment Options.png";
import ten from "../../assets/blog/Inflation, Compounding &TVM.png";
import mutual from '../../assets/PNG/IT Services.png';
import './BlogOne.css'

const BlogOne = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // })

const [openSection, setOpenSection] = useState(null);

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  const servicesSections = [
  {
    heading: "Industry-Relevant Curriculum",
    features: [
      { title: "Updated content designed with current market trends." }
    ]
  },
  {
    heading: "Hands-On Learning",
    features: [
      { title: "Practical exercises, projects, and real-world case studies." }
    ]
  },
  {
    heading: "Expert Mentorship",
    features: [
      { title: "Sessions led by professionals with industry experience." }
    ]
  },
  {
    heading: "Certification Recognition",
    features: [
      { title: "Credible certificates that add value to career growth." }
    ]
  },
  {
    heading: "Career Readiness",
    features: [
      { title: "Preparing learners for jobs, internships, and competitive exams." }
    ]
  },
  {
    heading: "Flexibility & Accessibility",
    features: [
      { title: "Online/offline modules, self-paced or instructor-led" }
    ]
  },
  
];



  return (
    <div className="services-block-outer">
      <section className="services-section-gradient">
        <div className="services-container-main">
          <h2 className="services-title-hero text-center">LEARNING & CERTIFICATION</h2>
          <div className="services-cardgrid">

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={first} alt="Cloud Internship" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Cloud Internship</h5>
              <p className="services-carddesc">Learn cloud platforms, services, and deployment models with hands-on projects.</p>
              <button className="services-btncta" disabled onClick={() => navigate("/blogs/cloud-internship")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={second} alt="AI/ML Internship" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">AI/ML Internship</h5>
              <p className="services-carddesc">Explore Artificial Intelligence & Machine Learning with real-world applications.</p>
              <button className="services-btncta" disabled onClick={() => navigate("/blogs/ml-internship")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={third} alt="Python Internship" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Python Internship</h5>
              <p className="services-carddesc">Master Python programming for automation, data analysis, and development.</p>
              <button className="services-btncta" disabled onClick={() => navigate("/blogs/python-internship")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={fourth} alt="GenAI & Prompt Engineering" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">GenAI & Prompt Engineering</h5>
              <p className="services-carddesc">Harness Generative AI tools and craft effective prompts for better results.</p>
              <button className="services-btncta" disabled>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={fifth} alt="Mainframe & Cobol Internship" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Mainframe & Cobol Internship</h5>
              <p className="services-carddesc">Learn legacy systems and COBOL programming used in large-scale enterprises.</p>
              <button className="services-btncta" disabled onClick={() => navigate("#")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={sixth} alt="Introduction to Investing" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Introduction to Investing</h5>
              <p className="services-carddesc">Understand the basics of financial markets and how investing works.</p>
              <button className="services-btncta" disabled onClick={() => navigate("#")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={seven} alt="Stock Market Basics" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Stock Market Basics</h5>
              <p className="services-carddesc">Learn stock trading fundamentals, market terms, and how exchanges operate.</p>
              <button className="services-btncta" disabled onClick={() => navigate("#")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={eighth} alt="Mutual Funds & ETFs" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Mutual Funds & ETF’s</h5>
              <p className="services-carddesc">Discover how mutual funds and ETFs work for wealth building.</p>
              <button className="services-btncta" disabled onClick={() => navigate("#")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={nine} alt="Types of Investment Options" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Types of Investment Options</h5>
              <p className="services-carddesc">Explore different investment choices like equity, bonds, and real estate.</p>
              <button className="services-btncta" disabled onClick={() => navigate("#")}>Coming Soon</button>
            </div>

            <div className="services-card">
              <div className="services-cardicon-wrap">
                <img src={ten} alt="Inflation, Compounding & TVM" className="services-iconimg" />
              </div>
              <h5 className="services-cardtitle">Inflation, Compounding & TVM</h5>
              <p className="services-carddesc">Understand money value, inflation impact, and compounding benefits.</p>
              <button className="services-btncta" disabled onClick={() => navigate("#")}>Coming Soon</button>
            </div>

          </div>
        </div>
      </section>




      <div className="services-container-main">
  <div className="row p-5">
    <div className="col-md-6 col-12  img-col-custom">
      <img
        src={mutual}
        alt="Mutual Fund Features"
        className=" img-fluid"
      />
    </div>
    <div className="col-md-6 col-12 my-2 accordion-col">
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
};

export default BlogOne;







// import React from "react";
// import { useNavigate } from "react-router-dom";

// import first from "../../assets/blog/Cloud Internship.png";
// import fourth from "../../assets/blog/GenAI & Promt engineering.png";
// import ten from "../../assets/blog/Inflation, Compounding &TVM.png";
// import sixth from "../../assets/blog/Introduction to Investing.png";
// import fifth from "../../assets/blog/Mainframe &amp; Cobol Internship.png";
// import eighth from "../../assets/blog/Mutual Funds &amp; ETF’s.png";
// import third from "../../assets/blog/Python Internship.png";
// import seven from "../../assets/blog/Stock Market Basics.png";
// import nine from "../../assets/blog/Types of Investment Options.png";
// import second from "../../assets/blog/ML Internship.png";

// const BlogOne = () => {
//   const navigate = useNavigate();

//   const cards = [
//     {
//       img: first,
//       title: "Cloud Internship",
//       desc: "Learn cloud platforms, services, and deployment models with hands-on projects.",
//       path: "/blogs/cloud-internship",
//     },
//     {
//       img: second,
//       title: "AI/ML Internship",
//       desc: "Explore Artificial Intelligence & Machine Learning with real-world applications.",
//       path: "/blogs/ml-internship",
//     },
//     {
//       img: third,
//       title: "Python Internship",
//       desc: "Master Python programming for automation, data analysis, and development.",
//       path: "/blogs/python-internship",
//     },
//     {
//       img: fourth,
//       title: "GenAI & Prompt Engineering",
//       desc: "Harness Generative AI tools and craft effective prompts for better results.",
//       path: "/blogs/genai-prompt-engineering",
//     },
//     {
//       img: fifth,
//       title: "Mainframe & Cobol Internship",
//       desc: "Learn legacy systems and COBOL programming used in large-scale enterprises.",
//       path: "/blogs/mainframe-cobol",
//     },
//     {
//       img: sixth,
//       title: "Introduction to Investing",
//       desc: "Understand the basics of financial markets and how investing works.",
//       path: "/blogs/introduction-to-investing",
//     },
//     {
//       img: seven,
//       title: "Stock Market Basics",
//       desc: "Learn stock trading fundamentals, market terms, and how exchanges operate.",
//       path: "/blogs/stock-market-basics",
//     },
//     {
//       img: eighth,
//       title: "Mutual Funds & ETF’s",
//       desc: "Discover how mutual funds and ETFs work for wealth building.",
//       path: "/blogs/mutual-funds-etf",
//     },
//     {
//       img: nine,
//       title: "Types of Investment Options",
//       desc: "Explore different investment choices like equity, bonds, and real estate.",
//       path: "/blogs/investment-options",
//     },
//     {
//       img: ten,
//       title: "Inflation, Compounding & TVM",
//       desc: "Understand money value, inflation impact, and compounding benefits.",
//       path: "/blogs/inflation-compounding-tvm",
//     },
//   ];

//   return (
//     <div className="services-block-outer">
//       <section className="services-section-gradient">
//         <div className="services-container-main">
//           <h2 className="services-title-hero text-center">
//             Training & Certifications
//           </h2>
//           <div className="services-cardgrid">
//             {cards.map((card, i) => (
//               <div key={i} className="services-card">
//                 <div className="services-cardicon-wrap">
//                   <img src={card.img} alt={card.title} className="services-iconimg" />
//                 </div>
//                 <h5 className="services-cardtitle">{card.title}</h5>
//                 <p className="services-carddesc">{card.desc}</p>

//                 {/* ✅ Navigate on button click */}
//                 <button
//                   className="services-btncta"
//                   onClick={() => navigate(card.path)}
//                 >
//                   Read More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogOne;
