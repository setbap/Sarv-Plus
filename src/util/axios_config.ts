import axios from "axios";
// import store from "../store";
// import { OUT_USER, GET_ERR } from "./action/resource";
// import createHistory from "./create_history";
axios.defaults.baseURL = "http://localhost:5000/api";
axios.interceptors.response.use(
  (response) => {
    console.log("sounds good");
    return response;
  },
  (error) => {
    // const UNAUTHORIZED = 401;
    const { status } = error.response;
    console.log(status);
    return Promise.reject(error);
  }
);

export const setTokenToHeader = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
