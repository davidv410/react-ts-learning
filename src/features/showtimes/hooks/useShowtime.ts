import {useQuery} from "@tanstack/react-query";
import {fetchShowtime} from "@/features/showtimes/api.ts";

export const useShowtime = (id: string) => {
    return useQuery({
        queryKey: [],
        queryFn: () => fetchShowtime(id)
    })
}