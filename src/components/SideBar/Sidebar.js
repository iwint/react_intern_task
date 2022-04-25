import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Sidebar({ sideBar }) {
  return sideBar ? (
    <Navbar
      color="#ffffff"
      style={{
        backgroundColor: "#ffffff",
        width: "250px",
        height: "100vh",
      }}
    >
      Hello
    </Navbar>
  ) : null;
}

export default Sidebar;
