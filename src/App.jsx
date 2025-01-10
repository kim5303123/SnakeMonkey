import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cover from "./components/Cover";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
// import Location from "./components/Location";
import RSVP from "./components/RSVP";
// import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/intro">소개</Link>
            </li>
            <li>
              <Link to="/gallery">갤러리</Link>
            </li>
            <li>
              <Link to="/location">오시는 길</Link>
            </li>
            <li>
              <Link to="/rsvp">참석여부</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
