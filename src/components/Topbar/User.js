import React from "react";
import { Col, Row } from "reactstrap";
import { VscChevronDown } from "react-icons/vsc";

function User() {
  const UserIcon = "/user.jpg";

  return (
    <Row>
      <Col md={1} xs={3}>
        <VscChevronDown
          color="#09090a"
          className="p-1 my-2"
          size="25px"
          style={{ backgroundColor: "#eceef5", borderRadius: "5px" }}
        />
      </Col>

      <Col style={{ lineHeight: "5px" }} className="ms-3 d-none d-lg-block">
        <h5 style={{ fontSize: "17px" }}>Alan Walker</h5>
        <small className="text-muted ms-4">Coimbatore</small>
      </Col>
      <Col className="d-flex flex-md-row">
        <img src={UserIcon} alt="ProfilePic" className="rounded w-50 " />
      </Col>
    </Row>
  );
}

export default User;
