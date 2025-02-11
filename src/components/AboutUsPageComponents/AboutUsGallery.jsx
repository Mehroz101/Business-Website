import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";

const AboutUsGallery = () => {
  return (
    <>
      <div className="aboutus_gallary">
        <div className="gallary_left">
          <img src={bannerImg} alt="" />
        </div>
        <div className="gallary_right">
          <img src={bannerImg} alt="" />
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutUsGallery;
