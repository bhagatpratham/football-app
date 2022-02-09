import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Matches from "./Components/Matches/Matches";
import News from "./Components/News/News";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <div>
      <nav className="nav-links">
        <ul>
          <h1 className="logo">Score</h1>
          <li>
            <Link to="/">Matches</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Matches />} />
        <Route path="/news" element={<News />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
