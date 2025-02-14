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
import ImageAndText from "../components/image-and-text/ImageAndText.jsx";
import TitleAndSubtitle from "../components/text/TitleAndSubtitle.jsx";
import Marquee from "../components/marquee/Marquee.jsx";
import Tiles from "../components/tiles/Tiles.jsx";

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
      <TitleAndSubtitle
        title="Components"
        subtitle="Housing area for components and features"
      />
      <section className="carousel-section">
        <h2>Carousels</h2>
        <Carousel images={IMAGES} />
      </section>
      <section className="grid-section">
        <h2>Grids</h2>
        <Grid gridTitle="" gridData={filmData} />
        <Tiles img={car1} title="Title" subtitle="subtitle" />
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
      <section className="image-and-text-section">
        <h2>Image and Text</h2>
        <ImageAndText />
      </section>
      <section className="text-section">
        <h2>Text</h2>
      </section>
      <section className="marquee-section">
        <h2>Marquee</h2>
        <Marquee />
      </section>
    </ComponentsViewContainer>
  );
}
const ComponentsViewContainer = styled.main`
  section {
    padding: 2rem;
  }
  h1 {
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
  h2 {
    color: black;
    padding: 2rem 2rem 2rem;
    text-decoration: underline;
    width: 100%;
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
  .grid-section {
  }
  .text-section {
    h2 {
      text-shadow: black 12px -12px 10px, teal -12px 12px 10px;
    }
  }
  section:nth-child(even) {
    background-color: var(--plumbeous2);
    /* background-image: var(--blue-grey-gradient); */
    /* background-image: url("/data/images/blue-grey-background2.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;
    color: white; /* Ensure text is readable on dark background */
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  section:nth-child(odd) {
    background-color: var(--plumbeous11);
    /* background-image: var(--blue-grey-gradient2); */
    color: black;
  }
`;
