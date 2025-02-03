import React from "react";
import companyImg from "../../assets/bannerImg.jpg";
import "../../styles/AboutUsPage.css"; // Import the CSS file

const AboutUsTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: companyImg, // Replace with actual team member image
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      image: companyImg, // Replace with actual team member image
    },
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image: companyImg, // Replace with actual team member image
    },
    {
      name: "Bob Williams",
      role: "Marketing Director",
      image: companyImg, // Replace with actual team member image
    },
  ];

  return (
    <section className="about-us-team-container">
      <h2 className="about-us-team-heading">Meet Our Team</h2>
      <div className="about-us-team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="about-us-team-card">
            <img
              src={member.image}
              alt={member.name}
              className="about-us-team-image"
            />
            <h3 className="about-us-team-name">{member.name}</h3>
            <p className="about-us-team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsTeam;
