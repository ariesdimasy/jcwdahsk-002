import { redirect } from "react-router";
import { create } from "zustand";

interface LoginState {
    email?: string;
    password?: string;
    isLoggedIn: boolean;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    login: () => void;
    logout: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
    email: undefined,
    password: undefined,
    isLoggedIn: false,
    setEmail: (email: string) => set(() => ({ email })),
    setPassword: (password: string) => set(() => ({ password })),
    login: () => set(() => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', useLoginStore.getState().email || '');
        localStorage.setItem('password', useLoginStore.getState().password || '');
        return { isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' }
    }),
    logout: () => set({ isLoggedIn: false }),
}));