import { api } from '@/lib/axios';
import type {Showtime, Seats, CreateReservationBody, ReservationResponse} from "@/features/showtimes/types.ts";

export const fetchShowtimes = async () => {
    const { data } = await api.get<{ showtimes: Showtime[] }>('/showtimes')
    return data.showtimes ?? []
}

export const fetchShowtime = async (id: string) => {
    const { data } = await api.get<{ showtime: Showtime }>(`/showtimes/${id}`)
    return data.showtime ?? null
}

export const fetchSeats = async (id: string) => {
    const { data } = await api.get<{ seats: Seats[] }>(`/seats/showtimes/${id}`)
    return data.seats ?? []
}

export const createReservation = async (reservation: CreateReservationBody) => {
    const { data } = await api.post<ReservationResponse>('/reservations', reservation)
    return data
}