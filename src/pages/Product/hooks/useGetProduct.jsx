
import { useGetAllProducts } from "../../../services/Product/services";

function useGetProduct() {
    const { data, isLoading } = useGetAllProducts();

    return {
        data,
        isLoading
    };
}

export default useGetProduct;
