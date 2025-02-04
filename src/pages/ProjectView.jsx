import React from "react";
import bannerImg from "../assets/bannerImg.jpg";
import "../styles/ProjectView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const ProjectView = () => {
  return (
    <>
      <div className="project_view" style={{ paddingTop: "70px" }}>
        <div
          className="project_banner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner-overlay">
            <h1>EDU Pharmacy</h1>
          </div>
        </div>
        <div className="project_img_section">
          <img
            src="https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg"
            alt="Project"
          />
        </div>
        <div className="project_desciption">
          <div className="desciption_left">
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
            </p>
            <h3>Features</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet sit amet. Lorem .</li>
              <li>Lorem ipsumt amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum sit amet.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            </p>
          </div>

          <div className="desciption_right">
            <h1>Project Details</h1>
            <div className="description_right_box">
              <h3>Services</h3>
              <p>Complete setup, support and maintenance, updates</p>
            </div>
            <div className="description_right_box">
              <h3>Clients</h3>
              <p>23</p>
            </div>
            <div className="description_right_box">
              <h3>Collaborators</h3>
              <p>2</p>
            </div>
            <div className="description_right_social">
              <h3>Share</h3>
              <div className="description_right_social_box">
                <div className="social_icon">
                  <Facebook />
                </div>
                <div className="social_icon">
                  <Twitter />
                </div>
                <div className="social_icon">
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
