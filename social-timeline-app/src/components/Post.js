import React, { useState } from "react";
import LikeButton from "./LikeButton";
import "../styles/Post.scss";
import Overlay from "./Overlay";
import Reply from "./Reply";
import * as IconsOutline from "@heroicons/react/24/outline";

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
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [replies, setReplies] = useState([]);
  const [isReplyVisible, setIsReplyVisible] = useState(false);

  const openOverlay = (event) => {
    setIsOverlayOpen(true);
    setTargetButton(event.target);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleLike = () => {
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    setIsLiked(!isLiked);
    console.log(`Updated like count: ${newLikeCount}`);
  };

  const toggleReplySection = () => {
    setIsReplyVisible(!isReplyVisible);
  };

  const handleReplySubmit = (replyText) => {
    const newReply = {
      author: "Luna",
      content: replyText,
      timestamp: new Date().toISOString(),
    };

    setReplies([...replies, newReply]);
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
          ></Overlay>
          <small>{post.author}</small>
          <span className="dot"></span>
          <span className="timestamp">{timeSincePost}</span>
        </div>

        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <div className="post-actions-icons">
          <LikeButton handleLike={handleLike} isLiked={isLiked} />
          <IconsOutline.ChatBubbleBottomCenterIcon
            className="comment-icon"
            onClick={toggleReplySection}
          />
        </div>

        <span className="like-count">{likeCount} likes</span>
      </div>
      {isReplyVisible && (
        <Reply handleReplySubmit={handleReplySubmit} replies={replies} />
      )}
    </li>
  );
}

export default Post;
