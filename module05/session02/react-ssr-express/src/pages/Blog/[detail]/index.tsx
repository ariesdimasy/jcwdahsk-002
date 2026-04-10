import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data'
import { Helmet } from 'react-helmet-async'

export default function BlogDetail() {
  const { detail } = useParams()
  const post = blogPosts.find((item) => item.id === detail)

  if (!post) {
    return (
      <main className="blog-page">
        <Helmet>
            <title>Blog Tidak Ditemukan - My Vite App</title>
            <meta name="description" content="Artikel blog yang Anda cari tidak ditemukan di My Vite App." />
            <meta property="og:title" content="Blog Tidak Ditemukan - My Vite App" />
            <meta property="og:description" content="Artikel blog yang Anda cari tidak ditemukan di My Vite App." />
            <meta property="og:type" content="website" />
        </Helmet>
        <section className="blog-detail-card">
          <h1>Blog tidak ditemukan</h1>
          <p>Maaf, artikel yang Anda cari tidak ada.</p>
          <Link to="/blog" className="blog-back-link">
            Kembali ke daftar blog
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="blog-page">
        <Helmet>
            <title>{post.title} - My Vite App</title>
            <meta name="description" content={post.summary} />
            <meta property="og:title" content={`${post.title} - My Vite App`} />
            <meta property="og:description" content={post.summary} />
            <meta property="og:type" content="article" />
        </Helmet>
      <article className="blog-detail-card">
        <div className="blog-detail-header">
          <h1>{post.title}</h1>
          <p className="blog-detail-meta">{post.date}</p>
        </div>
        <div className="blog-detail-content">
          <p>{post.content}</p>
        </div>
        <Link to="/blog" className="blog-back-link">
          ← Kembali ke daftar blog
        </Link>
      </article>
    </main>
  )
}
