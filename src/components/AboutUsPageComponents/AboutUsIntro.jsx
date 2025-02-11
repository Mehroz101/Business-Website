import React from "react";

const AboutUsIntro = ({ aboutusintrodata }) => {
  return (
    <section className="about-us-container">
      <div className="about-us-text-container">
        <h1 className="about-us-heading">{aboutusintrodata.title}</h1>
        <p className="about-us-paragraph">{aboutusintrodata.description}</p>
      </div>
      <div className="about-us-image-container">
        <img
          src={aboutusintrodata.image} // Replace with your company image
          alt="Company Image"
          className="about-us-image"
        />
      </div>
    </section>
  );
};

export default AboutUsIntro;
