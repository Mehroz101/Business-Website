import React from "react";

const AboutUsCoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions.",
    },
    {
      title: "Innovation",
      description: "We embrace change and continuously improve to stay ahead.",
    },
    {
      title: "Customer-Centric",
      description: "Our customers' needs are at the core of everything we do.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collective success.",
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project and interaction.",
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Core Values</h2>
      <div style={styles.valuesGrid}>
        {values.map((value, index) => (
          <div key={index} style={styles.valueCard}>
            <h3 style={styles.cardTitle}>{value.title}</h3>
            <p style={styles.cardDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "30px 0",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    textTransform: "uppercase",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Responsive grid layout
    gap: "20px",
  },
  valueCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  valueCardHovered: {
    transform: "scale(1.05)", // Hover effect to make the card pop
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default AboutUsCoreValues;
