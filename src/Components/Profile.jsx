import React from "react";
import "./Profile.css";

export default function Profile() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="profile-title">MY PROFILE</h1>

        <div className="profile-layout">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="7" r="4" stroke="#0d6efd" strokeWidth="1.5" fill="none"/>
                <path d="M4 21v-1.5a5.5 5.5 0 0 1 5.5-5.5h5A5.5 5.5 0 0 1 20 19.5V21" stroke="#0d6efd" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="profile-form-section">
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="field-label">Email</label>
                <input type="email" className="field-input" />
              </div>

              <div className="form-field">
                <label className="field-label">First Name</label>
                <input type="text" className="field-input" />
              </div>

              <div className="form-field">
                <label className="field-label">Last Name</label>
                <input type="text" className="field-input" />
              </div>

              <div className="form-field">
                <label className="field-label">Display Name</label>
                <input type="text" className="field-input" />
              </div>

              <div className="form-field">
                <label className="field-label">Password</label>
                <input type="password" className="field-input" value="******" readOnly />
              </div>

              <div className="form-field">
                <label className="field-label">Confirm Password</label>
                <input type="password" className="field-input" value="******" readOnly />
              </div>
            </form>
          </div>
        </div>

        <div className="profile-actions">
          <button type="submit" className="save-button">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}