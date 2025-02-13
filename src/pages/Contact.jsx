import React from "react";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import "../styles/ContactUsPage.css";
import { Mail, MapPin, Phone } from "lucide-react";
const Contact = () => {
  const method = useForm();
  return (
    <>
      <div className="contactus_page">
        <div className="contactus_container">
          <div className="contactus_left">
            <div className="left_top">
              <span className="contactus_span">Have a question?</span>
              <h2 className="contactus_h2">Write a Message</h2>
            </div>
            <div className="left_middle">
              <div className="input_box">
                <CustomTextInput
                  control={method.control}
                  placeholder="Enter your name"
                  name="name"
                />
                <CustomTextInput
                  control={method.control}
                  placeholder="Enter your subject"
                  name="subject"
                />
              </div>
              <div className="input_box">
                <CustomTextInput
                  control={method.control}
                  placeholder="Enter your email"
                  name="email"
                />
                <CustomTextInput
                  control={method.control}
                  placeholder="Enter your phone"
                  name="phone"
                />
              </div>
              <textarea
                name="textarea"
                id=""
                cols={30}
                rows={10}
                className="contactus_textarea"
              ></textarea>
              <button className="contactus_btn btn">Send Message</button>
            </div>
          </div>
          <div className="contactus_right">
            <div className="right_top">
              <span className="contactus_span">Contact With Us</span>
              <h2 className="contactus_h2">Let’s work together</h2>
              <p className="contactus_p">
                Providing legal advice, contract drafting, compliance
                assistance, intellectual property protection, and other legal
                support for businesses.
              </p>
            </div>
            <div className="right_bottom">
              <div className="right_bottom_box">
                <div className="right_bottom_box_left">
                  <Phone size={30} />
                </div>
                <div className="right_bottom_box_right">
                  <span>Have Any Question?</span>
                  <p>+ 070 4531 9507</p>
                </div>
              </div>
              <div className="right_bottom_box">
                <div className="right_bottom_box_left">
                  <Mail size={30} />
                </div>
                <div className="right_bottom_box_right">
                  <span>Send Email</span>
                  <p>XHnYK@example.com</p>
                </div>
              </div>
              <div className="right_bottom_box">
                <div className="right_bottom_box_left">
                  <MapPin size={30} />
                </div>
                <div className="right_bottom_box_right">
                  <span>Want to Visit?</span>
                  <p>Khawar Center, SP Chok, Multan, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus_location">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=1627&amp;height=654&amp;hl=en&amp;q=edusoft system solution&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://sprunkin.com/">Sprunki Phases</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
