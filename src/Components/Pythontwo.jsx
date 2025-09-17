import React, { useEffect, useState } from "react";
import pythonImage from "../assets/pythonimg.png";
import './Cloudtwo.css'
import { useNavigate } from "react-router-dom";
const Pythontwo = () => {

  const Navigate = useNavigate()

  const [status, setStatus] = useState("notstarted");


  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  return (
    <div>
      <div className="python-training-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h6 className="hed">Technology Driven Advisory!</h6>
                <h1 className="ml-title ">
                  Python
                  <br />
                  <span className="funds">  Training Quiz</span>
                </h1>
                <p className="about-paragraph">
                 Master Python programming for automation, data analysis, AI/ML and web
development.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={pythonImage}
                  className="img-fluid hero-image"
                  alt="ML Internship"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

            {/* two  */}

             <div className="ppanel-wrap my-4">
        <div className="ppanel-row">
          {/* --- 1st Box: Update Status --- */}
          <div className="ppanel-col">
            <div className="ppanel-title">
              Update
              <br />
              Status
            </div>
            <div className="ppanel-box">
              <div className="ppanel-radio-list">
                <label className="ppanel-radio-label">
                  <input
                    type="radio"
                    name="status"
                    checked={status === "notstarted"}
                    onChange={() => setStatus("notstarted")}
                  />
                  <span className="ppanel-radio-custom" />
                  Not started
                </label>
                <label className="ppanel-radio-label">
                  <input
                    type="radio"
                    name="status"
                    checked={status === "inprogress"}
                    onChange={() => setStatus("inprogress")}
                  />
                  <span className="ppanel-radio-custom" />
                  In-Progress
                </label>
                <label className="ppanel-radio-label">
                  <input
                    type="radio"
                    name="status"
                    checked={status === "completed"}
                    onChange={() => setStatus("completed")}
                  />
                  <span className="ppanel-radio-custom" />
                  Completed
                </label>
              </div>
            </div>
            <button className="ppanel-green-btn">Update</button>
          </div>
          {/* --- 2nd Box: Udemy Certificate Upload --- */}
          <div className="ppanel-col">
            <div className="ppanel-title">
              Upload
              <br />
              Udemy Certificate
            </div>
            <div className="ppanel-box">
              <button className="ppanel-blue-btn">Upload</button>
              <div className="ppanel-box-label">Certificate</div>
            </div>
            <button className="ppanel-green-btn">Submit</button>
          </div>
          {/* --- 3rd Box: Google Colab Upload --- */}
          <div className="ppanel-col">
            <div className="ppanel-title">
              Upload
              <br />
              Colab File
            </div>
            <div className="ppanel-box">
              <button className="ppanel-blue-btn">Upload</button>
              <div className="ppanel-box-label">Google Colab File</div>
            </div>
            <button className="ppanel-green-btn">Submit</button>
          </div>
          {/* --- 4th Box: Download Certificate --- */}
          <div className="ppanel-col">
            <div className="ppanel-title">
              Download
              <br />
              Certificate
            </div>
            <div className="ppanel-box">
              <button className="ppanel-blue-btn">Download</button>
              <div className="ppanel-box-label">Certificate</div>
            </div>
            <button className="ppanel-green-btn">Submit</button>
          </div>
        </div>
        <button className="ppanel-quiz-btn" onClick={(()=>Navigate('/Question') )}>Start Quiz</button>
        <div className="ppanel-quiz-msg">Start Only when Ready</div>
      </div>


    </div>
  );
};

export default Pythontwo;
