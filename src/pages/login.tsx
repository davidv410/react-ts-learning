import { loginUser } from "@/features/auth/api.ts";
import { useAuth } from "@/features/auth/context.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import {type LoginFormData, loginSchema} from "@/features/auth/schema.ts";
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

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
        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit(submitForm)}>
               <input {...register('email')} placeholder="email"/><br/>
               {errors.email && <p>{errors.email.message}</p>}

               <input {...register('password')} placeholder="password" type="password" />
               {errors.password && <p>{errors.password.message}</p>}

               <button type="submit" disabled={isSubmitting}>
                   {isSubmitting ? 'Logging in...' : 'Login'}
               </button>
           </form>
        </>
    )
}