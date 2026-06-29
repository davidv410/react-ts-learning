import {useState} from "react";
import { loginUser } from "@/features/auth/api.ts";
import { useAuth } from "@/features/auth/context.tsx";

export const Login = () => {
    const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { login } = useAuth()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUser(prev => ({ ...prev, [name]: value }))
    }


    const submitForm = async (e: React.SubmitEvent) => {
        e.preventDefault()
        try{
            const response = await loginUser(user)
            login(response.user)
        }catch(err){
            if(err instanceof Error){
                setError(err.message)
            }else{
                setError("Something went wrong")
            }
        }
    }
    return(
        <>
           <form onSubmit={submitForm}>
               <input name="email" placeholder="email" onChange={handleInput}/><br/>
               <input name="password" placeholder="password" onChange={handleInput}/><br/>
               <button type="submit">SUBMIT</button>
           </form>
        </>
    )
}