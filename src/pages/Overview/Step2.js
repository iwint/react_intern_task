import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Popup from "../Form/Popup";
import Driverdetails from "./Driverdetails";
import { CarData } from "./Step2Data";

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
      <Col className="Header mt-4">
        <h1 className="header-title">Price Estimation</h1>
      </Col>
      <Row>
        {" "}
        {CarData.map((item, index) => {
          return (
            <Col lg={6}>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "120px", height: "100px" }}
                />
                <h6>{item.name}</h6>
                <p className="text-muted">{item.seater}</p>
              </Col>
              <div></div>
              <Col>
                <Row className="trip-details ">
                  <Col className="detail ">Estimate Distance</Col>
                  <Col className="detail ">{item.estimate}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Base Fare (3 km)</Col>
                  <Col className="detail ">{item.fare}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Extra km Price</Col>
                  <Col className="detail ">{item.extra}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail "> Price AC / Km</Col>
                  <Col className="detail ">{item.price}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">
                    Remaining Fare (3.10 km * 19.05)
                  </Col>
                  <Col className="detail ">{item.rfare}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Convenience Fee</Col>
                  <Col className="detail ">{item.fee}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">GST (CGST 2.5% + SGST 2.5%)</Col>
                  <Col className="detail ">{item.gst}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Promo Code</Col>
                  <Col className="detail " style={{ color: "#3FCA7E" }}>
                    {item.promo}
                  </Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Discount</Col>
                  <Col className="detail ">{item.discount}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Total w/ discount</Col>
                  <Col className="detail ">{item.total}</Col>
                </Row>
                <Row className="trip-details">
                  <Col className="detail ">Driver Count</Col>
                  <Col className="detail ">{item.count}</Col>
                </Row>
              </Col>

              <Col>
                <Button className="submit">Book Now</Button>
              </Col>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Step2;
