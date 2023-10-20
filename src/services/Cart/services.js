import { useQuery, } from "@tanstack/react-query";
import { getCart, addToCart,removeCartItem } from "../Cart/callers";
import { useMutation } from "@tanstack/react-query";
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
    }
  );
};
export const useAddToCart = () => {
  // const navigate = useNavigate();
  return useMutation(addToCart, {
    onSuccess: () => {
      // navigate("/");
    },
    onError: () => {
    },
  });
};

export const useRemoveCartItem = () => {
  // const navigate = useNavigate();
  return useMutation(removeCartItem, {
    onSuccess: () => {
      // navigate("/");
    },
    onError: () => {
    },
  });
};
