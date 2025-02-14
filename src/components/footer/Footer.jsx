import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="social">
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#">
          <i className="bx bxl-github"></i>
        </a>
        {/* <a href="#">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a> */}
      </div>
      <ul className="list">
        {/* <li>
          <a href="#">FAQ</a>
        </li> */}
        {/* <li>
          <a href="#">Services</a>
        </li> */}
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        {/* <li>
          <a href="#">Testimonials</a>
        </li> */}
      </ul>
      <p className="copyright">© Evangelos Ioannou</p>{" "}
      {/* | All Rights Reserved */}
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  height: 300px !important;
  width: 100%;
  padding: 40px 0;
  background-color: var(--plumbeous16);
  @media (max-width: 991px) {
    padding: 2rem 3%;
  }
  @media (max-width: 400px) {
    min-height: 0 !important;
    height: 300px !important;
  }
  .social {
    text-align: center;
    padding-bottom: 25px;
    color: var(--main-color);
  }
  .social a {
    font-size: 25px;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    width: 42px;
    height: 42px;
    line-height: 42px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 10px;
    transition: 0.3s ease-in-out;
  }
  .social a:hover {
    transform: scale(1.2) translateY(-10px);
    background-color: var(--main-color);
    color: black;
    box-shadow: 0 0 25px var(--main-color);
  }
  ul {
    margin-top: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
  }
  ul li a {
    color: white;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
  }
  ul li a:hover {
    border-bottom: 3px solid var(--main-color);
  }
  ul li {
    display: inline-block;
    padding: 0 15px;
  }
  .copyright {
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    color: white;
  }
`;
