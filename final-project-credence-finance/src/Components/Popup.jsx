import React, { useState } from "react";
import styles from "./Popup.module.css";
import python from "../assets/news.png";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitState, setSubmitState] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitState({
      loading: true,
      success: "",
      error: "",
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
        signal: controller.signal,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Unable to send subscription message.");
      }

      setSubmitState({
        loading: false,
        success: "Subscribed successfully! Email has been sent.",
        error: "",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      const isTimeout = error.name === "AbortError";
      setSubmitState({
        loading: false,
        success: "",
        error: isTimeout
          ? "Unable to send message. Server not responding."
          : error.message || "Unable to send subscription message.",
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupCard}>
        <div className={styles.popupLeft}>
          <img src={python} alt="Newsletter" className={styles.popupImg} />
        </div>

        <div className={styles.popupRight}>
          <button type="button" className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>

          <h5 className="text-primary fw-bold text-center mb-2">
            SUBSCRIBE TO OUR <br /> NEWSLETTER
          </h5>
          <h6 className="text-dark fw-bold text-center mb-2">
            Subscribe to our Newsletter and insights on mutual funds and markets
          </h6>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              className="form-control mb-3"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              disabled={submitState.loading}
            >
              {submitState.loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
            </button>

            {submitState.success ? (
              <div className={styles.statusSuccess} role="status">
                {submitState.success}
              </div>
            ) : null}
            {submitState.error ? (
              <div className={styles.statusError} role="alert">
                {submitState.error}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
