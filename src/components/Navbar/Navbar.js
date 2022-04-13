import { React, useState } from "react";

import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import { BsTextLeft } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { FaAlignLeft } from "react-icons/fa";

function NavbarSection() {
  return (
    <Container className="py-3 px-0">
      <Row md={6}>
        <Col>
          <FaAlignLeft
            color="#5735d2"
            size="40px"
            style={{
              backgroundColor: "#ffffff",
              padding: "8px",
              borderRadius: "5px",
            }}
          />
        </Col>
        <Col>
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
      </Row>
    </Container>
  );
}

export default NavbarSection;
