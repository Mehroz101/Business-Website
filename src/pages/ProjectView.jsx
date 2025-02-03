import React from "react";
import bannerImg from "../assets/bannerImg.jpg";
import "../styles/ProjectView.css";
const ProjectView = () => {
  return (
    <>
      <div className="project_view" style={{ paddingTop: "70px" }}>
        <div
          className="project_banner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner-overlay">
            <h1>Project View</h1>
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
          </div>

          <div className="desciption_right">
            <h1>Project Details</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas, quae quia, quod quibusdam quidem quia quos quas
              quibusdam quidem quia quos quas quibusdam quidem quia quos quas
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
