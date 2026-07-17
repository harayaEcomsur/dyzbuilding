'use client'
import { useState, useEffect } from 'react'
import { gtagEvent } from '@/lib/gtag'

interface Tab { label: string; href: string; icon: React.ReactNode; accent?: boolean }

export default function BottomTabBar({ tabs, lang = 'es' }: { tabs: Tab[]; lang?: string }) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = tabs.map(t => t.href.replace('#', ''))
    const update = () => {
      const threshold = window.innerHeight * 0.45
      let cur = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [tabs])

  return (
    <div role="navigation" aria-label="Navegación" className="tab-bar">
      {tabs.map(t => {
        const id = t.href.replace('#', '')
        return (
          <a
            key={t.href}
            href={t.href}
            onClick={() => gtagEvent('tab_bar_nav', { section: id, label: t.label, lang })}
            className={`tab-item${active === id ? ' tab-active' : ''}${t.accent ? ' tab-accent' : ''}`}
            aria-current={active === id ? 'page' : undefined}
          >
            <span className="tab-icon" aria-hidden="true">{t.icon}</span>
            <span className="tab-lbl">{t.label}</span>
          </a>
        )
      })}
    </div>
  )
}
