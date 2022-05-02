import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";

import LogIn from "./views/logIn/LogIn";
import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/product" element={<Home />} />
          <Route exact path="/" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
