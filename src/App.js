import React from "react";
import TopSection from "./Components/Page/TopSection";
import Navbar from "./Components/Page/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Components/Page/About";
import Skill from "./Components/Page/Skill";
import Project from "./Components/Page/Project";
import Contact from "./Components/Page/Contact";
import Error from "./Components/Page/Error";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <TopSection />
        <div className="main">
          <div className="main_row">
            <div className="main_col-One">
              <Navbar />
            </div>
            <div className="main_col">
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skill" component={Skill} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/contact" component={Contact} />
                <Route exact component={Error} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
