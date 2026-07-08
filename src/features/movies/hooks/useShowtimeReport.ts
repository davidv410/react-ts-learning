import {useQuery} from "@tanstack/react-query";
import {fetchShowtimeReport} from "@/features/movies/api.ts";

export const useShowtimeReport = (movieId: string) => {
    return useQuery({
        queryKey: ['report'],
        queryFn: () => fetchShowtimeReport(movieId)
    })
}