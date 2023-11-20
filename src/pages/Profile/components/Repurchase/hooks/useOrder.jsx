import { useGetOrder } from "../../../../../services/Order/services";

export default function useOrder() {
    const { data, isLoading } = useGetOrder();
    return {
        data,
        isLoading,
    }
}
