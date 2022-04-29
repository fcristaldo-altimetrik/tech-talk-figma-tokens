import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";

import Welcome from "./views/welcome/Welcome";
import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
