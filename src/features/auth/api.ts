import { api } from '@/lib/axios';
import type { LoginCredentials } from "@/features/auth/types.ts";
import type {RegisterFormData} from "@/features/auth/schema.ts";

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

export const registerUser = async (user: RegisterFormData) => {
    const { data } = await api.post('/auth/register', user)
    return data
}