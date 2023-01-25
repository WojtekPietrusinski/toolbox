import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login }  from "./login/login";
import { Navbar }  from "./components/navbar";
import { Calculator }  from "./calc/calc";
import { History }  from "./history/history";
import Main from "./dashboard/src/main";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/calc/calc" element={<Calculator />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
