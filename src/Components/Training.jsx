import React from "react";
import { FaPython, FaCloud, FaRobot } from "react-icons/fa";
// import "./training.css"; // Optional styling
import './Traning.css'

export default function Training() {
  return (
    <section className="section-gradient" id="training">
      <h2 className="section-title text-center mb-4">Learning & Certification</h2>
      <div className="row g-4 animated">

        <div className="col-md-4">
          <div className="card card-effect h-100 text-center p-3">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <FaPython size={36} color="#306998" />
              <h5 className="m-0">Python Internship</h5>
            </div>
            <p className="lead">
              Beginner-friendly online course, hands-on assignments, quizzes, and industry certificate.
            </p>
            <a
              href="https://www.udemy.com/course/complete-python-developer-zero-to-mastery/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-info"
            >
              Start Learning
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-effect h-100 text-center p-3">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <FaCloud size={36} color="#0092fb" />
              <h5 className="m-0">Cloud & DevOps</h5>
            </div>
            <p className="lead">
              Project-driven learning about cloud tech with quizzes, mentor support, and real-world tasks.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-info"
            >
              Start Learning
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-effect h-100 text-center p-3">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <FaRobot size={36} color="#F6A623" />
              <h5 className="m-0">Machine Learning</h5>
            </div>
            <p className="lead">
              Step-by-step ML journey: video courses, assignments, quiz, and recognized internship certification.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-info"
            >
              Start Learning
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
