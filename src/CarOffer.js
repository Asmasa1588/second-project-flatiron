import React from "react";

function CarOffer({ name, brand, price, onClick }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="car-offer mt-3" onClick={onClick}>
        <div>Name: {name}</div>
        <div>Brand: {brand}</div>
        <div>Price: {price}</div>
      </div>
    </div>
  );
}
export default CarOffer;
