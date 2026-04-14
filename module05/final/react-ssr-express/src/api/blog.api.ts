import api from "./../configs/axios"

export const getBlogs = async () => {
    try {
        const response = await api.get('/api/articles')
        return response.data
    } catch (error) {
        console.error('Error fetching blogs:', error)
        throw error
    }
}

export const getBlogById = async (id: string) => {
    try {
        const response = await api.get(`/api/articles/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error fetching blog with id ${id}:`, error)
        throw error
    }
}

