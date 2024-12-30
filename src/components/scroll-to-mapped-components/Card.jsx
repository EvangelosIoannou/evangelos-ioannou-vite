import React, { forwardRef } from "react";
import styled from "styled-components";

const Card = ({ cardId, unClickedCardIds, setUnClickedCardIds }, ref) => {
  const handleClick = () => {
    setUnClickedCardIds(unClickedCardIds.filter((id) => id !== cardId));
  };
  return (
    <CardContainer ref={ref} onClick={handleClick}>
      {cardId}
    </CardContainer>
  );
};
const CardContainer = styled.article`
  height: 1200px;
  width: 600px;
  background-color: red;
  margin: 20px;
  color: white;
  font-size: 50px;
  text-align: center;
`;

export default forwardRef(Card);
