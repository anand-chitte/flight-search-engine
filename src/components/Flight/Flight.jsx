import React, { useContext } from "react";
import { getFlights } from "../../services/flights";
import FlightContex from "../../context/FlightContext";
import RangeContex from "../../context/RangeContext";
import indigo from "../../assets/logos/IndiGo_logo.svg";
import airindia from "../../assets/logos/Air_India_Logo.svg";
import "./flight.css";

function Flight() {
  const flightContext = useContext(FlightContex);
  const rangeContext = useContext(RangeContex);

  return (
    <div className="flight">
      <div className="route">
        <div className="flight-path">
          {flightContext.flight.origin.length === 0
            ? "All Flight"
            : flightContext.flight.origin + ` > `}
          {flightContext.flight.destination}
          {flightContext.flight.return
            ? ` > ` + flightContext.flight.origin
            : ""}
        </div>
        <div className="dates">
          <span>
            Depart:
            <span className="date">{flightContext.flight.departure}</span>
          </span>
          <span className={flightContext.flight.return ? "" : "none"}>
            Return:
            <span className="date">{flightContext.flight.return}</span>
          </span>
        </div>
      </div>

      {getFlights(
        flightContext.flight.origin.toLowerCase(),
        flightContext.flight.destination.toLowerCase(),
        flightContext.flight.departure,
        rangeContext.range
      ).map((flight) => (
        <div
          key={flight.id}
          className={flightContext.flight.departure ? "flight-info" : "none"}
        >
          <div className="one-way">
            <span className="amount">
              RS.{flight.price * flightContext.flight.persons}
            </span>
            <span className="fligt-no">{flight.number}</span>
            <span className="path">{`${flight.from_code} > ${flight.to_code}`}</span>
            <span className="">
              Depart: {" " + new Date(flight.depart_date).getHours()}
              {":" + new Date(flight.depart_date).getMinutes()}
              {new Date(flight.depart_date).getHours() > 12 ? " PM" : " AM"}
            </span>
            <span className="">
              Arrive:
              {" " + new Date(flight.arrive_date).getHours()}
              {":" + new Date(flight.arrive_date).getMinutes()}
              {new Date(flight.arrive_date).getHours() > 12 ? " PM" : " AM"}
            </span>
          </div>
          <div
            className={flightContext.flight.return ? "return" : "return none"}
          >
            <span className="fligt-no">{flight.number}</span>
            <span className="path">{`${flight.from_code} > ${flight.to_code}`}</span>
            <span className="">
              Depart: {" " + new Date(flight.depart_date).getHours()}
              {":" + new Date(flight.depart_date).getMinutes()}
              {new Date(flight.depart_date).getHours() > 12 ? " PM" : " AM"}
            </span>
            <span className="">
              Arrive:
              {" " + new Date(flight.arrive_date).getHours()}
              {":" + new Date(flight.arrive_date).getMinutes()}
              {" " + new Date(flight.arrive_date).getHours() > 12
                ? " PM"
                : " AM"}
            </span>
          </div>
          <div className="booking">
            <img
              src={flight.airline === "Indigo" ? indigo : airindia}
              alt="logo"
            />
            <button>Book this flight</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flight;
