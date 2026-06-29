import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/context.tsx";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()
    return user ? children : <Navigate to="/login" />
}