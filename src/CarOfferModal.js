import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CarOfferModal({ isOpen, onClose, offer }) {
  //   const [modal, setModal] = useState(false);

  //   const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalHeader>{offer.brand}</ModalHeader>
        <ModalBody>
          <div>Name: {offer.name}</div>
          <div>Email: {offer.email}</div>
          <div>Price: {offer.price}</div>
          <div>Model: {offer.model}</div>
          <div>Year: {offer.year}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default CarOfferModal;
