import React from "react";

const AboutUsServices = () => {
  const services = [
    {
      icon: "🚀", // Replace with a FontAwesome icon if you prefer
      title: "Service 1",
      description:
        "We provide top-notch services to help you achieve your goals.",
    },
    {
      icon: "💻", // Replace with a FontAwesome icon if you prefer
      title: "Service 2",
      description: "Our tech solutions are tailored to meet your unique needs.",
    },
    {
      icon: "🔒", // Replace with a FontAwesome icon if you prefer
      title: "Service 3",
      description:
        "We ensure the highest level of security for all our services.",
    },
    {
      icon: "📊", // Replace with a FontAwesome icon if you prefer
      title: "Service 4",
      description: "Data-driven insights to help you make informed decisions.",
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Services</h2>
      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} style={styles.serviceCard}>
            <div style={styles.iconContainer}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <p style={styles.serviceDescription}>{service.description}</p>
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
  servicesGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  serviceCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    textAlign: "center",
  },
  iconContainer: {
    fontSize: "3rem", // Size of the icon
    marginBottom: "20px",
  },
  serviceTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default AboutUsServices;
