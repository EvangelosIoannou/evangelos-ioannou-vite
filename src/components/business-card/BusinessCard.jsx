import React from "react";
import styled from "styled-components";
import SocialIcons from "../social-icons/SocialIcons";

export default function BusinessCard() {
  return (
    <BusinessCardContainer>
      <h4>Contact Details</h4>
      <p>
        <span className="bold">Name: </span>Evangelos Ioannou
      </p>
      <p>
        <span className="bold">Phone: </span>(+44) 7414 837 345
      </p>
      <p>
        <span className="bold">Email: </span>evangelos.ioannou@hotmail.co.uk
      </p>
      <SocialIcons />
    </BusinessCardContainer>
  );
}
const BusinessCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--main-color);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 32px;
  width: 100%;
  height: 200px;
  max-width: 400px;
  text-align: left;
  a {
    margin-bottom: 0;
  }
  .bold {
    font-weight: 800;
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
`;
