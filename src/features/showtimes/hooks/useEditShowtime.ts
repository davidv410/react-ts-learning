import {useForm} from "react-hook-form";
import {type EditShowtimeFormData, editShowtimeSchema} from "@/features/showtimes/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {editShowtime} from "@/features/showtimes/api.ts";
import {useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";

export const useEditShowtime = (showtimeData: EditShowtimeFormData) => {
    const { register, handleSubmit, setValue, getValues, reset, formState: { errors, isSubmitting } } = useForm<EditShowtimeFormData>({
        resolver: zodResolver(editShowtimeSchema),
        defaultValues: {
            hall: showtimeData.hall,
            startsAt: showtimeData.startsAt,
            endsAt: showtimeData.endsAt,
            totalSeats: showtimeData.totalSeats
        }
    })

    useEffect(() => {
        reset({
            hall: showtimeData.hall,
            startsAt: showtimeData.startsAt?.slice(0, 16),
            endsAt: showtimeData.endsAt?.slice(0, 16),
            totalSeats: showtimeData.totalSeats
        })
    }, [showtimeData]);

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: editShowtime,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['showtime', showtimeData.id] });
            reset()
        },
        onError: (err: any) => {
            console.log(err);
        }
    })

    const submitForm = async (data: EditShowtimeFormData) => {
        try {
            if(!showtimeData.id){ return console.log("missing id") }
            mutate({ showtimeId: showtimeData.id, showtimeData: data })
        }catch(error){
            console.log(error)
        }
    }

    return { register, handleSubmit, submitForm, setValue, getValues, errors, isSubmitting, }
}
