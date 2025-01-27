import { useEffect, useState } from "react";
import styled from "styled-components";
import PortfolioList from "./PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
  gamesPortfolio,
} from "../../../public/data/portfolio/portfolioData";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "games",
      title: "Games",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "games":
        setData(gamesPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <PortfolioContainer id="portfolio">
      <div className="content">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
        <div className="items-container">
          {data.map((d) => (
            <a
              href={d.available ? d.url : undefined}
              target="_blank"
              onClick={(e) => (d.available ? "" : e.preventDefault())} // Prevent default if disabled
              key={d.id}
            >
              <div className={d.available ? "item" : "item unavailable"}>
                <img src={d.imgSrc} alt="" />
                <h3>{d.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PortfolioContainer>
  );
}
const PortfolioContainer = styled.section`
  padding: 8rem 2rem 2rem;
  height: 100vh;
  min-height: 100vh;
  background-color: var(--charcoal);
  /* background-image: var(--grey-gradient2); */
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding-top: 8rem;
    color: var(--blue6);

    @include mobile {
      font-size: 20px;
    }
  }

  ul {
    margin: 10px;
    padding: 0;
    padding-top: 2rem;
    list-style: none;
    display: flex;

    @include mobile {
      margin: 10px 0;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--blue1);
    border-radius: 2rem;
  }

  .items-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem;

    @include mobile {
      width: 100%;
    }

    .item {
      width: 220px;
      height: 150px;
      border-radius: 20px;
      border: 1px solid rgb(240, 239, 239);
      margin: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: relative;
      transition: all 0.5s ease;
      cursor: pointer;
      background-color: white;

      @include mobile {
        width: 130px;
        height: 100px;
      }

      h3 {
        position: absolute;
        font-size: 20px;
      }

      img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 1;
      }

      &:hover {
        background-color: var(--main-color);
        img {
          opacity: 0.2;
          z-index: 0;
        }
      }
    }
    .unavailable {
      filter: brightness(0.5);
    }
  }
`;
