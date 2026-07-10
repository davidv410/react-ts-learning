import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { type CreateShowtimeFormData, createShowtimeSchema } from "@/features/showtimes/schema.ts";
import {useMutation} from "@tanstack/react-query";
import { createShowtime } from "@/features/showtimes/api.ts";
import {useState} from "react";

export const useCreateShowtime = () => {
    const { register, handleSubmit, setValue, getValues, reset, formState: { errors, isSubmitting } } = useForm<CreateShowtimeFormData>({
        resolver: zodResolver(createShowtimeSchema)
    })

    const [serverError, setServerError] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    const { mutate } = useMutation({
        mutationFn: createShowtime,
        onSuccess: () => {
            reset()
            setSuccessMessage("Showtime created")
        },
        onError: (err: any) => {
            setServerError(err.response?.data?.message ?? 'Something went wrong')
        }
    })

    const submitForm = async (data: CreateShowtimeFormData) => {
        try{
            mutate({
                ...data,
                startsAt: new Date(data.startsAt),
                endsAt: new Date(data.endsAt)
            })
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    return { register, handleSubmit, submitForm, setValue, getValues, errors, isSubmitting, serverError, successMessage }
}