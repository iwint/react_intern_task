import React from "react";
import { Container } from "reactstrap";

function Header() {
  return (
    <Container style={{ backgroundColor: "#f8f7fa" }}>
      <h1
        style={{
          fontSize: "18px",
          padding: "15px",
          textAlign: "center",
          color: "#694bd6",
        }}
      >
        Promo Codes
      </h1>
    </Container>
  );
}

export default Header;
