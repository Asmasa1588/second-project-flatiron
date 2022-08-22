import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/form" className="me-2">
        Post New Car Offer
      </NavLink>

      <NavLink to="/" className="me-2">
        View Car Offers
      </NavLink>

      <NavLink to="/info">information</NavLink>
    </nav>
  );
}
export default NavBar;

// it returns 3 buttons. all 3 have click handler.(onClick).
