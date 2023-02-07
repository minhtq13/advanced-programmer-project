import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../utils/storage";
import { appPath } from "./appPath";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const currentCinema = location?.pathname.split("/")[1];
  const isAuthenticated = () => {
    const token = getToken();
    if (token) return true;
    return false;
  };

  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to={`/${currentCinema}${appPath.login}`} />
  );
};

export default PrivateRoute;
