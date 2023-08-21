import React, { useState } from "react";
import LikeButton from "./LikeButton";
import "../styles/Post.scss";
import Overlay from "./Overlay";

function calculateTimeSincePost(timestamp) {
  const currentTime = new Date();
  const parsedTimestamp = new Date(timestamp);
  const timeDifference = currentTime - parsedTimestamp;

  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInWeek = msInDay * 7;
  const msInYear = msInDay * 365;

  if (timeDifference < msInMinute) {
    return `${Math.floor(timeDifference / msInSecond)}s`;
  } else if (timeDifference < msInHour) {
    return `${Math.floor(timeDifference / msInMinute)}m`;
  } else if (timeDifference < msInDay) {
    return `${Math.floor(timeDifference / msInHour)}h`;
  } else if (timeDifference < msInWeek) {
    return `${Math.floor(timeDifference / msInDay)}d`;
  } else if (timeDifference < msInYear) {
    return `${Math.floor(timeDifference / msInWeek)}w`;
  } else {
    return `${Math.floor(timeDifference / msInYear)}y`;
  }
}

function Post({ post, userData }) {
  const timeSincePost = calculateTimeSincePost(post.timestamp);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [targetButton, setTargetButton] = useState(null);

  const openOverlay = (event) => {
    setIsOverlayOpen(true);
    setTargetButton(event.target);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
  const user = userData.find((user) => user.author === post.author);

  return (
    <li className="post">
      <div className="post-content">
        <div className="post-content-header">
          <img
            src={post.avatar}
            alt={`Profile of ${post.author}`}
            className="avatar"
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
          />
          <Overlay
            isOpen={isOverlayOpen}
            onClose={closeOverlay}
            target={targetButton}
            userData={user}
          >
            <h2>Overlay Content</h2>
            <p>This is the content of the overlay.</p>
          </Overlay>
          <small>{post.author}</small>
          <span className="dot"></span>
          <span className="timestamp">{timeSincePost}</span>
        </div>

        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <LikeButton />
      </div>
    </li>
  );
}

export default Post;
