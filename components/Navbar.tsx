'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(12,12,12,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="D&Z Building" width={120} height={40} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
          {[
            { label: 'Especialidades', href: '#especialidades' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Contacto', href: '#contacto' },
          ].map(({ label, href }) => (
            <a key={href} href={href} style={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(240,238,235,0.7)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0eeeb')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,238,235,0.7)')}
            >
              {label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: '10px 22px' }}>
            Solicitar Cotización
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#f0eeeb', cursor: 'pointer', padding: 8 }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <div style={{ width: 22, height: 1, background: '#f0eeeb', marginBottom: 5 }} />
          <div style={{ width: 22, height: 1, background: '#f0eeeb', marginBottom: 5 }} />
          <div style={{ width: 22, height: 1, background: '#f0eeeb' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(12,12,12,0.98)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '20px 32px 28px' }}>
          {[
            { label: 'Especialidades', href: '#especialidades' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Contacto', href: '#contacto' },
          ].map(({ label, href }) => (
            <a
              key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,238,235,0.7)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ marginTop: 16, padding: '10px 22px' }} onClick={() => setMenuOpen(false)}>
            Solicitar Cotización
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
