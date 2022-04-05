import { Field, Formik } from "formik";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Header from "./header";

function PromoCode() {
  return (
    <Container style={{ backgroundColor: "#ffffff", padding: "30px" }}>
      <Header />
      <Formik>
        <Form>
          <Row>
            <Col md>
              <FormGroup>
                <Label>Title</Label>
                <Input type="text" placeholder="Enter your email" />
              </FormGroup>
            </Col>
            <Col md>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Add Promo</Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default PromoCode;
