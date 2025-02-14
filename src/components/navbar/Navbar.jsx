import React, { useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";
// import navbarData from "../sidebar/navbarData";

const Navbar = forwardRef((props, ref) => {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const sectionsRef = useRef(null);
  const navLinksRef = useRef(null);
  const navbarData = [
    // {
    //   title: "Home",
    //   href: "/#home",
    //   className: "active",
    // },
    {
      title: "Services",
      href: "/services",
      className: "",
    },
    {
      title: "Games",
      href: "/games",
      className: "",
    },
    // {
    //   title: "Projects",
    //   href: "/#portfolio",
    //   className: "",
    // },
    {
      title: "Components",
      href: "/components",
      className: "",
    },
    // {
    //   title: "Education",
    //   href: "#education",
    //   className: "",
    // },
    // {
    //   title: "Testimonials",
    //   href: "#testimonials",
    //   className: "",
    // },
    {
      title: "Contact",
      href: "/contact",
      className: "",
    },
  ];

  const sections = sectionsRef.current
    ? [...sectionsRef.current.querySelectorAll(":scope > section")]
    : [];

  function toggleMenu() {
    menuIconRef.current.classList.toggle("bx-x");
    navbarRef.current.classList.toggle("active");
  }

  function toggleActive(e) {
    let navLinks = navbarRef.current.children;
    // for (let link of navLinks) {
    //   link.classList.remove("active");
    // }
    //To work with older browsers like IE
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    e.target.classList.add("active");
    menuIconRef.current.classList.toggle("bx-x");
    navbarRef.current.classList.toggle("active");
  }

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //   });
  //   observer.observe(sections.current);
  // }, []);

  const aComponents = navbarData.map(({ title, href, className }) => (
    <a
      href={href}
      className={className}
      key={title}
      ref={navLinksRef}
      onClick={toggleActive}
    >
      {title}
    </a>
  ));

  return (
    <NavbarContainer ref={ref}>
      <div className="left">
        <a href="/#home" className="logo">
          <span>Evangelos</span>
          {/* <span>Ioannou</span> */}
        </a>
      </div>
      <div className="right">
        <i
          ref={menuIconRef}
          className="bx bx-menu"
          id="menu-icon"
          onClick={toggleMenu}
        ></i>

        <nav ref={navbarRef} className="navbar">
          {aComponents}
        </nav>
      </div>
    </NavbarContainer>
  );
});

export default Navbar;
const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 4rem;
  background-image: var(--plumbeous-gradient1);
  height: 60px;
  /* background: rgba(0, 0, 0, 0.3); */
  /* backdrop-filter: blur(10px); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  scroll-behavior: smooth;

  .logo {
    font-size: 3rem;
    color: var(--text-color);
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .logo:hover {
    transform: scale(1.1);
  }
  .logo span {
    text-shadow: 0 0 15px var(--blue6);
  }
  .navbar a {
    font-size: 1.8rem;
    color: var(--text-color);
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    scroll-behavior: smooth;
    border-bottom: 3px solid transparent;
  }
  .navbar a:hover,
  .navbar a.active {
    color: var(--blue6);
    border-bottom: 3px solid var(--blue6);
  }
  #menu-icon {
    font-size: 3.6rem;
    color: var(--blue6);
    cursor: pointer;
    display: none;
  }
  @media (max-width: 895px) {
    padding: 2rem 2.5rem;
    #menu-icon {
      display: block !important;
    }
    .navbar {
      position: absolute;
      top: 100%;
      right: 0;
      width: 50%;
      padding: 1rem 3%;
      /* background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(20px); */
      border-bottom-left-radius: 2rem;
      border-left: 2px solid var(--blue6);
      border-bottom: 2px solid var(--blue6);
      display: none;
    }
    .navbar.active {
      display: block !important;
    }
    .navbar a {
      display: block;
      font-size: 2rem;
      margin: 3rem 0;
      color: white;
    }
  }
`;
