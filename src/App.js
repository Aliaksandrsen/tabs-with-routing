import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "./App.css";

const Tab = ({ children }) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const moveHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const hideHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      opacity: 0,
    });
  };

  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink to="/">Home</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/">About</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/">Features</NavLink>
            </Tab>
          </div>
          <div className="viewport">Pages Go Here</div>
        </div>
      </div>
    </Router>
  );
};

export default App;
