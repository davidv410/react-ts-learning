import { useMutation, useQueryClient } from "@tanstack/react-query";
import {removeMovie} from "@/features/movies/api.ts";

export const useRemoveMovie = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeMovie,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movies'] });
        }
    })
}