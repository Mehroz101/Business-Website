import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomTextInput from "../FormComponents/CustomTextInput";
import bgTexture from "../../assets/bgTexture.jpg";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={{ ...styles.section, backgroundImage: `url(${bgTexture})` }}>
      <div style={styles.card}>
        <div style={styles.leftSide}>
          <div style={styles.leftTop}>
            <span style={styles.subtitle}>How it works</span>
            <p style={styles.heading}>Get a Custom Quote</p>
            <p style={styles.text}>
              Fill in the form on the right to get a custom quote for your
              project. We will get back to you as soon as possible.
            </p>
          </div>
          <div style={styles.leftBottom}>
            <div style={styles.leftBottomItem}>
              <div style={styles.leftBottomiconBox}>
                <FontAwesomeIcon icon={faPhone} style={styles.leftBottomicon} />
              </div>
              <p style={styles.leftBottomText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                sapiente alias quibusdam asperiores dolor quidem ducimus minima,
                accusantium numquam inventore.
              </p>
            </div>
            <div style={styles.leftBottomItem}>
              <div style={styles.leftBottomiconBox}>
                <FontAwesomeIcon icon={faPhone} style={styles.leftBottomicon} />
              </div>
              <p style={styles.leftBottomText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                sapiente alias quibusdam asperiores dolor quidem ducimus minima,
                accusantium numquam inventore.
              </p>
            </div>
            <div style={styles.leftBottomItem}>
              <div style={styles.leftBottomiconBox}>
                <FontAwesomeIcon icon={faPhone} style={styles.leftBottomicon} />
              </div>
              <p style={styles.leftBottomText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                sapiente alias quibusdam asperiores dolor quidem ducimus minima,
                accusantium numquam inventore.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.rightSide}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <CustomTextInput
              control={method.control}
              name="name"
              placeholder="Enter your name"
              style={styles.input}
              rules={{ required: "Name is required" }}
            />
            <CustomTextInput
              control={method.control}
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              style={styles.input}
              rules={{ required: "Email is required" }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.submitButton}>
              Get Quote
            </button>
          </form>
        </div>
      </div>
      <div style={styles.reviews}>
        <div style={styles.reviewBox}>
          <div style={styles.reviewLeft}>
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              style={styles.reviewImg}
            />
            <span style={styles.reviewPerson}>Mehroz Farooq</span>
          </div>
          <div style={styles.reviewRight}>
            <p style={styles.reviewText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              officiis repellat, quidem, quia tempore, sequi voluptatibus
              doloremque quos accusantium quas.
            </p>
          </div>
        </div>
        <div style={styles.reviewBox}>
          <div style={styles.reviewLeft}>
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              style={styles.reviewImg}
            />
            <span style={styles.reviewPerson}>Mehroz Farooq</span>
          </div>
          <div style={styles.reviewRight}>
            <p style={styles.reviewText} className="reviewText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              officiis repellat, quidem, quia tempore, sequi voluptatibus
              doloremque quos accusantium quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote_Section;

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
  },
  card: {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    width: "80%",
    maxWidth: "1000px",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "-250px", // Replaces absolute positioning
  },

  leftSide: {
    flex: 1,
    padding: "100px 40px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "300px",
  },
  leftTop: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#00bcd4",
  },
  heading: {
    fontFamily: "'Anton', serif",
    margin: "0",
    fontWeight: "900",
    fontSize: "2rem",
    color: "#333",
  },
  text: {
    fontSize: "1rem",
    color: "#666",
    textAlign: "left",
    lineHeight: "1.6",
  },
  leftBottom: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  leftBottomItem: {
    display: "flex",
    gap: "15px",
  },
  leftBottomiconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "40px",
    backgroundColor: "#00bcd4",
    borderRadius: "4px",
  },
  leftBottomicon: {
    color: "#fff",
  },
  leftBottomText: {
    fontSize: "0.95rem",
    color: "#666",
    margin: "0",
    lineHeight: "1.5",
  },
  rightSide: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "300px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#00bcd4",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%",
    resize: "vertical",
    height: "150px",
  },
  submitButton: {
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    backgroundColor: "#00bcd4",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    alignSelf: "flex-end",
  },
  submitButtonHover: {
    backgroundColor: "#008c99",
  },
  reviews: {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    maxWidth: "1000px",
    padding: "10px",
    flexWrap: "wrap",
    position: "relative", // Change from absolute to relative
    marginTop: "50px", // Adds spacing below the form
  },
  reviewBox: {
    borderRadius: "4px",
    width: "450px",
    resize: "vertical",
    minHeight: "150px",
    display: "flex",
    gap: "10px",
  },
  reviewLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  reviewImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  reviewPerson: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#333",
  },
  reviewRight: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  reviewText: {
    fontSize: "0.9rem",
    color: "#666",
    margin: "0",
    lineHeight: "1.5",
  },

  // Add media queries for better small screen handling
  "@media (max-width: 768px)": {
    card: {
      flexDirection: "column",
      marginTop: "0", // Remove negative margin on small screens
    },
    reviews: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px", // Adjust spacing
    },
  },
};
