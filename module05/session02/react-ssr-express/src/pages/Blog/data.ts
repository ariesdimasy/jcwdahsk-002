export interface BlogPost {
    id: string
    title: string
    summary: string
    content: string
    date: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 'hello-world',
        title: 'Hello World dari Blog',
        summary: 'Perkenalkan blog SSR React dengan daftar posting sederhana.',
        content:
            'Ini adalah halaman detail blog untuk posting Hello World. Di sini Anda dapat memuat konten posting yang lebih lengkap, gambar, dan informasi tambahan.',
        date: '9 April 2026',
    },
    {
        id: 'vite-ssr',
        title: 'Membangun SSR dengan Vite',
        summary: 'Pelajari bagaimana Vite dan React bekerja bersama dalam aplikasi SSR.',
        content:
            'Di halaman detail ini, Anda bisa melihat konten terperinci tentang SSR dengan Vite. Gunakan React Router untuk navigasi antara daftar dan detail posting.',
        date: '8 April 2026',
    },
    {
        id: 'react-helmet',
        title: 'Meta Tags dan Helmet',
        summary: 'Memahami penggunaan react-helmet-async pada aplikasi SSR.',
        content:
            'Halaman ini menjelaskan mengapa react-helmet-async berguna untuk mengelola title dan meta tags baik di server maupun client dalam React 19.',
        date: '7 April 2026',
    },
]
