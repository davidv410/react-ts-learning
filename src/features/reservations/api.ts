import { api } from "@/lib/axios.ts";
import type {ReservationWithSeat} from "@/features/reservations/types.ts";


export const fetchReservations = async () => {
    const { data } = await api.get<{ reservations: ReservationWithSeat[] }>('/reservations');
    return data.reservations ?? [];
}

export const cancelReservation = async (reservationId: string) => {
    const { data } = await api.delete(`reservations/${reservationId}`);
    return data
}