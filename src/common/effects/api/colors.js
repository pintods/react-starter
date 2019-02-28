import axios from "axios";
import { BASE_API_URL } from "common/lib/constants";
import { getAuthHeaders } from "./utils";

export const getColors = async token => {
  try {
    const url = `${BASE_API_URL}/colors`;
    const response = await axios.get(url, getAuthHeaders(token));
    return await response.data;
  } catch (error) {
    if (!error.response) {
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
