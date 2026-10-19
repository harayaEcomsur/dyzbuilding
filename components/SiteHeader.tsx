'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LangSwitcher from './LangSwitcher'
import MobileMenu from './MobileMenu'

const SECTION_IDS = ['servicios', 'nosotros', 'faq', 'contacto']

// Header único, usado tal cual en el home y en /repuestos (y su espejo en
// inglés) — mismo componente, mismas clases CSS (nav, nav-logo, nav-links,
// nav-tel, nav-cta), así que el padding/gap/margin siempre coinciden sin
// tener que duplicarlos a mano página por página.
//
// Los links de sección usan ancla absoluta (ej. "/#servicios" en vez de
// "#servicios"): funcionan igual estando en el home (hace scroll) o viniendo
// de otra página (navega al home y hace scroll), en vez de romperse porque
// el id de la sección no existe en la página actual.

const TX = {
  es: {
    navServicios: 'Especialidades', navRepuestos: 'Repuestos', navNosotros: 'Nosotros',
    navFaq: 'Preguntas', navContacto: 'Contacto', navCta: 'Solicitar Cotización',
  },
  en: {
    navServicios: 'Specialties', navRepuestos: 'Parts', navNosotros: 'About',
    navFaq: 'FAQ', navContacto: 'Contact', navCta: 'Request a Quote',
  },
}

interface SiteHeaderProps {
  lang: 'es' | 'en'
  empresaNombre: string
  telefono: string
  waUrl: string
}

export default function SiteHeader({ lang, empresaNombre, telefono, waUrl }: SiteHeaderProps) {
  const t = TX[lang]
  const pathname = usePathname()
  const home = lang === 'en' ? '/en' : '/'
  const repuestosHref = lang === 'en' ? '/en/parts' : '/repuestos'
  const isRepuestos = pathname.startsWith('/repuestos') || pathname.startsWith('/en/parts')
  const isHome = pathname === home
  const [activeId, setActiveId] = useState<string>('')

  // Scroll-spy: resalta en el nav la sección del home que está a la vista.
  // Solo corre estando en el home (en /repuestos esos ids no existen).
  // Banda angosta cerca de la parte superior del viewport en vez de un
  // listener de scroll crudo — se activa solo al cruzar el umbral, no en
  // cada frame.
  useEffect(() => {
    if (!isHome) { setActiveId(''); return }
    const els = SECTION_IDS.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    if (els.length === 0) return
    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.find(e => e.isIntersecting)
        if (hit) setActiveId(hit.target.id)
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  const links = [
    { label: t.navServicios, href: `${home}#servicios`, id: 'servicios' },
    { label: t.navRepuestos, href: repuestosHref, id: null },
    { label: t.navNosotros, href: `${home}#nosotros`, id: 'nosotros' },
    { label: t.navFaq, href: `${home}#faq`, id: 'faq' },
    { label: t.navContacto, href: `${home}#contacto`, id: 'contacto' },
  ]

  function isActive(link: { href: string; id: string | null }) {
    if (link.href === repuestosHref) return isRepuestos
    return isHome && link.id === activeId
  }

  return (
    <nav>
      <a className="nav-logo" href={home}>
        <Image src="/logo.png" alt={empresaNombre} width={650} height={300} priority style={{ height: 44, width: 'auto' }} />
      </a>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className={isActive(link) ? 'active' : undefined} aria-current={isActive(link) ? 'page' : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a className="nav-tel" href={`tel:${telefono}`} data-ga-event="phone_clicked" data-ga-location="nav" data-ga-lang={lang} aria-label={lang === 'en' ? `Call ${telefono}` : `Llamar a ${telefono}`}>
          <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/></svg>
          {telefono}
        </a>
        <LangSwitcher lang={lang} altHref={isRepuestos ? (lang === 'es' ? '/en/parts' : '/repuestos') : undefined} />
        <a className="nav-cta" href={`${home}#contacto`} data-ga-event="cta_clicked" data-ga-location="nav" data-ga-label={t.navCta} data-ga-lang={lang}>{t.navCta}</a>
        <MobileMenu
          lang={lang}
          links={links}
          cta={{ label: t.navCta, href: `${home}#contacto` }}
          quickContact={{ waUrl, waLabel: 'WhatsApp', phoneUrl: `tel:${telefono}`, phoneLabel: lang === 'en' ? 'Call' : 'Llamar' }}
        />
      </div>
    </nav>
  )
}
