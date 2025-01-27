import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <h1>
        Contact <span>Me</span>
      </h1>
      <div className="business-card">
        <h2>Contact Details</h2>
        <p>Name: Evangelos Ioannou</p>
        <p>Phone: (+44) 7414 837 345</p>
        <p>Email: evangelos.ioannou@hotmail.co.uk</p>
      </div>
      <p>Or drop me a message...</p>
      <form action="">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message here"
          ></textarea>
          <input type="submit" value="Send Message" className="btn"></input>
        </div>
      </form>
    </ContactContainer>
  );
}
const ContactContainer = styled.section`
  padding-top: 8rem;
  min-height: 100vh;
  background-image: url("/data/images/contact-me-background-image.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .business-card {
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 32px;
    width: 100%;
    max-width: 400px;
    text-align: left;
  }

  .business-card h2 {
    font-size: 20px;
    font-weight: bold;
    color: #1f2937;
  }

  .business-card p {
    margin-top: 8px;
    color: #4b5563;
  }
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
  }
  h1 {
    font-size: 8rem;
    text-align: center;
    margin: 5rem 0;
  }
  h2 {
    margin-bottom: 3rem;
    color: white;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 3rem;
    text-align: center;
    width: 90%;
  }
  form .input-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  form .input-box input,
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
  form .btn {
    margin-top: 2rem;
    padding: 1rem;
  }
  @media (max-width: 991px) {
    form {
      flex-direction: column;
    }
  }
  @media (max-width: 400px) {
    min-height: 100vh !important;
  }
`;
