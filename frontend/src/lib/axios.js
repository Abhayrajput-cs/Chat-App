import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-z2kd.onrender.com" : "/api",
  withCredentials: true,
});
