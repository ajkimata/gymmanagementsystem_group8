import React, { useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || (user.role_type !== "Admin" && user.role_type !== "Trainer")) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user && (user.role_type === "Admin" || user.role_type === "Trainer")) {
    return children;
  }

  return null;
};

export default AdminRoute;
