import React from "react";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-style">
      <div className="children-container">{children}</div>
    </div>
  );
};

export default Layout;
