import React, { useState } from "react";
import "../styles/LikeButton.css";
import * as IconsOutline from "@heroicons/react/24/outline";
import * as IconsSolid from "@heroicons/react/24/solid";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);

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
