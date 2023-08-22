import React, { useState } from "react";
import "../styles/Reply.scss";

function Reply({ handleReplySubmit, replies }) {
  const [replyText, setReplyText] = useState("");

  const handleInputChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleSubmit = () => {
    if (replyText.trim() !== "") {
      handleReplySubmit(replyText); // Call the handleReplySubmit function from Post
      setReplyText(""); // Clear the input field
    }
  };

  return (
    <div className="reply-component">
      <div className="reply-buttons-container">
        <input
          className="reply-input"
          type="text"
          placeholder="Write a reply..."
          value={replyText}
          onChange={handleInputChange}
        />
        <button className="post-reply-button" onClick={handleSubmit}>
          Post Reply
        </button>
      </div>
      <div className="replies-container">
        <ul className="replies-list">
          {replies.map((reply, index) => (
            <li key={index} className="reply-item">
              <img
                src="./assets/pfp12.jpg"
                alt="Profile of commenter"
                className="reply-pfp"
              />
              <div className="reply-info">
                <p className="reply-author">{reply.author}</p>
                <p className="reply-content">{reply.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reply;
