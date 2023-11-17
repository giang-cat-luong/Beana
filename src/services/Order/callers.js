
import { API } from "./api_paths";
import { instance } from "../../utils/request";

export const getOrder = async () => {
  const res = await instance.get(API.GET_ORDER);
  return res.data;
};
export const addAddress = async ({ fullName, phone, province, district, ward, address }) => {
  const res = await instance.post(API.ADD_ADDRESS, {
    fullName,
    phone,
    province,
    district,
    ward,
    address,
  });
  return res.data;
};
