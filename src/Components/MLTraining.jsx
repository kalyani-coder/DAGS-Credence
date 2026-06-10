import React from "react";
import "./MLTraining.css";
import mlImage from "../assets/PNG/ML Internship.png";
import python from '../assets/pythonimg.png'

export default function MLTraining() {
  return (
    <div className="ml-training-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6 className="hed">Technology Driven Advisory!</h6>
              <h1 className="ml-title">
              AI / ML INTERNSHIP
                <br />
                <span className="funds">& CERTIFICATION</span>
              </h1>
              <p className="lead">
               Master Artificial Intelligence and Machine Learning through our
comprehensive 3-stage program featuring hands-on projects, real-world
assignments, and industry-recognized certification.
              </p>
              <button className="btn1">Get Started</button>
            </div>
            <div className="col-md-6 text-center">
              <img src={mlImage} className="img-fluid hero-image" alt="ML Internship" />
            </div>
          </div>
        </div>
      </section>




      {/* Stages Section */}
      <section className="stages-section">
     
        <div className="container">
          {/* Stage 1 */}
          <div className="stage-block">
            <div className="stage-chip">Stage 1: Udemy/YouTube Online Course</div>
            <ul className="stage-bullets">
              <li className="list"><span>Description of the course</span></li>
              <li className="list"><span>Link to the Udemy/YouTube course</span></li>
              <li><span>Progress tracker (e.g., 0% to 100%)</span></li>
            </ul>
          </div>

          {/* Stage 2 */}
          <div className="stage-block">
            <div className="stage-chip">Stage 2: Assignments</div>
            <ul className="stage-bullets">
              <li><span>List of assignments</span></li>
              <li><span>Upload button for submitting assignments</span></li>
              <li><span>Status indicator (e.g., Not Started, In Progress, Completed)</span></li>
            </ul>
          </div>

          {/* Stage 3 */}
          <div className="stage-block">
            <div className="stage-chip">Stage 3: Online Quiz</div>
            <ul className="stage-bullets">
              <li><span>Description of the quiz</span></li>
              <li><span>Link to start the quiz</span></li>
              <li><span>Score display after completion</span></li>
            </ul>
          </div>
        </div>
      </section>


<div className="enroll-container">
    <div className="enroll-details">
      <span className="enroll-label">Cost: Rs. 7500</span>
      <span className="enroll-label">Duration: 1 to 2 Months</span>
    </div>
    <button className="enroll-btn">Enroll Now!</button>
  </div>

      {/* Card section  */}

       <div className="popup-container">
            <div className="popup-card d-flex">
              <div className="popup-left d-flex align-items-center justify-content-center">
                <img src={python} alt="Newsletter" className="popup-img" />
              </div>
              <div className="popup-right px-4 py-4 position-relative">
                <button className="close-btn">&times;</button>
                <h5 className="text-primary fw-bold text-center mb-2">
                  ENROLL  TO OUR <br /> COURSE
                </h5>
               
                <form>
                  <input type="text" className="form-control mb-3" placeholder="Name" />
                  <input type="email" className="form-control mb-3" placeholder="Email" />
                  <input type="tel" className="form-control mb-3" placeholder="Mobile Number" />
                  <button type="submit" className="btn btn-primary w-100 fw-bold">
                    ENROLL
                  </button>
                </form>
              </div>
            </div>
          </div>
    </div>
  );
}