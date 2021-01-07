import React from "react";
import Joi from "joi-browser";
import Form from "../Common/Form/Form";

class OneWay extends Form {
  state = {
    data: { origin: "", destination: "", departure: "", persons: "" },
    errors: {},
  };

  schema = {
    origin: Joi.string().required().label("Origin"),
    destination: Joi.string().required().label("destination"),
    departure: Joi.date().required().label("Departure"),
    persons: Joi.number().required().label("Persons"),
  };

  doSubmit = () => {};

  render() {
    const options = [
      { id: 1, name: 1 },
      { id: 2, name: 2 },
      { id: 3, name: 3 },
    ];

    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("origin", "", "Enter Origin City")}
        {this.renderInput("destination", "", "Enter Destination City")}
        {this.renderInput("departure", "", "", "date")}
        {this.renderSelect("persons", "", options)}
        {this.renderButton("Search", this.state.data)}
      </form>
    );
  }
}

export default OneWay;
