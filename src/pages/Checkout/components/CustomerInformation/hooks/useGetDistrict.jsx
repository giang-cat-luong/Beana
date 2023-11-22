
import { useGetDistrictById } from "../../../../../services/Province/services";

export default function useGetDistrict(id) {
    const { data, isLoading } = useGetDistrictById(id);

    return {
        data,
        isLoading
    };
}