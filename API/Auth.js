import axios from "axios";

const api = axios.create({
  baseURL: "https://maitre-app.herokuapp.com/api",
  //baseURL: "http://127.0.0.1:8000/api",
  //transformResponse: (data) => JSON.parse(data)
});

export default api;
