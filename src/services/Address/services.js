import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addAddress, getAddress } from "../Address/callers";

const API_KEY = {
  GET_ADDRESS: "address",
};

export const useGetAddress = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ADDRESS],
      queryFn: () => getAddress(),
    },
    {
      staleTime: "100000",
    },
  );
};
export const useAddAddress = () => {
  const queryClient = useQueryClient()
  return useMutation(addAddress, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['address'] }),
    onError: () => {
    },
  });
};

