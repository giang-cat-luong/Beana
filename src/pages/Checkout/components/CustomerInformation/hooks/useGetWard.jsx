
import { useGetWardById } from "../../../../../services/Province/services";

export default function useGetWard(id) {
    const { data, isLoading } = useGetWardById(id);

    return {
        data,
        isLoading
    };
}