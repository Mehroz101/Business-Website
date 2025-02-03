import React from "react";
import companyImg from "../../assets/bannerImg.jpg";
import "../../styles/AboutUsPage.css"; // Import the CSS file

const AboutUsMission = () => {
  return (
    <section className="about-us-mission-container">
      <div className="about-us-mission-text-container">
        <h2 className="about-us-mission-heading">Our Mission</h2>
        <p className="about-us-mission-paragraph">
          Our mission is to revolutionize the industry by offering cutting-edge
          products and services that are not only innovative but also socially
          responsible. We aim to exceed customer expectations by fostering a
          culture of excellence and continuous improvement.
        </p>
      </div>
      <div className="about-us-mission-image-container">
        <img
          src={companyImg} // Replace with a relevant image for your mission
          alt="Mission Image"
          className="about-us-mission-image"
        />
      </div>
    </section>
  );
};

export default AboutUsMission;
