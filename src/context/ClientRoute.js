import React, { useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const ClientRoute = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role_type !== "Client") {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user && user.role_type === "Client") {
    return children;
  }

  return null;
};

export default ClientRoute;
