import React, { createContext, useContext, useState, useEffect } from "react";
import { getMe } from "./api.ts";
import type { User } from "@/features/auth/types.ts";

//STRUKTURA KONTEKSTA
type AuthContextType = {
    user: User | null
    login: (user: User) => void
    logout: () => void
}

//KREACIJA KONTEXTA
const AuthContext = createContext<AuthContextType | null>(null)

//SETANJE CONTEXTA
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    //DRZI USER APDEJTANIM SVE DOK PROTECT / ME IZ BACKENDA VRACA REQ.USER
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const user = await getMe()
                setUser(user)
            } catch {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        getUserInfo()
    }, [])

    if (loading) return <p>Loading...</p>
    const login = (user: User) => setUser(user) //PRVI SET USERA
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
