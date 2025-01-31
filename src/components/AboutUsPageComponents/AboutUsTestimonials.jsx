import React from "react";
import companyImg from "../../assets/bannerImg.jpg";

const AboutUsTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Example Corp",
      feedback:
        "This company has completely transformed our business operations. Highly recommend their services!",
      avatar: "https://via.placeholder.com/100", // Replace with actual avatar image
    },
    {
      name: "Jane Smith",
      position: "Marketing Director, ABC Ltd",
      feedback:
        "A fantastic team to work with! Their professionalism and expertise are unmatched.",
      avatar: "https://via.placeholder.com/100", // Replace with actual avatar image
    },
    {
      name: "Michael Johnson",
      position: "Product Manager, XYZ Co",
      feedback:
        "Amazing customer service and a truly valuable partnership. We've seen great results from their solutions.",
      avatar: "https://via.placeholder.com/100", // Replace with actual avatar image
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>What Our Clients Say</h2>
      <div style={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.testimonialCard}>
            <div style={styles.avatarContainer}>
              <img
                src={companyImg}
                alt={`${testimonial.name}'s avatar`}
                style={styles.avatar}
              />
            </div>
            <p style={styles.feedback}>"{testimonial.feedback}"</p>
            <h4 style={styles.name}>{testimonial.name}</h4>
            <p style={styles.position}>{testimonial.position}</p>
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
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "30px 0",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    textTransform: "uppercase",
  },
  testimonialsGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    position: "relative",
  },
  avatarContainer: {
    marginBottom: "20px",
  },
  avatar: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    objectFit: "cover",
  },
  feedback: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#555",
    marginBottom: "15px",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
  },
  position: {
    fontSize: "1rem",
    color: "#777",
  },
};

export default AboutUsTestimonials;
