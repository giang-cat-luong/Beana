import { useQuery, } from "@tanstack/react-query";
import { getAllCategory, addOneCategory } from "./callers";

const API_KEY = {
  GET_ALL_CATEGORY: "categories",
  ADD_CATEGORY: "one_category",
};

export const useGetAllCategory = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ALL_CATEGORY],
      queryFn: () => getAllCategory(),
    },
    {
      staleTime: "100000",
    }
  );
};
export const useAddOneCategory = () => {
  return useQuery(
    {
      queryKey: [API_KEY.ADD_CATEGORY],
      queryFn: () => addOneCategory(),
    },
    {
      staleTime: "100000",
    }
  );
};