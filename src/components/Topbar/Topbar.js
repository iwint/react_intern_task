import React from "react";
import { VscChevronDown } from "react-icons/vsc";

import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Nav,
  Navbar,
  NavItem,
  Row,
} from "reactstrap";
import { BiBell } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { FaAlignLeft } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";

function Topbar({ toggle, sideBar }) {
  return (
    <>
      <Navbar
        expand="md"
        className="topbar p-3 px-0 mx-3 col-12"
        style={{
          height: "100px",
          width: "100%",
          position: "relative",
          left: "0",
          right: "0",
        }}
      >
        <Nav>
          <NavItem className="navItem">
            <FaAlignLeft onClick={toggle} />
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default Topbar;
