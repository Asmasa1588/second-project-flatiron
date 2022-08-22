import React, { useState, useEffect } from "react";
import CarOffer from "./CarOffer";
import CarOfferModal from "./CarOfferModal";

function CarOffersView() {
  const [offers, setOffers] = useState([]); // []is initial value before we fetch
  const [activeOffer, setActiveOffer] = useState();
  const [showModal, setShowModal] = useState(false);
  const [filterByText, setFilterByText] = useState("");

  const fetchOffers = () => {
    fetch("http://localhost:3004/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setOffers(data);
      });
  };

  useEffect(() => {
    fetchOffers(); // we fetch offers from json server. useeffect will be used only for once when componenet will be mount fisrt time on the page.
    // 1st time we make http request to json server. fetching the car offer.
  }, []);
  //[---]it could be any other state, prop, or variable.  []called dependency list of the useeffcet
  return (
    // is for component itself.
    <div>
      <div>
        <input
          value={filterByText}
          onChange={(event) => {
            setFilterByText(event.target.value);
          }}
        />
      </div>
      {offers
        .filter((offer) => {
          return (
            offer.name.includes(filterByText) ||
            offer.brand.includes(filterByText) ||
            offer.price.includes(filterByText)
          );
        })
        .map((offer, index) => {
          //index is the position of the element inside of the array. when we use map. react require a key prop.(line 48)
          //..has to be something unique. not repeating itself
          // map. we have multiple offers in the shape of array. array of car offer component. the 2 rectagular boxes.
          return (
            // is for map, higher order function/method
            <CarOffer
              {...offer} // ... to spread the properties of the offer, year, color, model etc
              //below is for the delete button practice
              // onDelete={(event) => {
              //   event.stopPropagation(); //
              //   fetch(`http://localhost:3004/cars/${offer.id}`, { //id is coming from db json
              //     method: "DELETE",
              //   })
              //     .then((res) => res.json())// after the request has been made, we are waiting for the response. res into json
              //
              //     .then((data) => { //date is the form of response from json.
              //       console.log({ data });
              //       setOffers(   // after receving the data from the backend , now we can set the state
              //         offers.filter(    // for the delete after we have delete something, we want to update the previous states except the one we deleted.

              //           (currentOffer) => currentOffer.id !== offer.id // we offer should stay or go. predicate function return either true or false

              //         )
              //       );
              //     });
              // }}
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
