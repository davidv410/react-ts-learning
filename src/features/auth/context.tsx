import React, { createContext, useContext, useState, useEffect } from "react";
import { getMe } from "./api.ts";
import type { User } from "@/features/auth/types.ts";
import {publicApi} from "@/lib/axios.ts";

type AuthContextType = {
    user: User | null
    login: (user: User) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const user = await getMe()
                setUser(user)
            } catch {
                try {
                    await publicApi.post('/auth/refresh')
                    const user = await getMe()
                    setUser(user)
                } catch {
                    setUser(null)
                }
            } finally {
                setLoading(false)
            }
        }
        getUserInfo()
    }, [])

    if (loading) return <p>Loading...</p>
    const login = (user: User) => setUser(user)
    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if(!ctx) throw new Error('useAuth must be used inside AuthProvider')
    return ctx
}