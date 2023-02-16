import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Appp.css";
import { Login }  from "./login/login";
import { Navbar }  from "./components/navbar";
import { Calculator }  from "./calc/calc";
import { History }  from "./history/history";
import App from "./dashboard/src/App";
// import { Home } from "./home/src/Home";


function Appp() {

  return (
    <div className="Appp">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/calc/calc" element={<Calculator />} />
          <Route path="/history" element={<History />} />
          <Route path="/main/src/main" element={<App />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Appp;
