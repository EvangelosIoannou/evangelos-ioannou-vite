import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Grid({ gridTitle, gridData }) {
  return (
    <>
      <GridContainer>
        <h2>{gridTitle}</h2>
        {/* <div class="grid-content"  :style="{gridTemplateColumns: columns}"> */}
        <GridContent>
          {gridData.map(({ title, premis, imageSrc, url }) => (
            // <GridWrap key={title} onPress={() => navigation.navigate("/")}>
            <Link className="grid-wrap" key={title} to={url}>
              <img src={imageSrc} alt="" />
              {/* <h3>{title}</h3> */}
            </Link>
          ))}
        </GridContent>
      </GridContainer>
    </>
  );
}
const GridContainer = styled.div`
  margin: 3rem;
  .grid-wrap {
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    height: 150px;
    max-height: 150px;

    position: relative;

    text-align: center;
    white-space: nowrap;
    h2 {
      text-align: center;
      max-width: 100%;
    }

    img {
      // width: 100%;
      // height: 100%;
      // min-height: 100%;
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
      border-radius: 10px;
      margin: auto;
      align-self: center;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      vertical-align: middle;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      border-color: rgba(249, 249, 249, 0.8);
      // opacity: 0.7;
    }
  }
  h2 {
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
  }
`;
const GridContent = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
