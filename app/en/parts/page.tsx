import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RepuestosCatalogo from '@/components/RepuestosCatalogo'
import SiteHeader from '@/components/SiteHeader'
import BottomTabBar from '@/components/BottomTabBar'
import { getCatalogoPublico, getMarcasPublicas } from '@/lib/catalogo-data'
import { getSiteContent } from '@/lib/site-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

// Same glyphs as the home page's BottomTabBar, plus "catalog" for this page.
const TAB_ICONS = {
  inicio: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5V20h-6v-5.5H9V20H3z"/></svg>,
  catalogo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M4 7.5L12 12l8-4.5M12 12v9"/></svg>,
  nosotros: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  faq: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M10 9.8c0-1.2 1-2 2-2s2 .9 2 2c0 1.1-1 1.7-1.7 2.5-.3.4-.3.7-.3 1"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>,
  contacto: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="1.5"/><path d="M2 7l10 7 10-7"/></svg>,
}

export const revalidate = 300 // catalog is managed by hand in /admin — 5 min cache is plenty

export async function generateMetadata(): Promise<Metadata> {
  const marcas = await getMarcasPublicas()
  const marcasTxt = marcas.map(m => m.nombre).join(', ')
  const desc = marcasTxt
    ? `Catalog of original parts for the brands we work with: ${marcasTxt}. Select what you need and request a free, no-commitment quote.`
    : 'Catalog of original parts for HVAC and refrigeration equipment. Select what you need and request a free, no-commitment quote.'

  return {
    title: marcasTxt ? `${marcasTxt} Parts — Online Quote` : 'Parts Request',
    description: desc,
    alternates: {
      canonical: `${siteUrl}/en/parts/`,
      languages: {
        es: `${siteUrl}/repuestos/`,
        en: `${siteUrl}/en/parts/`,
      },
    },
    openGraph: {
      title: marcasTxt ? `${marcasTxt} Parts | D&Z Building Chile` : 'Parts Request | D&Z Building Chile',
      description: desc,
      url: `${siteUrl}/en/parts/`,
      locale: 'en_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

export default async function PartsPage() {
  const [items, marcas, c] = await Promise.all([getCatalogoPublico(), getMarcasPublicas(), getSiteContent()])
  const waDigits = c.empresa.telefono.replace(/\D/g, '')
  const waNumber = waDigits.startsWith('56') ? waDigits : `56${waDigits}`
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello, I am interested in getting a quote for parts for my equipment.')}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en` },
          { '@type': 'ListItem', position: 2, name: 'Parts', item: `${siteUrl}/en/parts/` },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Parts Catalog — D&Z Building',
        description: 'Original parts available for quote, by brand and equipment compatibility.',
        url: `${siteUrl}/en/parts/`,
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: it.nombre,
            category: it.categoria || undefined,
            ...(it.marca ? { brand: { '@type': 'Brand', name: it.marca } } : {}),
            ...(it.imagenes[0] ? { image: it.imagenes[0] } : {}),
            ...(it.compatibilidad ? { description: `Compatible with: ${it.compatibilidad}` } : {}),
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

      <a href="#catalog" className="skip-link">Skip to content</a>
      <SiteHeader lang="en" empresaNombre={c.empresa.nombre} telefono={c.empresa.telefono} waUrl={waUrl} />

      <div className="sp-hero">
        <div className="sp-breadcrumb">
          <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span>Parts</span>
        </div>
        <h1 className="sp-hero-title">Parts<br />Request</h1>
        <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 0' }}>
          {marcas.length > 0
            ? `Original parts from ${marcas.map(m => m.nombre).join(', ')}. Select what you need and we'll send you a quote — free, no commitment.`
            : "Select what you need and we'll send you a quote — free, no commitment."}
        </p>
      </div>

      <RepuestosCatalogo lang="en" initialItems={items} initialMarcas={marcas} />

      <footer className="sp-footer sp-footer-pad-tabbar">
        <Link href="/en" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
        </Link>
        <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} D&Z Building SpA
        </span>
      </footer>

      <BottomTabBar lang="en" tabs={[
        { label: 'Home', href: '/en', icon: TAB_ICONS.inicio },
        { label: 'Catalog', href: '#catalog', icon: TAB_ICONS.catalogo },
        { label: 'About', href: '/en#nosotros', icon: TAB_ICONS.nosotros },
        { label: 'FAQ', href: '/en#faq', icon: TAB_ICONS.faq },
        { label: 'Contact', href: '/en#contacto', icon: TAB_ICONS.contacto, accent: true },
      ]} />
    </div>
  )
}
