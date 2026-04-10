import { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginProcess, googleLoginProcess} from '../../api/auth.api'
import { Helmet } from 'react-helmet-async'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      await loginProcess(email, password)
      event.preventDefault()
      window.alert(`Login sukses untuk ${email}`)
      location.pathname = '/blog'
    } catch (error) {
      event.preventDefault()
      console.error('Error logging in:', error)
      window.alert('Login gagal. Silakan coba lagi.')
    }
  }

  const handleGoogleLogin = async () => {
    await googleLoginProcess()
  }

  return (
    <main className="auth-page">
     <Helmet>
        <title>Login - My Vite App</title>
        <meta name="description" content="Masuk ke akun Anda untuk mengakses konten eksklusif di My Vite App." />
        <meta property="og:title" content="Login - My Vite App" />
        <meta property="og:description" content="Masuk ke akun Anda untuk mengakses konten eksklusif di My Vite App." />
        <meta property="og:type" content="website" />
     </Helmet>
      <section className="auth-card">
        <h1>Login</h1>
        <p>Masuk untuk mengakses konten eksklusif.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contoh@domain.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password Anda"
              required
            />
          </label>

          <button type="submit" className="auth-button">
            Masuk
          </button>
          <button type='button' onClick={handleGoogleLogin} className='auth-button'>
            Google Login
          </button>
        </form>

        <p className="auth-footer">
          Belum punya akun? <Link to="/register">Daftar sekarang</Link>
        </p>
      </section>
    </main>
  )
}