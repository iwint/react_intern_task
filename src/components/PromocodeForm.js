import React from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import Header from "./header";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import BootInputComponent from "./Input";

function PromocodeForm() {
  const disType = [
    {
      key: "Percentage",
      value: "percentage",
    },
    {
      key: "Flat",
      value: "flat",
    },
  ];

  const locationOpt = [
    {
      key: "Coimbatore",
      value: "coimbatore",
    },
    { key: "Trichy", value: "trichy" },
    { key: "Salem", value: "salem" },
    { key: "Chennai", value: "chennai" },
  ];
  const Service = [
    {
      key: "All",
      value: "local,rental,outstation",
    },
    { key: "Local", value: "local" },
    { key: "Rental", value: "rental" },
    { key: "Outstation", value: "outstation" },
  ];

  const initialValues = {
    title: "",
    description: "",
    promocode: "",
    expirydate: null,
    discounttype: "",
    discountpercentage: "",
    discountmaximum: "",
    maximumredemption: "",
    maximumrights: "",
    chooseservice: "",
    location: "",
    discountvalue: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("* Required Field"),
    promocode: Yup.string().required("* Required Field"),
    expirydate: Yup.date().required(" * Required Field"),
    discounttype: Yup.string().required(" * Required Field"),
    discountpercentage: Yup.string().required("* Required Field"),
    location: Yup.string().required("* Required Field"),
    chooseservice: Yup.string().required("* Required Field"),
    discountvalue: Yup.string().required("* Required Field"),
  });

  const onSubmit = (values) => {
    console.log("Promo Codes", values);
  };

  return (
    <Container>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Row>
            <Col md>
              <FormGroup>
                <Label>Title</Label>
                <BootInputComponent
                  name={"title"}
                  type={"textarea"}
                  id={"title"}
                  style={{ resize: "none" }}
                />
              </FormGroup>
            </Col>
            <Col md>
              <FormGroup>
                <Label>Description</Label>
                <BootInputComponent
                  name={"description"}
                  type={"textarea"}
                  id={"description"}
                  style={{ resize: "none" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FormGroup>
                <Label>Promo Code</Label>
                <BootInputComponent
                  name={"promocode"}
                  type={"text"}
                  id={"promocode"}
                />
              </FormGroup>
            </Col>
            <Col md>
              <FormGroup>
                <Label>Expiry Date</Label>
                <BootInputComponent
                  name={"expirydate"}
                  type={"date"}
                  id={"expirydate"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FormGroup>
                <Label>Discount Type</Label>
                <BootInputComponent
                  name={"discounttype"}
                  type={"select"}
                  id={"discounttype"}
                />
                {/* {disType.map((key) => {
                  <option value={key.value}>{key.key}</option>;
                })} */}
              </FormGroup>
            </Col>
            <Col md>
              <FormGroup>
                <Label>Expiry Date</Label>
                <BootInputComponent
                  name={"expirydate"}
                  type={"date"}
                  id={"expirydate"}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
}

export default PromocodeForm;
