import React from "react";
import styled from "styled-components";

export default function SocialIcons() {
  return (
    <SocialIconsContainer>
      <a href="https://www.linkedin.com/in/evangelos-ioannou-84569b151/">
        <i className="bx bxl-linkedin"></i>
      </a>
      <a href="https://github.com/EvangelosIoannou">
        <i className="bx bxl-github"></i>
      </a>
      {/* <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a> */}
      {/* <a href="#">
            <i className="bx bxl-twitter"></i>
          </a> */}
    </SocialIconsContainer>
  );
}
const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 4.5rem;
    background: transparent;
    border: 2px solid var(--blue6);
    font-size: 2.5rem;
    border-radius: 50%;
    color: var(--blue6);
    margin: 1rem 0.75rem 1rem 0.75rem;
    transition: 0.3s ease-in-out;
  }
  a:hover {
    color: var(--text-color);
    transform: scale(1.3) translateY(-5px);
    box-shadow: 0 0 25px var(--blue6);
    background-color: var(--blue6);
  }
`;
