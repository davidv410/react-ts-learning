import { api } from '@/lib/axios';
import type {
    Showtime,
    Seats,
    CreateReservationBody,
    ShowtimeWithMovie,
    ShowtimeDataBody
} from "@/features/showtimes/types.ts";
import type {EditShowtimeFormData} from "@/features/showtimes/schema.ts";

export const fetchShowtimes = async (movieId?: string) => {
    const { data } = await api.get<{ showtimes: ShowtimeWithMovie[] }>('/showtimes', {
        params: { movieId }
    })
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
    const { data } = await api.post('/reservations', reservation)
    return data
}

export const createShowtime = async (showtime: ShowtimeDataBody) => {
    const { data } = await api.post('/showtimes', showtime)
    return data
}

export const removeShowtime = async (id: string) => {
    const { data } = await api.delete(`/showtimes/${id}`)
    return data
}

export const editShowtime = async ({showtimeId, showtimeData}: {showtimeId: string, showtimeData: EditShowtimeFormData}) => {
    const { data } = await api.patch(`/showtimes/${showtimeId}`, showtimeData)
    return data
}