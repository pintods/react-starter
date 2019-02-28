import React from "react";

const LightButton = ({ onClick, children }) => (
  <button className="button is-light" onClick={onClick}>
    {children}
  </button>
);

export default LightButton;
