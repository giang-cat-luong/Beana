import { useQuery, } from "@tanstack/react-query";
import { getAllProducts, getProductById } from "../Product/callers";

const API_KEY = {
  GET_ALL_PRODUCTS: "products",
  GET_ONE_PRODUCTS: "single_product",
};

export const useGetAllProducts = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ALL_PRODUCTS],
      queryFn: () => getAllProducts(),
    },
    {
      staleTime: "100000",
    }
  );
};
export const useGetOneProducts = (id) => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ONE_PRODUCTS],
      queryFn: () => getProductById(id),
    },
    {
      staleTime: "100000",
    }
  );
};
