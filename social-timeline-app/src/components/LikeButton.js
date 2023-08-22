import React, { useState } from "react";
import "../styles/LikeButton.scss";
import * as IconsOutline from "@heroicons/react/24/outline";
import * as IconsSolid from "@heroicons/react/24/solid";

function LikeButton({ handleLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
    handleLike(); // Call the handleLike function
  };
  return (
    <button
      onClick={toggleLike}
      className={`like-button ${isLiked ? "liked" : ""}`}
    >
      {isLiked ? (
        <IconsSolid.HeartIcon className="liked-icon" />
      ) : (
        <IconsOutline.HeartIcon className="unliked-icon" />
      )}
    </button>
  );
}

export default LikeButton;
