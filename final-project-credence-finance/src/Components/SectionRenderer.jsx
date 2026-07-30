import React, { useState } from "react";
import "./AboutSection.css";

const SectionRenderer = ({ sections }) => {
  return (
    <div className="cits-about-section container">
      <div className="cits-about-grid">
        {/* Left Column */}
        <div className="cits-left-column">
          <Section {...sections[0]} />
        </div>

        {/* Right Column */}
        <div className="cits-right-column">
          <div className="cits-right-top">
            <Section {...sections[1]} />
          </div>
          <div className="cits-right-bottom">
            <Section {...sections[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, highlight, intro, sections, contentType }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const renderTitle = () => {
    if (!highlight) return <>{title}</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="cits-highlight">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  const renderContent = () => {
    if (contentType === "list") {
      return (
        <ul className="cits-paragraph">
          {sections.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (contentType === "numbered") {
      return (
        <ol className="cits-paragraph">
          {sections.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    } else {
      return (
        <div>
          {sections.slice(0, showMore ? sections.length : 1).map((section, index) => (
            <p key={index} className="cits-section-text">
              {section}
            </p>
          ))}
          {sections.length > 1 && (
            <button className="cits-btn" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <div className="cits-section-card">
      <h3 className="cits-section-title">{renderTitle()}</h3>
      {intro && <p className="cits-section-text">{intro}</p>}
      {sections.length > 0 && renderContent()}
    </div>
  );
};

export default SectionRenderer;
