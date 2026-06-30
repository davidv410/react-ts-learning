import {useQuery} from "@tanstack/react-query";
import {fetchSeats} from "@/features/showtimes/api.ts";

export const useSeats = (id: string) => {
    return useQuery({
        queryKey: ['seats', id],
        queryFn: () => fetchSeats(id)
    })
}