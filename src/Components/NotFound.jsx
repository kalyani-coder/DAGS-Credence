import React from 'react';
import first from '../assets/first.png';
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/PNG/4th Icon.png";
import fifth from "../assets/PNG/5th Icon.png";
import sixth from "../assets/PNG/6th Icon.png";
import eighth from "../assets/PNG/8th Icon.png";
import ninth from "../assets/PNG/9th Icon.png";
import './NotFound.css';

const NotFound = () => {
  const cards = [
    { img: first, title: "Portfolio Overlap Report", text: "Detailed MF-Portfolio Overlap Report (Compare up to 10 Funds)" },
    { img: second, title: "Top Stocks in Funds", text: "Fund Managers top-10 favourite Stocks" },
    { img: third, title: "Compare Returns Rolling and Historical NAV", text: "Daily/Weekly/Monthly /Quarterly/Yearly / User Selection" },
    { img: fourth, title: "Top Stocks Sold/Purchased by FMs", text: "Top Large/Mid/Small Cap Stocks Purchased/Sold by Fund managers" },
    { img: fifth, title: "Returns of Selected Funds", text: "1-Day to 10-Year Returns Comparison" },
    { img: sixth, title: "Stock Holding History", text: "Detailed Holding history report of stock in Monthly Portfolio" },
    { img: fifth, title: "Sample Sample", text: "Fund Managers top-10 favourite Stocks" },
    { img: eighth, title: "NAV Comparisons", text: "Compare multiple funds' NAV performance" },
    { img: ninth, title: "Fund Manager Moves", text: "Track stocks sold and purchased by managers" },
    { img: fifth, title: "Fund Returns Summary", text: "Top performing funds over multiple timeframes" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Cards</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={card.title} className="card-img" />
            <div className="card-content">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
