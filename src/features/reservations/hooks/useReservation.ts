import {useQuery} from "@tanstack/react-query";
import {fetchReservations} from "@/features/reservations/api.ts";

export const useReservation = () => {
    return useQuery({
        queryKey: ['reservation'],
        queryFn: fetchReservations,
    })
}