import { React } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function Popup({ isOpen, setisOpen }) {
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalHeader
          charCode="Y"
          style={{ color: "#3fca7e" }}
          className="d-flex align-items-center justify-content-center"
        >
          Promo Code Added Successfully!
        </ModalHeader>
        <ModalBody className="text-center">
          Your Promocode has been added to the list and will be showcased to the
          user
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn cancel"
            onClick={() => {
              setisOpen((p) => !p);
            }}
          >
            Go Home
          </Button>
          <Button
            className="promo-add btn"
            onClick={() => {
              setisOpen((p) => !p);
            }}
          >
            Add another Promo
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;
