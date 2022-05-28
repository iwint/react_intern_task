import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Popup from "../Form/Popup";
import Driverdetails from "./Driverdetails";

function Step2() {
  const dataStore = JSON.parse(localStorage.getItem("Data"));
  const [isOpen, setisOpen] = useState(false);
  const PopUp = () => {
    setisOpen((p) => !p);
  };
  return (
    <Container>
      <Col className="Header">
        <h1 className="header-title">Trip Details</h1>
      </Col>
      <Col className="infoContainer">
        <Row className="trip-details">
          <Col className="title col-3">Pick-Up Location</Col>
          <Col className="detail ">{dataStore.pickupLocation}</Col>
        </Row>
        <Row className="trip-details">
          <Col className="title col-3">Pick-Up Date & Time</Col>
          <Col className="detail ">
            {dataStore.pickupdate} - {dataStore.pickuptime}
          </Col>
        </Row>
        <Row className="trip-details">
          <Col className="title col-3">Drop Location</Col>
          <Col className="detail ">{dataStore.dropLocation}</Col>
        </Row>
        <Row className="trip-details">
          <Col className="title col-3">Drop Date & TIme</Col>
          <Col className="detail ">
            {dataStore.pickupdate} - {dataStore.pickuptime}
          </Col>
        </Row>
      </Col>
      <hr />
      <Row className="infoContainer">
        <Col lg={6}>
          <Row className="trip-details">
            <Col className="title">Total Kms Travelled</Col>
            <Col className="detail ">25 Kms</Col>
          </Row>
          <Row className="trip-details">
            <Col className="title">Total Travel Time</Col>
            <Col className="detail ">55 Mins</Col>
          </Row>
          <Row className="trip-details">
            <Col className="title">Waiting Time</Col>
            <Col className="detail ">11 Mins</Col>
          </Row>
          <Row className="trip-details">
            <Col className="title">Payment Time</Col>
            <Col className="detail ">Online(GPay)</Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className="trip-details">
            <Col className="title">Trip Type</Col>
            <Col className="detail ">Local Ride</Col>
          </Row>
          <Row className="trip-details">
            <Col className="title">Car Type</Col>
            <Col className="detail ">{dataStore.carType}</Col>
          </Row>
          <Row className="trip-details">
            <Col className="title ">Car Name</Col>
            <Col className="detail "></Col>
          </Row>
          <Row className="trip-details">
            <Col className="title ">Car Number</Col>
            <Col className="detail "></Col>
          </Row>
        </Col>
      </Row>
      <Col className="Header mt-4">
        <h1 className="header-title">Customer Details</h1>
      </Col>
      <Row className="infoContainer">
        <Col className="trip-details">
          <Col className="title ">Customer ID</Col>
          <Col className="detail ">123456</Col>
        </Col>
        <Col className="trip-details">
          <Col className="title ">Customer Name</Col>
          <Col className="detail ">{dataStore.customerName}</Col>
        </Col>
        <Col className="trip-details">
          <Col className="title ">Mobile Number</Col>
          <Col className="detail ">{dataStore.customerMobile}</Col>
        </Col>
        <Col className="trip-details">
          <Col className="title ">Email Address</Col>
          <Col className="detail ">{dataStore.customerName}@gmail.com</Col>
        </Col>
      </Row>
      <Col className="Header mt-4">
        <h1 className="header-title">Driver Details</h1>
      </Col>
      <Col className="text-center mt-3">
        <Button className="submit" onClick={PopUp}>
          Choose Driver
        </Button>
        <Driverdetails isOpen={isOpen} setisOpen={setisOpen} />
      </Col>
    </Container>
  );
}

export default Step2;
