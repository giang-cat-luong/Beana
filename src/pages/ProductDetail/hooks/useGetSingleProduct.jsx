import { useGetOneProducts } from "../../../services/Product/services";

export default function useGetSingleProduct(id) {
    const { data, isLoading } = useGetOneProducts(id);

    return {
        data,
        isLoading
    };
}
