import React, { useRef, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Topbar from "../components/portfolio/Topbar";
import Intro from "../components/portfolio/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Works from "../components/portfolio/Works";
// import Testimonials from "../components/portfolio/Testimonials";
import Testimonials from "../components/testimonials/Testimonials";
// import Contact from "../components/portfolio/Contact";
import Menu from "../components/portfolio/Menu";
import ImageAndText from "../components/image-and-text/ImageAndText";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/portfolio/Home";
import Education from "../components/portfolio/Education";
import Services from "../components/portfolio/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Grid from "../components/grids/Grid";
import Projects from "../components/projects/Projects";
import Cards from "../components/card/Cards";
import AboutUs from "../components/about-us/AboutUs";

export default function HomeView() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const navLinks = sectionsRef.current
  //   ? [...sectionsRef.current.querySelectorAll(":scope > header nav a")]
  //   : [];
  // setNavLinks(navLinks);
  const sectionsRef = useRef(null);
  const elementRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //     const entry = entries[0];
  //     console.log("entry", entry.target);
  //   });
  //   observer.observe(elementRef.current);
  // }, []);

  const sections = sectionsRef.current
    ? [...sectionsRef.current.querySelector(":scope > section")]
    : [];

  console.log(sections);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log("entry", entry);
  //     });
  //   });
  //   observer.observe(sections[0]);
  // }, []);

  return (
    <HomeViewContainer>
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <Home />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Projects />
      <Cards /> */}
      {/* <Education />
      <Services /> */}
      {/* <Testimonials /> */}

      {/* <div className="sections">
        <ImageAndText />
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div> */}
    </HomeViewContainer>
  );
}
const HomeViewContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  /* background-image: var(--gradient2);
  background-size: 400%;
  animation: bg-animation 20s infinite alternate; */
  .sections {
    height: 100vh;
    /* height: calc(100vh - 70px); */
    /* flex: 1; */
    /* background-color: lightsalmon; */
    position: relative;
    /* overflow-x: hidden; */
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scrollbar-width: none; //firefox
    &::-webkit-scrollbar {
      display: none;
    }
    /* > * {
      width: 100%;
      height: calc(100vh - 70px);
      scroll-snap-align: start;
    } */
  }
  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;
