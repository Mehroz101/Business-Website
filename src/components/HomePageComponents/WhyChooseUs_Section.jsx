import React from "react";
import "../../styles/HomePage.css"; // Import external CSS
import customerService from "../../assets/customer-service.png";
import customer from "../../assets/customer.png";
import shield from "../../assets/shield.png";
import reliability from "../../assets/reliability.png";

const WhyChooseUs_Section = () => {
  const whyChooseData = [
    {
      title: "Expertise",
      description: "We have a team of highly skilled professionals.",
      icon: customerService,
    },
    {
      title: "Trust",
      description: "Our clients trust us for our integrity and reliability.",
      icon: customer,
    },
    {
      title: "Security",
      description:
        "We ensure the highest level of security in all our services.",
      icon: shield,
    },
    {
      title: "Customer Support",
      description:
        "We provide 24/7 customer support to help with all your needs.",
      icon: reliability,
    },
    {
      title: "Security",
      description:
        "We ensure the highest level of security in all our services.",
      icon: shield,
    },
    {
      title: "Customer Support",
      description:
        "We provide 24/7 customer support to help with all your needs.",
      icon: reliability,
    },
  ];

  return (
    <div className="why-choose-section">
      <div className="why-choose-top">
        <div className="why-choose-left">
          <h2 className="why-choose-heading">Why Choose Us?</h2>
        </div>
        <div className="why-choose-right">
          <p className="why-choose-text">
            We are committed to providing the best solutions for your business.
            Our expertise, support, and customer-centric approach make us the
            perfect partner for your success.
          </p>
        </div>
      </div>

      <div className="why-choose-cards">
        {whyChooseData.map((card, index) => (
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
