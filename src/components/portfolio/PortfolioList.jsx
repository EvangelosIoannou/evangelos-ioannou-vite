import React from "react";
import styled from "styled-components";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <PortfolioListContainer
      className={active && "active"}
      onClick={() => setSelected(id)}
    >
      {title}
    </PortfolioListContainer>
  );
}
const PortfolioListContainer = styled.li`
  font-size: 14px;
  /* margin-right: 50px; */
  padding: 7px;
  margin: 0 2rem;
  border-radius: 10px;
  cursor: pointer;
  color: white;

  @include mobile {
    margin-right: 20px;
  }

  &.active {
    background-color: var(--yellow1);
    color: black;
  }
`;
