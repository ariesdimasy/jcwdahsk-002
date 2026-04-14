import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { getProfile, updateProfile, uploadAvatar, getCurrentUserId } from '../../api/profile.api'

interface UserProfile {
    id: number
    name: string
    email: string
    role?: string
    avatarUrl: string | null
    createdAt: string
}

export default function Profile() {
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const userId = getCurrentUserId()

    useEffect(() => {
        if (!userId) {
            setLoading(false)
            return
        }
        getProfile(userId)
            .then((data: UserProfile) => {
                setProfile(data)
                setName(data.name)
                setEmail(data.email)
                setAvatarPreview(data.avatarUrl)
            })
            .catch(() => setMessage({ type: 'error', text: 'Gagal memuat profil. Pastikan Anda sudah login.' }))
            .finally(() => setLoading(false))
    }, [userId])

    const showMessage = (type: 'success' | 'error', text: string) => {
        setMessage({ type, text })
        setTimeout(() => setMessage(null), 3500)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setSelectedFile(file)
        const reader = new FileReader()
        reader.onload = () => setAvatarPreview(reader.result as string)
        reader.readAsDataURL(file)
    }

    const handleAvatarUpload = async () => {
        if (!selectedFile || !userId) return
        setUploading(true)
        try {
            const res = await uploadAvatar(userId, selectedFile)
            setAvatarPreview(res.avatarUrl)
            setSelectedFile(null)
            showMessage('success', 'Foto profil berhasil diperbarui!')
        } catch {
            showMessage('error', 'Gagal mengupload foto. Coba lagi.')
        } finally {
            setUploading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userId) return
        setSaving(true)
        try {
            await updateProfile(userId, { name, email })
            showMessage('success', 'Profil berhasil diperbarui!')
        } catch {
            showMessage('error', 'Gagal memperbarui profil. Coba lagi.')
        } finally {
            setSaving(false)
        }
    }

    const initials = (name || profile?.name || '?').charAt(0).toUpperCase()

    return (
        <main className="profile-page">
            <Helmet>
                <title>Profil Saya - My Vite App</title>
                <meta name="description" content="Kelola informasi profil dan foto akun Anda." />
            </Helmet>

            <div className="profile-container">
                <h1 className="profile-title">Profil Saya</h1>

                {loading ? (
                    <div className="profile-loading">
                        <div className="loading-spinner" />
                        <p>Memuat profil…</p>
                    </div>
                ) : !userId ? (
                    <div className="profile-card">
                        <p className="profile-not-logged">
                            Anda belum login. <a href="/login">Masuk sekarang</a> untuk melihat profil.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* ─── Toast Message ───────────────────────────── */}
                        {message && (
                            <div className={`profile-toast profile-toast--${message.type}`}>
                                {message.type === 'success' ? '✓' : '✕'} {message.text}
                            </div>
                        )}

                        {/* ─── Avatar Card ─────────────────────────────── */}
                        <div className="profile-card profile-avatar-card">
                            <div className="avatar-wrapper">
                                {avatarPreview ? (
                                    <img
                                        src={avatarPreview}
                                        alt="Avatar"
                                        className="avatar-img"
                                    />
                                ) : (
                                    <div className="avatar-placeholder">{initials}</div>
                                )}
                                <button
                                    type="button"
                                    className="avatar-edit-btn"
                                    onClick={() => fileInputRef.current?.click()}
                                    title="Ganti foto"
                                >
                                    ✎
                                </button>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                id="avatar-input"
                            />

                            <div className="avatar-info">
                                <p className="avatar-name">{profile?.name ?? '—'}</p>
                                <p className="avatar-role">{profile?.role ?? ''}</p>
                                {profile?.createdAt && (
                                    <p className="avatar-joined">
                                        Bergabung sejak{' '}
                                        {new Date(profile.createdAt).toLocaleDateString('id-ID', {
                                            day: 'numeric', month: 'long', year: 'numeric',
                                        })}
                                    </p>
                                )}
                            </div>

                            {selectedFile && (
                                <div className="avatar-upload-row">
                                    <span className="avatar-filename">{selectedFile.name}</span>
                                    <button
                                        type="button"
                                        className="auth-button avatar-upload-btn"
                                        onClick={handleAvatarUpload}
                                        disabled={uploading}
                                    >
                                        {uploading ? 'Mengupload…' : 'Simpan Foto'}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* ─── Edit Form Card ───────────────────────────── */}
                        <div className="profile-card">
                            <h2 className="profile-section-title">Informasi Akun</h2>
                            <form className="auth-form" onSubmit={handleSubmit}>
                                <label>
                                    Nama Lengkap
                                    <input
                                        id="profile-name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nama lengkap Anda"
                                        required
                                        minLength={3}
                                    />
                                </label>

                                <label>
                                    Email
                                    <input
                                        id="profile-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email@domain.com"
                                        required
                                    />
                                </label>

                                <label>
                                    Role
                                    <input
                                        type="text"
                                        value={profile?.role ?? ''}
                                        disabled
                                        className="input-disabled"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="auth-button"
                                    disabled={saving}
                                >
                                    {saving ? 'Menyimpan…' : 'Simpan Perubahan'}
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </main>
    )
}