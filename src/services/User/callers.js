import axios from "axios";
import { API } from "./api_paths";

export const getAllUser = async () => {
  const res = await axios.get(API.GET_ALL_USERS);

  return res.data.listUser;
};