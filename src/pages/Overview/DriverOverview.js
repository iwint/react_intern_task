import React, { useState } from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import { Col, Container } from "reactstrap";
import DriverForm from "./Step1";

function DriverOverview() {
  const [ActiveStep, setActiveStep] = useState(0);

  return (
    <Container className="form-container px-5 my-4">
      <Col className="Header">
        <h1 className="header-title">Local Ride</h1>
      </Col>
      <Col>
        <Stepper
          steps={[
            { title: "Step One" },
            { title: "Step Two" },
            { title: "Step Three" },
          ]}
          activeStep={ActiveStep}
          activeColor={"#694bd6"}
        />
      </Col>
      {ActiveStep === 0 && (
        <Col>
          <DriverForm setActiveStep={setActiveStep} ActiveStep={ActiveStep} />
        </Col>
      )}

      {ActiveStep === 1 && <div>Hello</div>}
    </Container>
  );
}

export default DriverOverview;
