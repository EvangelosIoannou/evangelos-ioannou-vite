import React from "react";
import Grid from "../components/grids/Grid";
import styled from "styled-components";
import Carousel from "../components/carousel/Carousel.tsx";
import car1 from "../assets/images/car1.jpg";
import models from "../assets/images/model-s.jpg";
import model3 from "../assets/images/model-3.jpg";
import modelx from "../assets/images/model-x.jpg";
import modely from "../assets/images/model-y.jpg";

import AdminDashboard from "../components/admin-dashboard/AdminDashboard.jsx";
import { filmData } from "../../public/data/films/filmData.js";
import VideoOnHover from "../components/buttons/VideoOnHover.jsx";
import Todo from "../components/todo/Todo.jsx";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: models, alt: "Car Two" },
  { url: model3, alt: "Car Three" },
  { url: modelx, alt: "Car Four" },
  { url: modely, alt: "Car Five" },
];

export default function ComponentsView() {
  return (
    <ComponentsViewContainer>
      <h1>Components</h1>
      <p>This page is a testing ground for components and features</p>
      <section className="carousel-section">
        <h2>Carousels</h2>
        <Carousel images={IMAGES} />
      </section>
      <section className="grid-section">
        <h2>Grids</h2>
        <Grid gridTitle="Films" gridData={filmData} />
      </section>
      <section className="button-section">
        <h2>Buttons</h2>
        <VideoOnHover />
      </section>
      <section className="admin-section">
        <h2>Admin Dashboard</h2>
        <AdminDashboard />
      </section>
      <section className="todo-section">
        <h2>Todo Section</h2>
        <Todo />
      </section>
    </ComponentsViewContainer>
  );
}
const ComponentsViewContainer = styled.main`
  /* overflow: hidden; */
  padding: 8rem 0rem 0rem;
  h1 {
    display: flex;
    justify-content: center;
    color: black;
  }
  h2 {
    color: black;
    padding: 2rem 2rem 2rem;
  }
  p {
    padding: 0rem 2rem;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    & img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .accordion-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
