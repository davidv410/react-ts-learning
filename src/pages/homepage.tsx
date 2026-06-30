import { useAuth } from "@/features/auth/context.tsx";
import { logoutUser } from "@/features/auth/api.ts";
import {useNavigate} from "react-router-dom";

export const Homepage = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await logoutUser()
        logout()
        navigate("/login")
    }
    return(
        <>
            <p>{user?.email}</p>
            <button onClick={() => handleLogout()}>Logout</button>
        </>
    )
}