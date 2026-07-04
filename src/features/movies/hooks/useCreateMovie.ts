import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { type CreateMovieFormData, createMovieSchema } from "@/features/movies/schema.ts";


export const useCreateMovie = () => {
    const { register, handleSubmit, setValue, getValues, formState: { errors, isSubmitting }} = useForm<CreateMovieFormData>({
        resolver: zodResolver(createMovieSchema)
    })

    const submitForm = async (data: CreateMovieFormData) => {
        try{
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    return { register, handleSubmit, submitForm, setValue, getValues, errors, isSubmitting }
}