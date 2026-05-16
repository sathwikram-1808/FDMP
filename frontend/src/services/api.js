import axios from "axios";

const API = axios.create({
  
  baseURL: "https://fdmp.onrender.com/api",
});

export default API;