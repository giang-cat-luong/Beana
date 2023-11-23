import { useGetProfile } from "../../../../../services/Profile/services";

export default function useProfile() {
    const { data, isLoading } = useGetProfile();
    return {
        data,
        isLoading,
    }
}
