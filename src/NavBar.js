import React from "react";

function NavBar({onChangePage}) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>Post New Car Offer</button>
      <button onClick={() => onChangePage("List")}>View Car Offers</button>
      <button onClick={() => onChangePage("Info")}>Information</button>
    </nav>
  );
}
export default NavBar;
