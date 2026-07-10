import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

api.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config

        if (originalRequest.url?.includes('/auth/refresh')) {
            if (window.location.pathname !== '/login') {
                window.location.href = "/login"
            }
            return Promise.reject(error)
        }

        if(error.response?.status === 401 && !originalRequest._retry && !originalRequest.url?.includes('/auth/me')){
            originalRequest._retry = true

            try{
                await api.post('/auth/refresh')
                return api(originalRequest)
            }catch(err: any){
                if (window.location.pathname !== '/login') {
                    window.location.href = "/login"
                }
            }
        }

        return Promise.reject(error)
    }
)

export { api }