import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RepuestosCatalogo from '@/components/RepuestosCatalogo'
import SiteHeader from '@/components/SiteHeader'
import { getCatalogoPublico, getMarcasPublicas } from '@/lib/catalogo-data'
import { getSiteContent } from '@/lib/site-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

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
          item: {
            '@type': 'Product',
            name: it.nombre,
            category: it.categoria || undefined,
            ...(it.marca ? { brand: { '@type': 'Brand', name: it.marca } } : {}),
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

      <footer className="sp-footer">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
        </Link>
        <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} D&Z Building SpA
        </span>
      </footer>
    </div>
  )
}
