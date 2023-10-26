import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HomeAdmin from "./admin/HomeAdmin";
import Login from "./components/login";
import Register from "./components/Register";
import MainPage from "./components/aboutcombined";
import Header from "./admin/Header";
import Sidebar from "./admin/SideBar";
import AdminRoute from "./context/AdminRoute";
import ClientRoute from "./context/ClientRoute";
import { UserProvider } from "./context/UserContext";
import Plan from "./components/plan";
import Contact from "./components/contact";
import ClassPlan from "./components/classplan";
import Users from "./admin/User";
import "./admin/Styles/App.css";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  

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
                  <ClassPlan />
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
              path="/admin/*"
              element={
                <AdminRoute>
                  <div className="grid-container">
                    <Header OpenSidebar={OpenSidebar} />
                    <Sidebar
                      openSidebarToggle={openSidebarToggle}
                      OpenSidebar={OpenSidebar}
                    />
                    <Outlet />
                  </div>
                </AdminRoute>
              }
            >
              <Route index element={<HomeAdmin />} />
              <Route path="users" element={<Users />} />
              {/* Add other admin sub-routes here as needed */}
            </Route>
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
