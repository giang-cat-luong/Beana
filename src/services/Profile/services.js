import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getProfile, changeAvatar } from "./callers";

import { useState } from 'react';

const API_KEY = {
  GET_PROFILE: "profile",
};

export const useGetProfile = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_PROFILE],
      queryFn: () => getProfile(),
    },
    {
      staleTime: "100000",
    },
  );
};

export const useChangeAvatar = () => {
  const queryClient = useQueryClient();
  const [isFailed, setIsFailed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useMutation(changeAvatar, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
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
  const isLoading = mutation.isLoading;
  return {
    mutate,
    isFailed,
    isSuccess,
    isLoading
  };
};



