import React, { Component } from "react";
import Flight from "./components/Flight/Flight";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import RangeContext from "./context/RangeContext";
import FlightContext from "./context/FlightContext";
import "./App.css";

class App extends Component {
  state = {
    origin: "",
    destination: "",
    departure: "",
    return: "",
    persons: null,
    range: [0, 5000],
  };

  handleDetails = (data) => {
    this.setState({
      origin: data.origin,
      destination: data.destination,
      departure: data.departure,
      return: data.return,
      persons: data.persons,
    });
  };

  handleRange = (data) => {
    this.setState({ range: data });
  };

  render() {
    return (
      <div className="main">
        <Header />

        <FlightContext.Provider
          value={{ flight: this.state, toggleOnSubmit: this.handleDetails }}
        >
          <RangeContext.Provider
            value={{
              range: this.state.range,
              toggleOnChange: this.handleRange,
            }}
          >
            <Search />
            <Flight />
          </RangeContext.Provider>
        </FlightContext.Provider>
      </div>
    );
  }
}

export default App;
