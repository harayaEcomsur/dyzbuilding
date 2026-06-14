'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Error al ingresar')
        return
      }
      router.push('/admin')
    } catch {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}>
      <div style={{ width: '100%', maxWidth: 400, padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', marginBottom: 20 }}>
            <Image
              src="/logo.png"
              alt="D&Z Building"
              width={650}
              height={300}
              priority
              style={{ width: 260, height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--dim)' }}>
            Panel de Administración
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="field">
            <label>Usuario</label>
            <input
              type="text" required autoComplete="username"
              value={username} onChange={e => setUsername(e.target.value)}
              placeholder="admin"
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password" required autoComplete="current-password"
              value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#e05252', margin: 0 }}>{error}</p>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{ width: '100%', marginTop: 8, opacity: loading ? 0.6 : 1, textAlign: 'center' }}
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}
