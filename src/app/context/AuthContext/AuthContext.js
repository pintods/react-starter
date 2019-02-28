import React from "react";

export const AuthContext = React.createContext({
  authStatus: false,
  token: null,
  setAuth() {}
});
