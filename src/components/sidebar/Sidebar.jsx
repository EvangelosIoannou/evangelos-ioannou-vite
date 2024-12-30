import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import navbarData from "./navbarData";

export default function Sidebar() {
  const linkComponents = navbarData.map(({ title, path, icon }) => (
    <MenuItem key={title}>
      <NavLink to={path} activeclassname="active" className="button">
        <span className="material-icons">{icon}</span>
        <span className="text">{title}</span>
      </NavLink>
    </MenuItem>
  ));
  const ToggleMenu = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const [isActive, setIsActive] = useState(false);

  return (
    <Aside className={`${isActive ? "is-expanded" : ""}`}>
      <Logo>
        <img src={logo} alt="vue" />
      </Logo>
      <MenuToggleContainer>
        <button className="menu-toggle" onClick={ToggleMenu}>
          <MaterialIcons className="material-icons">
            keyboard_double_arrow_right
          </MaterialIcons>
        </button>
      </MenuToggleContainer>
      <h6>Menu</h6>
      <MenuContainer>{linkComponents}</MenuContainer>
    </Aside>
  );
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  height: 100vh;
  position: relative;
  /* position: fixed; */
  overflow-y: scroll;
  /* left: 0;
  top: 0; */
  /* bottom: 0; */
  float: left;
  z-index: 100;
  padding: 1rem;
  // margin-right: 1rem;
  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  @media (max-width: 895px) {
    display: none;
  }
  h6 {
    color: var(--grey);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle {
      top: -3rem;
      transform: rotate(-180deg);
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      padding: 0.7rem 1rem;
      .material-icons {
        margin-right: 1rem;
      }
    }
  }
`;
const MenuItem = styled.div`
  color: #fff;
  /* padding: 0px 10px 20px 0px; */
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  /* justify-content: center; */
  width: 100%;
  transition: 0.4s;
  min-height: 3rem;
  .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .button {
    display: flex;

    width: 4rem;

    align-items: center;
    text-decoration: none;

    padding: 0.5rem 1rem;
    transition: 0.2s ease-out;

    .material-icons {
      font-size: 2rem;
      color: var(--light);
      transition: 0.2s ease-out;
    }
    .text {
      color: var(--light);
      transition: 0.2s ease-out;
    }
    &:hover,
    &.active {
      background-color: var(--dark-alt);

      .material-icons,
      .text {
        color: var(--primary);
        margin-right: 1.5rem;
      }
    }
    &.active {
      border-right: 5px solid var(--primary);
    }
  }
`;
const MenuContainer = styled.div`
  margin: 0 -1rem;

  // display: flex;
  // flex-direction: row;

  .active {
    border-right: 5px solid var(--primary);
    color: var(--primary);
    margin-right: 1.5rem;
  }
`;
const MenuToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-out;
  .menu-toggle {
    transition: 0.2s ease-out;

    border: none;
    outline: none;
    background: none;

    .material-icons {
      font-size: 2rem;
      color: var(--light);
      transition: 0.2s ease-out;
    }
    &:hover {
      .material-icons {
        color: var(--primary);
        transform: translate(0.5rem);
      }
    }
  }
`;
const MaterialIcons = styled.span`
  font-size: 2rem;
  color: var(--light);
  transition: 0.2s ease-out;
  &:hover {
    color: var(--primary);
    transform: translate(0.5rem);
  }
  &.active.material-icons {
  }
`;
const Logo = styled.div`
  margin-bottom: 1rem;
  img {
    max-width: 2rem;
  }
`;
