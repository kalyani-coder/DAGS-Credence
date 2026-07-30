import React from "react";
import "./Blog.css";
import finance  from "../assets/Frame 37.jpg";
import mutual  from "../assets/Frame 36.jpg";
import it  from "../assets/Frame 38.jpg";
import { useNavigate } from "react-router-dom";


export default function Blog() {

  const navigate = useNavigate()

  return (
    <section className="blog-section py-5">
      <div className="container">
        {/* Blog Header */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="blog-title">Blog</h2>
            <p className="blog-subtitle">
              Learn more about Finance & Technology from our Blogs. New articles published every month!
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row">
          {/* Finance Card */}
          <div className="col-md-4 mb-4" onClick={()=> navigate("/Bpage") }>
            <div className="blog-card">
              <div className="blog-card-image">
                <div className="finance-illustration">
                  <div className="finance-icon">
                  <img src={mutual} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-category">Finance</h3>
                <p className="blog-card-title">
                  Build a 1 Crore Portfolio with Just Rs. 1500 per Month at 15% Return!
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="col-md-4 mb-4" onClick={()=> navigate("/Bpagetwo")}>
            <div className="blog-card">
              <div className="blog-card-image">
                <div className="education-illustration">
                  <div className="">
                  <img src={finance} className="img-fluid" alt="finance" />
                  </div>
                </div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-category">Education</h3>
                <p className="blog-card-title">
                  Empowering India Through Financial Literacy: A Path to Economic Growth and Prosperity
                </p>
              </div>
            </div>
          </div>

          {/* Technology Card */}
          <div className="col-md-4 mb-4" onClick={()=> navigate('/bpagethree')}>
            <div className="blog-card">
              <div className="blog-card-image">
                <div className="technology-illustration">
                  <div className="technology-icon">
                    <img src={it} className="img-fluid" alt="finance" />
                  </div>
                </div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-category">Technology</h3>
                <p className="blog-card-title">
                 Latest Technology Trends and CITS Expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}