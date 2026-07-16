'use client'
import { useState, useEffect } from 'react'

interface Link { label: string; href: string }

export default function MobileMenu({ links }: { links: Link[] }) {
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

      <div className={`mob-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
