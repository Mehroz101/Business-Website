import React from "react";
import coding from "../../assets/coding.png";
import help from "../../assets/jigsaw.png";
import choose from "../../assets/choosing.png";

const WhatWeDo = () => {
  return (
    <>
      <div className="aboutus_whatwedo">
        <div className="whatwedocards">
          <div className="whatwedocard">
            <h3>What We Do</h3>
            <img src={coding} alt="" className="icon" />
            <p>
              Technology can be complicated, but we’ve seen it all before and
              can help you with any IT issue.
            </p>
            <span>View Our Services</span>
          </div>
          <div className="whatwedocard">
            <h3>What We Help?</h3>
            <img src={help} alt="" className="icon" />
            <p>
              Our vertical solutions expertise allows your business to
              streamline workflow, and increase productivity.
            </p>
            <span>Industries We Serve</span>
          </div>
          <div className="whatwedocard">
            <h3>Why Choose Us</h3>
            <img src={choose} alt="" className="icon" />
            <p>
              We have a proven process to help you move your business forward
              and we’re with you every step of the way.
            </p>
            <span>Find Out More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
