import React from "react";
import styled from "styled-components";

export default function TitleAndSubtitle({ title, subtitle }) {
  return (
    <TitleAndSubtitleContainer>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </TitleAndSubtitleContainer>
  );
}
const TitleAndSubtitleContainer = styled.section`
  padding: 4rem;
  /* background-image: url("/data/images/blue-grey-background.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;
