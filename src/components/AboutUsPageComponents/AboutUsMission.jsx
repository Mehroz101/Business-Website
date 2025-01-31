import React from "react";
import companyImg from "../../assets/bannerImg.jpg";

const AboutUsMission = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.paragraph}>
          Our mission is to revolutionize the industry by offering cutting-edge
          products and services that are not only innovative but also socially
          responsible. We aim to exceed customer expectations by fostering a
          culture of excellence and continuous improvement.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={companyImg} // Replace with a relevant image for your mission
          alt="Mission Image"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack text and image vertically
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "30px 0",
    textAlign: "center",
  },
  textContainer: {
    marginBottom: "30px", // Space between text and image
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#555",
    lineHeight: "1.6",
  },
  imageContainer: {
    maxWidth: "80%", // Make sure image doesn't stretch too wide
    marginTop: "30px", // Give some space above the image
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
};

export default AboutUsMission;
