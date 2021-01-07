import React from "react";
import "./input.css";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="control" />
      {error && <div className="alert">{error}</div>}
    </div>
  );
};

export default Input;
