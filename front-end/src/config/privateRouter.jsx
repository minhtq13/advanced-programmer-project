import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/storage";
import { appPath } from "./appPath";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = () => {
    const token = getToken();
    if (token) return true;
    return false;
  };

  return isAuthenticated() ? children : <Navigate to={appPath.login} />;
};

export default PrivateRoute;
