import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Contact() {
  // const contactRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //     const entry = entries[0];
  //     console.log("entry", entry.target);
  //   });
  //   observer.observe(contactRef.current);
  // }, []);
  return (
    <ContactContainer id="contact">
      <h1>
        Contact <span>Me</span>
      </h1>
      <form action="">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
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
  background-color: var(--bg-color);
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
    margin: 5rem auto;
    text-align: center;
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
