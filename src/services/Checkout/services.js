import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addOrder } from "./callers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useCheckout = () => {
  // const queryClient = useQueryClient();
  const [isFailed, setIsFailed] = useState(false);
  const navigate = useNavigate();
  const mutation = useMutation(addOrder, {
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['address'] });
      // navigate("/payment-momo")
    },
    onError: () => {
      setIsFailed(true);
      setTimeout(() => {
        setIsFailed(false);
      }, 5000);
    },

  });
  const mutate = mutation.mutate;
  const isLoading = mutation.isLoading;
  const isSuccess = mutation.isSuccess;
  const data = mutation.data;
  return {
    mutate,
    isFailed,
    isLoading,
    isSuccess,
    data
  };
};


