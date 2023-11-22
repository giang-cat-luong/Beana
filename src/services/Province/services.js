import { useQuery, } from "@tanstack/react-query";
import { getProvince, getDistrictById,getWardById } from "./callers";

const API_KEY = {
  GET_ALL_PROVINCE: "provinces",
};

export const useGetAllProvince = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ALL_PROVINCE],
      queryFn: () => getProvince(),
    },
    {
      staleTime: "100000",
    }
  );
};
export const useGetDistrictById = (id) => {
  return useQuery(
    {
      queryKey: [id],
      queryFn: () => getDistrictById(id),
    },
    {
      staleTime: "100000",
    }
  );
};
export const useGetWardById = (id) => {
  return useQuery(
    {
      queryKey: [id],
      queryFn: () => getWardById(id),
    },
    {
      staleTime: "100000",
    }
  );
};
