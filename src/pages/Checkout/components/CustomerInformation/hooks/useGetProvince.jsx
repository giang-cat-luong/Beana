import { useGetAllProvince } from "../../../../../services/Province/services";

function useGetProvince() {
    const { data, isLoading } = useGetAllProvince();

    return {
        data,
        isLoading
    };
}

export default useGetProvince;