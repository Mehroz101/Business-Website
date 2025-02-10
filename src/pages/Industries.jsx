import React from "react";
import bannerImg from "../assets/bannerImg.jpg";
import "../styles/industries.css";
import { useLocation } from "react-router-dom";

const Industries = () => {
  const location = useLocation();
  const hashValue = location.hash.replace("#", ""); // Remove the '#' symbol

  const sectors = [
    {
      title: "Banking & Finance",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920313.png",
      description:
        "We deliver secure and scalable financial technology solutions, ensuring seamless transactions, digital banking, and fraud prevention.",
    },
    {
      title: "Healthcare",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920322.png",
      description:
        "Revolutionizing healthcare with telemedicine, electronic medical records, and AI-driven diagnostics for better patient outcomes.",
    },
    {
      title: "E-Commerce",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920315.png",
      description:
        "Enhancing online retail experiences through AI-powered personalization, seamless payment integration, and efficient supply chain management.",
    },
    {
      title: "Education & E-Learning",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920319.png",
      description:
        "Empowering education with digital learning platforms, virtual classrooms, and AI-based student performance analytics.",
    },
    {
      title: "Logistics & Transportation",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920320.png",
      description:
        "Optimizing supply chain management, fleet tracking, and automated logistics solutions for efficiency and cost reduction.",
    },
    {
      title: "Real Estate & Construction",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920317.png",
      description:
        "Smart property management, virtual tours, and AI-driven analytics for real estate decision-making and infrastructure planning.",
    },
  ];
  const benefites = [
    {
      title: "Cost Savings",
      description:
        "We offer cost savings by automating processes, streamlining operations, and optimizing resources.",
    },
    {
      title: "Enhanced Customer Experience",
      description:
        "We enhance customer experiences by providing personalized services, improved accessibility, and personalized recommendations.",
    },
    {
      title: "Digital Transformation",
      description:
        "We enable digital transformation by leveraging cutting-edge technologies, cloud integration, and AI-driven insights.",
    },
    {
      title: "Security and Compliance",
      description:
        "We prioritize security and compliance by implementing robust security measures, ensuring data privacy, and complying with regulations.",
    },
  ];
  return (
    <>
      <div className="industries_view">
        <div
          className="industries_banner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner-overlay">
            <h1>Industries: {hashValue}</h1>
          </div>
        </div>

        {/* Industry Overview Section */}
        <div className="about_industry">
          <span className="about_industry_span">Overview</span>
          <h1 className="about_industry_h1">
            Transforming Industries with Cutting-Edge IT Solutions
          </h1>
          <p className="about_industry_p">
            At WebTech Smart Solution, we provide innovative technology
            solutions tailored to various industries. From banking to healthcare
            and e-commerce, our expertise helps businesses optimize operations,
            enhance customer experiences, and drive digital transformation.
            Whether it's automation, cloud integration, or AI-driven analytics,
            we deliver robust IT strategies that ensure seamless growth and
            efficiency in an ever-evolving digital world.
          </p>
        </div>

        {/* Industry Sectors Section */}
        <div className="sector_industry">
          <span className="sector_industry_span">Sectors</span>
          <h1 className="sector_industry_h1">
            Industries We Empower with Technology
          </h1>
          <div className="sectors_section">
            {sectors.map((sector, index) => (
              <div className="sector_box" key={index}>
                <div className="sector_img">
                  <img src={sector.img} alt={sector.title} />
                </div>
                <div className="sector_text">
                  <h2>{sector.title}</h2>
                  <p>{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="benefits_section">
            <span className="benefits_section_span">
              Benefits of Our Services
            </span>
            <h1 className="benefits_section_h1">
              Our clients are able to increase end-user productivity without
              sacrificing usability.
            </h1>
            <div className="benefits_boxs">
              {benefites.map((benefit, index) => (
                <div className="benefit_box" key={index}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
            <p className="lastline">
              Stop wasting time and money on technology. Let’s get started
            </p>
          </div>
        </div>
        <div className="expertise_section">
          <div className="expertise_container">
            <div className="expertise_left">
              <span className="expertise_left_span">Expertise</span>
              <h2 className="expertise_left_h2">Our banking expertise</h2>
              <p className="expertise_left_p">
                NanoSoft is a joint venture between Linethemes and Themeforest.
                Our experts have deep knowledge about the complexities of the
                banking industry, and know how to deploy digital technology to
                transform banks’ operations.
              </p>
              <div className="expertise_left_numbers">
                <div className="expertise_left_numbers_box">
                  <span className="number">
                    500<span className="number_right"> +</span>
                  </span>

                  <span className="number_text">
                    Financial services firms worldwide
                  </span>
                </div>
                <div className="expertise_left_numbers_box">
                  <span className="number">
                    500<span className="number_right"> +</span>
                  </span>

                  <span className="number_text">
                    Financial services firms worldwide
                  </span>
                </div>
              </div>
            </div>
            <div className="expertise_right">
              <div className="right_image">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="industry_product_section">
          <div className="industry_product_top">
            <h3>Find out how companies succeed with NanoSoft</h3>
            <button className="btn">FInd out more</button>
          </div>
          <div className="industry_product_bottom">
            <div className="industry_products">
              <div className="industry_product">
                <div className="img">
                  <img src={bannerImg} alt="" />
                  <div className="overlay">
                    <span className="small_text">Healthcare Industry</span>
                    {/* <h4>Cloud migration saves money for health insurer</h4> */}
                  </div>
                </div>
                <div className="industry_product_text">
                  <span className="small_text">Healthcare Industry</span>
                  <h4>Cloud migration saves money for health insurer</h4>
                  <p>Overview As a global player in the telecoms industry</p>
                  <button>Learn more</button>
                </div>
              </div>
              <div className="industry_product">
                <div className="img">
                  <img src={bannerImg} alt="" />
                  <div className="overlay">
                    <span className="small_text">Healthcare Industry</span>
                    {/* <h4>Cloud migration saves money for health insurer</h4> */}
                  </div>
                </div>
                <div className="industry_product_text">
                  <span className="small_text">Healthcare Industry</span>
                  <h4>Cloud migration saves money for health insurer</h4>
                  <p>Overview As a global player in the telecoms industry</p>
                  <button>Learn more</button>
                </div>
              </div>
              <div className="industry_product">
                <div className="img">
                  <img src={bannerImg} alt="" />
                  <div className="overlay">
                    <span className="small_text">Healthcare Industry</span>
                    {/* <h4>Cloud migration saves money for health insurer</h4> */}
                  </div>
                </div>
                <div className="industry_product_text">
                  <span className="small_text">Healthcare Industry</span>
                  <h4>Cloud migration saves money for health insurer</h4>
                  <p>Overview As a global player in the telecoms industry</p>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
