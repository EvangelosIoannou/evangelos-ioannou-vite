import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import VideoButton from "../buttons/VideoButton";
import SocialIcons from "../social-icons/SocialIcons";

export default function Home() {
  // const homeRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //     const entry = entries[0];
  //     console.log("entry", entry.target);
  //   });
  //   observer.observe(homeRef.current);
  // }, []);
  return (
    <HomeContainer id="home">
      <div className="background-image"></div>
      <div className="left">
        {/* <h1 className="title">ANIMATING GRADIENTS</h1> */}
        <h3>
          <span>Software</span> developer<span>.</span>
        </h3>
        <h1>
          <span>Evangelos</span>
          <br />
          Ioannou
        </h1>
        <VideoButton />
        {/* <h3>
          <span>Games</span> Web <span>Mobile</span>
        </h3> */}
        {/* <h3 className="text-animation">
          I'm a <span></span>
        </h3> */}
        <SocialIcons />
        <div className="btn-group">
          <a href="#portfolio" className="btn">
            Projects
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
          {/* <a href="#contact" className="new-btn">
            Contact
          </a> */}
        </div>
      </div>
      <div className="right">
        {/* <img src="/data/portfolio/ProfilePicture.jpeg" alt="" /> */}
      </div>
    </HomeContainer>
  );
}
const HomeContainer = styled.section`
  min-height: 100vh;
  padding: 10rem 12% 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  position: relative;
  /* background: url("/data/home/manatdesk1.jpg") center/cover no-repeat; */
  /* background-image: var(--gradient2);
  background-size: 400%;
  animation: bg-animation 20s infinite alternate; */
  //background-image: linear-gradient(to bottom right, red, black);
  .background-image {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("/data/home/spaceship1.jpg");
    background-position: left top;
    background-repeat: no-repeat; /* Prevents the image from repeating */
    /* transform: scaleX(-1); */
    /* -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px); */
  }
  .left {
    z-index: 1;
    width: 50%;
    text-align: center;
    align-items: center;
    p {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.8;
      max-width: 1000px;
    }
  }
  .right {
    width: 50%;
    border-radius: 50%;
  }
  .right img {
    position: relative;
    top: 3rem;
    width: 32vw;
    border-radius: 50%;
    box-shadow: 0 0 15px var(--blue6);
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  .right img:hover {
    box-shadow: 0 0 25px var(--blue6), 0 0 50px var(--blue6),
      0 0 100px var(--blue6);
  }
  .title {
    background-image: var(--gradient);
    background-clip: text;
    color: transparent;
    background-size: 400%;
    animation: bg-animation 5s infinite alternate;
  }
  /* @media (max-width: 393px) {
    .right img {
      max-width: 200px;
    }
  } */
  span {
    color: var(--blue6);
  }
  .logo span {
    color: var(--blue6);
  }
  h1 {
    padding: 0 0 2rem 0;
    font-size: 7rem;
    font-weight: 700;
    line-height: 1;
    /* text-shadow: 2px 2px 0 #007bff, -2px -2px 0 #007bff, 2px -2px 0 #007bff,
      -2px 2px 0 #007bff; */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 25px var(--blue6),
      0 0 5px var(--blue6);
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 255, 0, 0.7),
      0 0 5px rgba(255, 255, 0, 0.8); */
  }
  h3 {
    margin: 2rem 0rem;
    font-size: 3.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 25px var(--blue6),
      0 0 5px var(--blue6);
  }
  p {
    font-size: 1.5rem;
    padding: 2rem 0;
  }
  .new-btn {
    cursor: pointer;
    border: 0;
    padding: 0.5em 1.5em;
    font-size: 2rem;
    background-image: var(--gradient);
    background-size: 300%;
    background-position: left;
    transition: background-position 1s;
    &:hover,
    &:focus {
      background-position: right;
    }
  }
  .btn {
    display: inline-block;
    padding: 1rem 2.8rem;
    background: var(--blue6);
    box-shadow: 0 0 25px var(--blue6);
    border-radius: 4rem;
    font-size: 1.6rem;
    color: black;
    border: 2px solid transparent;
    letter-spacing: 0.1rem;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px var(--blue6);
  }
  .btn-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  .btn-group a:nth-of-type(2) {
    background-color: black;
    color: var(--blue6);
    border: 2px solid var(--blue6);
    box-shadow: 0 0 25px transparent;
  }
  .btn-group a:nth-of-type(2):hover {
    box-shadow: 0 0 25px var(--blue6);
    background-color: var(--blue6);
    color: black;
  }
  .text-animation {
    font-size: 4rem;
    font-weight: 600;
    min-width: 280px;
  }
  .text-animation span {
    position: relative;
  }
  .text-animation span::before {
    content: "Software";
    color: var(--blue6);
    animation: words 20s infinite;
  }
  .text-animation span::after {
    content: "";
    background-color: var(--bg-color);
    position: absolute;
    width: calc(100% + 8px);
    height: 100%;
    border-left: 3px solid var(--bg-color);
    right: -8px;
    animation: cursor 0.6s infinite, typing 20s steps(14) infinite;
  }
  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
  @keyframes cursor {
    to {
      border-left: 2px solid var(--blue6);
    }
  }
  @keyframes words {
    0%,
    20% {
      content: "Games";
    }
    21%,
    40% {
      content: "Web";
    }
    41%,
    60% {
      content: "Mobile";
    }
    61%,
    80% {
      content: "Web Developer";
    }
    81%,
    100% {
      content: "Software Tester";
    }
  }
  @keyframes typing {
    10%,
    15%,
    30%,
    35%,
    50%,
    55%,
    70%,
    75%,
    90%,
    95% {
      width: 0;
    }
    5%,
    20%,
    25%,
    40%,
    45%,
    60%,
    65%,
    80%,
    85% {
      width: calc(100% + 8px);
    }
  }
  @media (max-width: 838px) {
    flex-direction: column-reverse !important;
    /* margin: 1rem 3rem; */
    display: flex;
    flex-direction: column;
    /* align-items: baseline;
    text-align: left; */
    justify-content: center;
    /* margin-top: 3rem; */
    gap: 6rem;
    h3 {
      font-size: 2.6rem;
    }
    h1 {
      font-size: 5rem !important;
      margin-top: 3rem;
    }
    p {
      /* max-width: 600px; */
      margin: 0 auto;
    }
    .right {
    }
    .right img {
      width: 56vw !important;
      max-width: 300px;
      top: 0 !important;
    }
    .text-animation {
      font-size: 24px !important;
    }
  }
`;
