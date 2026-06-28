import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from "@/features/movies/api.ts";

export const useMovies = () => {
    return useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies
    })
}