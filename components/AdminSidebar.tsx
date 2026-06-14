'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const groups: { label: string; items: NavItem[] }[] = [
  {
    label: 'Documentos',
    items: [
      {
        label: 'Cotizaciones',
        href: '/admin/cotizaciones',
        children: [
          { label: 'Nueva Cotización', href: '/admin/cotizaciones/nueva' },
          { label: 'Historial', href: '/admin/cotizaciones' },
        ],
      },
      {
        label: 'Membrete',
        href: '/admin/membrete',
        children: [
          { label: 'Nuevo Membrete', href: '/admin/membrete/nuevo' },
          { label: 'Historial', href: '/admin/membrete' },
        ],
      },
      {
        label: 'Informe Técnico',
        href: '/admin/informe',
        children: [
          { label: 'Nuevo Informe', href: '/admin/informe/nuevo' },
          { label: 'Historial', href: '/admin/informe' },
        ],
      },
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
        <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginTop: 10 }}>
          Panel de Administración
        </div>
      </div>

      <div role="navigation" style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
        <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
          <NavLink href="/admin" active={pathname === '/admin'}>Dashboard</NavLink>
        </div>

        {groups.map(({ label, items }) => (
          <div key={label} style={{ marginTop: 20 }}>
            <div style={{
              fontFamily: 'Josefin Sans, sans-serif', fontSize: 12, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(200,168,75,0.85)', fontWeight: 400,
              padding: '0 12px 8px',
              borderBottom: '1px solid rgba(200,168,75,0.12)',
              marginBottom: 4,
            }}>
              {label}
            </div>
            {items.map(({ label: itemLabel, href, children }) => {
              const childActive = children?.some(c => pathname === c.href) ?? false
              const selfActive = pathname === href && !childActive

              return (
                <div key={href}>
                  <NavLink
                    href={href}
                    active={selfActive}
                    parentActive={childActive}
                  >
                    {itemLabel}
                  </NavLink>
                  {children && (
                    <div style={{ marginLeft: 10, borderLeft: '1px solid var(--border)', marginBottom: 4 }}>
                      {children.map(child => (
                        <NavLink key={child.href} href={child.href} active={pathname === child.href} sub>
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 12px', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={handleLogout}
          style={{
            width: '100%', fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase',
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

function NavLink({ href, active, parentActive, sub, children }: {
  href: string
  active: boolean
  parentActive?: boolean
  sub?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex', alignItems: 'center',
        padding: sub ? '7px 12px' : '9px 12px',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: sub ? 10 : 10.5,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: active
          ? 'var(--accent)'
          : parentActive
            ? 'rgba(200,168,75,0.55)'
            : sub
              ? 'rgba(240,238,235,0.35)'
              : 'rgba(240,238,235,0.5)',
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
