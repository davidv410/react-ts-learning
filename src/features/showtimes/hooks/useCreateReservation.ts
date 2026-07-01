import {useMutation} from "@tanstack/react-query";
import {createReservation} from "@/features/showtimes/api.ts";

export const useCreateReservation = () => {
    return useMutation({
        mutationFn: createReservation
    })
}