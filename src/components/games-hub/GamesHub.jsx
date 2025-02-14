import React from "react";
import Grid from "../grids/Grid";
import { gamesData } from "../../../public/data/games/gamesData";
import { filmData } from "../../../public/data/films/filmData.js";
import styled from "styled-components";

export default function GamesHub() {
  return (
    <GamesHubContainer>
      <h1>Games Hub</h1>
      <h3>Future games...</h3>
      <Grid gridTitle="" gridData={gamesData} />
    </GamesHubContainer>
  );
}
const GamesHubContainer = styled.main`
  padding: 4rem 2rem 2rem;
  h1 {
    color: black;
    text-align: center;
    max-width: 100%;
    font-family: "Press Start 2P", system-ui;
  }
`;
