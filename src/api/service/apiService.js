
import axios from "axios";
const baseURL = "http://localhost:30086/";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("TOKEN");
  if (token) config.headers.Authorization = token;

  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err?.response?.data;
    if (msg === "FORCE_LOGOUT") {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(err);
  }
);

export default apiClient;
