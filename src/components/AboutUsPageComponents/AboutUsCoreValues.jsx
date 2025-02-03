import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faLightbulb,
  faUsers,
  faLeaf,
  faAward,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons"; // Importing relevant icons
import "../../styles/AboutUsPage.css"; // Importing the CSS file

const AboutUsCoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions.",
      icon: faHandshake, // Handshake icon for Integrity
    },
    {
      title: "Innovation",
      description: "We embrace change and continuously improve to stay ahead.",
      icon: faLightbulb, // Lightbulb icon for Innovation
    },
    {
      title: "Customer-Centric",
      description: "Our customers' needs are at the core of everything we do.",
      icon: faUsers, // Users icon for Customer-Centric
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collective success.",
      icon: faHandshake, // Handshake icon for Collaboration
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices.",
      icon: faLeaf, // Leaf icon for Sustainability
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project and interaction.",
      icon: faAward, // Award icon for Excellence
    },
  ];

  return (
    <section className="container">
      <h2 className="heading">Our Core Values</h2>
      <div className="valuesGrid">
        {values.map((value, index) => (
          <div key={index} className="valueCard">
            <div className="iconContainer">
              <FontAwesomeIcon icon={value.icon} size="3x" className="icon" />
            </div>
            <h3 className="cardTitle">{value.title}</h3>
            <p className="cardDescription">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsCoreValues;
