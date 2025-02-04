import React, { useEffect, useState } from "react";
import Banner_Section from "../components/HomePageComponents/Banner_Section";
import Services_Section from "../components/HomePageComponents/Services_section";
import WhyChooseUs_Section from "../components/HomePageComponents/WhyChooseUs_Section";
import Quote_Section from "../components/HomePageComponents/Quote_Section";
import CompanyStats_Section from "../components/HomePageComponents/CompanyStats_Section";
import Our_Projects from "../components/HomePageComponents/Our_Projects";
import Client_Section from "../components/HomePageComponents/Client_Section";
import { set } from "react-hook-form";
// import { websitedata } from "../../public/websitedata";

const Home = () => {
  const [BannerSection, setBannerSection] = useState({});
  const [ServicesSection, setServicesSection] = useState({});
  const [CompanyStatsSection, setCompanyStatsSection] = useState({});
  const [OurProjects, setOurProjects] = useState({});
  const [WhyChooseUsSection, setWhyChooseUsSection] = useState({});
  const [QuoteSection, setQuoteSection] = useState({});
  const [ClientSection, setClientSection] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5173/websitedata.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const websitedata = await response.json();
        setBannerSection(websitedata.homepage.banner_section);
        setServicesSection(websitedata.homepage.services_section);
        setCompanyStatsSection(websitedata.homepage.Achievements_section);
        setOurProjects(websitedata.homepage.Projects_section);
        setWhyChooseUsSection(websitedata.homepage.why_choose_us_section);
        setQuoteSection(websitedata.homepage.quote_section);
        setClientSection(websitedata.homepage.client_section);
        console.log("data", websitedata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="home_page">
        <Banner_Section bannerdata={BannerSection} />
        <Services_Section servicedata={ServicesSection} />
        <CompanyStats_Section achievementsdata={CompanyStatsSection} />
        <Our_Projects projects={OurProjects} />
        {/* <div style={{ position: "relative" }}> */}
        <WhyChooseUs_Section whychoosedata={WhyChooseUsSection} />
        <Quote_Section quotedata={QuoteSection} />
        <Client_Section clientdata={ClientSection} />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
