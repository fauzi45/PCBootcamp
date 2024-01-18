import axios from "axios";

const baseUrl = "https://themealdb.com/api/json/v1/1";
const BASE_URL = "http://localhost:3000"; // Ganti sesuai URL JSON Server Anda

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

export const addToFavorites = async (data) => {
  try {
    const response = await callAPIJSON("/favorites", "POST", data);
    return response;
  } catch (error) {
    throw error;
  }
};


export const callAPI = async (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {}
) => {
  const options = {
    url: baseUrl + endpoint,
    method,
    headers,
    params,
    data,
  };

  return axios(options).then((response) => {
    const responseAPI = response?.data;
    return responseAPI;
  });
};
