import React from "react";
import companyImg from "../../assets/bannerImg.jpg";

const AboutUsTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: { companyImg }, // Replace with actual team member image
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      image: { companyImg }, // Replace with actual team member image
    },
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image: { companyImg }, // Replace with actual team member image
    },
    {
      name: "Bob Williams",
      role: "Marketing Director",
      image: { companyImg }, // Replace with actual team member image
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Meet Our Team</h2>
      <div style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.teamCard}>
            <img src={companyImg} alt={member.name} style={styles.teamImage} />
            <h3 style={styles.teamName}>{member.name}</h3>
            <p style={styles.teamRole}>{member.role}</p>
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
  teamGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "20px",
  },
  teamCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  teamImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  teamName: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  teamRole: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
  },
};

export default AboutUsTeam;
