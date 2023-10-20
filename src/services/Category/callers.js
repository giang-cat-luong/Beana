
import { API } from "./api_paths";
import instance from "../../utils/request";

export const getAllCategory = async () => {
  const res = await instance.get(API.GET_ALL_CATEGORY);

  return res.data;
};
export const addOneCategory = async ({ name }) => {
  const res = await instance.post(API.ADD_CATEGORY,
    name
  );

  return res.data;
};