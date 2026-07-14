import { publicApi } from '@/lib/axios';
import type { LoginCredentials } from "@/features/auth/types.ts";
import type {RegisterFormData} from "@/features/auth/schema.ts";

export const loginUser = async (user: LoginCredentials) => {
    const { data } = await publicApi.post('/auth/login', user)
    return data
}

export const logoutUser = async () => {
    await publicApi.post('/auth/logout')
}

export const getMe = async () => {
    const { data } = await publicApi.get('/auth/me')
    return data.user
}

export const registerUser = async (user: RegisterFormData) => {
    const { data } = await publicApi.post('/auth/register', user)
    return data
}