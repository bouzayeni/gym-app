import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRouteAdmin = () => {
  const { isAuth, role } = useSelector((state) => state.user);
  return isAuth && role==="admin" ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRouteAdmin;