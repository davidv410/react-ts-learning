import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

export const publicApi = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                await publicApi.post('/auth/refresh')
                return api(originalRequest)
            } catch {
                if (window.location.pathname !== '/login') {
                    window.location.href = '/login'
                }
            }
        }

        return Promise.reject(error)
    }
)

export { api }