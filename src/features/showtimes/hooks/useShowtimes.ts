import { useQuery } from "@tanstack/react-query";
import { fetchShowtimes } from "@/features/showtimes/api.ts";

export const useShowtimes = (movieId?: string) => {
    return useQuery({
        queryKey: ['showtimes', movieId],
        queryFn: () => fetchShowtimes(movieId)
    })
}