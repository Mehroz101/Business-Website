import React from "react";

const IndustoriesSection = ({ industoriesdata }) => {
  return (
    <>
      <div className="industories-section">
        <div className="industories-top">
          <div className="industories-left">
            <span>Industries we serve</span>
            <h2 className="industories-heading ">
              Managed IT services customized for your industry
            </h2>
          </div>
          <div className="industories-right">
            <p className="industories-text ">
              Our vertical solutions expertise allows your business to
              streamline workflow, and increase productivity. No matter the
              business, NanoSoft has you covered with industry compliant
              solutions, customized to your company’s specific needs.
            </p>
          </div>
        </div>

        <div className="industories-cards">
          {industoriesdata &&
            industoriesdata?.industories_cards?.map((card, index) => (
              <div key={index} className="industories-card hover_card">
                <div className="industories-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3 className="industories-title">{card.title}</h3>
                <p className="industories-description">{card.description}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default IndustoriesSection;
