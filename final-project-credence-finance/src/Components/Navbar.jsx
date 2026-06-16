import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/company-logo.png";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import ProfileLogo from "../assets/Profile Icon.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [showNav, setShowNav] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // State for My Services panel and its tabs
  const [showMyServicesPanel, setShowMyServicesPanel] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // 'newsletter' | 'trainings' | null
  const [newsletterAction, setNewsletterAction] = useState("add");

  const menuRef = useRef(null);

  // Close menus on route/location change
  useEffect(() => {
    setShowNav(false);
    setShowServicesDropdown(false);
    setShowProfileDropdown(false);
    setShowMyServicesPanel(false);
    setActiveTab(null);
  }, [location]);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNav(false);
        setShowServicesDropdown(false);
        setShowProfileDropdown(false);
        setShowMyServicesPanel(false);
        setActiveTab(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNav = () => setShowNav(s => !s);
  const isMobile = () => window.innerWidth <= 991;

  return (
    <nav className="navbar navbar-expand-lg main-nav fixed-top">
      <div className="container navbar-container" ref={menuRef}>
        <NavLink className="navbar-brand" to="/" onClick={() => setShowNav(false)}>
          <img
            src={logo}
            alt="Credence Investments and Technology Services"
            className="navbar-logo"
          />
        </NavLink>
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${showNav ? " show" : ""}`} id="navMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => setShowNav(false)}>Home</NavLink>
            </li>
            <li
              className="nav-item nav-services"
              onMouseEnter={() => !isMobile() && setShowServicesDropdown(true)}
              onMouseLeave={() => !isMobile() && setShowServicesDropdown(false)}
            >
              <div className="d-flex align-items-center">
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={e => {
                    if (isMobile()) {
                      e.preventDefault();
                      setShowServicesDropdown(s => !s);
                    }
                  }}
                  aria-expanded={showServicesDropdown}
                  style={{ fontWeight: showServicesDropdown ? "bold" : undefined }}
                >
                  Services
                </NavLink>
                <button
                  className="services-caret"
                  type="button"
                  aria-label="Toggle services menu"
                  onClick={() => setShowServicesDropdown(s => !s)}
                >
                  ▾
                </button>
              </div>
              {showServicesDropdown && (
                <div className="nav-dropdown" onClick={e => e.stopPropagation()}>
                  <NavLink to="/services" onClick={() => setShowNav(false)}>FINANCIAL SERVICES</NavLink>
                  <NavLink to="/BlogOne" onClick={() => setShowNav(false)}>LEARNING & CERTIFICATION</NavLink>
                  <NavLink to="/itservices" onClick={() => setShowNav(false)}>IT SERVICES</NavLink>
                </div>
              )}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={() => setShowNav(false)}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={() => setShowNav(false)}>Contact Us</NavLink>
            </li>
          </ul>

          <div className="profile-section">
            {isAuthenticated ? (
              <>
                <div
                  className="profile-icon-container"
                  onClick={() => setShowProfileDropdown(s => !s)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={ProfileLogo}
                    alt="profile"
                    className="img-profile"
                    style={{ borderRadius: "50%", width: 40, height: 40 }}
                  />
                </div>
                {showProfileDropdown && (
                  <div className="profile-dropdown" role="menu" onClick={e => e.stopPropagation()}>
                    <ul>
                      <li>
                        <NavLink to="/profile" onClick={() => setShowProfileDropdown(false)}>My Profile</NavLink>
                      </li>
                      <li>
                        <button
                          className="btn-link"
                          onClick={() => {
                            setShowProfileDropdown(false);
                            setShowMyServicesPanel(true);
                            setActiveTab(null);
                          }}
                        >
                          My Services
                        </button>
                      </li>
                      <li>
                        <button
                          className="logout-btn"
                          onClick={() => {
                            dispatch(logout());
                            sessionStorage.removeItem("loggedInUser");
                            navigate("/login");
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                {showMyServicesPanel && (
                  <section
                    className="myservices-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="My Services panel"
                    onClick={e => e.stopPropagation()}
                  >
                    {activeTab === null && (
                      <>
                        <button className="back-btn" onClick={() => setShowMyServicesPanel(false)}>
                          ← Close
                        </button>
                        <div className="side-panel-title">My Services</div>
                        <div className="services-selection">
                          <button className="selection-btn" onClick={() => setActiveTab("newsletter")}>
                            📩 Newsletter
                          </button>
                          <button className="selection-btn" onClick={() => setActiveTab("trainings")}>
                            📚 Trainings
                          </button>
                        </div>
                      </>
                    )}
                    {activeTab === "newsletter" && (
                      <>
                        <button className="back-btn" onClick={() => setActiveTab(null)}>
                          ← Back
                        </button>
                        <div className="side-panel-title">Newsletter Enrollment</div>
                        <div className="services-option">
                          <label>
                            <input
                              type="radio"
                              name="newsletter"
                              checked={newsletterAction === "add"}
                              onChange={() => setNewsletterAction("add")}
                            />{" "}
                            Add Enrollment
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="newsletter"
                              checked={newsletterAction === "remove"}
                              onChange={() => setNewsletterAction("remove")}

                            />{" "}
                            Remove Enrollment
                          </label>
                        </div>
                        <button
                          className="update-btn"
                          onClick={() =>
                            alert(`Newsletter action: ${newsletterAction}`)
                          }
                        >
                          Update 
                        </button>
                      </>
                    )}
                    {activeTab === "trainings" && (
                      <>
                        <button className="back-btn" onClick={() => setActiveTab(null)}>
                          ← Back
                        </button>
                        <div className="nested-training-menu">
                          <NavLink to="/itservices/ptraining" className="nested-training-item">
                          
                            Python Training
                          </NavLink>
                          <NavLink to="/itservices/aiml" className="nested-training-item">
                            AI / ML Training
                          </NavLink>
                          <NavLink to="/itservices/cloudtwo" className="nested-training-item">
                            Cloud Training
                          </NavLink>
                        </div>
                      </>
                    )}
                  </section>
                )}
              </>
            ) : (
              <div className="auth-buttons d-flex align-items-center">
                <button className="btn btn-primary me-3 px-4" disabled>Login</button>
                <button className="btn navsignup" disabled>Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
