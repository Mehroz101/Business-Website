import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faHeart,
  faShieldAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
// import "./whyChooseUs.css"; // Import the CSS file for styles
import customerService from "../../assets/customer-service.png";
import customer from "../../assets/customer.png";
import shield from "../../assets/shield.png";
import reliability from "../../assets/reliability.png";
const WhyChooseUs_Section = () => {
  const whyChooseData = [
    {
      title: "Expertise",
      description: "We have a team of highly skilled professionals.",
      icon: <img style={styles.iconImg} src={customerService} />,
    },
    {
      title: "Trust",
      description: "Our clients trust us for our integrity and reliability.",
      icon: <img style={styles.iconImg} src={customer} />,
    },
    {
      title: "Security",
      description:
        "We ensure the highest level of security in all our services.",
      icon: <img style={styles.iconImg} src={shield} />,
    },
    {
      title: "Customer Support",
      description:
        "We provide 24/7 customer support to help with all your needs.",
      icon: <img style={styles.iconImg} src={reliability} />,
    },
    {
      title: "Security",
      description:
        "We ensure the highest level of security in all our services.",
      icon: <img style={styles.iconImg} src={shield} />,
    },
    {
      title: "Customer Support",
      description:
        "We provide 24/7 customer support to help with all your needs.",
      icon: <img style={styles.iconImg} src={reliability} />,
    },
  ];
  return (
    <div style={styles.section}>
      <div style={styles.topSection}>
        <div style={styles.topLeft}>
          <h2 style={styles.heading}>Why Choose Us?</h2>
        </div>
        <div style={styles.topRight}>
          <p style={styles.text}>
            We are committed to providing the best solutions for your business.
            Our expertise, support, and customer-centric approach make us the
            perfect partner for your success.
          </p>
        </div>
      </div>

      <div style={styles.cardsContainer}>
        {whyChooseData.map((card, index) => (
          <div key={index} style={styles.card} className="hover_card">
            <div className="icon" style={styles.cardIcon}>
              {card.icon}
            </div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs_Section;

// Data for the "Why Choose Us" cards

// Styles for the section and the cards
const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "rgb(243 255 255)", // Light background for better contrast
    textAlign: "center",
    paddingBottom: "300px",
  },
  topSection: {
    display: "flex",
    marginBottom: "40px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  topLeft: {
    minWidth: "400px",
  },
  topRight: {
    textAlign: "left",
    maxWidth: "800px",
    minWidth: "400px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
  },
  text: {
    fontSize: "1.2rem",
    color: "#666",
    lineHeight: "1.6",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: " 0 8px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "280px",
    maxWidth: "350px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardIcon: {
    fontSize: "3rem",
    color: "#00bcd4",
    marginBottom: "20px",
  },
  iconImg: {
    width: "80px",
    height: "80px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    gap: "20px",
    maxWidth: "1200px",
    flexWrap: "wrap",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#333",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#777",
    lineHeight: "1.5",
  },
};
