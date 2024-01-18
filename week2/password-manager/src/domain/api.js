import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const callAPIJSON = async (endpoint, method, data) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
