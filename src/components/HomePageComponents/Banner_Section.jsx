import React from "react";
import bannerImg from "../../assets/bannerImg.jpg"; // Import the image

const Banner_Section = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bannerImg})` }}>
      <div style={styles.overlay}>
        <h1 style={styles.text}>
          Empower Your Business with Expert Consulting
        </h1>
        <p style={styles.subtext}>
          Unlock new opportunities and scale your business with our professional
          guidance.
        </p>
        <button style={styles.ctaButton}>Get Started</button>
      </div>
    </div>
  );
};

export default Banner_Section;

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "90vh",
    // backgroundImage: "url(../../assets/bannerImg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for readability
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  text: {
    color: "#fff",
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "0 10px",
    maxWidth: "660px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Added text shadow for readability
  },
  subtext: {
    color: "#ddd",
    fontSize: "1.2rem",
    maxWidth: "600px",
    marginTop: "10px",
    lineHeight: "1.6",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)", // Added text shadow for readability
  },
  ctaButton: {
    marginTop: "20px",
    padding: "12px 30px",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#fff",
    backgroundColor: "#00bcd4",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
};

// Hover effect for CTA button
styles.ctaButton[":hover"] = {
  backgroundColor: "#008c99", // Darker shade on hover
  transform: "scale(1.1)", // Slight scale effect
};
