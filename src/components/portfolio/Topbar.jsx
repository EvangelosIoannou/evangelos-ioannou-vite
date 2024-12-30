import React from "react";
import styled from "styled-components";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <TopbarContainer className={menuOpen && "active"}>
      <div className="left">
        <a href="#intro" className="logo">
          genius.
        </a>
        <div className="itemContainer">
          <span className="material-symbols-outlined">person</span>{" "}
          <span className="detail">+44 7414 837 345</span>
        </div>
        <div className="itemContainer">
          <span className="material-symbols-outlined">mail</span>
          <span className="detail">evangelos.ioannou@hotmail.co.uk</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </TopbarContainer>
  );
}
const TopbarContainer = styled.div`
  /* width: calc(100% - (2rem + 32px)); */
  /* width: 100%; */
  /* flex: 1; */
  display: flex;
  height: 70px;
  background-color: white;
  color: var(--main-color);
  /* position: fixed; */
  position: relative;
  top: 0;
  z-index: 3;
  transition: all 1s ease;

  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
  /* .wrapper {
    padding: 10px 30px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between; */
  .left {
    display: flex;
    align-items: center;
    .logo {
      font-size: 40px;
      font-weight: 700;
      text-decoration: none;
      color: inherit;
      margin-right: 40px;
    }
    .itemContainer {
      display: flex;
      align-items: center;
      margin-left: 30px;

      .material-symbols-outlined {
        font-size: 18px;
        margin-right: 5px;
      }
      .detail {
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
  .right {
    .hamburger {
      width: 32px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      span {
        width: 100%;
        height: 3px;
        background-color: var(--main-color);
        transform-origin: left;
        transition: all 2s ease;
      }
    }
  }
  /* } */
  &.active {
    background-color: var(--main-color);
    color: white;
    .hamburger {
      span {
        &:first-child {
          background-color: white;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          background-color: white;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
