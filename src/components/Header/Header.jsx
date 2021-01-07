import React from "react";
import plane from "../../assets/logos/plane-departure-solid.svg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src={plane} alt="" />

      <h1>Flight Search Engine</h1>
    </div>
  );
}

export default Header;
