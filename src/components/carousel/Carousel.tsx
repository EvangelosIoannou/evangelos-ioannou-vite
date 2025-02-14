import React from "react";
import { useState } from "react";
import styled from "styled-components";

type CarouselProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export default function Carousel({ images }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <CarouselContainer aria-label="Image Slider">
      <div className="img-container">
        <a href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </a>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <SliderBtn
          className="img-slider-btn"
          onClick={showPrevImage}
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <span className="material-icons" aria-hidden>
            keyboard_double_arrow_left
          </span>
        </SliderBtn>
        <SliderBtn
          className="img-slider-btn"
          onClick={showNextImage}
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <span className="material-icons" aria-hidden>
            keyboard_double_arrow_right
          </span>
        </SliderBtn>
        <div className="pagination">
          {images.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <span className="material-symbols-outlined" aria-hidden>
                  radio_button_checked
                </span>
              ) : (
                <span className="material-symbols-outlined" aria-hidden>
                  radio_button_unchecked
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div id="after-image-slider-controls" />
    </CarouselContainer>
  );
}
const CarouselContainer = styled.section`
  position: relative;
  width: 100%;
  height: 700px;
  padding: 2rem;
  .img-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
  }
  .pagination {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    translate: -50%;
    display: flex;
    gap: 1.5rem;
  }
  .img-slider-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
  }
  .img-slider-btn {
    all: unset;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 100ms ease-in-out;
    & > * {
      stroke: white;
      fill: black;
      /* width: 2rem; */
      height: 2rem;
    }
    &:hover,
    &:focus-visible,
    &:active {
      background-color: rgb(0, 0, 0, 0.4);
    }
  }
  @keyframes squish {
    50% {
      scale: 1.4 0.6;
    }
  }
  .img-slider-dot-btn {
    all: unset;
    display: block;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    transition: scale 100ms ease-in-out;
    &:hover,
    &:focus {
      scale: 1.2;
    }
    & > * {
      stroke: white;
      fill: black;
      height: 100%;
      width: 100%;
    }
  }
  .img-slider-dot-btn:focus-visible,
  .img-slider-btn:focus-visible {
    outline: auto;
  }
  @media not (prefers-reduced-motion) {
    .img-slider-img {
      transition: translate 300ms ease-in-out;
    }
    .img-slider-btn:hover > *,
    .img-slider-btn:focus-visible > * {
      animation: squish 200ms ease-in-out;
    }
  }
`;
const SliderBtn = styled.button`
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
`;
