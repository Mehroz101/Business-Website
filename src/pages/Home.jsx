import React from "react";
import Banner_Section from "../components/HomePageComponents/Banner_Section";
import Services_Section from "../components/HomePageComponents/Services_section";
import WhyChooseUs_Section from "../components/HomePageComponents/WhyChooseUs_Section";
import Quote_Section from "../components/HomePageComponents/Quote_Section";
import CompanyStats_Section from "../components/HomePageComponents/CompanyStats_Section";
import Our_Projects from "../components/HomePageComponents/Our_Projects";

const Home = () => {
  return (
    <>
      <div className="home_page">
        <Banner_Section />
        <Services_Section />
        <CompanyStats_Section />
        <Our_Projects />
        {/* <div style={{ position: "relative" }}> */}
        <WhyChooseUs_Section />
        <Quote_Section />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
