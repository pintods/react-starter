import React from "react";

export const AlertContext = React.createContext({
  alertMessage: null,
  alertType: "error",
  addAlert() {},
  clearAlert() {}
});
