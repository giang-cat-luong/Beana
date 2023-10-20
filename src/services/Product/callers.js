
import { API } from "./api_paths";
import { instance } from "../../utils/request";

export const getAllProducts = async () => {
  const res = await instance.get(API.GET_ALL_PRODUCTS);

  return res.data;
};
export const getProductById = async (id) => {
  const res = await instance.get(`${API.GET_ONE_PRODUCTS}/${id}`);

  return res.data;
};