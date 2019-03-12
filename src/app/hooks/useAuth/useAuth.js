import { useState, useEffect } from "react";
import { APP_NAME } from "common/lib/constants";
import { isTokenValid, isTokenExpired, isTokenExpiring } from "common/lib/auth";
import { refreshToken } from "common/effects/api/auth";
import axios from "axios";

const useAuth = () => {
  const tokenKey = `${APP_NAME}_token`;
  let initToken = localStorage.getItem(tokenKey);
  if (isTokenValid(initToken) && isTokenExpired(initToken)) {
    initToken = null;
  }

  let initStatus = initToken != null ? true : false;

  const [authState, setAuthState] = useState({
    authStatus: initStatus,
    token: initToken,
    setAuth: authObj => handleSetAuth(authObj),
    clearAuth: () => handleClearAuth()
  });

  const handleClearAuth = () => {
    setAuthState({ ...authState, ...{ authStatus: false, token: null } });
    localStorage.removeItem(tokenKey);
  };

  const handleSetAuth = ({ authStatus, token }) => {
    if (authStatus == null && token == null) {
      handleClearAuth();
      return;
    }
    const newState = { authStatus, token };
    setAuthState({ ...authState, ...newState });
  };

  const handleTokenRefresh = async token => {
    const isExpiring = await isTokenExpiring(token);
    if (isExpiring) {
      const tokenResults = await refreshToken(token);
      const newState = { authState: true, token: tokenResults.token };
      setAuthState({ ...authState, ...newState });
    }
  };

  useEffect(() => {
    // store token in localStorage when updated
    // only called when token changes
    if (authState.token != null) {
      localStorage.setItem(tokenKey, authState.token);
    }
  }, [authState.token, tokenKey]);

  useEffect(() => {
    axios.interceptors.request.use(config => {
      if (config.headers.Authorization != null) {
        handleTokenRefresh(config.headers.Authorization);
      }
      return config;
    });
  }, [handleTokenRefresh]);

  return authState;
};

export default useAuth;
