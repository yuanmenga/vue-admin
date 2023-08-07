import Axios from "./Axios";

export const http = new Axios({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {},
});
