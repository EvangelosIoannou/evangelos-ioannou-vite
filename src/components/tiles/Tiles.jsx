import React from "react";
import styled from "styled-components";

export default function Tiles({ img, title, subtitle }) {
  return (
    <TilesContainer>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="text-container">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
      </div>
    </TilesContainer>
  );
}
const TilesContainer = styled.div`
  height: 35rem;
  width: 40rem;
  background-color: var(--charcoal);
  border-radius: 2rem;
  padding: 2rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    // opacity: 0.7;
  }
  .img-container {
    height: 70%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }
  }
  .text-container {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
