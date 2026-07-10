import { useLogin } from "@/features/auth/hooks/useLogin.ts";

export const Login = () => {
    const { register, handleSubmit, submitForm, serverError, errors, isSubmitting } = useLogin()
    return(
        <>
           <form onSubmit={handleSubmit(submitForm)}>
               <input {...register('email')} placeholder="email"/><br/>
               {errors.email && <p className="text-red-500">{errors.email.message}</p>}

               <input {...register('password')} placeholder="password" type="password" />
               {errors.password && <p className="text-red-500">{errors.password.message}</p>}

               { serverError && <p className="text-red-500">{serverError}</p> }
               <button type="submit" disabled={isSubmitting}>
                   {isSubmitting ? 'Logging in...' : 'Login'}
               </button>
           </form>
        </>
    )
}