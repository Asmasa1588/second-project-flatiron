import React, { useState, useEffect } from "react";
import CarOffer from "./CarOffer";
import CarOfferModal from "./CarOfferModal";

function CarOffersView() {
  const [offers, setOffers] = useState([]);
  const [activeOffer, setActiveOffer] = useState();
  const [showModal, setShowModal] = useState(false);

  const fetchOffers = () => {
    fetch("http://localhost:3004/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setOffers(data);
      });
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div>
      {offers.map((offer, index) => {
        //index is the position of the element inside of the array
        return (
          <CarOffer
            {...offer}
            key={index}
            onClick={() => {
              setActiveOffer(offer);
              setShowModal(true);
            }}
          />
        );
      })}
      {activeOffer && (
        <CarOfferModal
          isOpen={showModal}
          offer={activeOffer}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default CarOffersView;
