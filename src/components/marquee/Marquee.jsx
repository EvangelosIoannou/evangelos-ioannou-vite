import React from "react";
import styled from "styled-components";

export default function Marquee() {
  const items = [
    {
      key: 1,
      className: "item item1",
    },
    {
      key: 2,
      className: "item item2",
    },
    {
      key: 3,
      className: "item item3",
    },
    {
      key: 4,
      className: "item item4",
    },
    {
      key: 5,
      className: "item item5",
    },
    {
      key: 6,
      className: "item item6",
    },
    {
      key: 7,
      className: "item item7",
    },
    {
      key: 8,
      className: "item item8",
    },
  ];
  return (
    <MarqueeContainer>
      {items.map(({ key, className }) => (
        <div key={key} className={className}></div>
      ))}
    </MarqueeContainer>
  );
}
const MarqueeContainer = styled.div`
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
  @keyframes scrollLeft {
    to {
      left: -200px;
    }
  }
  .item {
    width: 200px;
    height: 100px;
    background-color: red;
    border-radius: 6px;
    position: absolute;
    left: max(calc(200px * 8), 100%);
    animation-name: scrollLeft;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .item1 {
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
  }
  .item2 {
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
  }
  .item3 {
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
  }
  .item4 {
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
  }
  .item5 {
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
  }
  .item6 {
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
  }
  .item7 {
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
  }
  .item8 {
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
  }
`;
