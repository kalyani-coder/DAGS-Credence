import React from "react";
import "./MLTraining.css";
import pythonImage from "../assets/pythonimg.png";
import python from "../assets/pythonimg.png";
import Question from "./Question";

export default function PythonTraining() {
  return (
    <div className="ml-training-page python-training">
      {/* Hero Section */}
      {/* <section className="hero-section python-hero-bg" style={{backgroundImage: `url(${pythonImage})`}}>
        <div className="hero-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 text-center">
                <h6 className="hed">Technology Driven Advisory!</h6>
                <h1 className="ml-title">
                  PYTHON INTERNSHIP
                  <br />
                  <span className="funds">& CERTIFICATION</span>
                </h1>
                <p className="lead">
                  Comprehensive training, Chance to work on challenging assignments and
                  live projects. Experience certificate from a well know organization in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="python-training-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h6 className="hed">Technology Driven Advisory!</h6>
                <h1 className="ml-title">
                  PYTHON INTERNSHIP
                  <br />
                  <span className="funds">& CERTIFICATION</span>
                </h1>

                <p className="lead">
                  Master Python programming for automation, data analysis, AI/ML
                  and web development.
                </p>
                <button className="btn1">Get Started</button>
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

      {/* Stages Section */}
      <section className="stages-section">
        <div className="container">
          {/* Stage 1 */}
          <div className="stage-block">
            <div className="stage-chip">
              Stage 1: Complete Udemy Online Course
            </div>
            <ul className="stage-bullets">
              <li>
                <span>Description of the course</span>
                <br />
                Embark on a comprehensive journey into Python programming with
                our expertly crafted internship and certification program. This
                course is designed to cater to beginners and those looking to
                solidify their understanding of Python. The curriculum spans
                essential topics such as data types, control structures,
                functions, and modules, progressing to advanced concepts like
                object-oriented programming, file handling, and libraries. The
                course includes interactive Udemy modules, hands-on assignments,
                and challenging quizzes to test your knowledge. By the end of
                this program, you'll be well-equipped with the skills needed for
                real-world Python programming and ready for your certification.
              </li>
              <li>
                <span>Link to the Udemy course</span>
                <br />
                <a
                  href="https://www.udemy.com/course/complete-python-developer-zero-to-mastery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.udemy.com/course/complete-python-developer-zero-to-mastery/
                </a>
              </li>
              <li>
                <span>Additional Study Material (optional)</span>
                <br />
                <a
                  href="https://www.datacamp.com/courses/intro-to-python-for-data-science"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.datacamp.com/courses/intro-to-python-for-data-science
                </a>
                <br />
                <a
                  href="https://www.youtube.com/results?search_query=python+full+course+for+beginners+"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/results?search_query=python+full+course+for+beginners+
                </a>
              </li>
            </ul>
          </div>

          {/* Stage 2 */}
          <div className="stage-block">
            <div className="stage-chip">Stage 2: Assignments</div>
            <ul className="stage-bullets">
              <li>
                {/* <span>Engage in practical Python assignments</span> */}
                {/* <br /> */}
                Engage in practical Python assignments designed to reinforce
                learning. Tasks include coding exercises on loops, functions,
                file handling, data analysis with libraries like Pandas, and
                building simple applications. Each assignment aims to enhance
                problem-solving skills and ensure a deep understanding of Python
                concepts. Assignment will send on your registered email and
                intern need to upload a ".ipynb" file created on google colab
                after completion of assignment.
              </li>
            </ul>
          </div>

          {/* Stage 3 */}
          <div className="stage-block">
            <div className="stage-chip">Stage 3: Online Quiz</div>
            <ul className="stage-bullets">
              <li>
                {/* <span>Test your Python knowledge</span> */}
                {/* <br /> */}
                Test your Python knowledge with our comprehensive online quiz.
                The quiz covers key concepts from the course, including syntax,
                data types, control structures, functions, and libraries. It's
                designed to assess your understanding and readiness for
                real-world applications, ensuring you are well-prepared for
                certification.
              </li>
            </ul>
          </div>

          {/* Stage 4 */}
          <div className="stage-block">
            <div className="stage-chip">
              Stage 4: Generate Certificate Online.
            </div>
          </div>

          {/* Stage 5 */}
          <div className="stage-block">
            <div className="stage-chip">
              Stage 5: Send physical Internship experience Certificate if needed
              by user.
            </div>
          </div>

          <div className="enroll-container">
            <div className="enroll-details">
              <span className="enroll-label">Cost: Rs. 7500</span>
              <span className="enroll-label">Duration: 1 to 2 Months</span>
            </div>
            <button className="enroll-btn">Enroll Now!</button>
          </div>

          {/* Question  */}

          {/* <Question/> */}

          {/* Card section  */}

          <div className="popup-container">
            <div className="popup-card d-flex">
              <div className="popup-left d-flex align-items-center justify-content-center">
                <img src={python} alt="Newsletter" className="popup-img" />
              </div>
              <div className="popup-right px-4 py-4 position-relative">
                <button className="close-btn">&times;</button>
                <h5 className="text-primary fw-bold text-center mb-2">
                  ENROLL TO OUR <br /> COURSE
                </h5>

                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="Mobile Number"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold"
                  >
                    ENROLL
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
