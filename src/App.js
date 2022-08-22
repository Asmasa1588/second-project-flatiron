import React from "react";
import NavBar from "./NavBar";
import FormView from "./FormView";
import CarOffersView from "./CarOffersView";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<CarOffersView />} />
          <Route path="/form" element={<FormView />} />
          <Route path="/info" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// APP is the root of the project. It contains all the components
//11: represents the state which determine which route is going to be visulaize.
{/* <NavLink></NavLink> */}