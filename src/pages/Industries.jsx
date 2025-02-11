import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import bannerImg from "../assets/bannerImg.jpg";
import "../styles/industries.css";

const Industries = () => {
  const location = useLocation();
  const industryName = decodeURIComponent(location.hash.replace("#", "")); // Get industry from URL hash
  const [industry, setIndustryData] = useState([]);
  useEffect(() => {
    if (industryName) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5173/websitedata.json`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const websitedata = await response.json();
          console.log("industryName", industryName);
          const Data = websitedata?.industries_section?.industries?.filter(
            (industory) => {
              return industory.name === industryName;
            }
          );

          console.log(Data);
          if (Data) {
            setIndustryData(Data[0]);
            console.log(Data[0]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [industryName]);
  // Find the industry data based on the URL hash
  // const industry = industriesData.industries.find(
  //   (ind) => ind.name === industryName
  // );

  if (!industry) {
    return (
      <div className="industries_view">
        <h1>Industry Not Found</h1>
        <p>The selected industry does not exist in our records.</p>
      </div>
    );
  }

  return (
    <div className="industries_view">
      {/* Banner Section */}
      <div
        className="industries_banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h1>{industry?.name}</h1>
        </div>
      </div>

      {/* Industry Overview Section */}
      <div className="about_industry">
        <span className="about_industry_span">Overview</span>
        <h1 className="about_industry_h1">{industry?.overview?.title}</h1>
        <p className="about_industry_p">{industry?.overview?.description}</p>
      </div>

      {/* Industry Sectors Section */}
      <div className="sector_industry">
        <span className="sector_industry_span">Sectors</span>
        <h1 className="sector_industry_h1">Key Areas of {industry?.name}</h1>
        <div className="sectors_section">
          {industry?.sectors?.map((sector, index) => (
            <div className="sector_box" key={index}>
              <div className="sector_img">
                <img src={sector?.img} alt={sector.title} />
              </div>
              <div className="sector_text">
                <h2>{sector.title}</h2>
                <p>{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits_section">
        <span className="benefits_section_span">
          Benefits of {industry?.name}
        </span>
        <h1 className="benefits_section_h1">
          How Our Solutions Benefit This Industry
        </h1>
        <div className="benefits_boxs">
          {industry?.benefits?.map((benefit, index) => (
            <div className="benefit_box" key={index}>
              <h3>{benefit?.title}</h3>
              <p>{benefit?.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="expertise_section">
        <div className="expertise_container">
          <div className="expertise_left">
            <h2>{industry?.expertise?.title}</h2>
            <p>{industry?.expertise?.description}</p>
            <div className="expertise_left_numbers">
              {industry?.expertise?.numbers.map((num, index) => (
                <div className="expertise_left_numbers_box" key={index}>
                  <span className="number">{num?.value}</span>
                  <span className="number_text">{num?.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="expertise_right">
            <div className="right_image">
              <img src={industry?.expertise?.img} alt={industry?.name} />
            </div>
          </div>
        </div>
      </div>

      {/* Industry Products Section */}
      <div className="industry_product_section">
        <div className="industry_product_top">
          <h3>Find out our products related to {industry?.name}</h3>
          <button className="btn">FInd out more</button>
        </div>
        <div className="industry_product_bottom">
          <div className="industry_products">
            {industry?.industryProducts?.map((product, index) => (
              <div className="industry_product" key={index}>
                <div className="img">
                  <img src={product.img} alt={product.title} />
                  <div className="overlay">
                    <span className="small_text">{product.title}</span>
                    {/* <h4>Cloud migration saves money for health insurer</h4> */}
                  </div>
                </div>
                <div className="industry_product_text">
                  <span className="small_text">{product.category}</span>
                  <h4>{product?.title}</h4>
                  <p>{product?.description}</p>
                  <button>Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
