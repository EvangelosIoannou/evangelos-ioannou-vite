import React from "react";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <AboutUsContainer id="about">
      <div className="content">
        <div className="left">
          <h2>
            <span>About me.</span>
          </h2>
          <p>
            How is it possible that a combination of metals and plastics can
            produce an image on a screen for me to play a video game on? Is a
            question I always asked myself whilst playing video games at a young
            age.
          </p>
          <p>
            The complexity of computers always has facinated me to the point
            where it became my goal to fully understand them.
          </p>
          <p>
            The journey started from me being an early gamer as I wondered how
            these <span>games</span> were created, the processes involved to
            develop these applications and to make them available for me to play
            - and so began the journey for me to understand them.
          </p>
          <p>
            The process overflowed into all things software and took me into
            developing also <span>web</span> and <span>mobile</span>{" "}
            applications.
          </p>
          <p>
            I am always updating myself on new technologies and current trends
            and am eager express my skills and further enhance them.
          </p>
        </div>
        <div className="right">
          <img src="/data/portfolio/ProfilePicture.jpeg" alt="" />
        </div>
      </div>
    </AboutUsContainer>
  );
}
const AboutUsContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  /* background-image: var(--gradient4); */
  background: transparent;
  .content {
    display: flex;
    justify-content: center;
    flex: 1;
    /* max-width: 1200px; */
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: var(--dark-blue);
    border-radius: 2rem;
  }
  .left {
    width: 50%;
    max-width: 50rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .right {
    width: 50%;
    max-width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
      border-radius: 50%;
      box-shadow: 0 0 25px var(--main-color);
      cursor: pointer;
      transition: 0.4s ease-in-out;
      display: flex;
      justify-content: center;
      &:hover {
        box-shadow: 0 0 25px var(--main-color), 0 0 50px var(--main-color),
          0 0 100px var(--main-color);
      }
    }
  }
  h1 {
    padding: 4rem 4rem 0;
  }
  h2 {
    padding: 4rem 0;
    &::before {
      content: "";
      position: relative;
      display: block;
      height: 3px;
      bottom: -8rem;
      background: var(--blue2);
      width: 100px;
      transform-origin: left center;
    }
  }
  p {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    line-height: 1.2;
    span {
      font-weight: bold;
    }
  }
  span {
    color: var(--main-color);
  }
  @media (max-width: 400px) {
    .content {
      flex-direction: column-reverse;
    }
    .left,
    .right {
      width: 100%;
    }
  }
`;
