import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";

const AboutUsBanner = () => {
  return (
    <div
      className="aboutus_banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-overlay">
        <h1>About us</h1>
      </div>
    </div>
  );
};

export default AboutUsBanner;
