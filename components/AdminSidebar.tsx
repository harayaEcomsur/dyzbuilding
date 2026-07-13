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
      {
        label: 'Orden de Compra',
        href: '/admin/ordenes',
        children: [
          { label: 'Nueva Orden', href: '/admin/ordenes/nueva' },
          { label: 'Historial', href: '/admin/ordenes' },
        ],
      },
      {
        label: 'Contratos',
        href: '/admin/contratos',
        children: [
          { label: 'Nuevo Contrato', href: '/admin/contratos/nuevo' },
          { label: 'Historial', href: '/admin/contratos' },
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

export default function AdminSidebar({
  open = false,
  onNavigate,
}: {
  open?: boolean
  onNavigate?: () => void
}) {
  const router = useRouter()
  const pathname = usePathname()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    onNavigate?.()
    router.push('/admin/login')
  }

  return (
    <aside className={`admin-sidebar${open ? ' open' : ''}`}>
      <div className="admin-sidebar-brand">
        <Image
          src="/logo.png"
          alt="D&Z Building"
          width={650}
          height={300}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          priority
        />
        <div className="admin-sidebar-tag">Panel de Administración</div>
      </div>

      <div role="navigation" className="admin-sidebar-nav">
        <div className="admin-sidebar-dashboard">
          <NavLink href="/admin" active={pathname === '/admin'} onNavigate={onNavigate}>
            Dashboard
          </NavLink>
        </div>

        {groups.map(({ label, items }) => (
          <div key={label} className="admin-sidebar-group">
            <div className="admin-sidebar-section">{label}</div>
            {items.map(({ label: itemLabel, href, children }) => {
              const childActive = children?.some(c => pathname === c.href) ?? false
              const selfActive = pathname === href && !childActive

              return (
                <div key={href}>
                  <NavLink
                    href={href}
                    active={selfActive}
                    parentActive={childActive}
                    onNavigate={onNavigate}
                  >
                    {itemLabel}
                  </NavLink>
                  {children && (
                    <div className="admin-sidebar-children">
                      {children.map(child => (
                        <NavLink
                          key={child.href}
                          href={child.href}
                          active={pathname === child.href}
                          sub
                          onNavigate={onNavigate}
                        >
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

      <div className="admin-sidebar-footer">
        <button type="button" className="admin-sidebar-logout" onClick={() => void handleLogout()}>
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}

function NavLink({
  href,
  active,
  parentActive,
  sub,
  onNavigate,
  children,
}: {
  href: string
  active: boolean
  parentActive?: boolean
  sub?: boolean
  onNavigate?: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        'admin-nav-link',
        sub ? 'admin-nav-link-sub' : '',
        active ? 'active' : '',
        parentActive ? 'parent-active' : '',
      ].filter(Boolean).join(' ')}
    >
      {children}
    </Link>
  )
}
