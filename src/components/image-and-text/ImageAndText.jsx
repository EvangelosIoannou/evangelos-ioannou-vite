import React from "react";
import styled from "styled-components";
import astronaut from "../../assets/images/astronautonrocket.webp";

export default function ImageAndText() {
  return (
    <ImageAndTextContainer>
      <div className="left">
        <h4>Hello there! I'm</h4>
        <h3>Evangelos Ioannou!</h3>
        <h4>Software Developer</h4>
        <p>
          I am a highly motivated and versatile software developer with an
          enthusiastic approach to everyday tasks. With over 5 years’
          experience, I am always updating myself on new technologies and
          current trends and am eager to find a position to express my skills
          and further enhance them. I pride myself on creating and maintaining
          strong working relationships with a diverse range of people and
          understanding the importance of frequent and precise communication
          when working within a team.
        </p>
      </div>
      <div className="right">
        <div className="image-container">
          <img src={astronaut} alt="" />
        </div>
        <div className="arrow-container">
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </ImageAndTextContainer>
  );
}
const ImageAndTextContainer = styled.div`
  display: flex;
  .left {
    width: 50%;
    padding: 0 50px 0;
    margin-top: auto;
    margin-bottom: auto;
  }
  .right {
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
    }
    a {
      position: absolute;
      bottom: 10px;
      right: 30%;

      img {
        width: 50px;
        animation: arrowBlink 2s infinite;
      }

      @keyframes arrowBlink {
        100% {
          opacity: 0;
        }
      }
    }
    .arrow-container {
      position: absolute;
      bottom: 10px;
      right: 30%;
    }
  }
`;
