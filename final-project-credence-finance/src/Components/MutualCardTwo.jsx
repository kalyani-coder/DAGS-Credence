import React from "react";
import "./MutualCardTwo.css";

export default function MutualCardTwo() {
  return (
    <div className="mutualcard-two-container">
      <div className="mutualcard-two-title">
        Detailed Holing History report of stock in Monthly Portfolio
      </div>
      <div className="mutualcard-two-btn-row">
        <button className="mutualcard-two-add-btn">
          <b>Add Stock</b>
        </button>
        <button className="mutualcard-two-remove-btn">
          <b>Remove Stock</b>
        </button>
      </div>
      {[1, 2, 3,4].map((i) => (
        <div key={i} className="mutualcard-two-input-card">
          <input
            type="text"
            placeholder="Enter Fund Name"
            className="mutualcard-two-input"
            disabled
          />
        </div>
      ))}
      <div className="mutualcard-two-limit-msg">
        <b>Maximum limit exceeded</b>
      </div>
      <button className="mutualcard-two-compare-btn">
        <b>Compare&nbsp;&nbsp;Rolling Returns</b>
      </button>
    </div>
  );
}
