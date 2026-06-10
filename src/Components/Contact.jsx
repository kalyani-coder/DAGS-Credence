import React, { useEffect } from "react";
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
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twi from "../assets/twi.png";
import youtube from "../assets/youtube.png";

export default function Contact() {
   useEffect(()=>{
      window.scrollTo(0, 0)
    },[])
  
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
                className="info-icon"
                alt="Website"
              />
              <span className="info-label">Website:</span>
              <a
                className="info-link"
                href="https://www.citspartners.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.citspartners.com
              </a>
            </div>

            <div className="info-row">
              <img
                src={youtube}
                className="info-icon"
                alt="YouTube"
                 href="https://www.youtube.com/@Credence_Investments"
              />
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

            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email id" />
              <input type="text" placeholder="Mobile Number" />
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="send-btn">
                Send
              </button>
            </form>

            {/* <div className="social-icons">
              <img src={fb} className="img-fluid social" alt="" />
              <img src={insta} className="img-fluid social" alt="" />
              <img src={twi} className="img-fluid social" alt="" />
              <img src={youtube} href='https://www.youtube.com/@Credence_Investments' className="img-fluid social" alt="" />
          
            </div> */}
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={fb} className="img-fluid social" alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={insta} className="img-fluid social" alt="Instagram" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twi} className="img-fluid social" alt="Twitter" />
              </a>
              <a href="https://www.youtube.com/@Credence_Investments" target="_blank" rel="noopener noreferrer">
                <img src={youtube} className="img-fluid social" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
