import { useLogin } from "@/features/auth/hooks/useLogin.ts";

export const Login = () => {
    const { register, handleSubmit, submitForm, errors, isSubmitting } = useLogin()
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