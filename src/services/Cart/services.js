import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getCart, addToCart, removeCartItem } from "../Cart/callers";

const API_KEY = {
  GET_CART: "cart",
  ADD_TO_CART: "add_to_cart",
};

export const useGetCart = () => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_CART],
      queryFn: () => getCart(),

    },
    {
      staleTime: "100000",
    },
  );
};
export const useAddToCart = () => {
  const queryClient = useQueryClient()
  return useMutation(addToCart, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    onError: () => {
    },
  });
};

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient()
  return useMutation(removeCartItem, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    onError: () => {
    },
  });
};
