import React, { useEffect, useState } from "react";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/PNG/4th Icon.png";
import fifth from "../assets/PNG/5th Icon.png";
import sixth from "../assets/PNG/6th Icon.png";
import seven from '../assets/PNG/7 th icon.png';
import eighth from "../assets/PNG/8th Icon.png";
import mutual from '../assets/PNG/MUTURAL FUNDS.png';
import "./Service.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Services() {

  const navigate = useNavigate()

  // useEffect(()=>{
  //     window.scrollTo(0, 0);
  //   })

    // when user logged in then open read more btn 

  const user = useSelector(state => state.auth.user);

   const handleReadMoreClick = (path) => {
    if (user) {
      navigate(path);
    } else {
      alert("Please login to view the details.");
      navigate("/login");
    }
  };

  // read more  



  const servicesSections = [
    {
      heading: "Core Research Features",
      features: [
        { title: "Comprehensive Fund Database", description: "Access to performance data across equity, debt, hybrid, and thematic funds." },
        { title: "Performance Tracking", description: "Historical returns, rolling returns, benchmark comparisons." },
        { title: "Risk Analysis", description: "Beta, Sharpe ratio, standard deviation, risk-adjusted returns." },
        { title: "Portfolio Insights", description: "Sector allocation, top holdings, diversification levels." },
        { title: "Fund Ranking & Ratings", description: "Proprietary fund scoring based on consistent performance." }
      ]
    },
    {
      heading: "Analytical Services",
      features: [
        { title: "Fund Screening & Comparison", description: "Compare multiple funds across risk, return, and cost." },
        { title: "Expense Ratio & Cost Analysis", description: "Evaluate cost impact on long-term returns." },
        { title: "Fund Manager Track Record", description: "Assess experience and historical performance." },
        { title: "Category & Peer Comparison", description: "Evaluate funds against peers and category averages." },
        { title: "SIP & Lumpsum Projections", description: "Goal-based projections using calculators and simulations." }
      ]
    },
    {
      heading: "Advisory & Value-Added Services",
      features: [
        { title: "Customized Fund Recommendations", description: "Tailored portfolios based on client risk profile." },
        { title: "Goal-Based Investing Advisory", description: "Retirement, child education, wealth creation." },
        { title: "Market & Industry Reports", description: "Insights into macroeconomic and sector trends." },
        { title: "Regular Portfolio Reviews", description: "Rebalancing suggestions based on market shifts." },
        { title: "Regulatory & Compliance Updates", description: "SEBI/RBI-related updates impacting funds." }
      ]
    },
    {
      heading: "Digital Tools & Client Support",
      features: [
        { title: "Interactive Dashboards", description: "Visual reports for easy understanding." },
        { title: "Mobile/Online Access", description: "Anytime access to fund research reports." },
        { title: "Expert Consultation", description: "One-on-one sessions with research analysts." },
        { title: "Investor Education Resources", description: "Blogs, webinars, and guides on mutual funds." }
      ]
    }
  ];

  // const cardImages = [first, second, third, fourth, fifth, sixth, seven, eighth, eighth, fifth];
  // const cardTitles = [
  //   "Portfolio Overlap report",
  //   "Top Stocks in Funds",
  //   "Compare Returns Rolling and Historical NAV of Mutual Funds",
  //   "Top Stocks Sold/Purchased by Fms",
  //   "10-Years/5-Year/3-Years/1-Year/6-Months/3-Months/1-Month/1-Week/1-Day",
  //   "Stock Holding History in Mutual Funds",
  //   "Equity Research",
  //   "Financial Planning",
  //   "Insurance & Emergency Planning",
  //   "Multi-period Returns Overview"
  // ];
  // const cardDescriptions = [
  //   "Detailed MF-Portfolio Overlap Report (Compare up to 10 Funds)",
  //   "Fund Managers top-10 favourite Stocks",
  //   "Daily/Weekly/Monthly /Quarterly/Yearly / User Selection",
  //   "Immerse yourself in a community of learners, who are as passionate as you",
  //   "Returns of selected funds",
  //   "Detailed Holding history report of stock in Monthly Portfolio",
  //   "Fund Managers top-10 favourite Stocks",
  //   "Daily/Weekly/Monthly Quarterly/Yearly/User Selection",
  //   "Top Large/Mid/Small Cap Stocks Purchased/Sold by Fund managers",
  //   "Top Large/Mid/Small Cap Funds Returns of selected Funds"
  // ];

  const [openSection, setOpenSection] = useState(null);
  const toggleSection = idx => setOpenSection(openSection === idx ? null : idx);

  return (
    <>
      {/* <div className="services-block-outer">
        <section className="services-section-gradient">
          <div className="services-container-main">
            <h2 className="services-title-hero text-center">
              MUTUAL FUNDS RESEARCH & ANALYSIS
            </h2>
            <div className="services-cardgrid">
              {cardImages.map((img, i) => (
                <div key={i} className="services-card">
                  <div className="services-cardicon-wrap">
                    <img src={img} alt="Credence" className="services-iconimg" />
                  </div>
                  <h5 className="services-cardtitle">
                    {cardTitles[i]}
                  </h5>
                  <p className="services-carddesc">
                    {cardDescriptions[i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div> */}

       <div className="services-block-outer">
        <section className="services-section-gradient">
          <div className="services-container-main">
            <h2 className="services-title-hero text-center">
              FINANCIAL SERVICES by Credence
            </h2>
            <div className="services-cardgrid">

              {/* Static cards */}
              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={first} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Portfolio Overlap report</h5>
                <p className="services-carddesc">Detailed MF-Portfolio Overlap Report (Compare up to 10 Funds)</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>
              {/* <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={first} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Portfolio Overlap report</h5>
                <p className="services-carddesc">Detailed MF-Portfolio Overlap Report (Compare up to 10 Funds)</p>
                <button className="services-btncta" onClick={()=> navigate('/Cardone') }>Read More</button>
              </div> */}

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={second} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Top Stocks in Funds</h5>
                <p className="services-carddesc">Fund Managers top-10 favourite Stocks</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={third} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Compare Returns Rolling and Historical NAV of Mutual Funds</h5>
                <p className="services-carddesc">Daily/Weekly/Monthly /Quarterly/Yearly / User Selection</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={fourth} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Top Stocks Sold/Purchased by Funds</h5>
                <p className="services-carddesc">See in which stocks mutual funds are actively buying and selling</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={fifth} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">10-Years/5-Year/3-Years/1-Year/6-Months/3-Months/1-Month/1-Week/1-Day</h5>
                <p className="services-carddesc">Returns of selected funds</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={sixth} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Stock Holding History in Mutual Funds</h5>
                <p className="services-carddesc">Detailed Holding history report of stock in Monthly Portfolio</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={seven} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Equity Research</h5>
                <p className="services-carddesc">Learn how fundamental and technical analysis needs to be done on stocks</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={eighth} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Financial Planning</h5>
                <p className="services-carddesc">Get the financial planning done as per your goals, risk profile and financial freedom</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={eighth} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Insurance & Emergency Planning</h5>
                <p className="services-carddesc">Secure yourself and your family financially in case of any emergency</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

              <div className="services-card">
                <div className="services-cardicon-wrap">
                  <img src={fifth} alt="Credence" className="services-iconimg" />
                </div>
                <h5 className="services-cardtitle">Multi-period Returns Overview</h5>
                <p className="services-carddesc">Top Large/Mid/Small Cap Funds Returns of selected Funds</p>
                <button className="services-btncta" disabled>Read More</button>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div className="services-container-main">
        <div className="row p-5">
          <div className="col-md-6">
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
    </>
  );
}


// it is ok 