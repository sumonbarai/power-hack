import React from "react";
import { Outlet } from "react-router-dom";
import useAuthChecked from "../hooks/useAuthChecked";

const Layout = () => {
  const authChecked = useAuthChecked();
  return !authChecked ? (
    <div>Auth checking...</div>
  ) : (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Layout;
