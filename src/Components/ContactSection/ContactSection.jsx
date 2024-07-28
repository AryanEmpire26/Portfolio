import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import axios from "axios";
import logoimage from "../../assets/Ellipse 41.jpg";

function ContactSection() {
  // State for managing form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for managing form validation errors
  const [errors, setErrors] = useState({});

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form input fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      formErrors.email = "Email is invalid";
    if (!formData.message) formErrors.message = "Message is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submission
    if (!validateForm()) return;

    try {
      // Send form data to the server
      await axios.post("http://localhost:3000/infocontacts", formData);
      alert("Your message has been sent!");
      // Reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error sending your message!", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className={styles.container} id="Contact">
      <div className={styles.content}>
        <div className={styles.formsection}>
          <h2>Leave ME Your Info</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Form input for name */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">
                <h4>Your Full Name ( Required )</h4>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            {/* Form input for email */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">
                <h4>Your Email ( Required )</h4>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            {/* Form input for subject */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="subject">
                <h4 className={styles.name}>Subject</h4>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* Form input for message */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="message">
                <h4 className={styles.name}>Your Message</h4>
              </label>
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button className={styles.button} type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactinfo}>
          <h2 className={styles.infotitle}>Contact Information</h2>

          {/* Contact information section */}
          <div className={styles.location}>
            <div className={styles.iconContainer}>
              <img src={logoimage} alt="logo" className={styles.logoimg} />
              <MapIcon className={styles.icon} />
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Country:</h4>
              </div>
              <div>
                <p className={styles.text}>Bangladesh</p>
              </div>
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>City:</h4>
              </div>
              <div>
                <p className={styles.text}>Dhaka</p>
              </div>
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Street:</h4>
              </div>
              <div>
                <p className={styles.text}>35 Vhatara, Baadda</p>
              </div>
            </div>
          </div>

          {/* Email and contact methods */}
          <div className={styles.mail}>
            <div className={styles.iconContainer}>
              <img src={logoimage} alt="logo" className={styles.logoimg} />
              <EmailIcon className={styles.icon} />
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Email:</h4>
              </div>
              <div>
                <p className={styles.text}>youremail@gmail.com</p>
              </div>
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Skype:</h4>
              </div>
              <div>
                <p className={styles.text}>@yourusername</p>
              </div>
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Telegram:</h4>
              </div>
              <div>
                <p className={styles.text}>@yourusername</p>
              </div>
            </div>
          </div>

          {/* Mobile contact methods */}
          <div className={styles.mobile}>
            <div className={styles.iconContainer}>
              <img src={logoimage} alt="logo" className={styles.logoimg} />
              <SmartphoneIcon className={styles.icon} />
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Support Services:</h4>
              </div>
              <div>
                <p className={styles.text}>15369</p>
              </div>
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Office:</h4>
              </div>
              <div>
                <p className={styles.text}>+58 (021)356 587 235</p>
              </div>
            </div>
            <div className={styles.infocontent}>
              <div>
                <h4 className={styles.htext}>Personal:</h4>
              </div>
              <div>
                <p className={styles.text}>+58 (021)356 587 235</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
