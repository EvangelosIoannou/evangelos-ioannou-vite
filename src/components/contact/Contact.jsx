import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BusinessCard from "../business-card/BusinessCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://078mrxyho0.execute-api.eu-west-2.amazonaws.com/prod",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Success:", data);

      alert("Your message has been sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };
  return (
    <ContactContainer id="contact">
      <h1>Contact Me</h1>
      <BusinessCard />
      <h3>Or drop me a message...</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {/* <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            </div> */}
            <div className="input-box">
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="error-message">{errors.fullName}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>
          <div className="input-group-2">
            {/* <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message here"
            ></textarea>
            <input type="submit" value="Send Message" className="btn"></input> */}
            <textarea
              name="message"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </div>
    </ContactContainer>
  );
}
const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/data/images/blue-tech-background.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  .input-group {
    width: 50%;
  }
  .input-group-2 {
    width: 50%;
    textarea {
      height: 150px;
    }
  }
  .btn {
    background-color: #3b82f6;
    color: #ffffff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background: #0056b3;
    }
  }
  .form-container {
    display: flex;
    justify-content: center;
    background-color: var(--plumbeous2);
    width: 90%;
    border-radius: 2rem;
    margin: 2rem;
    & form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      margin: 3rem;
      text-align: center;
      width: 90%;
    }
    & .input-group {
      width: 50%;
    }
    & .input-group-2 {
      width: 50%;
      textarea {
        height: 150px;
      }
    }
    & form .input-box {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    & form .input-box input,
    form textarea {
      width: 100%;
      padding: 2.5rem;
      font-size: 1.8rem;
      color: var(--text-color);
      background: var(--second-bg-color);
      border-radius: 2rem;
      border: 2px solid var(--main-color);
      margin: 1.5rem 0;
      resize: none;
    }
    & form .btn {
      margin-top: 2rem;
      padding: 1rem;
    }
  }
  @media (max-width: 991px) {
    form {
      flex-direction: column;
    }
  }
  @media (max-width: 400px) {
    min-height: 100vh !important;
  }

  h1 {
    font-size: 8rem;
    text-align: center;
    margin: 5rem 0;
    color: white;
  }
  h3 {
    color: white;
  }
`;
