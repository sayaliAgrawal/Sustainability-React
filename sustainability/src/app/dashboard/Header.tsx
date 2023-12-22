import { GlobalOutlined } from "@ant-design/icons";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", 
        backgroundColor: "#0e284d",
        height: "4rem", 
        padding: "0 1rem",
        color: "#ffffff",
      }}>
      <GlobalOutlined style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />
      <h2 style={{ fontSize: "1.5rem", margin:"1rem", color: "#ffffff" }}>
        Sustainability
      </h2>
    </div>
  );
};

export default Header;
