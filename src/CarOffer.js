import React from "react";
import { Button } from "reactstrap";

function CarOffer({ name, brand, price, onClick, onDelete }) {// last 2 are props ,specifically
  //callbacks
  return (
    <div className="d-flex justify-content-center"> 
    {
      //bootstrap
    }
      <div className="car-offer mt-3" onClick={onClick}> 
      {
        // this div hold the entire car offer rectangular box. onClick is attach to the entire box.{onclick}
        // is coming from the prop above. and onclick before = is for the div and is a click handler. 
        // evevry html has a onClick prop. = onclick ,and the {onclick} is for the component CarOffer.
      }
        <div>Name: {name}</div>
        <div>Brand: {brand}</div>
        <div>Price: {price}</div>
        {/* <Button color="danger" className="mt-2 mb-1" onClick={onDelete}> */}
          {/* Delete
        </Button> */}
      </div>
    </div>
  );
}
export default CarOffer;

// caroffer is not a direct of App. its the direct child of Carofferview.
