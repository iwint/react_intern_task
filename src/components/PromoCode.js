import { Field, Form, Formik } from "formik";
import React from "react";
import { Col, Container, FormGroup, Label } from "reactstrap";
import Header from "./header";

function PromoCode() {
  return (
    <Container style={{ backgroundColor: "#ffffff", padding: "30px" }}>
      <Header />
      <Formik>
        <Form
          style={{
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FormGroup row>
            <Label for="title">Title</Label>
            <Col>
              <Field
                as="textarea"
                id="title"
                name="title"
                style={{ resize: "none", width: "100%" }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="title">Description</Label>
            <Col>
              <Field
                as="textarea"
                id="Description"
                name="Description"
                style={{ resize: "none", width: "100%" }}
              />
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </Container>
  );
}

export default PromoCode;
