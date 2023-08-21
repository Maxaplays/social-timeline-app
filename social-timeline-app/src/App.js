import React, { useState, useEffect } from "react";
import "./App.scss"; // Import your CSS file if you have one
import Timeline from "./components/Timeline"; // Import the Timeline component

function App() {
  // Sample data for posts

  const [data, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await fetch("https://localhost:7005/api/User/all");
      const postResponse = await fetch("https://localhost:7005/api/Post/all");

      const userData = await userResponse.json();
      const postData = await postResponse.json();
      let postWithUserData = [];

      for (let index = 0; index < userData.length; index++) {
        let dataForEachPost = {
          content: postData[index].description,
          author: userData[index].username,
          avatar: userData[index].avatarUrl,
          timestamp: postData[index].timestamp["localDateTime"],
          likeCount: postData[index].likeCount,
        };
        postWithUserData.push(dataForEachPost);
      }

      setPosts(postWithUserData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>My Social App</h1>
      </header>
      <main className="main">
        <div className="timeline-container">
          <Timeline posts={data} />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Social App</p>
      </footer>
    </div>
  );
}

export default App;
