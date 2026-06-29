import { useAuth } from "@/features/auth/context.tsx";
import { logoutUser } from "@/features/auth/api.ts";

export const Homepage = () => {
    const { user, logout } = useAuth()
    const handleLogout = async () => {
        await logoutUser()
        logout()
    }
    return(
        <>
            <p>{user?.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}