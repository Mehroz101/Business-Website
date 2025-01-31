import {
  faArrowRight,
  faBriefcase,
  faBullhorn,
  faLaptopCode,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SEO from "../../assets/seo.png";
import web from "../../assets/computer.png";
import consultation from "../../assets/consultation.png";
import socialmedia from "../../assets/socialmedia.png";
const Services_Section = () => {
  const serviceData = [
    {
      title: "Consulting",
      description:
        "Expert business consulting to take your company to the next level.",
      icon: <img style={styles.iconImg} src={consultation} alt="" />,
    },
    {
      title: "Web Development",
      description:
        "Cutting-edge web development solutions for a seamless online experience.",
      icon: <img style={styles.iconImg} src={web} alt="" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your brand.",
      icon: <img style={styles.iconImg} src={socialmedia} alt="" />,
    },
    {
      title: "SEO Optimization",
      description: "Advanced SEO techniques to boost your website's ranking.",
      icon: <img style={styles.iconImg} src={SEO} alt="" />,
    },
  ];

  return (
    <div style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Our Services</h2>
        <p style={styles.subheading}>
          We provide top-notch services to help you achieve your business goals
          with excellence and efficiency.
        </p>
      </div>

      <div style={styles.servicesContainer}>
        {serviceData.map((service, index) => (
          <div key={index} className="hover_card" style={styles.serviceBox}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <p style={styles.serviceDescription}>{service.description}</p>
            {/* <button style={styles.arrowBtn}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services_Section;

// Service data with title, description, and icon

// Styles for the section and the service boxes
const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f0f5f5", // Light background for better contrast
    textAlign: "center",
  },
  header: {
    marginBottom: "40px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  servicesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },

  serviceBox: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "350px",
    minWidth: "280px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  icon: {
    marginBottom: "20px",
    transition: "color 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconImg: {
    width: "80px",
    height: "80px",
  },
  serviceTitle: {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#333",
    marginBottom: "10px",
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  arrowBtn: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "#00bcd4",
    transition: "color 0.3s, transform 0.3s ease",
  },
  arrowIcon: {
    color: "#00bcd4",
    transition: "transform 0.3s ease",
  },
};

// Add hover effects
styles.serviceBox[":hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
};

styles.icon[":hover"] = {
  color: "#008c99", // Darker shade on hover
};

styles.arrowBtn[":hover"] = {
  transform: "translateX(5px)",
};
