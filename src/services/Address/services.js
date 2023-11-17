import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addAddress, getAddress } from "../Address/callers";
import Failed from "../../components/Notification/Failed";
import { useState } from 'react';

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
  const queryClient = useQueryClient();
  const [isFailed, setIsFailed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useMutation(addAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['address'] });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    },
    onError: () => {
      setIsFailed(true);
      setTimeout(() => {
        setIsFailed(false);
      }, 5000);
    },
  });
  const mutate = mutation.mutate;
  return {
    mutate,
    isFailed,
    isSuccess
  };
};


