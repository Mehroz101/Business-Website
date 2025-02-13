import React from "react";
import coding from "../../assets/coding.png";
import help from "../../assets/jigsaw.png";
import choose from "../../assets/choosing.png";

const cardData = [
  {
    title: "What We Do",
    image: coding,
    description:
      "Technology can be complicated, but we’ve seen it all before and can help you with any IT issue.",
    linkText: "View Our Services",
  },
  {
    title: "What We Help?",
    image: help,
    description:
      "Our vertical solutions expertise allows your business to streamline workflow, and increase productivity.",
    linkText: "Industries We Serve",
  },
  {
    title: "Why Choose Us",
    image: choose,
    description:
      "We have a proven process to help you move your business forward and we’re with you every step of the way.",
    linkText: "Find Out More",
  },
];

const WhatWeDo = () => {
  return (
    <div className="aboutus_whatwedo">
      <div className="whatwedocards">
        {cardData.map((card, index) => (
          <div key={index} className="whatwedocard box_container">
            <div className="box_icon">
              <img src={card.image} alt={card.title} className="icon" />
            </div>
            <h3 className="box_title">{card.title}</h3>
            <p className="box_description">{card.description}</p>
            <span>{card.linkText}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
