import React from "react";
import Grid from "../grids/Grid";
import { gamesData } from "../../../public/data/games/gamesData";
import { filmData } from "../../../public/data/films/filmData.js";
import styled from "styled-components";

export default function GamesHub() {
  return (
    <GamesHubContainer>
      <h1>Games Hub</h1>
      <Grid gridTitle="Games" gridData={gamesData} />
    </GamesHubContainer>
  );
}
const GamesHubContainer = styled.main`
  h1 {
    color: black;
  }
`;
