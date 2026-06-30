import { useQuery } from "@tanstack/react-query";
import { fetchShowtimes } from "@/features/showtimes/api.ts";

export const useShowtimes = () => {
    return useQuery({
        queryKey: ['showtimes'],
        queryFn: fetchShowtimes
    })
}