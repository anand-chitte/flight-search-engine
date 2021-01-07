import React from "react";
import "./select.css";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="control">
        <option value="">None</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert">{error}</div>}
    </div>
  );
};

export default Select;
