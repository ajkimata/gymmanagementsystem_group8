import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeAdmin from "./admin/HomeAdmin";
import { Classes } from "./components/classes";
import Login from "./components/login";
import AboutUs from "./components/about";
import { Contact } from "./components/contact";
import { Register } from "./components/Register";
import Header from "./admin/Header";
import SideNav from "./admin/SideNav";
import Footer from "./admin/Footer";
import "./App.css";
function App() {
  function handleCallbackRespone(response) {
    console.log("Encoded JWT tOKEN: " + response.credential);
  }

  return (
    <Router>
      <div>
        <Navbar />
        {/* Client-side routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
        </Routes>

        {/* Admin-side routes */}
        <Routes>
          <Route
            path="/admin"
            element={
              <div className="wrapper">
                <Header />
                <Footer />
                <HomeAdmin />
                <SideNav />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
