
import { API } from "./api_paths";
import { instance } from "../../utils/request";

export const getProfile = async () => {
  const res = await instance.get(API.GET_PROFILE);

  return res.data;
};

export const changeAvatar = async ({ url }) => {
  const res = await instance.post(API.ADD_ADDRESS, {
    url,
  });
  return res.data;
};
