import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faDice,
  faPeopleGroup,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

// 📌 Timeline Data
const timelineData = [
  {
    year: "1988 - 2000",
    description:
      "NanoSoft begins life as the networking division of ThemeForest. ThemeForest is a software company that was formed in November 1988 following a management buyout of LineThemes.",
  },
  {
    year: "2000 - 2010",
    description:
      "NanoSoft launches as an independent business. NanoSoft moves into our New York offices. Those offices became home for the next 20 years as the business continued to grow from strength to strength.",
  },
  {
    year: "2010 - 2020",
    description:
      "NanoSoft becomes a leading provider of IT services in the US. The company expands its operations to include a global presence.",
  },
];

// 📌 Statistics Data
const statsData = [
  { icon: faSmile, number: "1000+", text: "Happy Clients" },
  { icon: faCircleCheck, number: "1200+", text: "Completed Projects" },
  { icon: faPeopleGroup, number: "50+", text: "Team Members" },
  { icon: faDice, number: "3000+", text: "Total Build Products" },
];

const OurHistory = () => {
  return (
    <div className="ourhistory_section">
      <h1>Our History</h1>

      {/* Timeline Section */}
      <div className="history_timelines">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline">
            <h2>{item.year}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="our_numbers">
        <h2>Outreach by the Numbers</h2>
        <div className="number_boxs">
          {statsData.map((stat, index) => (
            <div key={index} className="number_box box_container">
              <FontAwesomeIcon icon={stat.icon} className="icon" />
              <h2 className="box_title">{stat.number}</h2>
              <p className="box_description">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
