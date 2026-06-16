import React, { useEffect } from "react";
import "./Question.css";
import Quiz from "./Quiz";

function Question() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  return (

    <>
    <Quiz/>
    <div className="quiz-bg">
      <div className="quiz-container">
        <div className="quiz-content-row">
          {/* Left Side: Question Panel */}
          <div className="quiz-left">
            <div className="question-section">
              <h2>
                1. What is the correct syntax to output "Hello World" in Python?
              </h2>
              <form>
                <label className="option">
                  <input type="radio" name="answer" defaultChecked />
                  print("Hello World")
                </label>
                <label className="option">
                  <input type="radio" name="answer" />
                  echo "Hello World"
                </label>
                <label className="option">
                  <input type="radio" name="answer" />
                  console.log("Hello World")
                </label>
                <label className="option">
                  <input type="radio" name="answer" />
                  System.out.println("Hello World")
                </label>
              </form>
              <div className="nav-buttons">
                <button className="prev-btn">PREV</button>
                <button className="next-btn">NEXT</button>
              </div>
            </div>
          </div>

          {/* Right Side: Output / Palette Panel */}
          <div className="quiz-right">
            <div className="timer-in-panel">
              <div className="timer-time">9:13</div>
              <div className="timer-label">MINUTES REMAINING</div>
            </div>
            <div className="palette-section">
              <div className="note">
                Note: Navigating through this question palette won't save your responses. Use "Save and Next" button to save your responses.
              </div>
              <div className="answered">0 Answered</div>
              <div className="unanswered">0 Unanswered</div>
              <div className="question-palette">
                <div className="palette-btn selected">1</div>
                <div className="palette-btn">2</div>
                <div className="palette-btn">3</div>
                <div className="palette-btn">4</div>
                <div className="palette-btn">5</div>
              </div>
              <div className="palette-links">
                <a href="#">Show one page at a time</a> <br />
                <a href="#">Finish review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="quiz-desc">
          This quiz covers a broad range of topics and should be useful for assessing a beginner's knowledge.
        </div>
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>

    </>
  );
}

export default Question;
