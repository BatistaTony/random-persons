import axios from "axios";

export const api = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  console.log("Called", process.env.REACT_APP_API_URL);

  return instance;
};
