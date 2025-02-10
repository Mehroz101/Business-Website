import React, { useState } from "react";
import bannerImg from "../assets/bannerImg.jpg";
import "../styles/AllProjects.css";

const projects = [
  {
    id: "1",
    title: "Project Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "A powerful tool to plan, track, and manage projects efficiently.",
  },
  {
    id: "2",
    title: "Inventory Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description: "Track stock levels, sales, and deliveries in real-time.",
  },
  {
    id: "3",
    title: "HR & Payroll System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "Automate salary processing, tax calculations, and HR operations.",
  },
  {
    id: "4",
    title: "E-commerce Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "Manage orders, payments, and customer interactions seamlessly.",
  },
  {
    id: "5",
    title: "Project Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "A powerful tool to plan, track, and manage projects efficiently.",
  },
  {
    id: "6",
    title: "Inventory Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description: "Track stock levels, sales, and deliveries in real-time.",
  },
  {
    id: "7",
    title: "HR & Payroll System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "Automate salary processing, tax calculations, and HR operations.",
  },
  {
    id: "8",
    title: "E-commerce Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "Manage orders, payments, and customer interactions seamlessly.",
  },
  {
    id: "9",
    title: "Project Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "A powerful tool to plan, track, and manage projects efficiently.",
  },
  {
    id: "10",
    title: "Inventory Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description: "Track stock levels, sales, and deliveries in real-time.",
  },
  {
    id: "11",
    title: "HR & Payroll System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "Automate salary processing, tax calculations, and HR operations.",
  },
  {
    id: "12",
    title: "E-commerce Management System",
    img: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg",
    description:
      "Manage orders, payments, and customer interactions seamlessly.",
  },
];

const AllProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Banner Section */}
      <div className="allproject_view">
        <div
          className="project_banner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner-overlay">
            <h1>All Projects</h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="industry_product" key={project.id}>
            <div className="img">
              <img src={project.img} alt="" />
              <div className="overlay">
                <span className="small_text">{project.title}</span>
                {/* <h4>Cloud migration saves money for health insurer</h4> */}
              </div>
            </div>
            <div className="industry_product_text">
              <span className="small_text">{project.title}</span>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <button>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProjects;
