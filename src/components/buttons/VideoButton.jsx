import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function VideoButton() {
  const navigate = useNavigate();
  return (
    <VideoButtonContainer>
      <Link to="/games">
        <div className="wrap">
          <img src="/data/images/Games.png" alt="" />
          <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="/data/videos/chess-game.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
      <Link to="/web">
        <div className="wrap">
          <img src="/data/images/Web.png" alt="" />
          <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="/data/videos/web1.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
      <Link to="/mobile">
        <div className="wrap">
          <img src="/data/images/Mobile.png" alt="" />
          <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="/data/videos/mobile2.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
    </VideoButtonContainer>
  );
}
const VideoButtonContainer = styled.div`
  padding: 2rem 0rem;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .wrap {
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
    }

    video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0;
      opacity: 0;
      z-index: 0;
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);

      video {
        opacity: 1;
      }
    }
  }
`;
