import React from "react";
import styled from "styled-components";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <TestimonialsContainer id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </TestimonialsContainer>
  );
}
const TestimonialsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-color);

  @include mobile {
    justify-content: space-around;
  }

  h1 {
    font-size: 50px;

    @include mobile {
      font-size: 20px;
    }
  }

  .container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @include mobile {
      flex-direction: column;
      height: 100%;
    }

    .card {
      width: 250px;
      height: 70%;
      border-radius: 10px;
      box-shadow: 0px 0px 15px -8px black;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      transition: all 1s ease;

      @include mobile {
        height: 180px;
        margin: 10px 0;
      }

      &.featured {
        width: 300px;
        height: 75%;
        margin: 0 30px;

        @include mobile {
          width: 250px;
          height: 180px;
          margin: 1px;
        }
      }

      &:hover {
        transform: scale(1.1);
      }

      .top {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          &.left,
          &.right {
            height: 25px;
          }
          &.user {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 30px;

            @include mobile {
              width: 30px;
              height: 30px;
            }
          }
        }
      }

      .center {
        padding: 10px;
        border-radius: 10px;
        background-color: rgb(250, 244, 245);

        @include mobile {
          font-size: 12px;
          padding: 5px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        h3 {
          margin-bottom: 5px;

          @include mobile {
            font-size: 14px;
          }
        }
        h4 {
          color: rgb(121, 115, 115);
          @include mobile {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
