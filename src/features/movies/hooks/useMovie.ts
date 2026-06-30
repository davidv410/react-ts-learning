import { useQuery } from '@tanstack/react-query';
import { fetchMovie } from "@/features/movies/api.ts";

export const useMovie = (id: string) => {
    return useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchMovie(id)
    })
}