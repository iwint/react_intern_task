import React from "react";
import { Col, Container, FormGroup, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import BootInputComponent from "./Input";
import styled from "styled-components";
import Header from "./header";

const Button = styled.button``;

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
    discounttype: "Percentage",
    discountpercentage: "Percentage ",
    discountmaximum: "",
    maximumredemption: "",
    minimumrights: "",
    chooseservice: "All",
    location: "Coimbatore",
    discountvalue: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("* Required Field"),
    promocode: Yup.string().required("* Required Field"),
    expirydate: Yup.date().required(" * Required Field"),
    discounttype: Yup.string().required(" * Required Field"),
    discountpercentage: Yup.string().required("* Required Field"),
    discountmaximum: Yup.string().required("* Required Field"),
    maximumredemption: Yup.string().required("* Required Field"),
    location: Yup.string().required("* Required Field"),
    chooseservice: Yup.string().required("* Required Field"),
    discountvalue: Yup.string().required("* Required Field"),
  });

  const onSubmit = (values) => {
    console.log("Promo Codes", values);
  };

  return (
    <Container
      className="px-5"
      style={{ backgroundColor: "#ffffff", padding: "30px" }}
    >
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="px-2">
          <Row className="my-2">
            <Col md>
              <FormGroup>
                <Label className="my-2" for={"title"}>
                  Title
                </Label>
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
                <Label className="my-2" for={"description"}>
                  Description
                </Label>
                <BootInputComponent
                  name={"description"}
                  type={"textarea"}
                  id={"description"}
                  style={{ resize: "none" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col md>
              <FormGroup>
                <Label className="my-2" for={"promocode"}>
                  Promo Code
                </Label>
                <BootInputComponent
                  name={"promocode"}
                  type={"text"}
                  id={"promocode"}
                />
              </FormGroup>
            </Col>
            <Col md>
              <FormGroup>
                <Label className="my-2" for={"expirydate"}>
                  Expiry Date
                </Label>
                <BootInputComponent
                  name={"expirydate"}
                  type={"date"}
                  id={"expirydate"}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col md>
              <FormGroup>
                <Label className="my-2" for={"discounttype"}>
                  Discount Type
                </Label>
                <BootInputComponent
                  name={"discounttype"}
                  type={"select"}
                  id={"discounttype"}
                >
                  {disType.map((type) => (
                    <option value={type.value} key={type.value}>
                      {type.key}
                    </option>
                  ))}
                </BootInputComponent>
              </FormGroup>
            </Col>

            <Col md>
              <FormGroup>
                <Label className="my-2" for={"dicountpercentage"}>
                  Discount Percentage
                </Label>
                <BootInputComponent
                  name={"discountpercentage"}
                  id={"discountpercentage"}
                  type={"text"}
                ></BootInputComponent>
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col md>
              <FormGroup>
                <Label className="my-2" for={"discountmaximum"}>
                  Discount Maximum
                </Label>
                <BootInputComponent
                  name={"discountmaximum"}
                  id={"discountmaximum"}
                  type={"text"}
                />
              </FormGroup>
            </Col>

            <Col md>
              <FormGroup>
                <Label className="my-2" for={"maximumredemption"}>
                  Maximum Redemption per User
                </Label>
                <BootInputComponent
                  name={"maximumredemption"}
                  id={"maximumredemption"}
                  type={"text"}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col md>
              <FormGroup>
                <Label className="my-2" for={"minimumrights"}>
                  Minimum Rights
                </Label>
                <BootInputComponent
                  name={"minimumrights"}
                  id={"minimumrights"}
                  type={"text"}
                />
              </FormGroup>
            </Col>

            <Col md>
              <FormGroup>
                <Label className="my-2" for={"chooseservice"}>
                  Choose Service
                </Label>
                <BootInputComponent
                  name={"chooseservice"}
                  id={"chooseservice"}
                  type={"select"}
                >
                  {Service.map((service) => (
                    <option value={service.value} key={service.value}>
                      {service.key}
                    </option>
                  ))}
                </BootInputComponent>
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col md>
              <FormGroup>
                <Label className="my-2" for="">
                  Location
                </Label>
                <Col md={6}>
                  <BootInputComponent
                    name={"location"}
                    id={"location"}
                    type={"select"}
                  >
                    {locationOpt.map((location) => (
                      <option value={location.value}>{location.key}</option>
                    ))}
                  </BootInputComponent>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Col className="text-center my-4">
            <Button className="mx-3" outline>
              Cancel
            </Button>
            <Button className="mx-3" type={"submit"}>
              Add Promo
            </Button>
          </Col>
        </Form>
      </Formik>
    </Container>
  );
}

export default PromocodeForm;
