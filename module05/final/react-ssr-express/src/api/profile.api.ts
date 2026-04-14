import api from './../configs/axios'

/** Decode JWT payload tanpa library tambahan */
export function decodeToken(token: string): { id: number; name: string; email: string; role: string } | null {
    try {
        const payload = token.split('.')[1]
        if (!payload) return null
        const decoded = JSON.parse(atob(payload))
        return decoded as { id: number; name: string; email: string; role: string }
    } catch {
        return null
    }
}

export function getCurrentUserId(): number | null {
    if (typeof window === 'undefined') return null
    const token = localStorage.getItem('accessToken')
    if (!token) return null
    const decoded = decodeToken(token)
    return decoded?.id ?? null
}

export const getProfile = async (userId: number) => {
    const response = await api.get(`/api/users/profile/${userId}`)
    return response.data.data
}

export const updateProfile = async (userId: number, data: { name: string; email: string }) => {
    const response = await api.put(`/api/users/profile/${userId}`, data)
    return response.data
}

export const uploadAvatar = async (userId: number, file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const response = await api.post(`/api/users/profile/${userId}/upload-avatar`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data
}
