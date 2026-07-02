import {useMutation} from "@tanstack/react-query";
import {cancelReservation} from "@/features/reservations/api.ts";

export const useCancelReservation = () => {
    return useMutation({
        mutationFn: (reservationId: string) => cancelReservation(reservationId)
    })
}