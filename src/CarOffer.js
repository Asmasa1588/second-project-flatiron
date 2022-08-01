import React from "react";

function CarOffer({ name, email, price }) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Price: {price}</div>
    </div>
  );
}
export default CarOffer;
