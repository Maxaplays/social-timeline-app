import React from "react";
import "../styles/Overlay.scss";

function Overlay({ isOpen, target, userData }) {
  if (!isOpen) {
    return null;
  }
  const targetRect = target.getBoundingClientRect();
  const overlayStyle = {
    top: `${targetRect.top}px`,
    left: `${targetRect.right}px`,
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return (
    <div className="overlay" style={overlayStyle}>
      <div className="overlay-content">
        <img
          src={userData.avatar}
          alt={`Profile of ${userData.author}`}
          className="avatar-overlay"
        />
        <div className="overlay-grid">
          <p className="overlay-grid-columnA">{userData.author}</p>
          <p className="overlay-grid-columnB">
            Followers: {userData.followers}
          </p>
          <div className="line"></div>
          <div className="overlay-grid-columnA">
            <div className="overlay-grid-memberSince">
              <p>Member since:</p>
              <p>{formatDate(userData.joinDate)}</p>
            </div>
          </div>
          <p className="overlay-grid-column-bottom">Bio: {userData.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
