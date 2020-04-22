import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Header } from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />
          <div className="viewport">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/features">
                <Features />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
