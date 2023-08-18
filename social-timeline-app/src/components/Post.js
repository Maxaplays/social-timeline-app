import React from "react";
import LikeButton from "./LikeButton"; // Import the LikeButton component
import "../styles/Post.css";

function Post({ post }) {
  return (
    <li className="post">
      <div className="post-content">
        <p>{post.content}</p>
        <small>{post.author}</small>
      </div>
      <div className="post-actions">
        <LikeButton />
        {/* Add more actions like "Reply" button */}
      </div>
    </li>
  );
}

export default Post;
