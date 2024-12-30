import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import InfiniteScrolling from "../components/infinite-scrolling/InfiniteScrolling";
import PokemonApp from "../components/pokemon/PokemonApp";
import CardBorder from "../components/card/CardBorder";
import Cards from "../components/card/Cards";

export default function PlaygroundView() {
  // const cardIds = [0, 1, 2, 3];
  // const [unClickedCardIds, setUnClickedCardIds] = useState(cardIds);

  // const refs = cardIds.reduce((acc, value) => {
  //   acc[value] = createRef();
  //   return acc;
  // }, {});
  // // }, []);

  // useEffect(() => {
  //   if (
  //     unClickedCardIds.length > 0 &&
  //     unClickedCardIds.length < cardIds.length
  //   ) {
  //     const highestId = Math.min(...unClickedCardIds);
  //     console.log("highestId", highestId);
  //     refs[highestId].current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }, [unClickedCardIds, cardIds.length, refs]);

  return (
    <PlaygroundViewContainer>
      {/* <header></header>
      {cardIds.map((cardId) => (
        // {cardIds.map((cardId, index) => (
        <Card
          key={cardId}
          cardId={cardId}
          unClickedCardIds={unClickedCardIds}
          setUnClickedCardIds={setUnClickedCardIds}
          ref={refs[cardId]}
        />
      ))} */}
      {/* <InfiniteScrolling /> */}
      <Cards />
    </PlaygroundViewContainer>
  );
}

const PlaygroundViewContainer = styled.main``;
