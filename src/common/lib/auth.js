import jwt from "jsonwebtoken";
import { TOKEN_REFRESH_INTERVAL } from "common/lib/constants";

export const getTokenExpiration = token => {
  if (token != null) {
    const decodedToken = jwt.decode(token);
    return decodedToken.exp;
  }
  return null;
};

export const isTokenExpired = token => {
  if (token != null) {
    const tokenExpire = getTokenExpiration(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime > tokenExpire ? true : false;
  }
  return null;
};

export const isTokenValid = token => {
  if (token != null || token != "") {
    return true;
  }
  return false;
};

export const isTokenExpiring = async token => {
  if (isTokenValid(token)) {
    const currentTime = Math.floor(Date.now() / 1000);
    const tokenExpire = await getTokenExpiration(token);
    const timeDiff = Math.floor(tokenExpire - currentTime);
    if (timeDiff < TOKEN_REFRESH_INTERVAL) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
