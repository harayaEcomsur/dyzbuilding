'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
        throw new Error(data.error ?? 'Error')
      }
      router.push('/admin')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{ width: '100%', maxWidth: 380 }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <Image src="/logo.png" alt="D&Z Building" width={120} height={40} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <p style={{
            fontFamily: 'var(--font-josefin), sans-serif',
            fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--dim)', marginTop: 16,
          }}>Panel de Administración</p>
        </div>

        <form onSubmit={handleSubmit} style={{
          border: '1px solid var(--border)',
          padding: 32,
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <div className="field">
            <label>Usuario</label>
            <input
              type="text" required autoComplete="username"
              value={username} onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password" required autoComplete="current-password"
              value={password} onChange={e => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: '#e55', fontSize: 12, margin: 0 }}>{error}</p>}
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}
