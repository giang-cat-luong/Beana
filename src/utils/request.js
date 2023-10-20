import axios from "axios";

const url = "http://35.197.144.3:8686/api/v1";
export const instance = axios.create({
  withCredentials: true,
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*', 
  },
}
);

const urlUpload = "http://35.197.144.3:8686/api/v1";
export const instanceUpload = axios.create({
  baseURL: urlUpload,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instanceUpload.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);