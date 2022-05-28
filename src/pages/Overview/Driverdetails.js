import { React } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

function Driverdetails({ isOpen, setisOpen }) {
  return (
    <div>
      <Modal isOpen={isOpen} className="driver-popup">
        <Col className="d-flex justify-content-center align-items-center">
          <ModalHeader
            charCode="Y"
            className="header-title d-flex justify-content-center align-items-center mt-3"
            style={{ backgroundColor: "#f8f7fa", width: "300px" }}
          >
            Choose Driver
          </ModalHeader>
        </Col>

        <ModalBody className="text-center">
          Your Promocode has been added to the list and will be showcased to the
          user
        </ModalBody>
        <ModalFooter>
          <Button
            className="promo-add btn"
            onClick={() => {
              setisOpen((p) => !p);
            }}
          >
            ASSIGN DRIVER
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Driverdetails;
