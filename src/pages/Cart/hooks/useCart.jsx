import { useGetCart } from "../../../services/Cart/services";


export default function useCart() {

  const { data, isLoading } = useGetCart();

  return {
    data,
    isLoading
  }
}
