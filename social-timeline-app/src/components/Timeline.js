import React from "react";
import Post from "./Post"; // Import the Post component
import "../styles/Timeline.scss";

function Timeline({ posts }) {
  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
