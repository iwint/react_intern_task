import React from "react";
import { VscChevronDown } from "react-icons/vsc";

import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
<<<<<<< HEAD
  Navbar,
=======
  Nav,
  Navbar,
  NavItem,
>>>>>>> 92e8dd54ac197e15d9c7a8e20f2489e2444b9880
  Row,
} from "reactstrap";
import { BiBell } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { FaAlignLeft } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
<<<<<<< HEAD
// import User from "./User";
=======
>>>>>>> 92e8dd54ac197e15d9c7a8e20f2489e2444b9880
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";

<<<<<<< HEAD
function Topbar({ toggleSideBar, sideBar }) {
  return (
    <>
      {/* <Container fluid className="p-3 px-3 m-0 "> */}
      {/* <Row>
          <Col lg={1} xs={2}>
            <FaAlignLeft
              color="#5735d2"
              size="40px"
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                borderRadius: "5px",
              }}
              onClick={toggleSideBar}
            />
          </Col>
          <Col md={5} xs={7}>
            <InputGroup>
              <InputGroupText
                style={{
                  backgroundColor: "#ffffff",
                  border: "none",
                  borderColor: "#ffffff",
                }}
              >
                <RiSearch2Line color="#8D8D8E" style={{ fontWeight: "bold" }} />
              </InputGroupText>
              <Input
                style={{
                  backgroundColor: "#ffffff",
                  color: "#8D8D8E",
                  border: "none",
                  fontSize: "14px",
                }}
                className="p-2 input"
                placeholder="Search anything"
              />
            </InputGroup>
          </Col>
          <Col md={2} lg={1} className="ms-lg-auto mx-2 d-none d-md-block">
            <RiLightbulbFlashLine
              color="#09090a"
              className="p-1"
              size="32px"
              style={{ backgroundColor: "#eceef5", borderRadius: "5px" }}
            />
            <BiBell
              color="#09090a"
              className="p-1 ms-3"
              size="32px"
              style={{ backgroundColor: "#eceef5", borderRadius: "5px" }}
            />
          </Col>
          <Col md={2} xs={3} sm={2}>
            <Row>
              <Col md={1} className="">
                <VscChevronDown
                  color="#09090a"
                  className="p-1 my-2 "
                  size="25px"
                  style={{ backgroundColor: "#eceef5", borderRadius: "5px" }}
                />
              </Col>

              <Col
                style={{ lineHeight: "5px" }}
                className=" d-none d-lg-block px-4"
              >
                <h5 style={{ fontSize: "17px" }}>Alan Walker</h5>
                <small className="text-muted ms-4">Coimbatore</small>
              </Col>
              <Col>
                <img
                  src="/user.jpg"
                  alt="ProfilePic"
                  className="rounded"
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
            </Row>
          </Col>
        </Row> */}
      <Navbar color="light" light className=" p-3 mb-5  rounded" expand="md">
        <Row>
          <Col>
            <FaAlignLeft
              color="#5735d2"
              size="40px"
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                borderRadius: "5px",
              }}
              onClick={toggleSideBar}
            />
          </Col>
        </Row>
      </Navbar>
      {/* </Container> */}
=======
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
>>>>>>> 92e8dd54ac197e15d9c7a8e20f2489e2444b9880
    </>
  );
}

export default Topbar;
