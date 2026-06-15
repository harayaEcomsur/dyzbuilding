'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="admin-shell">
      <header className="admin-mobile-header">
        <button
          type="button"
          className="admin-menu-btn"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className="admin-menu-icon" aria-hidden />
        </button>
        <Image
          src="/logo.png"
          alt="D&Z Building"
          width={650}
          height={300}
          className="admin-mobile-logo"
          priority
        />
        <span className="admin-mobile-title">Admin</span>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="admin-overlay"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <AdminSidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />

      <main className="admin-main">
        {children}
      </main>
    </div>
  )
}
