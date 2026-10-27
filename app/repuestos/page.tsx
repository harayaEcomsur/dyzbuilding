import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RepuestosCatalogo from '@/components/RepuestosCatalogo'
import SiteHeader from '@/components/SiteHeader'
import BottomTabBar from '@/components/BottomTabBar'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import { getCatalogoPublico, getMarcasPublicas } from '@/lib/catalogo-data'
import { getSiteContent } from '@/lib/site-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

// Mismos glifos que usa el home (app/page.tsx) para su BottomTabBar — más
// "catalogo", propio de esta página (salto al grid de productos).
const TAB_ICONS = {
  inicio: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5V20h-6v-5.5H9V20H3z"/></svg>,
  catalogo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M4 7.5L12 12l8-4.5M12 12v9"/></svg>,
  nosotros: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  faq: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M10 9.8c0-1.2 1-2 2-2s2 .9 2 2c0 1.1-1 1.7-1.7 2.5-.3.4-.3.7-.3 1"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>,
  contacto: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="1.5"/><path d="M2 7l10 7 10-7"/></svg>,
}

export const revalidate = 300 // el catálogo se administra a mano en /admin — 5 min de cache es de sobra

export async function generateMetadata(): Promise<Metadata> {
  const marcas = await getMarcasPublicas()
  const marcasTxt = marcas.map(m => m.nombre).join(', ')
  const desc = marcasTxt
    ? `Catálogo de repuestos originales de las marcas que trabajamos: ${marcasTxt}. Selecciona lo que necesitas y solicita una cotización sin costo ni compromiso.`
    : 'Catálogo de repuestos originales para equipos de climatización y refrigeración. Selecciona lo que necesitas y solicita una cotización sin costo ni compromiso.'

  return {
    title: marcasTxt ? `Repuestos ${marcasTxt} — Cotización Online` : 'Solicitud de Repuestos HVAC',
    description: desc,
    alternates: {
      canonical: `${siteUrl}/repuestos/`,
      languages: {
        es: `${siteUrl}/repuestos/`,
        en: `${siteUrl}/en/parts/`,
      },
    },
    openGraph: {
      title: marcasTxt ? `Repuestos ${marcasTxt} | D&Z Building Chile` : 'Solicitud de Repuestos | D&Z Building Chile',
      description: desc,
      url: `${siteUrl}/repuestos/`,
      locale: 'es_CL',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

export default async function RepuestosPage() {
  const [items, marcas, c] = await Promise.all([getCatalogoPublico(), getMarcasPublicas(), getSiteContent()])
  const waDigits = c.empresa.telefono.replace(/\D/g, '')
  const waNumber = waDigits.startsWith('56') ? waDigits : `56${waDigits}`
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, me interesa cotizar repuestos para mi equipo.')}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Repuestos', item: `${siteUrl}/repuestos/` },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Catálogo de Repuestos — D&Z Building',
        description: 'Repuestos originales disponibles para cotización, por marca y compatibilidad de equipo.',
        url: `${siteUrl}/repuestos/`,
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          // Sin '@type': 'Product' a propósito: no hay precio fijo (es catálogo
          // de solicitud de cotización), y Google exige "offers"/"review"/
          // "aggregateRating" para validar Product — inventar un precio sería
          // engañoso. Queda como objeto genérico, válido para ItemList.
          item: {
            name: it.nombre,
            category: it.categoria || undefined,
            ...(it.marca ? { brand: it.marca } : {}),
            ...(it.imagenes[0] ? { image: it.imagenes[0] } : {}),
            ...(it.compatibilidad ? { description: `Compatible con: ${it.compatibilidad}` } : {}),
          },
        })),
      },
    ],
  }

  return (
    <div className="sp-wrap sp-wrap-fixed-nav">
      {items.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <a href="#catalogo" className="skip-link">Saltar al contenido</a>
      <SiteHeader lang="es" empresaNombre={c.empresa.nombre} telefono={c.empresa.telefono} waUrl={waUrl} />

      <div className="sp-hero">
        <div className="sp-breadcrumb">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <span>Repuestos</span>
        </div>
        <h1 className="sp-hero-title">Solicitud de<br />Repuestos</h1>
        <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 0' }}>
          {marcas.length > 0
            ? `Repuestos originales de ${marcas.map(m => m.nombre).join(', ')}. Selecciona lo que necesitas y te enviamos una cotización — sin costo ni compromiso.`
            : 'Selecciona lo que necesitas y te enviamos una cotización — sin costo ni compromiso.'}
        </p>
      </div>

      <RepuestosCatalogo lang="es" initialItems={items} initialMarcas={marcas} />

      <footer className="sp-footer sp-footer-pad-tabbar">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
        </Link>
        <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} D&Z Building SpA
        </span>
      </footer>

      <BottomTabBar lang="es" tabs={[
        { label: 'Inicio', href: '/', icon: TAB_ICONS.inicio },
        { label: 'Catálogo', href: '#catalogo', icon: TAB_ICONS.catalogo },
        { label: 'Nosotros', href: '/#nosotros', icon: TAB_ICONS.nosotros },
        { label: 'Preguntas', href: '/#faq', icon: TAB_ICONS.faq },
        { label: 'Contacto', href: '/#contacto', icon: TAB_ICONS.contacto, accent: true },
      ]} />
      <AnalyticsTracker />
    </div>
  )
}
