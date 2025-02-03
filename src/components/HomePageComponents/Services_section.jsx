import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SEO from "../../assets/seo.png";
import web from "../../assets/computer.png";
import consultation from "../../assets/consultation.png";
import socialmedia from "../../assets/socialmedia.png";
import "../../styles/HomePage.css"; // Import external CSS

const Services_Section = () => {
  const serviceData = [
    {
      title: "Consulting",
      description:
        "Expert business consulting to take your company to the next level.",
      icon: consultation,
    },
    {
      title: "Web Development",
      description:
        "Cutting-edge web development solutions for a seamless online experience.",
      icon: web,
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your brand.",
      icon: socialmedia,
    },
    {
      title: "SEO Optimization",
      description: "Advanced SEO techniques to boost your website's ranking.",
      icon: SEO,
    },
  ];

  return (
    <div className="services-section">
      <div className="services-header">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-subheading">
          We provide top-notch services to help you achieve your business goals
          with excellence and efficiency.
        </p>
      </div>

      <div className="services-container">
        {serviceData.map((service, index) => (
          <div key={index} className="service-box hover-card">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="arrow-btn">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services_Section;
