import React, { useState } from "react";
import { Formik, Form } from "formik";
import BootInputComponent from "../Form/Input";
import { Col, FormGroup, Label, Row, Button } from "reactstrap";
import { AC, carTypeData } from "./DropdownData";
import * as Yup from "yup";
import Step2 from "./Step2";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

function Step1({ ActiveStep, setActiveStep }) {
  const [On, setOn] = useState(false);

  const initialValues = {
    customerMobile: "",
    customerName: "",
    pickupLocation: "",
    dropLocation: "",
    carType: "",
    ac: "",
    promocode: "",
    pickuptime: "",
    pickupdate: "",
    switch: "",
  };

  const validationSchema = Yup.object({
    customerMobile: Yup.number().required(""),
    customerName: Yup.string().required("* Required Field"),
    pickupLocation: Yup.string().required("* Required Field"),
    dropLocation: Yup.string().required(" * Required Field"),
    carType: Yup.string().required(" * Required Field"),
    ac: Yup.string().required("* Required Field"),
    promocode: Yup.string().required("* Required Field"),
    pickuptime: Yup.string().required("* Required Field"),
    pickupdate: Yup.date().required("* Required Field"),
  });

  const onSubmit = (values) => {
    console.log("Data", values);
    localStorage.setItem("Data", JSON.stringify(values));
  };

  const Switch = (e) => {
    if (e.target.value === "true") {
      setOn(false);
    } else {
      setOn(true);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, isValid }) => {
          return (
            <Form>
              <Row className="my-2">
                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"customerMobile"}>
                      Customer Mobile Number
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"customerMobile"}
                      type={"phone"}
                      id={"customerMobile"}
                    />
                  </FormGroup>
                </Col>

                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"customerName"}>
                      Customer Name
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"customerName"}
                      type={"text "}
                      id={"customerName"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-2">
                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"pickupLocation"}>
                      PickUp Location
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"pickupLocation"}
                      type={"text"}
                      id={"pickupLocation"}
                    />
                  </FormGroup>
                </Col>

                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"dropLocation"}>
                      Drop Location
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"dropLocation"}
                      type={"text "}
                      id={"dropLocation"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-2">
                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"carType"}>
                      Car Type
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent
                      name={"carType"}
                      type={"select"}
                      id={"carType"}
                    >
                      {carTypeData.map((data, index) => (
                        <option value={data.key} key={index}>
                          {data.key}
                        </option>
                      ))}
                    </BootInputComponent>
                  </FormGroup>
                </Col>

                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"ac"}>
                      AC
                      <span className="mx-1" style={{ color: "#dd394b" }}>
                        *
                      </span>
                    </Label>
                    <BootInputComponent name={"ac"} type={"select"} id={"ac"}>
                      {AC.map((item, index) => (
                        <option value={item.value} key={index}>
                          {item.key}
                        </option>
                      ))}
                    </BootInputComponent>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-2">
                <Col md>
                  <FormGroup>
                    <Label className="my-2" for={"promocode"}>
                      Promo Code
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
                  <div class=" form-switch form-check ">
                    <span class="form-check-label">Schedule This Ride</span>
                    <BootInputComponent
                      class="form-check-input switch"
                      type="checkbox"
                      role="switch"
                      id="switch"
                      name="switch"
                      onChange={(e) => {
                        handleChange(e);
                        Switch(e);
                      }}
                    />
                  </div>
                </Col>
              </Row>
              {On && (
                <Row>
                  <Col md>
                    <FormGroup>
                      <Label className="my-2" for={"pickuptime"}>
                        Pickup Time
                        <span className="mx-1" style={{ color: "#dd394b" }}>
                          *
                        </span>
                      </Label>
                      <BootInputComponent
                        name={"pickuptime"}
                        type={"time"}
                        id={"pickuptime"}
                      />
                    </FormGroup>
                  </Col>
                  <Col md>
                    <FormGroup>
                      <Label className="my-2" for={"pickupdate"}>
                        Pickup Date
                        <span className="mx-1" style={{ color: "#dd394b" }}>
                          *
                        </span>
                      </Label>
                      <BootInputComponent
                        name={"pickupdate"}
                        type={"date"}
                        id={"pickupdate"}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              )}
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
                  onClick={!isValid ? () => setActiveStep(1) : null}
                >
                  <span className="mx-1">
                    <FaIcons.FaCheckCircle />
                  </span>
                  Check Price
                </Button>
              </Col>

              <Step2 />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Step1;
