import React, { useRef } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "../../styles/HomePage.css"; // Ensure this file includes the styles below
import { useNavigate } from "react-router-dom";

const Our_Projects = ({ projects }) => {
  // Create a ref for the Carousel component
  const carouselRef = useRef(null);

  // Sample project data
  // const projects = [
  //   {
  //     name: "Project One",
  //     image:
  //       "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
  //   },
  //   {
  //     name: "Project Two",
  //     image:
  //       "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
  //   },
  //   {
  //     name: "Project Three",
  //     image:
  //       "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
  //   },
  //   {
  //     name: "Project Four",
  //     image:
  //       "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
  //   },
  //   {
  //     name: "Project Five",
  //     image:
  //       "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
  //   },
  // ];
  console.log(projects?.project);
  // Responsive options: 3 on large, 2 on medium, 1 on small screens.
  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
    { breakpoint: "768px", numVisible: 2, numScroll: 1 },
    { breakpoint: "480px", numVisible: 1, numScroll: 1 },
  ];
  const navigate = useNavigate();
  // Template for each project card
  const projectTemplate = (project) => (
    <div
      className="project-card"
      onClick={() => {
        navigate("/projectview/" + project.id);
      }}
    >
      <img
        src={project.banner_img}
        alt={project.title}
        className="project-image"
      />
      <div className="project-overlay">
        <span className="project-name">{project.title}</span>
        <span className="project-arrow">
          <i className="pi pi-arrow-right"></i>
        </span>
      </div>
    </div>
  );

  // Event handlers for custom navigation using goToPrev and goToNext
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.goToPrev(); // Use goToPrev() method
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.goToNext(); // Use goToNext() method
    }
  };

  return (
    <section className="our-projects-section">
      <div className="projects-header">
        <div className="heading-container">
          <p className="subheading">{projects.description}</p>
          <h2 className="main-heading">{projects.title}</h2>
        </div>
        {/* <div className="carousel-controls">
          <Button
            icon="pi pi-chevron-left"
            className="arrow-btn"
            onClick={handlePrev}
          />
          <Button
            icon="pi pi-chevron-right"
            className="arrow-btn"
            onClick={handleNext}
          />
        </div> */}
      </div>
      <div className="projects-carousel">
        {projects?.project && (
          <Carousel
            ref={carouselRef}
            value={projects?.project}
            itemTemplate={projectTemplate}
            numVisible={3} // Default for large screens
            numScroll={1}
            responsiveOptions={responsiveOptions}
            circular
            autoplayInterval={5000}
          />
        )}
      </div>
    </section>
  );
};

export default Our_Projects;
