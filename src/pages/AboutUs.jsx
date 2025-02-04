import React, { useEffect, useState } from "react";
import AboutUsIntro from "../components/AboutUsPageComponents/AboutUsIntro";
import AboutUsMission from "../components/AboutUsPageComponents/AboutUsMission";
import AboutUsCoreValues from "../components/AboutUsPageComponents/AboutUsCoreValues";
import AboutUsTeam from "../components/AboutUsPageComponents/AboutUsTeam";
import AboutUsServices from "../components/AboutUsPageComponents/AboutUsServices";
import AboutUsTestimonials from "../components/AboutUsPageComponents/AboutUsTestimonials";

const AboutUs = () => {
  const [Aboutusintro, setAboutusintro] = useState({});
  const [Aboutusmission, setAboutusmission] = useState({});
  const [Aboutuscorevalues, setAboutuscorevalues] = useState({});
  const [Aboutusteam, setAboutusteam] = useState({});
  const [Aboutusservices, setAboutusservices] = useState({});
  const [Aboutusyestimonials, setAboutustestimonials] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5173/websitedata.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const websitedata = await response.json();
        setAboutusintro(websitedata.aboutuspage.aboutusintro_section);
        setAboutusmission(websitedata.aboutuspage.ourmission_section);
        // setAboutuscorevalues(websitedata.aboutuspage.Achievements_section);
        // setAboutusteam(websitedata.aboutuspage.Projects_section);
        // setAboutusservices(websitedata.aboutuspage.why_choose_us_section);
        // setAboutustestimonials(websitedata.aboutuspage.quote_section);
        console.log("data", websitedata.aboutuspage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <AboutUsIntro aboutusintrodata={Aboutusintro} />
      <AboutUsMission Aaoutusmissiondata={Aboutusmission} />
      <AboutUsCoreValues />
      <AboutUsTeam />
      <AboutUsServices />
      <AboutUsTestimonials />
    </>
  );
};

export default AboutUs;
