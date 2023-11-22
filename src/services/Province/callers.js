
import { API } from "./api_paths";
import { instanceProvince } from "../../utils/request";
import axios from "axios";

export const getProvince = async () => {
  const res = await instanceProvince.get(API.GET_VN_PROVINCE);

  return res.data;
};

export const getDistrictById = async (id) => {
  const res = await instanceProvince.get(`${API.GET_VN_DISTRICT}/${id}`);

  return res.data;
};
export const getWardById = async (id) => {
  const res = await instanceProvince.get(`${API.GET_VN_WARD}/${id}`);

  return res.data;
};

