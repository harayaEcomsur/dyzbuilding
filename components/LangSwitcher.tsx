'use client'
import { useCallback } from 'react'

export default function LangSwitcher({ lang }: { lang: 'es' | 'en' }) {
  const targetUrl = lang === 'es' ? '/en/' : '/'

  const handleClick = useCallback(() => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'lang_switched', { from_lang: lang, to_lang: lang === 'es' ? 'en' : 'es' })
    }
    if (lang === 'en') {
      // Going to ES — set manual pref so middleware doesn't auto-redirect back to /en/
      document.cookie = 'lang-manual=es;path=/;max-age=31536000;samesite=lax'
    } else {
      // Going to EN — clear manual pref so auto-detect works if they clear cookies
      document.cookie = 'lang-manual=;path=/;max-age=0'
    }
  }, [lang])

  return (
    <a
      href={targetUrl}
      onClick={handleClick}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      style={{
        fontFamily: 'Josefin Sans, var(--font-josefin), sans-serif',
        fontSize: 8.5,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(200,168,75,0.8)',
        background: 'transparent',
        border: '1px solid rgba(200,168,75,0.3)',
        padding: '6px 13px',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
        lineHeight: 1,
        textDecoration: 'none',
        display: 'inline-block',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'
        ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,168,75,0.6)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(200,168,75,0.8)'
        ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,168,75,0.3)'
      }}
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </a>
  )
}
