'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

export default function AdminSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: '▪' },
    { label: 'Nueva Cotización', href: '/admin/cotizaciones/nueva', icon: '▪' },
  ]

  return (
    <aside style={{
      width: 220, background: 'var(--bg2)', borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', padding: '28px 0',
      position: 'sticky', top: 0, height: '100vh',
    }}>
      <div style={{ padding: '0 24px 28px', borderBottom: '1px solid var(--border)' }}>
        <Image src="/logo.png" alt="D&Z Building" width={100} height={32} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
        <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginTop: 8 }}>Admin</div>
      </div>

      <nav style={{ flex: 1, padding: '20px 12px' }}>
        {navItems.map(({ label, href, icon }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px',
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: active ? 'var(--accent)' : 'rgba(240,238,235,0.5)',
              background: active ? 'rgba(200,168,75,0.06)' : 'transparent',
              textDecoration: 'none',
              borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: 6, color: active ? 'var(--accent)' : 'var(--dim)' }}>{icon}</span>
              {label}
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: '20px 12px', borderTop: '1px solid var(--border)' }}>
        <button onClick={handleLogout} style={{
          width: '100%',
          fontFamily: 'Josefin Sans, sans-serif',
          fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--dim)', background: 'none', border: 'none',
          cursor: 'pointer', padding: '10px 12px', textAlign: 'left',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
