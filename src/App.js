import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeAdmin from "./admin/HomeAdmin";
import Classes from "./components/classes";
import Login from "./components/login";
import Register from "./components/Register";
import MainPage from "./components/aboutcombined";
import Header from "./admin/Header";
import SideNav from "./admin/SideNav";
import Footer from "./admin/Footer";
import AdminRoute from "./context/AdminRoute";
import ClientRoute from "./context/ClientRoute";
import { UserProvider } from "./context/UserContext";
import Plan from "./components/plan";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <div>
          <Navbar />
          <Routes>
            {/* Client-side routes */}
            <Route
              path="/"
              element={
                <ClientRoute>
                  <Home />
                </ClientRoute>
              }
            />
            <Route path="/plan" element={<Plan />} />
            <Route
              path="/classes"
              element={
                <ClientRoute>
                  <Classes />
                </ClientRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/about"
              element={
                <ClientRoute>
                  <MainPage />
                </ClientRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ClientRoute>
                  <Contact />
                </ClientRoute>
              }
            />
            <Route path="/Register" element={<Register />} />

            {/* Admin-side routes */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <div className="wrapper">
                    <Header />
                    <Footer />
                    <Routes>
                      {/* Nested admin routes */}
                      <Route path="/" element={<HomeAdmin />} />
                      {/* Add other admin-specific routes here */}
                    </Routes>
                    <SideNav />
                  </div>
                </AdminRoute>
              }
            />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
