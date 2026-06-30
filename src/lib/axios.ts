import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

api.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config

        if (
            originalRequest.url?.includes('/auth/refresh') ||
            originalRequest.url?.includes('/auth/me')
        ) {
            return Promise.reject(error)
        }

        if(error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry = true

            try{
                await api.post('/auth/refresh')
                return api(originalRequest)
            }catch{
                window.location.href = "/login"
            }
        }

        return Promise.reject(error)
    }
)

export { api }