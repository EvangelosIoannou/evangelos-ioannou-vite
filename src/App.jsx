import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ListUser from "./components/crud/ListUser";
import CreateUser from "./components/crud/CreateUser";
import Nasa from "./components/nasa/Nasa";
import Todo from "./components/todo/Todo";
import "./App.css";
import EditUser from "./components/crud/EditUser";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";
import HomeView from "./views/HomeView";
import ErrorView from "./views/ErrorView";
import AboutUsView from "./views/AboutUsView";
import ImagesView from "./views/ImagesView";
import ComponentsView from "./views/ComponentsView";
import ProjectsView from "./views/ProjectsView";
import PlaygroundView from "./views/PlaygroundView";
import Navbar from "./components/navbar/Navbar";
import GamesHub from "./components/games-hub/GamesHub";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import AboutUs from "./components/about-us/AboutUs";

function App() {
  const navbarRef = useRef(null);
  const [navHeight, setNavHeight] = useState(60); // Default height

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router>
      <AppContainer>
        {/* <Sidebar /> */}
        <Navbar ref={navbarRef} />
        <RouterView $navHeight={navHeight}>
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/images" element={<ImagesView />} />
            <Route exact path="/components" element={<ComponentsView />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/playground" element={<PlaygroundView />} />
            <Route exact path="/projects" element={<ProjectsView />} />
            <Route exact path="/games" element={<GamesHub />} />
            <Route exact path="/web" element={<GamesHub />} />
            <Route exact path="/mobile" element={<GamesHub />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </RouterView>
      </AppContainer>
    </Router>
  );
}
const AppContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: "PT Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Monserrat", sans-serif;
  box-sizing: border-box;
  body {
    color: var(--main-color);
  }
  .skip-link {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
  .skip-link:focus-visible {
    top: 0;
    left: 0;
    border: 1px solid black;
    background-color: white;
    padding: 0.5rem;
    width: auto;
    height: auto;
    margin: 0;
    clip: unset;
    text-decoration: none;
    color: black;
    z-index: 100;
  }
`;
const RouterView = styled.main`
  /* flex: 1; */
  width: 100%;
  padding-top: ${(props) => props.$navHeight}px;
  /* height: 100vh; */
  /* overflow: hidden; */
  /* overflow-y: scroll; */
`;

export default App;
