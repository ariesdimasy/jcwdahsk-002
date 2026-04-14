import api from './../configs/axios'
export const loginProcess = async (email: string, password: string) => {
    try {
        const response = await api.post('/api/users/login', { email, password })
        localStorage.setItem("accessToken", response.data.token)
        return response.data
    } catch (error) {
        console.error('Error logging in:', error)
        throw error
    }
}

export const registerProcess = async (name: string, email: string, password: string) => {
    try {
        const response = await api.post('/api/users/register', { name, email, password })
        return response.data
    } catch (error) {
        console.error('Error registering:', error)
        throw error
    }
}

export const googleLoginProcess = async () => {
    try {
        const response = await api.post('/api/users/auth/google')
        return response.data
    } catch (error) {
        console.error('Error logging in with Google:', error)
    }
}
