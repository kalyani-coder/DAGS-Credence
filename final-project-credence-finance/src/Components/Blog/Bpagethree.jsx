import React, { useEffect } from "react";
import "./blogthree.css";
import blogthree from '../../assets/blog/LatestTechnology.jpg';

const BpageThree = () =>  { 
   useEffect(()=>{
      window.scrollTo(0, 0)
    },[])
  
  
  return(


  
  <div className="bpagethree-container">

      <div className="blogone-container">
              <img src={blogthree} className="blogone-image" alt="Blog First Visual" />
            </div>

    <div className="bpagethree-block">
      <p>
        In today’s rapidly evolving digital landscape, organizations must embrace cutting-edge
        technology to stay competitive and resilient. At <b>Credence Investments and Technology
        Services (CITS)</b>, we empower businesses with the latest IT solutions, strategic consulting, and
        hands-on training programs that drive transformation and growth.
      </p>
      <b>Driving Digital Transformation</b>
      <p>
        CITS helps enterprises accelerate <b>digital transformation</b> by streamlining processes,
        modernizing legacy systems, and leveraging emerging technologies. From <b>IT consulting and
        strategy to business intelligence and data analytics</b>, our solutions are designed to help
        organizations make informed decisions and unlock new opportunities.
      </p>
      <b>Our Priorities – Built Around Client Success</b>
      <p>
        At CITS, we believe that technology should work for business—not the other way around. That’s
        why our core priorities guide every solution we deliver:
      </p>
      <ol className="bpagethree-orderlist" start={1}>
        <li>
          <b>Client-Centric Approach</b> – Solutions designed after deeply understanding business needs.
        </li>
        <li>
          <b>Security First</b> – Strong data protection, compliance, and cybersecurity frameworks.
        </li>
        <li>
          <b>Reliability &amp; Uptime</b> – Proactive monitoring for uninterrupted operations.
        </li>
        <li>
          <b>Scalability</b> – Systems that grow as your business expands.
        </li>
        <li>
          <b>Cost-Effectiveness</b> – High-quality IT services at optimized costs.
        </li>
        <li>
          <b>Innovation &amp; Modernization</b> – Harnessing <b>cloud, AI, and automation</b>.
        </li>
        <li>
          <b>Proactive Maintenance</b> – Preventing problems before they occur.
        </li>
        <li>
          <b>Customization</b> – Tailored IT strategies for unique industries.
        </li>
        <li>
          <b>24/7 Availability</b> – Round-the-clock technical support.
        </li>
      </ol>
      <b>IT Expertise &amp; Training</b>
      <p>
        CITS not only implements technology but also builds talent for the future. Through our <b>specialized training programs and internships</b>, we prepare individuals with in-demand skills:
      </p>
      <ul className="bpagethree-bulletlist">
        <li><b>Cloud Internship</b></li>
        <li><b>AI/ML Internship</b></li>
        <li><b>Python Internship</b></li>
        <li><b>GenAI &amp; Prompt Engineering</b></li>
        <li><b>Mainframe &amp; COBOL Internship</b></li>
      </ul>
      <b>Conclusion</b>
      <p>
        CITS is more than a technology partner—we are an enabler of innovation, growth, and resilience.
        By blending <b>strategic IT expertise with industry-focused training</b>, we help businesses and individuals harness the power of the latest technology trends to shape a smarter, more connected future.
      </p>
    </div>
  </div>
) };

export default BpageThree;
