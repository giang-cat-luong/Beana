import axios from "axios";
import { API } from "./api_paths";

export const getAllBlog = async () => {
  const res = await axios.get(API.GET_ALL_BLOGS);

  return res.data.listBlog;
};

export const createBlog = async (data) => {
  const res = await axios.post(API.CREATE_BLOG, data);

  return res;
};

export const getBlogDetail = async (blogId) => {
  const res = await axios.get(`${API.BLOG_DETAIL}/${blogId}`);

  return res.data.blog;
};

export const switchStatusBlog = async (id) => {
  const res = await axios.delete(`${API.DELETE_BLOG}/${id}`);

  return res;
};

export const editBlog = async (data) => {
  const res = await axios.put(API.UPDATE_BLOG, data);

  return res.data;
};
