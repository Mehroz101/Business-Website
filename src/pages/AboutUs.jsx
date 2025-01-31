import React from "react";
import AboutUsIntro from "../components/AboutUsPageComponents/AboutUsIntro";
import AboutUsMission from "../components/AboutUsPageComponents/AboutUsMission";
import AboutUsCoreValues from "../components/AboutUsPageComponents/AboutUsCoreValues";
import AboutUsTeam from "../components/AboutUsPageComponents/AboutUsTeam";
import AboutUsServices from "../components/AboutUsPageComponents/AboutUsServices";
import AboutUsTestimonials from "../components/AboutUsPageComponents/AboutUsTestimonials";

const AboutUs = () => {
  return (
    <>
      <AboutUsIntro />
      <AboutUsMission />
      <AboutUsCoreValues />
      <AboutUsTeam />
      <AboutUsServices />
      <AboutUsTestimonials />
    </>
  );
};

export default AboutUs;
