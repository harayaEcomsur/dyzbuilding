'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

const groups = [
  {
    label: 'Documentos',
    items: [
      { label: 'Nueva Cotización', href: '/admin/cotizaciones/nueva' },
      { label: 'Membrete', href: '/admin/membrete' },
      { label: 'Informe Técnico', href: '/admin/informe' },
    ],
  },
  {
    label: 'Identidad',
    items: [
      { label: 'Firma de Email', href: '/admin/firma-email' },
      { label: 'Tarjeta', href: '/admin/tarjeta' },
    ],
  },
  {
    label: 'Sitio Web',
    items: [
      { label: 'Contenido', href: '/admin/contenido' },
    ],
  },
]

export default function AdminSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <aside style={{
      width: 220, background: 'var(--bg2)', borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', padding: '28px 0',
      position: 'sticky', top: 0, height: '100vh', overflowY: 'auto',
    }}>
      <div style={{ padding: '20px 20px', borderBottom: '1px solid var(--border)' }}>
        <Image
          src="/logo.png"
          alt="D&Z Building"
          width={650}
          height={300}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          priority
        />
        <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginTop: 10 }}>
          Panel de Administración
        </div>
      </div>

      <div role="navigation" style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
        <NavLink href="/admin" active={pathname === '/admin'}>Dashboard</NavLink>

        {groups.map(({ label, items }) => (
          <div key={label} style={{ marginTop: 8 }}>
            <div style={{
              fontFamily: 'Josefin Sans, sans-serif', fontSize: 7, letterSpacing: '0.35em',
              textTransform: 'uppercase', color: 'rgba(200,168,75,0.45)',
              padding: '10px 12px 4px',
            }}>
              {label}
            </div>
            {items.map(({ label: itemLabel, href }) => (
              <NavLink key={href} href={href} active={pathname === href}>
                {itemLabel}
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 12px', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={handleLogout}
          style={{
            width: '100%', fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--dim)', background: 'none', border: 'none',
            cursor: 'pointer', padding: '10px 12px', textAlign: 'left',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--dim)' }}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}

function NavLink({ href, active, children }: {
  href: string; active: boolean; children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex', alignItems: 'center',
        padding: '9px 12px',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: active ? 'var(--accent)' : 'rgba(240,238,235,0.5)',
        background: active ? 'rgba(200,168,75,0.06)' : 'transparent',
        textDecoration: 'none',
        borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
        transition: 'all 0.15s',
      }}
    >
      {children}
    </Link>
  )
}
