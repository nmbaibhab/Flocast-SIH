import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("userProfile");
  if (user) return user;
  return false;
};
const PrivateRoute = ({ children }) => {
  const authUser = useAuth();
  console.log(authUser);
  if (!authUser) {
    return <Navigate to="/userLogin" />;
  }
  return children;
};

export default PrivateRoute;
