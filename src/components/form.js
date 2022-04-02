import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Formik } from "formik";
import Header from "./header";

function FormPage() {
  return (
    <Container
      sm={12}
      style={{ backgroundColor: "#ffffff", padding: "50px", width: "100%" }}
    >
      <Header />
      <Formik>
        <Form>
          <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
            <Col>
              <Label>Title</Label>
              <Col sm={10}>
                <Input type="textarea" style={{ resize: "none" }} />
              </Col>
            </Col>
            <Col>
              <Label>Description</Label>
              <Col sm={10}>
                <Input type="textarea" style={{ resize: "none" }} />
              </Col>
            </Col>
          </FormGroup>
          <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
            <Col>
              <Label>Promo Code</Label>
              <Col sm={10}>
                <Input type="text" />
              </Col>
            </Col>
            <Col>
              <Label>Expiry Date</Label>
              <Col sm={10}>
                <Input type="date" />
              </Col>
            </Col>
          </FormGroup>
          <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
            <Col>
              <Label>Discount Type</Label>
              <Col sm={10}>
                <Input type="textarea" style={{ resize: "none" }} />
              </Col>
            </Col>
            <Col>
              <Label>Discount Percentage</Label>
              <Col sm={10}>
                <Input type="textarea" style={{ resize: "none" }} />
              </Col>
            </Col>
          </FormGroup>
        </Form>
      </Formik>

      <Col>
        <Button>Add Promo</Button>
        <Button>Cancel</Button>
      </Col>
    </Container>
  );
}

export default FormPage;
