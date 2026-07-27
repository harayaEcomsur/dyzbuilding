'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gtagEvent } from '@/lib/gtag'

interface Link { label: string; href: string }
interface QuickContact { waUrl: string; waLabel: string; phoneUrl: string; phoneLabel: string }

const LABELS: Record<string, { open: string; close: string; nav: string }> = {
  es: { open: 'Abrir menú', close: 'Cerrar menú', nav: 'Menú de navegación' },
  en: { open: 'Open menu', close: 'Close menu', nav: 'Navigation menu' },
}

export default function MobileMenu({ links, cta, lang = 'es', quickContact }: { links: Link[]; cta?: { label: string; href: string }; lang?: string; quickContact?: QuickContact }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const lbl = LABELS[lang] ?? LABELS.es

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Move focus into drawer on open; return it to trigger on close
  useEffect(() => {
    if (open) {
      const first = drawerRef.current?.querySelector<HTMLElement>('button, a[href]')
      first?.focus()
    } else {
      triggerRef.current?.focus()
    }
  }, [open])

  // Focus trap + Escape
  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); return }
      if (e.key !== 'Tab') return
      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]')
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const close = () => setOpen(false)

  function toggle() {
    const next = !open
    setOpen(next)
    gtagEvent(next ? 'mobile_menu_opened' : 'mobile_menu_closed', { lang })
  }

  const overlay = (
    <>
      <div className={`mob-backdrop${open ? ' open' : ''}`} onClick={close} aria-hidden="true" />
      <div
        ref={drawerRef}
        id="mob-drawer"
        className={`mob-drawer${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label={lbl.nav}
      >
        <button className="mob-close" onClick={close} aria-label={lbl.close}>
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
        {quickContact && (
          <div className="mob-quickcontact">
            <a
              className="mob-quickcontact-link"
              href={quickContact.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtagEvent('whatsapp_clicked', { location: 'mobile_menu', lang })}
            >
              <svg width="16" height="16" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
                <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.16.32 2.24.87 3.17L1.25 13.75l3.15-.85c.9.5 1.94.79 3.1.79 3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25zm2.77 8.51c-.15-.08-.9-.44-1.04-.49-.14-.05-.24-.08-.34.08-.1.15-.4.49-.48.59-.09.1-.18.11-.33.04-.15-.08-.63-.23-1.2-.74-.44-.4-.74-.89-.83-1.04-.09-.15-.01-.23.07-.3.07-.07.15-.18.23-.27.08-.09.1-.15.15-.25.05-.1.02-.19-.01-.27-.04-.08-.34-.82-.46-1.12-.12-.3-.25-.26-.34-.26-.09 0-.19-.01-.29-.01-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.54 1.47.62 1.57c.08.1 1.06 1.62 2.57 2.27.36.16.64.25.86.32.36.11.69.1.95.06.29-.04.9-.37 1.03-.72.13-.35.13-.65.09-.72-.04-.07-.14-.11-.29-.18z"/>
              </svg>
              {quickContact.waLabel}
            </a>
            <a
              className="mob-quickcontact-link"
              href={quickContact.phoneUrl}
              onClick={() => gtagEvent('phone_clicked', { location: 'mobile_menu', lang })}
            >
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                <path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/>
              </svg>
              {quickContact.phoneLabel}
            </a>
          </div>
        )}
      </div>
    </>
  )

  return (
    <>
      <button
        ref={triggerRef}
        className="mob-btn"
        aria-label={open ? lbl.close : lbl.open}
        aria-expanded={open}
        aria-controls="mob-drawer"
        onClick={toggle}
      >
        <span className={`mob-icon${open ? ' open' : ''}`} />
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  )
}
