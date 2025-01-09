import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Intro from "./components/Intro";
// import Gallery from "./components/Gallery";
// import Location from "./components/Location";
import RSVP from "./components/RSVP";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route path="/intro" component={Intro} />
          {/* <Route path="/gallery" component={Gallery} /> */}
          {/* <Route path="/location" component={Location} /> */}
          <Route path="/rsvp" component={RSVP} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
