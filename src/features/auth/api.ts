import { api } from '@/lib/axios';
import type { LoginCredentials } from "@/features/auth/types.ts";

export const loginUser = async (user: LoginCredentials) => {
    const { data } = await api.post('/auth/login', user)
    return data
}

export const logoutUser = async () => {
    await api.post('/auth/logout')
}

export const getMe = async () => {
    const { data } = await api.get('/auth/me')
    return data.user
}