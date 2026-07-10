import {useAuth} from "@/features/auth/context.tsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {type LoginFormData, loginSchema} from "@/features/auth/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginUser} from "@/features/auth/api.ts";
import {useState} from "react";

export const useLogin = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [serverError, setServerError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })


    const submitForm = async (data: LoginFormData) => {
        try{
            const response = await loginUser(data)
            login(response.user)
            navigate('/')
        }catch(err: any){
            setServerError(err.response?.data?.message)
        }
    }

    return { register, handleSubmit, submitForm, serverError, errors, isSubmitting }
}