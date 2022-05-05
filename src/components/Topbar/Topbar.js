import React from "react";
import { VscChevronDown } from "react-icons/vsc";

import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import { BiBell } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { FaAlignLeft } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { Route, Routes } from "react-router-dom";

import OtherPages from "../../pages/OtherPages";
import PromocodeForm from "../../pages/Form/PromocodeForm";

// import User from "./User";

function Topbar({ toggle, sideBar }) {
  return (
    <>
      <Container fluid className="p-3 px-3 m-0 ">
        <Row>
          <Col lg={1} xs={2}>
            <FaAlignLeft
              color="#5735d2"
              size="40px"
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                borderRadius: "5px",
              }}
              onClick={toggle}
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
          <Col md={2} lg={2} className="ms-lg-auto mx-2 d-none d-md-block">
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
          <Col lg={3} md={2} xs={3} sm={3}>
            <Row>
              <Col md={2} className="">
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
        </Row>
        <Col
          className="content"
          md={
            sideBar
              ? {
                  offset: 1,
                  size: 10,
                }
              : 12
          }
          sm="12"
        >
          <Routes>
            <Route exact path="/otherpages" element={<OtherPages />} />
            <Route exact path="/" element={<PromocodeForm />} />
          </Routes>
        </Col>
      </Container>
    </>
  );
}

export default Topbar;
