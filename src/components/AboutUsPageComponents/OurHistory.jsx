import React from "react";
import choose from "../../assets/choosing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faDice,
  faPeopleGroup,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
const OurHistory = () => {
  return (
    <>
      <div className="ourhistory_section">
        <h1>Our History </h1>
        <div className="history_timelines">
          <div className="timeline">
            <h2>1988 - 2000</h2>
            <p>
              NanoSoft begins life as the networking division of ThemeForest.
              ThemeForest is a software company that was formed in November 1988
              following a management buyout of LineThemes.
            </p>
          </div>
          <div className="timeline">
            <h2>2000 - 2010</h2>
            <p>
              NanoSoft launches as an independent business. NanoSoft moves into
              our New York offices. Those offices became home for the next 20
              years as the business continued to grow from strength to strength.
            </p>
          </div>
          <div className="timeline">
            <h2>2010 - 2020</h2>
            <p>
              NanoSoft becomes a leading provider of IT services in the US. The
              company expands its operations to include a global presence.
            </p>
          </div>
        </div>
        <div className="our_numbers">
          <h2>Outreach by the Numbers</h2>
          <div className="number_boxs">
            <div className="number_box">
              <FontAwesomeIcon icon={faSmile} className="icon" />
              <h2>1000+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="number_box">
              <FontAwesomeIcon icon={faCircleCheck} className="icon" />
              <h2>1200+</h2>
              <p>Completed Projects</p>
            </div>
            <div className="number_box">
              <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
              <h2>50+</h2>
              <p>Team Members</p>
            </div>
            <div className="number_box">
              <FontAwesomeIcon icon={faDice} className="icon" />
              <h2>3000+</h2>
              <p>Total Build Products</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurHistory;
