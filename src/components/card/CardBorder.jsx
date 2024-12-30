import React from "react";
import styled from "styled-components";

export default function CardBorder() {
  return (
    <CardBorderContainer>
      <h3>Animate Borders</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        explicabo inventore nihil neque asperiores deserunt, tenetur nesciunt
        labore, ratione cupiditate ea consequatur recusandae repudiandae
        expedita, quos earum nulla? Voluptas, magni.
      </p>
    </CardBorderContainer>
  );
}
const CardBorderContainer = styled.div`
  margin: 2rem;
  padding: 2em;
  width: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  transition: 0.2s ease-in-out;
  &:hover {
    border: 3px solid var(--main-color);
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 0 50px var(--main-color);
  }
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(
      from var(--angle),
      transparent 70%,
      blue,
      red,
      green,
      purple,
      yellow
    );
    /* background-image: conic-gradient(
      #ff4545,
      #00ff99,
      #006aff,
      #ff0095,
      #ff4545
    ); */
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    padding: 3px;
    border-radius: 10px;
    animation: 3s spin linear infinite;
  }
  &::before {
    filter: blur(1.5rem);
    opacity: 0.5;
  }
  @keyframes spin {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }
`;
