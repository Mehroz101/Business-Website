import React from "react";
import "../../styles/HomePage.css"; // Import external CSS

const CompanyStats_Section = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">Our Achievements</h2>
      <p className="stats-subtext">
        We are committed to delivering quality services with excellence.
      </p>
      <div className="stats-container">
        <div className="stat-box">
          <h2 className="stat-number">500+</h2>
          <p className="stat-label">Happy Clients</p>
        </div>
        <div className="stat-box">
          <h2 className="stat-number">1200+</h2>
          <p className="stat-label">Completed Projects</p>
        </div>
        <div className="stat-box">
          <h2 className="stat-number">50+</h2>
          <p className="stat-label">Team Members</p>
        </div>
        <div className="stat-box">
          <h2 className="stat-number">3000+</h2>
          <p className="stat-label">Parking Spots Managed</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats_Section;
