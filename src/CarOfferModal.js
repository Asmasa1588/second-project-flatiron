import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";// 3rd party library ,called reactstrap. componenets button,modal..etc

function CarOfferModal({ isOpen, onClose, offer }) {
  

  return (
    <div>
      <Modal isOpen={isOpen}>
      {
        // {isOpen} is coming from line 4 prop. 
        //isopen= is a prop of the Modal comp. responsible to visual Modal. if it is true then it will show Modal.
      }
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
