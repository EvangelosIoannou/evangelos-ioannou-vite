import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Education() {
  // const educationRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //     const entry = entries[0];
  //     console.log("entry", entry.target);
  //   });
  //   observer.observe(educationRef.current);
  // }, []);
  return (
    <EducationContainer id="education">
      <h1 className="heading">Education</h1>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021</div>
          <div className="timeline-content">
            <h3>High School</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              excepturi accusamus cupiditate quam culpa odit est deserunt vitae
              repellendus, at impedit sit quae architecto perferendis autem,
              reiciendis unde praesentium? Obcaecati?
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              excepturi accusamus cupiditate quam culpa odit est deserunt vitae
              repellendus, at impedit sit quae architecto perferendis autem,
              reiciendis unde praesentium? Obcaecati?
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>Internship</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              excepturi accusamus cupiditate quam culpa odit est deserunt vitae
              repellendus, at impedit sit quae architecto perferendis autem,
              reiciendis unde praesentium? Obcaecati?
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Job 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              excepturi accusamus cupiditate quam culpa odit est deserunt vitae
              repellendus, at impedit sit quae architecto perferendis autem,
              reiciendis unde praesentium? Obcaecati?
            </p>
          </div>
        </div>
      </div>
    </EducationContainer>
  );
}
const EducationContainer = styled.section`
  padding: 10rem 15px;
  background: var(--second-bg-color);
  h1 {
    margin-bottom: 5rem;
  }
  .heading {
    font-size: 8rem;
    text-align: center;
  }
  .timeline-items {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .timeline-items::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: var(--main-color);
    left: calc(50% - 1px);
  }
  .timeline-item {
    margin-bottom: 40px;
    width: 100%;
    position: relative;
  }
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  .timeline-item:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
  }
  .timeline-item:nth-child(even) {
    padding-left: calc(50% + 30px);
  }
  .timeline-dot {
    height: 21px;
    width: 21px;
    background-color: var(--main-color);
    box-shadow: 0 0 25px var(--main-color), 0 0 50px var(--main-color);
    position: absolute;
    left: calc(50% - 8px);
    border-radius: 50%;
    top: 10px;
  }
  .timeline-date {
    font-size: 20px;
    font-weight: 800;
    color: white;
    margin: 6px 0 15px;
  }
  .timeline-content {
    background-color: var(--bg-color);
    border: 3px solid var(--main-color);
    padding: 30px 50px;
    border-radius: 4rem;
    box-shadow: 0 0 10px var(--main-color);
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  .timeline-content:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px var(--main-color);
  }
  .timeline-content h3 {
    font-size: 20px;
    color: white;
    margin: 0 0 10px;
    font-weight: 500;
  }
  .timeline-content p {
    color: white;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
  }
  @media (max-width: 991px) {
    .timeline-items::before {
      left: 7px !important;
    }
    .timeline-item:nth-child(odd) {
      padding-right: 0 !important;
      text-align: left !important;
    }
    .timeline-item:nth-child(odd),
    .timeline-item:nth-child(even) {
      padding-left: 37px !important;
    }
    .timeline-dot {
      left: 0 !important;
    }
  }
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--main-color);
  }
  ::-webkit-scrollbar-track {
    background-color: var(--bg-color);
    width: 50px;
  }
`;
