import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import consultation from "../../assets/consultation.png";
import mobileapp from "../../assets/mobileapp.png";
import "../../styles/HomePage.css"; // Import external CSS

const Services_Section = ({ servicedata }) => {
  return (
    <div className="services-section">
      <div className="services-header">
        <h2 className="services-heading section_heading">
          {servicedata.title}
        </h2>
        <p className="services-subheading section_subheading">
          {servicedata.description}
        </p>
      </div>

      <div className="services-container">
        {servicedata?.services?.map((service, index) => (
          <div key={index} className="service-box hover-card box_container">
            <div className="service-icon box_icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="service-title box_title">{service.title}</h3>
            <p className="service-description box_description">
              {service.description}
            </p>
            {/* <button className="arrow-btn">
              <FontAwesomeIcon icon={faArrowRight} />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services_Section;
