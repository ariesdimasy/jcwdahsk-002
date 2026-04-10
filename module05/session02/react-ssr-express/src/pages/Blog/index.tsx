import { Link } from 'react-router-dom'
import { blogPosts } from './data'
import { Helmet } from 'react-helmet-async'

export default function Blog() {
  return (
    <main className="blog-page">
    <Helmet>
        <title>Blog - My Vite App</title>
        <meta name="description" content="Daftar artikel blog terbaru di My Vite App." />
        <meta property="og:title" content="Blog - My Vite App" />
        <meta property="og:description" content="Daftar artikel blog terbaru di My Vite App." />
        <meta property="og:type" content="website" />
    </Helmet>
      <section className="blog-hero">
        <h1>Blog</h1>
        <p>Berikut adalah daftar artikel blog terbaru.</p>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-header">
              <h2>{post.title}</h2>
              <small>{post.date}</small>
            </div>
            <p className="blog-card-summary">{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="blog-card-link">
              Baca selengkapnya →
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
