import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Classes from "./components/classes";
import Login from "./components/login";
import AboutUs from "./components/about";
import ContactUs from "./components/contact";

function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/classes" component={Classes} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
        </Routes>
      
    </Router>
  );
}

export default App;
