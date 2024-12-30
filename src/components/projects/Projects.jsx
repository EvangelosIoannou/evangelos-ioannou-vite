import React from "react";
import styled from "styled-components";
import Grid from "../grids/Grid";
import { filmData } from "../../../public/data/films/filmData";
import Cards from "../card/Cards";

export default function Projects() {
  return (
    <>
      <ProjectsContainer id="projects">
        <Cards />
        {/* <Grid gridTitle="Projects" filmData={filmData} /> */}
      </ProjectsContainer>
    </>
  );
}
const ProjectsContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url(../../../public/data/projects/motherboard.png) green; */
  background-image: linear-gradient(to bottom right, red, yellow);
`;
