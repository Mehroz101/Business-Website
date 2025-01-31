import React, { useState } from "react";
import { Navbar } from "../utils/LazyLoadComponent";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="sidebar_components">
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
