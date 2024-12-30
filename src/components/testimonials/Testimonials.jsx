import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Testimonials() {
  // const testimonialsRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //     const entry = entries[0];
  //     console.log("entry", entry.target);
  //   });
  //   observer.observe(testimonialsRef.current);
  // }, []);
  return (
    <TestimonialsContainer id="testimonials">
      <h1>Testimonials</h1>
      <div className="wrapper">
        <div className="testimonial-item">
          <img src="/data/portfolio/ProfilePicture.jpeg" alt="" />
          <h2>Evangelos</h2>
          <div className="rating">
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            consequuntur autem non nulla quaerat quod, explicabo, voluptatem
            animi omnis dolores fuga obcaecati blanditiis vel voluptatum ipsa in
            qui voluptas natus.
          </p>
        </div>
        <div className="testimonial-item">
          <img src="/data/portfolio/ProfilePicture.jpeg" alt="" />
          <h2>Evangelos</h2>
          <div className="rating">
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            consequuntur autem non nulla quaerat quod, explicabo, voluptatem
            animi omnis dolores fuga obcaecati blanditiis vel voluptatum ipsa in
            qui voluptas natus.
          </p>
        </div>
        <div className="testimonial-item">
          <img src="/data/portfolio/ProfilePicture.jpeg" alt="" />
          <h2>Evangelos</h2>
          <div className="rating">
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
            <i className="bx bxs-star" id="star"></i>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            consequuntur autem non nulla quaerat quod, explicabo, voluptatem
            animi omnis dolores fuga obcaecati blanditiis vel voluptatum ipsa in
            qui voluptas natus.
          </p>
        </div>
      </div>
    </TestimonialsContainer>
  );
}
const TestimonialsContainer = styled.section`
  background: var(--second-bg-color);
  padding: 2rem;
  min-height: 100vh;
  @media (max-width: 991px) {
    .wrapper {
      grid-template-columns: repeat(1, 1fr) !important;
      padding: 0 3rem;
    }
    .testimonial-item {
      padding: 30px 15px !important;
    }
  }
  h1 {
    margin: 8rem 0rem 4rem;
  }
  img {
    width: 15rem;
    border-radius: 50%;
    border: 3px solid var(--main-color);
    box-shadow: 0 0 25px var(--main-color);
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  .testimonial-item {
    min-height: 400px;
    max-width: 450px;
    background: rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(238, 238, 238, 0.2);
    border-radius: 2rem;
    margin: 0 2rem;
    padding: 30px 60px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.5rem;
    color: white;
    transition: 0.4s ease-in-out;
  }
  .testimonial-item:hover {
    border: 3px solid var(--main-color);
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 0 50px var(--main-color);
  }
  .testimonial-item h2 {
    font-size: 2.8rem;
  }
  .testimonial-item p {
    font-size: 1.3rem;
  }
  #star {
    color: gold;
    font-size: 2rem;
  }
`;
