
import { API } from "./api_paths";
import { instance } from "../../utils/request";

export const signIn = async ({ username, password }) => {
  const res = await instance.post(API.SIGN_IN, {
    username,
    password
  });
  return res.data;
};
export const signUp = async ({ username, name, email, phone, gender, dob, password }) => {
  const res = await instance.post(API.SIGN_UP, {
    username,
    name,
    email,
    phone,
    gender,
    dob,
    password
  });
  return res.data;
};

