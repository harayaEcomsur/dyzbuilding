'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const links = [
    { href: '/admin/cotizaciones/nueva', label: 'Nueva Cotización' },
  ]

  return (
    <aside style={{
      width: 220, flexShrink: 0,
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      padding: '28px 0',
    }}>
      <div style={{ padding: '0 24px 28px', borderBottom: '1px solid var(--border)' }}>
        <Image src="/logo.png" alt="D&Z Building" width={100} height={32} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
      </div>

      <nav style={{ flex: 1, padding: '20px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p style={{
          fontFamily: 'var(--font-josefin), sans-serif',
          fontSize: 7.5, letterSpacing: '0.36em', textTransform: 'uppercase',
          color: 'var(--dim)', padding: '0 12px', marginBottom: 8,
        }}>Cotizaciones</p>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            display: 'block',
            fontFamily: 'var(--font-josefin), sans-serif',
            fontSize: 10.5, letterSpacing: '0.1em',
            color: pathname === href ? 'var(--accent)' : 'var(--dim)',
            textDecoration: 'none',
            padding: '9px 12px',
            background: pathname === href ? 'var(--accent-faint)' : 'transparent',
            borderLeft: pathname === href ? '2px solid var(--accent)' : '2px solid transparent',
            transition: 'color 0.2s',
          }}>{label}</Link>
        ))}
      </nav>

      <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={handleLogout}
          style={{
            fontFamily: 'var(--font-josefin), sans-serif',
            fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--dim)', background: 'none', border: 'none',
            cursor: 'pointer', padding: 0,
          }}
        >
          Cerrar Sesión →
        </button>
      </div>
    </aside>
  )
}
