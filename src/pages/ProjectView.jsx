import React, { useEffect, useState } from "react";
import bannerImg from "../assets/bannerImg.jpg";
import "../styles/ProjectView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useParams } from "react-router-dom";

const ProjectView = () => {
  const [projectdata, setProjectData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5173/websitedata.json`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const websitedata = await response.json();
          const projectData = websitedata?.projects?.project?.filter(
            (project) => {
              return project.id === id;
            }
          );
          if (projectData) {
            setProjectData(projectData[0]);
            console.log(projectData[0]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [id]);
  return (
    <>
      <div className="project_view" style={{ paddingTop: "70px" }}>
        <div
          className="project_banner"
          style={{ backgroundImage: `url(${projectdata.banner_img})` }}
        >
          <div className="banner-overlay">
            <h1>{projectdata.title}</h1>
          </div>
        </div>
        <div className="project_img_section">
          <img src={projectdata.main_img} alt="Project" />
        </div>
        <div className="project_desciption">
          <div className="desciption_left">
            <h1>Project Name</h1>
            <p>{projectdata.paragraph}</p>
            <h3>Features</h3>
            <ul>
              {projectdata?.features?.map((feature, index) => {
                return <li key={index}>{feature.title}</li>;
              })}
            </ul>
          </div>

          <div className="desciption_right">
            <h1>Project Details</h1>
            <div className="description_right_box">
              <h3>Services</h3>
              <p>{projectdata.services}</p>
            </div>
            <div className="description_right_box">
              <h3>Clients</h3>
              <p>{projectdata.clients}</p>
            </div>
            <div className="description_right_box">
              <h3>Collaborators</h3>
              <p>{projectdata.Collaborators}</p>
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
