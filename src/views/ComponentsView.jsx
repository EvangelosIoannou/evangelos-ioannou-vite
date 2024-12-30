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
      <section className="carousel-section">
        <h2>Carousels</h2>
        <Carousel images={IMAGES} />
      </section>
      <Grid gridTitle="Films" />
      <AdminDashboard />
    </ComponentsViewContainer>
  );
}
const ComponentsViewContainer = styled.main`
  overflow: hidden;
  h1 {
    display: flex;
    justify-content: center;
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
