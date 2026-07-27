import React from "react";
import styles from "./Popup.module.css";
import python from "../assets/news.png";

const Popup = ({ onClose }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupCard}>
        {/* Left Section */}
        <div className={styles.popupLeft}>
          <img src={python} alt="Newsletter" className={styles.popupImg} />
        </div>

        {/* Right Section */}
        <div className={styles.popupRight}>
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>

          <h5 className="text-primary fw-bold text-center mb-2">
          SUBSCRIBE TO OUR  <br /> NEWSLETTER
          </h5>
          <h6  className="text-dark fw-bold text-center mb-2"> Subscribe to our Newsletter and insights on mutual funds and markets</h6>

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
SUBSCRIBE            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
