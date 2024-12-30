import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Services() {
  // const servicesRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //     const entry = entries[0];
  //     console.log("entry", entry.target);
  //   });
  //   observer.observe(servicesRef.current);
  // }, []);
  return (
    <ServicesContainer id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <h4>UI Design</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, earum, quaerat debitis accusamus neque facere et beatae,
              non eum possimus nihil esse ut. Cumque non quos pariatur
              obcaecati, ad corrupti mollitia consequatur dignissimos voluptate
              autem quod aliquid harum, quia voluptatibus.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Frontend Development</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, earum, quaerat debitis accusamus neque facere et beatae,
              non eum possimus nihil esse ut. Cumque non quos pariatur
              obcaecati, ad corrupti mollitia consequatur dignissimos voluptate
              autem quod aliquid harum, quia voluptatibus.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Backend Development</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, earum, quaerat debitis accusamus neque facere et beatae,
              non eum possimus nihil esse ut. Cumque non quos pariatur
              obcaecati, ad corrupti mollitia consequatur dignissimos voluptate
              autem quod aliquid harum, quia voluptatibus.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Testing</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, earum, quaerat debitis accusamus neque facere et beatae,
              non eum possimus nihil esse ut. Cumque non quos pariatur
              obcaecati, ad corrupti mollitia consequatur dignissimos voluptate
              autem quod aliquid harum, quia voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
}
const ServicesContainer = styled.section`
  background: var(--bg-color);
  color: black;
  margin: 3rem;
  @media (max-width: 1285px) {
    .services-container {
      padding-bottom: 7rem;
      grid-template-columns: repeat(2, 1fr);
      /* margin: 0 5rem; */
    }
  }
  @media (max-width: 991px) {
    padding-bottom: 7rem !important;
  }
  @media (max-width: 895px) {
    h2 {
      margin-bottom: 3rem;
    }
    .services-container {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
  .heading {
    font-size: 8rem;
    text-align: center;
    margin: 5rem 0;
  }
  h2 {
    margin-bottom: 5rem;
    color: white;
  }
  .services-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2.5rem;
    max-width: 90vw;
  }
  .service-box {
    background-color: var(--main-color);
    height: 500px;
    border-radius: 3rem;
    border: 5px solid transparent;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  .service-box:hover {
    background: white;
    color: black;
    border: 5px solid var(--main-color);
    transform: scale(1.03);
  }
  .service-box .service-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    max-height: 200px;
    justify-content: left;
    align-items: baseline;
    padding: 5rem 5rem;
  }
  .service-info h4 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 2;
  }
  .service-info p {
    /* font-size: 1.6rem; */
    font-weight: 600;
    max-height: 100px;
    line-height: 1.7;
    margin: auto;
  }
`;
