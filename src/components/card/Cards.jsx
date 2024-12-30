import React from "react";
import CardBorder from "./CardBorder";
import styled from "styled-components";
import Card from "./Card";

export default function Cards() {
  return (
    <CardsContainer id="cards">
      {/* <CardBorder /> */}
      <div className="cards">
        <Card />
      </div>
    </CardsContainer>
  );
}
const CardsContainer = styled.section`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .cards {
    display: flex;
    flex-direction: row;
  }
`;
