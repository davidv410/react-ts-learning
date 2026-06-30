import { api } from '@/lib/axios';
import type { Showtime } from "@/features/showtimes/types.ts";

export const fetchShowtimes = async () => {
    const { data } = await api.get<{ showtimes: Showtime[] }>('/showtimes')
    return data.showtimes ?? []
}

export const fetchShowtime = async (id: string) => {
    const { data } = await api.get<{ showtime: Showtime }>(`/showtimes/${id}`)
    return data.showtime
}