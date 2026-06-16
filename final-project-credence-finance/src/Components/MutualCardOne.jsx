

import React from 'react';
import './MutualCardOne.css';

const infoText = "Have questions or need assistance with our mutual fund solutions? Feel free to reach out to our dedicated team through the provided contact channels. We're here to help you navigate your investment journey.";

export default function MutualCardOne() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        Detailed MF portfolio overlapping report: <span className="portfolio-normal">Compare up to max 10 Mutual Funds</span>
      </div>
      <div className="portfolio-btn-row">
        <button className="portfolio-add-btn"><b>Add Funds To Compare</b></button>
        <button className="portfolio-remove-btn"><b>Remove Funds</b></button>
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="portfolio-info-card">
          {infoText}
        </div>
      ))}
      <div className="portfolio-limit-msg">
        <b>Maximum limit exceeded</b>
      </div>
      <button className="portfolio-compare-btn"><b>Compare</b></button>
    </div>
  );
}
