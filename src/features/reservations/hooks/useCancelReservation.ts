import {useMutation, useQueryClient } from "@tanstack/react-query";
import {cancelReservation} from "@/features/reservations/api.ts";

export const useCancelReservation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (reservationId: string) => cancelReservation(reservationId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reservation'] })
        }
    })
}