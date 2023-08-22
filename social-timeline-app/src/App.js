import React, { useState, useEffect } from "react";
import "./App.scss"; // Import your CSS file if you have one
import Timeline from "./components/Timeline"; // Import the Timeline component
import SuggestedAccounts from "./components/SuggestedAccounts";

function App() {
  // Sample data for posts

  const [data, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);

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
      let showUserData = [];
      console.log(postData);

      for (let index = 0; index < userData.length; index++) {
        let dataForEachPost = {
          id: postData[index].id,
          content: postData[index].description,
          author: userData[index].username,
          avatar: userData[index].avatarUrl,
          timestamp: postData[index].timestamp["localDateTime"],
          likeCount: postData[index].likeCount,
        };
        postWithUserData.push(dataForEachPost);
      }
      for (let index = 0; index < userData.length; index++) {
        let dataRelatedToUsers = {
          author: userData[index].username,
          bio: userData[index].bio,
          avatar: userData[index].avatarUrl,
          joinDate: userData[index].joinDate["localDateTime"],
          followers: userData[index].followers,
          following: userData[index].following,
          postsCount: userData[index].postsCount,
        };
        showUserData.push(dataRelatedToUsers);
      }

      setPosts(postWithUserData);
      setUserData(showUserData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <img src="./logoDog.PNG" alt="Doggram logo"></img>
          <h1>Doggram</h1>
        </div>
      </header>
      <main className="main">
        <div className="timeline-container">
          <Timeline posts={data} userData={userData} />
        </div>
        <div className="suggested-accounts-container">
          <SuggestedAccounts suggestedAccounts={userData} />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Social App</p>
      </footer>
    </div>
  );
}

export default App;
