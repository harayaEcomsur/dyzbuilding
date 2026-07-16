'use client'
import { useState, useEffect } from 'react'

interface Link { label: string; href: string }

export default function MobileMenu({ links, cta }: { links: Link[]; cta?: { label: string; href: string } }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <button
        className="mob-btn"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`mob-icon${open ? ' open' : ''}`} />
      </button>

      <div
        className={`mob-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <div className={`mob-drawer${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <button className="mob-close" onClick={close} aria-label="Cerrar menú">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <ul>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        {cta && (
          <a className="mob-cta" href={cta.href} onClick={close}>{cta.label}</a>
        )}
      </div>
    </>
  )
}
