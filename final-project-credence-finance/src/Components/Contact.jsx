import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({
    loading: false,
    success: "",
    error: "",
  });

   useEffect(()=>{
      window.scrollTo(0, 0)
    },[])

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setSubmitState({
        loading: false,
        success: "Your message has been sent successfully.",
        error: "",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error: error.message || "Something went wrong while sending your message.",
      });
    }
  };
  
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
        Have questions or need assistance with our mutual fund solutions? Feel free to reach out to
our dedicated team through the provided contact channels. We&#39;re here to help you navigate
your investment and technology journey.
        </p>

        <div className="contact-card">
          {/* Left Side */}
          <div className="contact-left">

            <div className="office">
              <h4 className="office-title">Mumbai Office</h4>
              <p>
                <FaMapMarkerAlt className="icon" /> Sector 8B, CBD Belapur, Navi
                Mumbai, Maharashtra, India
              </p>
              <p>
                <FaEnvelope className="icon" /> info@citspartners.com
              </p>
              <p>
                <FaPhoneAlt className="icon" /> +91 9920370592
              </p>
            </div>

            <hr />

            <div className="office">
              <h4 className="office-title">Pune Office</h4>
              <p>
                <FaMapMarkerAlt className="icon" /> Kharadi IT Park, Pune,
                Maharashtra, India
              </p>
              <p>
                <FaEnvelope className="icon" /> info@citspartners.com
              </p>
              <p>
                <FaPhoneAlt className="icon" /> +91 9920370592
              </p>
            </div>

            <hr />

              <div className="office">
              <h4 className="office-title">Bengaluru Office</h4>
              <p>
                <FaMapMarkerAlt className="icon" />Gunjur, Whitefield Sarjapur Road, Bengaluru, India
              </p>
              <p>
                <FaEnvelope className="icon" /> info@citspartners.com
              </p>
              <p>
                <FaPhoneAlt className="icon" /> +91 8041491936
              </p>
            </div>



            <div className="info-row my-3">
              <FaFacebook className="info-icon social-icon facebook-icon" aria-label="Facebook" />
              <span className="info-label">Facebook:</span>
              <a
                className="info-link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com
              </a>
            </div>

            <div className="info-row">
              <FaYoutube className="info-icon social-icon youtube-icon" aria-label="YouTube" />
              <span className="info-label">Youtube:</span>
              {/* <span className="info-text"  >  @Credence_Investments</span> */}
              <span className="info-text"> 
              <a href="https://www.youtube.com/@Credence_Investments">  @Credence_Investments</a>
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <h4 className="form-title">Send Message</h4>
            <p className="form-subtitle">
              Subscribe to our newsletter and insights on Mutual Funds & Markets
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="send-btn" disabled={submitState.loading}>
                {submitState.loading ? "Sending..." : "Send"}
              </button>
              {submitState.success ? (
                <p className="form-message form-message-success">{submitState.success}</p>
              ) : null}
              {submitState.error ? (
                <p className="form-message form-message-error">{submitState.error}</p>
              ) : null}
            </form>

            {/* <div className="social-icons">
              <img src={fb} className="img-fluid social" alt="" />
              <img src={insta} className="img-fluid social" alt="" />
              <img src={twi} className="img-fluid social" alt="" />
              <img src={youtube} href='https://www.youtube.com/@Credence_Investments' className="img-fluid social" alt="" />
          
            </div> */}
            <div className="social-icons">
              <FaFacebook className="social-icon social facebook-icon" aria-label="Facebook" />
              <FaInstagram className="social-icon social instagram-icon" aria-label="Instagram" />
              <FaTwitter className="social-icon social twitter-icon" aria-label="Twitter" />
              <a href="https://www.youtube.com/@Credence_Investments" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="social-icon social youtube-icon" aria-label="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
