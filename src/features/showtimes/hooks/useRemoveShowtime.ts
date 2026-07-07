import {useMutation, useQueryClient} from "@tanstack/react-query";
import {removeShowtime} from "@/features/showtimes/api.ts";

export const useRemoveShowtime = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeShowtime,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['showtimes'] });
        }
    })
}