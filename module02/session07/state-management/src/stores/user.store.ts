import { create } from 'zustand'

interface IUserState {
    user: { name: string, position: string, gender: string }[]
    setUser: (user: { name: string, position: string, gender: string }) => void
}

export const useUserStore = create<IUserState>((set) => ({
    user: [],
    setUser: (user) => set((state) => ({ user: [...state.user, user] })),
}))