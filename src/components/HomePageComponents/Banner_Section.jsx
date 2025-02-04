import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";
import "../../styles/HomePage.css"; // Import external CSS
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Banner_Section = () => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-overlay">
        <div className="overlay_icons">
          <div className="icon_box">
            <Facebook size={20} color="var(--secondary-color)" />
          </div>
          <div className="icon_box">
            <Linkedin size={20} color="var(--secondary-color)" />
          </div>
          <div className="icon_box">
            <Twitter size={20} color="var(--secondary-color)" />
          </div>
          <div className="icon_box">
            <Instagram size={20} color="var(--secondary-color)" />
          </div>
        </div>
        <div className="overlay_text">
          <p className="banner-title">Welcome to Our Consulting Firm</p>
          <h1 className="banner-text">
            Empower Your Business with Expert Consulting
          </h1>
          <p className="banner-subtext">
            Unlock new opportunities and scale your business with our
            professional guidance.
          </p>
          <button className="banner-cta">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner_Section;
