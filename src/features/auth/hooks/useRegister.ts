import {useForm} from "react-hook-form";
import {type RegisterFormData, registerSchema} from "@/features/auth/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {registerUser} from "@/features/auth/api.ts";
import {useNavigate} from "react-router-dom";

export const useRegister = () => {
    const { register, handleSubmit, setValue, getValues, reset, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })

    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            reset()
            navigate("/login")
        },
        onError: error => {
            console.log(error)
        }
    })

    const submitForm = async (data: RegisterFormData) => {
        try{
            mutate(data)
        }catch(err){
            console.log(err)
        }
    }

    return { register, handleSubmit, submitForm, setValue, getValues, errors, isSubmitting }
}