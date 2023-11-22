import axios from "axios";

const url = "https://apibeana.com/api/v1";
export const instance = axios.create({
  withCredentials: true,
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*', 
  },
}
);

const urlUpload = "https://apibeana.com/api/v1";
export const instanceUpload = axios.create({
  baseURL: urlUpload,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

const urlVNProvince = "https://vapi.vnappmob.com/api/province";
export const instanceProvince = axios.create({
  // withCredentials: true,
  baseURL: urlVNProvince,
  // headers: {
  //   "Content-Type": "application/json",
  //   'Access-Control-Allow-Origin': '*', 
  // },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("userToken");
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