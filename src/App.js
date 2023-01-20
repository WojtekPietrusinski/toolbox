import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login }  from "./login/index";
import { Navbar }  from "./components/navbar";
import { Calculator }  from "./calc/calc";
import { History }  from "./history/index";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Calculator />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
