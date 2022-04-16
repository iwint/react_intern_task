import { React, useState } from "react";

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
import User from "./User";
import { Link } from "react-router-dom";

function Topbar(toggle) {
  return (
    <>
      <Container fluid className="p-3 px-0 mx-3 ">
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
            <User />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Topbar;
