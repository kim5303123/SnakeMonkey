import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from "./components/Cover";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
// import Location from "./components/Location";
import RSVP from "./components/RSVP";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/location" element={<Location />} /> */}
          <Route path="/rsvp" element={RSVP} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
