import {useRegister} from "@/features/auth/hooks/useRegister.ts";

export const Register = () => {

    const { register, handleSubmit, submitForm, errors, isSubmitting } = useRegister();
    return(
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <input {...register('name')} placeholder="name" className="border"></input><br/>
                { errors.name && <p>{errors.name.message}</p> }

                <input {...register('email')} placeholder="email" className="border"></input><br/>
                { errors.email && <p>{errors.email.message}</p> }

                <input {...register('password')} placeholder="password" className="border"></input><br/>
                { errors.password && <p>{errors.password.message}</p> }

                <input {...register('confirmPassword')} placeholder="confirm password" className="border"></input><br/>
                { errors.confirmPassword && <p>{errors.confirmPassword.message}</p> }

                <button className="border" disabled={isSubmitting}>
                    { isSubmitting ? 'REGISTERING' : 'REGISTER' }
                </button>
            </form>
        </>
    )
}