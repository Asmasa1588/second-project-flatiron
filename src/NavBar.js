import React from "react";
import { Link } from "react-router-dom";

function NavBar({ onChangePage }) {
  return (
    <nav>
      <Link to="/form" className="me-2">
        Post New Car Offer
      </Link>

      <Link to="/" className="me-2">
        View Car Offers
      </Link>

      <Link to="/info">Information</Link>
    </nav>
  );
}
export default NavBar;

// it returns 3 buttons. all 3 have click handler.(onClick).
