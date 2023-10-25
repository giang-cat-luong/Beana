import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addOrder } from "./callers";

// const API_KEY = {
//   GET_CART: "cart",
//   ADD_TO_CART: "add_to_cart",
// };

// export const useGetCart = () => {
//   return useQuery(
//     {
//       queryKey: [API_KEY.GET_CART],
//       queryFn: () => getCart(),
//     },
//     {
//       staleTime: "100000",
//     },
//   );
// };
export const useCheckout = () => {
  // const navigate = useNavigate();
  return useMutation(addOrder, {
    onSuccess: () => {
      // navigate("/");
    },
    onError: () => {
    },
  });
};


