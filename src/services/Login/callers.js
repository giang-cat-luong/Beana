import { API } from "./api_paths";
import  {instance}  from "../../utils/request";

export const login = async ({ username, password }) => {
  const res = await instance.post(API.LOGIN, { username, password });
  return res.data;
};
