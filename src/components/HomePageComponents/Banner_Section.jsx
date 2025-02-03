import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";
import "../../styles/HomePage.css"; // Import external CSS

const Banner_Section = () => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-overlay">
        <h1 className="banner-text">
          Empower Your Business with Expert Consulting
        </h1>
        <p className="banner-subtext">
          Unlock new opportunities and scale your business with our professional
          guidance.
        </p>
        <button className="banner-cta">Get Started</button>
      </div>
    </div>
  );
};

export default Banner_Section;
