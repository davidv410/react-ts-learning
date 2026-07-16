import {useQuery} from "@tanstack/react-query";
import {fetchShowtimeReport} from "@/features/movies/api.ts";

export const useShowtimeReport = (movieId: string, enabled: boolean) => {
    return useQuery({
        queryKey: ['report'],
        queryFn: () => fetchShowtimeReport(movieId),
        enabled
    })
}