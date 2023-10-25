import { useGetAddress } from "../../../services/Address/services"

export default function useAddress() {
    const { data, isLoading } = useGetAddress();
    return {
        data,
        isLoading,
    }
}
