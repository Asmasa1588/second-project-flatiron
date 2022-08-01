import React from "react";

function CarOffer({ name, brand, price, onClick }) {
  return (
    <div onClick={onClick}>
      <div>Name: {name}</div>
      <div>Brand: {brand}</div>
      <div>Price: {price}</div>
    </div>
  );
}
export default CarOffer;
