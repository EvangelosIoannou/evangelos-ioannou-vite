import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import { init } from "ityped";

export default function Intro() {
  // Developer own "ityped" functionality
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);
  return (
    <IntroContainer id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Evangelos Ioannou</h1>
          <h3>
            Freelance <span>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  background-color: white;
  display: flex;

  @include mobile {
    flex-direction: column;
    align-items: center;
  }

  .left {
    flex: 0.5;
    overflow: hidden;

    .imgContainer {
      width: 700px;
      height: 700px;
      background-color: crimson;
      border-radius: 50%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      float: right;

      @include mobile {
        align-items: flex-start;
      }

      img {
        height: 90%;

        @include mobile {
          height: 50%;
        }
      }
    }
  }
  .right {
    flex: 0.5;
    position: relative;

    .wrapper {
      width: 100%;
      height: 100%;
      padding-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @include mobile {
        padding-left: 0;
        align-items: center;
      }

      h1 {
        font-size: 60px;
        margin: 10px 0;

        @include mobile {
          font-size: 40px;
        }
      }
      h2 {
        font-size: 35px;
      }
      h3 {
        font-size: 30px;

        @include mobile {
          font-size: 20px;
        }

        span {
          font-size: inherit;
          color: crimson;
        }

        .ityped-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
    a {
      position: absolute;
      bottom: 10px;
      left: 40%;

      img {
        width: 30px;
        animation: arrowBlink 2s infinite;
      }

      @keyframes arrowBlink {
        100% {
          opacity: 0;
        }
      }
    }
  }
`;
