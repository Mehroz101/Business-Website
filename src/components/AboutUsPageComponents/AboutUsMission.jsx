import React from "react";
import companyImg from "../../assets/bannerImg.jpg";
import "../../styles/AboutUsPage.css"; // Import the CSS file

const AboutUsMission = ({ Aaoutusmissiondata }) => {
  return (
    <section className="about-us-mission-container">
      <div className="about-us-mission-text-container">
        <h2 className="about-us-mission-heading">{Aaoutusmissiondata.title}</h2>
        <p className="about-us-mission-paragraph">
          {Aaoutusmissiondata.description}
        </p>
      </div>
      <div className="about-us-mission-image-container">
        <img
          src={Aaoutusmissiondata.image} // Replace with a relevant image for your mission
          alt="Mission Image"
          className="about-us-mission-image"
        />
      </div>
    </section>
  );
};

export default AboutUsMission;
