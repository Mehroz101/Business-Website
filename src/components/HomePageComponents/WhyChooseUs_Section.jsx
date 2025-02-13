import React from "react";
import "../../styles/HomePage.css"; // Import external CSS
import customerService from "../../assets/customer-service.png";
import customer from "../../assets/customer.png";
// import reliability from "../../assets/reliability.png";

const WhyChooseUs_Section = ({ whychoosedata }) => {
  return (
    <div className="why-choose-section">
      <div className="why-choose-top">
        <div className="why-choose-left">
          <h2 className="why-choose-heading section_heading">Why Choose Us?</h2>
        </div>
        <div className="why-choose-right">
          <p className="why-choose-text section_subheading">
            We are committed to providing the best solutions for your business.
            Our expertise, support, and customer-centric approach make us the
            perfect partner for your success.
          </p>
        </div>
      </div>

      <div className="why-choose-cards">
        {whychoosedata &&
          whychoosedata?.why_choose_us?.map((card, index) => (
            <div key={index} className="why-choose-card hover_card">
              <div className="why-choose-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 className="why-choose-title">{card.title}</h3>
              <p className="why-choose-description">{card.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyChooseUs_Section;
