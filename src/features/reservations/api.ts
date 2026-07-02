import { api } from "@/lib/axios.ts";
import type {ReservationWithSeat} from "@/features/reservations/types.ts";


export const fetchReservations = async () => {
    const { data } = await api.get<{ reservations: ReservationWithSeat[] }>('/reservations');
    return data.reservations ?? [];
}