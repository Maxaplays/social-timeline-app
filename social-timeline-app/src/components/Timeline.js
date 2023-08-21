import React from "react";
import Post from "./Post"; // Import the Post component
import "../styles/Timeline.scss";

function Timeline({ posts, userData }) {
  return (
    <div className="timeline">
      <ul className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} userData={userData} />
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
