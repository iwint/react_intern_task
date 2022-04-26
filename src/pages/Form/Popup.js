import { React } from "react";
import {
  Button,
  Container,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

function Popup() {
  return (
    <div>
      <Container>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>
          <Button>Cancel</Button>
        </ModalFooter>
      </Container>
      ) : (<Button color="danger">Click Me</Button>
    </div>
  );
}

export default Popup;