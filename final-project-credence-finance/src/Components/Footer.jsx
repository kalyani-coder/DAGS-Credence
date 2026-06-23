import React from "react";
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";
import logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twi from "../assets/twi.png";
import youtube from "../assets/youtube.png";
import Disclaimer from "./Disclamer";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer ">
      <div className="container py-4">
        <div className="row g-4">
          {/* Logo and Socials */}
          <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
            <img
              src={logo}
              alt="Credence Investments and Technology Services"
              className="footer-logo mb-3"
            />

            <div className="footer-socials mt-3">
              <img src={fb} alt="Facebook" className="footer-social" />
              <img src={insta} alt="Instagram" className="footer-social" />
              <img src={twi} alt="Twitter" className="footer-social" />
              <a href="https://www.youtube.com/@Credence_Investments">
                <img src={youtube} alt="YouTube" className="footer-social" />
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="footer-title">Get In Touch</h6>
            <ul className="footer-list">
              <li>Membership Details</li>
              <li>Link To Membership</li>
              <li onClick={() => navigate("/contact")}>Contact Us</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="footer-title">Policies</h6>
            <ul className="footer-list">
              <li onClick={() => navigate("/disclosure")}>Disclosure</li>
              <li onClick={() => navigate("/privacy")}>Privacy Policy</li>
              <li onClick={() => navigate("/terms")}>Terms and Conditions</li>
            </ul>
           
          </div>

          {/* Head Office */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="footer-title">Our Presence</h6>
            <div className="footer-contact">
              <MdLocationOn className="icon-orange" />
              <span> Mumbai </span>
              <br />
            </div>
            {/* <span>Sector BB, CBD Belapur, Navi Mumbai, Maharashtra, India</span> */}
            <div className="footer-contact">
              <MdLocationOn className="icon-orange" />

              <span> Pune</span>
            </div>
            <div className="footer-contact">
              <MdLocationOn className="icon-orange" />

              <span>Bengaluru</span>
            </div>
            <div className="footer-contact">
              <MdEmail className="icon-orange" />
              <span>info@citspartners.com</span>
            </div>
            <div className="footer-contact">
              <MdCall className="icon-orange" />
              <span>+91 9920370592</span>
            </div>
            {/* <span className="ps-4 d-block">+91 -80 41491936</span> */}
          </div>
        </div>
      </div>

      <Disclaimer />
    </footer>
  );
}
