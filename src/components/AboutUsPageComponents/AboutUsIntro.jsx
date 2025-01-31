import React from "react";
import companyImg from "../../assets/bannerImg.jpg";
const AboutUsIntro = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to Our Company</h1>
        <p style={styles.paragraph}>
          We are a forward-thinking company dedicated to providing innovative
          solutions that empower our clients and create positive change. With a
          rich history and a passion for excellence, we strive to deliver
          exceptional products and services that meet the evolving needs of
          today’s world.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={companyImg} // Replace with your company image
          alt="Company Image"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "30px 0",
  },
  textContainer: {
    flex: 1,
    maxWidth: "50%",
    marginRight: "30px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#555",
    lineHeight: "1.6",
  },
  imageContainer: {
    flex: 1,
    maxWidth: "45%",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
};

export default AboutUsIntro;
