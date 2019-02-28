import axios from "axios";
import { BASE_API_URL } from "common/lib/constants";

export const getToken = async (username, password) => {
  try {
    const url = `${BASE_API_URL}/token`;
    const response = await axios.post(url, {
      username,
      password
    });
    return response.data;
  } catch (error) {
    if (!error.response) {
      // check if api server is running
      return {
        error: "Cannot connect to API server"
      };
    } else {
      return {
        error: error.message
      };
    }
  }
};

export const refreshToken = async token => {
  try {
    const url = `${BASE_API_URL}/token/refresh`;
    const response = await axios.post(url, {
      token
    });
    return response.data;
  } catch (error) {
    if (!error.response) {
      // check if api server is running
      return {
        error: "Cannot connect to API server"
      };
    } else {
      return {
        error: error.message
      };
    }
  }
};
