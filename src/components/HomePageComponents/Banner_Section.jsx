import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";
import "../../styles/HomePage.css"; // Import external CSS
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Banner_Section = ({ bannerdata }) => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${bannerdata?.background_image})` }}
    >
      <div className="banner-overlay">
        <div className="overlay_icons">
          <div
            className="icon_box"
            onClick={() => window.open(bannerdata.facebook_link, "_blank")}
          >
            <Facebook size={20} color="var(--secondary-color)" />
          </div>
          <div
            className="icon_box"
            onClick={() => window.open(bannerdata.linkdin_link, "_blank")}
          >
            <Linkedin size={20} color="var(--secondary-color)" />
          </div>
          <div
            className="icon_box"
            onClick={() => window.open(bannerdata.twitter_link, "_blank")}
          >
            <Twitter size={20} color="var(--secondary-color)" />
          </div>
          <div
            className="icon_box"
            onClick={() => window.open(bannerdata.instagram_link, "_blank")}
          >
            <Instagram size={20} color="var(--secondary-color)" />
          </div>
        </div>
        <div className="overlay_text">
          <p className="banner-title">{bannerdata.small_text}</p>
          <h1 className="banner-text">{bannerdata.tagline}</h1>
          <p className="banner-subtext">{bannerdata.description}</p>
          <button className="banner-cta">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner_Section;
