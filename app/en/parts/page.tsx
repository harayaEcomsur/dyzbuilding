import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RepuestosCatalogo from '@/components/RepuestosCatalogo'
import { getCatalogoPublico, getMarcasPublicas } from '@/lib/catalogo-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

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
  const [items, marcas] = await Promise.all([getCatalogoPublico(), getMarcasPublicas()])

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
    <div className="sp-wrap">
      {items.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <nav className="sp-topnav">
        <Link href="/en" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
        </Link>
        <Link href="/en#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
          Request a quote
        </Link>
      </nav>

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

      <footer className="sp-footer">
        <Link href="/en" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
        </Link>
        <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} D&Z Building SpA
        </span>
      </footer>
    </div>
  )
}
