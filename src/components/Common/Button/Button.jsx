import React, { useContext } from "react";
import FlightContex from "../../../context/FlightContext";

function Button(props) {
  const flightContext = useContext(FlightContex);

  return (
    <button
      disabled={props.disabled}
      onClick={() => {
        flightContext.toggleOnSubmit(props.data);
      }}
    >
      {props.label}
    </button>
  );
}

export default Button;
