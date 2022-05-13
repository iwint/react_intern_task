import React, { useState } from "react";
import { Stepper } from "react-form-stepper";

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
            { label: "Details" },
            { label: "Estimation" },
            { label: "Confirmation" },
          ]}
          activeStep={ActiveStep}
        />
      </Col>
      {ActiveStep === 0 && (
        <Col>
          <DriverForm setActiveStep={setActiveStep} ActiveStep={ActiveStep} />
        </Col>
      )}
      <Col>{ActiveStep === 1 && <div>Hello</div>}</Col>
      <Col>{ActiveStep === 2 && <div>Done</div>}</Col>
    </Container>
  );
}

export default DriverOverview;
