import { useQuery,  } from "@tanstack/react-query";
import { getAllUser } from "../User/callersallers";

const API_KEY = {
  GET_ALL_USERS: "users",
};

export const useGetAllUsers = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ALL_USERS],
      queryFn: () => getAllUser(),
    },
    {
      staleTime: "100000",
    }
  );
};