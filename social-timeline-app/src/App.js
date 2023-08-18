import React from "react";
import "./App.css"; // Import your CSS file if you have one
import Timeline from "./components/Timeline"; // Import the Timeline component

function App() {
  // Sample data for posts
  const currentTime = new Date("2023-08-18T14:17:00");

  const posts = [
    {
      id: 1,
      content: "Woof, world!",
      author: "Buddy",
      avatar: require("./assets/pfp1.jpg"),
      timestamp: currentTime,
    },
    {
      id: 2,
      content: "Just taking a paw-some stroll in the park.",
      author: "Charlie",
      avatar: require("./assets/pfp2.jpg"),
      timestamp: new Date(currentTime.getTime() - 5 * 60 * 1000), // 5 minutes ago
    },
    {
      id: 3,
      content: "Bark bark bark!",
      author: "Luna",
      avatar: require("./assets/pfp3.jpg"),
      timestamp: new Date(currentTime.getTime() - 45 * 60 * 1000), // 45 minutes ago
    },
    {
      id: 4,
      content: "Pawsitively excited about React!",
      author: "Max",
      avatar: require("./assets/pfp4.jpg"),
      timestamp: new Date(currentTime.getTime() - 1.5 * 60 * 60 * 1000), // 1.5 hours ago
    },
    {
      id: 5,
      content: "Ruff ruff ruff...",
      author: "Daisy",
      avatar: require("./assets/pfp5.jpg"),
      timestamp: new Date(currentTime.getTime() - 4 * 60 * 60 * 1000), // 4 hours ago
    },
    {
      id: 6,
      content: "Sniffing around this app!",
      author: "Rocky",
      avatar: require("./assets/pfp6.jpg"),
      timestamp: new Date(currentTime.getTime() - 10 * 60 * 60 * 1000), // 10 hours ago
    },
    {
      id: 7,
      content: "Coding like a fur-ninja!",
      author: "Coco",
      avatar: require("./assets/pfp7.jpg"),
      timestamp: new Date(currentTime.getTime() - 16 * 60 * 60 * 1000), // 16 hours ago
    },
    {
      id: 8,
      content: "What a pawsome weather today!",
      author: "Bailey",
      avatar: require("./assets/pfp8.jpg"),
      timestamp: new Date(currentTime.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      id: 9,
      content: "Sharing my favorite bone recipe!",
      author: "Lola",
      avatar: require("./assets/pfp9.jpg"),
      timestamp: new Date(currentTime.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      id: 10,
      content: "Learning React is a tail-wagging experience!",
      author: "Bentley",
      avatar: require("./assets/pfp10.jpg"),
      timestamp: new Date(currentTime.getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>My Social App</h1>
      </header>
      <main className="main">
        <div className="timeline-container">
          <Timeline posts={posts} />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Social App</p>
      </footer>
    </div>
  );
}

export default App;
