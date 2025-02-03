import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomTextInput from "../FormComponents/CustomTextInput";
import bgTexture from "../../assets/bgTexture.jpg";
import { Carousel } from "primereact/carousel";
import "../../styles/HomePage.css"; // Make sure this file is in your project

const Quote_Section = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const method = useForm();

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  // Array of reviews to be displayed in the carousel
  const reviews = [
    {
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      name: "Mehroz Farooq",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis repellat, quidem, quia tempore, sequi voluptatibus doloremque quos accusantium quas.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      name: "Mehroz Farooq",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis repellat, quidem, quia tempore, sequi voluptatibus doloremque quos accusantium quas.",
    },
    // Add more reviews as needed
  ];

  // Responsive options for the carousel
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // Template for each review item in the carousel
  const reviewTemplate = (review) => {
    return (
      <div className="review-box">
        <div className="review-left">
          <img src={review.img} alt={review.name} className="review-img" />
          <span className="review-person">{review.name}</span>
        </div>
        <div className="review-right">
          <p className="review-text">{review.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="quote-section"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className="card">
        <div className="left-side">
          <div className="left-top">
            <span className="subtitle">How it works</span>
            <p className="heading">Get a Custom Quote</p>
            <p className="text">
              Fill in the form on the right to get a custom quote for your
              project. We will get back to you as soon as possible.
            </p>
          </div>
          <div className="left-bottom">
            <div className="left-bottom-item">
              <div className="left-bottom-icon-box">
                <FontAwesomeIcon icon={faPhone} className="left-bottom-icon" />
              </div>
              <p className="left-bottom-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                sapiente alias quibusdam asperiores dolor quidem ducimus minima,
                accusantium numquam inventore.
              </p>
            </div>
            <div className="left-bottom-item">
              <div className="left-bottom-icon-box">
                <FontAwesomeIcon icon={faPhone} className="left-bottom-icon" />
              </div>
              <p className="left-bottom-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                sapiente alias quibusdam asperiores dolor quidem ducimus minima,
                accusantium numquam inventore.
              </p>
            </div>
            <div className="left-bottom-item">
              <div className="left-bottom-icon-box">
                <FontAwesomeIcon icon={faPhone} className="left-bottom-icon" />
              </div>
              <p className="left-bottom-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                sapiente alias quibusdam asperiores dolor quidem ducimus minima,
                accusantium numquam inventore.
              </p>
            </div>
          </div>
        </div>

        <div className="right-side">
          <form onSubmit={handleSubmit} className="form">
            <CustomTextInput
              control={method.control}
              name="name"
              placeholder="Enter your name"
              className="input"
              rules={{ required: "Name is required" }}
            />
            <CustomTextInput
              control={method.control}
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              className="input"
              rules={{ required: "Email is required" }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="textarea"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Get Quote
            </button>
          </form>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="reviews-carousel-wrapper">
        <Carousel
          value={reviews}
          numVisible={2}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          circular
          autoplayInterval={3000}
          itemTemplate={reviewTemplate}
          className="reviews-carousel"
        />
      </div>
    </div>
  );
};

export default Quote_Section;
