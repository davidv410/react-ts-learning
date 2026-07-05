import {useQuery} from "@tanstack/react-query";
import {fetchGenres} from "@/features/movies/api.ts";

export const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres
    })
}