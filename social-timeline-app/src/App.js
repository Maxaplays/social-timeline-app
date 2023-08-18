import React from "react";
import "./App.css"; // Import your CSS file if you have one
import Timeline from "./components/Timeline"; // Import the Timeline component

function App() {
  // Sample data for posts
  const posts = [
    { id: 1, content: "Hello, world!", author: "User123" },
    { id: 2, content: "This is a sample post.", author: "JohnDoe" },
    { id: 3, content: "Another post here!", author: "JaneSmith" },
    { id: 4, content: "Greetings from React!", author: "ReactFan" },
    { id: 5, content: "Just sharing a thought...", author: "ThoughtfulPerson" },
    { id: 6, content: "Checking out this app!", author: "AppExplorer" },
    { id: 7, content: "Coding all day!", author: "CodeNinja" },
    { id: 8, content: "The weather is nice today.", author: "WeatherWatcher" },
    { id: 9, content: "Sharing my favorite recipe!", author: "Foodie" },
    { id: 10, content: "Learning React is fun!", author: "LearningEnthusiast" },
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
