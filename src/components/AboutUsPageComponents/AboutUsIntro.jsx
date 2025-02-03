import React from "react";
import companyImg from "../../assets/bannerImg.jpg";
import "../../styles/AboutUsPage.css"; // Import the CSS file

const AboutUsIntro = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-text-container">
        <h1 className="about-us-heading">Welcome to Our Company</h1>
        <p className="about-us-paragraph">
          We are a forward-thinking company dedicated to providing innovative
          solutions that empower our clients and create positive change. With a
          rich history and a passion for excellence, we strive to deliver
          exceptional products and services that meet the evolving needs of
          today’s world.
        </p>
      </div>
      <div className="about-us-image-container">
        <img
          src={companyImg} // Replace with your company image
          alt="Company Image"
          className="about-us-image"
        />
      </div>
    </section>
  );
};

export default AboutUsIntro;
