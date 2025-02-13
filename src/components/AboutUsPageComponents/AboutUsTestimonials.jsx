import React from "react";
import { Carousel } from "primereact/carousel"; // Make sure PrimeReact is installed
import companyImg from "../../assets/bannerImg.jpg"; // Replace with a default image if needed

const AboutUsTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Example Corp",
      feedback:
        "This company has completely transformed our business operations. Highly recommend their services!",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      name: "Jane Smith",
      position: "Marketing Director, ABC Ltd",
      feedback:
        "A fantastic team to work with! Their professionalism and expertise are unmatched.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      name: "Michael Johnson",
      position: "Product Manager, XYZ Co",
      feedback:
        "Amazing customer service and a truly valuable partnership. We've seen great results from their solutions.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      name: "Emily Davis",
      position: "CTO, Tech Innovations",
      feedback:
        "Highly skilled professionals who deliver top-notch solutions. Would love to work with them again!",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      name: "Robert Brown",
      position: "COO, NextGen Solutions",
      feedback:
        "Their innovative approach has really set them apart in the market.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
  ];

  // Responsive options for the carousel:
  // - On screens wider than 1024px, display 3 items.
  // - On screens between 768px and 1024px, display 2 items.
  // - On screens smaller than 768px, display 1 item.
  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
    { breakpoint: "768px", numVisible: 2, numScroll: 1 },
    { breakpoint: "480px", numVisible: 1, numScroll: 1 },
  ];

  // Template for rendering each testimonial in the Carousel
  const testimonialTemplate = (testimonial) => {
    return (
      <div className="testimonial-card">
        <div className="avatar-container ">
          <img
            src={testimonial.avatar || companyImg}
            alt={`${testimonial.name}'s avatar`}
            className="avatar"
          />
        </div>
        <p className="feedback">"{testimonial.feedback}"</p>
        <h4 className="name">{testimonial.name}</h4>
        <p className="position">{testimonial.position}</p>
      </div>
    );
  };

  return (
    <section className="about-testimonials-container">
      <h2 className="about-testimonials-heading">What Our Clients Say</h2>
      <div className="carousel-container">
        <Carousel
          value={testimonials}
          itemTemplate={testimonialTemplate}
          numVisible={3} // Default visible count on big screens
          numScroll={1}
          responsiveOptions={responsiveOptions}
          autoplayInterval={4000}
          circular
        />
      </div>
    </section>
  );
};

export default AboutUsTestimonials;
