import React, { useState } from "react";
import "../styles/LikeButton.css";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <button onClick={toggleLike} className={isLiked ? "liked" : ""}>
      {isLiked ? "Unlike" : "Like"}
    </button>
  );
}

export default LikeButton;
