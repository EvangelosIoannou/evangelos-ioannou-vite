import { useState } from "react";
import styled from "styled-components";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <WorksContainer id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 90}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </WorksContainer>
  );
}
const WorksContainer = styled.div`
  background-color: crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .arrow {
    height: 50px;
    position: absolute;
    cursor: pointer;

    @include mobile {
      display: none;
    }

    &.left {
      left: 100px;
      transform: rotateY(180deg);
    }

    &.right {
      right: 100px;
    }
  }

  .slider {
    height: 350px;
    display: flex;
    position: absolute;
    left: 0;
    transition: all 1s ease-out;

    @include mobile {
      height: 100vh;
      flex-direction: column;
      justify-content: center;
    }

    .container {
      width: 90vw;
      display: flex;
      align-items: center;
      justify-content: center;

      .item {
        width: 700px;
        height: 100%;
        background-color: white;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        @include mobile {
          width: 80%;
          height: 150px;
          margin: 15px 0;
        }

        .left {
          flex: 4;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;

          .leftContainer {
            width: 90%;
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .imgContainer {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background-color: rgb(245, 179, 155);
              display: flex;
              align-items: center;
              justify-content: center;

              @include mobile {
                width: 20px;
                height: 20px;
              }

              img {
                width: 25px;

                @include mobile {
                  width: 15px;
                }
              }
            }
            h2 {
              font-size: 20px;

              @include mobile {
                font-size: 13px;
              }
            }
            p {
              font-size: 13px;
              @include mobile {
                display: none;
              }
            }
            span {
              font-size: 12px;
              font-weight: 600;
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        .right {
          flex: 8;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          img {
            width: 400px;
            transform: rotate(-10deg);
          }
        }
      }
    }
  }
`;
