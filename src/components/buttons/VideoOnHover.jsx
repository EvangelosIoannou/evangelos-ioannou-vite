import React, { useRef } from "react";
import styled from "styled-components";

export default function VideoOnHover() {
  return (
    <VideoOnHoverContainer>
      <video
        src="/data/home/vid.mp4"
        loop
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        allow="autoplay"
      ></video>
      <div className="info">
        <div className="avatar">
          <img src="/data/portfolio/ProfilePicture.jpeg" alt="" />
        </div>
        <div className="text">
          <div className="title">This is video title</div>
          <div className="channel">Video channel</div>
          <div className="group">
            <span className="views">23K views</span>
            <span className="hours">5 hours ago</span>
          </div>
        </div>
      </div>
    </VideoOnHoverContainer>
  );
}

const VideoOnHoverContainer = styled.div`
  video {
    width: 800px;
    height: 450px;
    display: block;
    cursor: pointer;
  }

  .info {
    display: flex;
    margin-top: 30px;
  }

  .avatar {
    width: 150px;
    display: flex;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    font-size: 30px;
    font-weight: 800;
  }

  .channel {
    font-size: 20px;
  }

  span {
    font-size: 16px;
  }
`;
