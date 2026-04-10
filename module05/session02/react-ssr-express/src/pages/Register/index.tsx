import { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerProcess } from '../../api/auth.api'
import { Helmet } from 'react-helmet-async'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      window.alert('Password and confirmation password doesnt match !')
      return
    }
    try {
        await registerProcess(name, email, password)
        location.pathname = '/login'
    }
    catch {
        window.alert('Registration failed. Please try again.')
        return
    }
  }

  return (
    <main className="auth-page">
        <Helmet>
            <title>Register - My Vite App</title>
            <meta name="description" content="Buat akun baru untuk mengakses fitur eksklusif di My Vite App." />
            <meta property="og:title" content="Register - My Vite App" />
            <meta property="og:description" content="Buat akun baru untuk mengakses fitur eksklusif di My Vite App." />
            <meta property="og:type" content="website" />
         </Helmet>
      <section className="auth-card">
        <h1>Register</h1>
        <p>Buat akun baru untuk mengakses fitur.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Nama Lengkap
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              required
            />
          </label>

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
              placeholder="Minimal 8 karakter"
              required
            />
          </label>

          <label>
            Konfirmasi Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi password"
              required
            />
          </label>

          <button type="submit" className="auth-button">
            Daftar
          </button>
        </form>

        <p className="auth-footer">
          Sudah punya akun? <Link to="/login">Masuk sekarang</Link>
        </p>
      </section>
    </main>
  )
}