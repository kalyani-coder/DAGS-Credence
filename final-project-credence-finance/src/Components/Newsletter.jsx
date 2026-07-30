import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import news from '../assets/news.png'; // Your provided image
// import './NewsletterPopup.css'; // Custom styles to match layout exactly
import '../app.css';

const NewsletterPopup = () => {
  return (
    <div className="popup-container">
      <div className="popup-card d-flex">
        <div className="popup-left d-flex align-items-center justify-content-center">
          <img src={news} alt="Newsletter" className="popup-img" />
        </div>
        <div className="popup-right px-4 py-4 position-relative">
          <button className="close-btn">&times;</button>
          <h5 className="text-primary fw-bold text-center mb-2">
            SUBSCRIBE TO OUR <br /> NEWSLETTER
          </h5>
          <p className="text-center small mb-4">
            Subscribe to our newsletter and insights <br /> on Mutual Funds & Markets
          </p>
          <form>
            <input type="text" className="form-control mb-3" placeholder="Name" />
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <input type="tel" className="form-control mb-3" placeholder="Mobile Number" />
            <button type="submit" className="btn btn-primary w-100 fw-bold">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
