import React from "react";

const AboutUsServices = () => {
  const services = [
    {
      icon: "🚀", // Replace with FontAwesome icon if needed
      title: "Service 1",
      description:
        "We provide top-notch services to help you achieve your goals.",
    },
    {
      icon: "💻",
      title: "Service 2",
      description: "Our tech solutions are tailored to meet your unique needs.",
    },
    {
      icon: "🔒",
      title: "Service 3",
      description:
        "We ensure the highest level of security for all our services.",
    },
    {
      icon: "📊",
      title: "Service 4",
      description: "Data-driven insights to help you make informed decisions.",
    },
  ];

  return (
    <section className="about-services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsServices;
