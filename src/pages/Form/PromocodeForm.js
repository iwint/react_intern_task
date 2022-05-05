import React, { useState } from "react";
import { Col, Container, FormGroup, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import BootInputComponent from "./Input";
import styled from "styled-components";
import Header from "./header";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Popup from "./Popup";

const Button = styled.button``;

function PromocodeForm() {
  const [isOpen, setisOpen] = useState(false);
  const PopUp = () => {
    setisOpen((p) => !p);
  };
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
    minimumrights: "",
    chooseservice: "",
    location: "",
    discountvalue: "0",
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
    minimumrights: Yup.string().required("* Required Field"),
  });

  const [flat, setflat] = useState(false);

  const onSubmit = (values) => {
    console.log("Promo Codes", values);
  };

  const DistTypeChange = (e) => {
    if (e.target.value === "flat") {
      setflat(true);
    } else {
      setflat(false);
    }
  };
  return (
    <Container
      className="px-5 my-4"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "30px",
        paddingBottom: "5px",
        height: "auto",
      }}
    >
      <Header />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, isValid, values }) => {
          return (
            <Form className="px-2">
              <Row className="my-2">
                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"title"}>
                      Title
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
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
                      Promo Code{" "}
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
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
                      Expiry Date{" "}
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
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
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"discounttype"}
                      type={"select"}
                      id={"discounttype"}
                      onChange={(e) => {
                        handleChange(e);
                        DistTypeChange(e);
                      }}
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
                    <Label className="my-2" for={"maximumredemption"}>
                      Maximum Redemption per User{" "}
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"maximumredemption"}
                      id={"maximumredemption"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              {!flat && (
                <>
                  {" "}
                  <Row className="my-2">
                    <Col md>
                      <FormGroup>
                        <Label className="my-2" for={"discountmaximum"}>
                          Discount Maximum{" "}
                          <span className="mx-1" style={{ color: "#dd394b" }}>
                            *
                          </span>
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
                        <Label className="my-2" for={"discountpercentage"}>
                          Discount Percentage{" "}
                          <span className="mx-1" style={{ color: "#dd394b" }}>
                            *
                          </span>
                        </Label>
                        <BootInputComponent
                          name={"discountpercentage"}
                          id={"discountpercentage"}
                          type={"text"}
                        ></BootInputComponent>
                      </FormGroup>
                    </Col>
                  </Row>
                </>
              )}
              <Row className="my-2">
                {!flat && (
                  <Col md>
                    <FormGroup>
                      <Label className="my-2" for={"minimumrights"}>
                        Minimum Rights{" "}
                        <span className="mx-1" style={{ color: "#dd394b" }}>
                          *
                        </span>
                      </Label>
                      <BootInputComponent
                        name={"minimumrights"}
                        id={"minimumrights"}
                        type={"text"}
                      />
                    </FormGroup>
                  </Col>
                )}
                {flat && (
                  <Col md>
                    <FormGroup>
                      <Label className="my-2" for={"discountvalue"}>
                        Discount Value{" "}
                        <span className="mx-1" style={{ color: "#dd394b" }}>
                          *
                        </span>
                      </Label>
                      <BootInputComponent
                        name={"discountvalue"}
                        id={"discountvalue"}
                        type={"text"}
                      />
                    </FormGroup>
                  </Col>
                )}
                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"chooseservice"}>
                      Choose Service{" "}
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
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
                      Location{" "}
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
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
                <Button className="reset btn mx-3" type="reset" outline>
                  <span className="mx-1">
                    <MdIcons.MdOutlineCancel />
                  </span>
                  Cancel
                </Button>

                <Button
                  className="submit btn mx-3"
                  type={"submit"}
                  onClick={!isValid && PopUp}
                >
                  <span className="mx-1">
                    <FaIcons.FaPlusCircle />
                  </span>
                  Add Promo
                </Button>
                <Popup isOpen={isOpen} setisOpen={setisOpen} />
              </Col>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default PromocodeForm;
