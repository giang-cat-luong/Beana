import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllBlog, createBlog, switchStatusBlog, getBlogDetail, editBlog } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const API_KEY = {
  GET_ALL_BLOGS: "blogs",
  GET_BLOG_DETAIL: "blog",
};

export const useGetAllBlog = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ALL_BLOGS],
      queryFn: () => getAllBlog(),
    },
    {
      staleTime: "100000",
    }
  );
};

export const useGetBlogDetail = (blogId) => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_BLOG_DETAIL, blogId],
      queryFn: () => getBlogDetail(blogId),
    },
    {
      staleTime: "100000",
    }
  );
};

export const useCreateOneBlog = () => {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();

  return useMutation(createBlog, {
    onSuccess: () => {
      notification.success({
        message: "Create Blog successfully",
      });
      queryClinet.invalidateQueries(API_KEY.GET_ALL_BLOGS);
      navigate("/blog");
    },
    onError: () => {
      notification.error({
        message: "Create blog failed",
      });
    },
  });
};

export const useEditOneBlog = () => {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();

  return useMutation(editBlog, {
    onSuccess: () => {
      notification.success({
        message: "Edit Blog successfully",
      });
      queryClinet.invalidateQueries(API_KEY.GET_ALL_BLOGS);
      navigate("/blog");
    },
    onError: () => {
      notification.error({
        message: "Edit blog failed",
      });
    },
  });
};

export const useSwitchStatusOneBlog = () => {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  return useMutation(switchStatusBlog, {
    onSuccess: () => {
      notification.success({
        message: "Delete blog successfully",
      });
      queryClinet.invalidateQueries(API_KEY.GET_ALL_BLOGS);
      navigate("/blog");
    },
    onError: () => {
      notification.error({
        message: "Delete blog failed",
      });
    },
  });
};
