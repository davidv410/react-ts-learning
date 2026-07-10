import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { type CreateMovieFormData, createMovieSchema } from "@/features/movies/schema.ts";
import {useMutation} from "@tanstack/react-query";
import {createMovie} from "@/features/movies/api.ts";
import {useState} from "react";


export const useCreateMovie = () => {
    const { register, handleSubmit, setValue, getValues, reset, formState: { errors, isSubmitting }} = useForm<CreateMovieFormData>({
        resolver: zodResolver(createMovieSchema),
        defaultValues: {
            genreIds: []
        }
    })

    const [movieSuccessMessage, setMovieSuccessMessage] = useState<string | null>(null);
    const [serverError, setServerError] = useState<string | null>(null)

    const { mutate } = useMutation({
        mutationFn: createMovie,
        onSuccess: () => {
            setMovieSuccessMessage("Movie added to db")
            reset()
        },
        onError: (err: any) => {
            setServerError(err.response?.data?.message)
        }
    })

    const submitForm = async (data: CreateMovieFormData) => {
        try{
            mutate(data)
        }catch(err){
            console.log(err)
        }
    }

    return { register, handleSubmit, submitForm, setValue, getValues, errors, isSubmitting, movieSuccessMessage, serverError }
}