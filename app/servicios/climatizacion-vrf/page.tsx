import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import RevealSection from '@/components/RevealSection'
import FaqAccordion from '@/components/FaqAccordion'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import { getSiteContent } from '@/lib/site-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export async function generateMetadata(): Promise<Metadata> {
  const c = await getSiteContent()
  return {
    title: `Sistemas VRF y VRV en Chile — Instalación y Mantención`,

    description:
      'Empresa especialista en instalación y mantención de sistemas VRF/VRV en Chile. Distribuidores oficiales LG, Samsung y Gree. Proyectos para comercio, salud e industria. Cotización gratuita.',
    alternates: {
      canonical: `${siteUrl}/servicios/climatizacion-vrf/`,
      languages: {
        es: `${siteUrl}/servicios/climatizacion-vrf/`,
        en: `${siteUrl}/en/services/vrf-systems/`,
      },
    },
    openGraph: {
      title: `Sistemas VRF/VRV en Chile | ${c.empresa.nombre}`,
      description:
        'Instalación y mantención de sistemas VRF/VRV en Chile. 20 años de experiencia. Distribuidores LG, Samsung y Gree. Cotización sin costo.',
      url: `${siteUrl}/servicios/climatizacion-vrf/`,
      siteName: c.empresa.nombre,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
      locale: 'es_CL',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

const APLICACIONES = [
  {
    titulo: 'Oficinas y Edificios Comerciales',
    desc: 'Control individual por ambiente con una sola unidad exterior. Reducción de hasta 40% en consumo frente a sistemas centrales convencionales.',
    icon: (
      <>
        <rect key="a" x="3" y="4" width="30" height="22" rx=".5" />
        <line key="b" x1="3" y1="12" x2="33" y2="12" />
        <line key="c" x1="10" y1="4" x2="10" y2="12" />
        <line key="d" x1="18" y1="4" x2="18" y2="12" />
        <line key="e" x1="26" y1="4" x2="26" y2="12" />
        <line key="f" x1="8" y1="30" x2="28" y2="30" />
        <line key="g" x1="18" y1="26" x2="18" y2="30" />
      </>
    ),
  },
  {
    titulo: 'Hoteles y Apart Hoteles',
    desc: 'Sistema silencioso y de alta eficiencia para habitaciones, áreas comunes y salas de reuniones. Compatible con BMS hotelero.',
    icon: (
      <>
        <rect key="a" x="5" y="12" width="26" height="20" rx=".5" />
        <line key="b" x1="5" y1="20" x2="31" y2="20" />
        <line key="c" x1="13" y1="12" x2="13" y2="20" />
        <line key="d" x1="23" y1="12" x2="23" y2="20" />
        <rect key="e" x="14" y="26" width="8" height="6" />
        <path key="f" d="M18 3 L19 6.5 L22.5 6.5 L19.8 8.5 L20.8 12 L18 10 L15.2 12 L16.2 8.5 L13.5 6.5 L17 6.5 Z" />
      </>
    ),
  },
  {
    titulo: 'Retail y Centros Comerciales',
    desc: 'Climatización de locales, salas de ventas y grandes superficies. Flexibilidad para plazas de comida y áreas técnicas.',
    icon: (
      <>
        <rect key="a" x="3" y="13" width="30" height="19" rx=".5" />
        <path key="b" d="M3 13 L8 5 L28 5 L33 13" />
        <line key="c" x1="3" y1="21" x2="33" y2="21" />
        <rect key="d" x="14" y="24" width="8" height="8" />
      </>
    ),
  },
  {
    titulo: 'Salud y Clínicas',
    desc: 'Sistemas con filtración y control de temperatura preciso para pabellones, UCI y zonas de recuperación. Cumplimiento normativo.',
    icon: (
      <>
        <rect key="a" x="13" y="3" width="10" height="30" rx=".5" />
        <rect key="b" x="3" y="13" width="30" height="10" rx=".5" />
      </>
    ),
  },
  {
    titulo: 'Data Centers y Salas Técnicas',
    desc: 'Climatización de precisión con redundancia N+1. Control de temperatura y humedad crítico para equipos de servidores.',
    icon: (
      <>
        <rect key="a" x="4" y="3" width="28" height="30" rx=".5" />
        <rect key="b" x="8" y="7" width="14" height="4" rx=".3" />
        <rect key="c" x="8" y="15" width="14" height="4" rx=".3" />
        <rect key="d" x="8" y="23" width="14" height="4" rx=".3" />
        <circle key="e" cx="26" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle key="f" cx="26" cy="17" r="1.5" fill="currentColor" stroke="none" />
        <circle key="g" cx="26" cy="25" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    titulo: 'Industria y Plantas de Proceso',
    desc: 'Ventilación y climatización para salas eléctricas, salas de control y oficinas administrativas en recintos industriales.',
    icon: (
      <>
        <rect key="a" x="2" y="16" width="32" height="16" rx=".5" />
        <path key="b" d="M2 16 L10 8 L18 16 L26 8 L34 16" />
        <rect key="c" x="6" y="22" width="5" height="10" />
        <rect key="d" x="15" y="22" width="5" height="10" />
        <rect key="e" x="24" y="22" width="5" height="10" />
      </>
    ),
  },
]

const FAQ_VRF = [
  {
    pregunta: '¿Cuántas unidades interiores puede tener un sistema VRF?',
    respuesta:
      'Un sistema VRF puede conectar entre 2 y hasta 64 unidades interiores a una sola unidad exterior, según el modelo y fabricante. Esto lo hace ideal para edificios con múltiples ambientes que requieren control individual de temperatura.',
  },
  {
    pregunta: '¿Cuál es la diferencia entre VRF y VRV?',
    respuesta:
      'VRF (Variable Refrigerant Flow) y VRV (Variable Refrigerant Volume) son exactamente la misma tecnología. "VRV" es la marca registrada de Daikin, mientras que los demás fabricantes (LG, Samsung, Mitsubishi, etc.) usan el término genérico "VRF". El principio de funcionamiento es idéntico en ambos casos.',
  },
  {
    pregunta: '¿Es posible instalar VRF en un edificio existente (retrofit)?',
    respuesta:
      'Sí. Los sistemas VRF son especialmente adecuados para retrofit ya que requieren solo tuberías de refrigerante y cableado de control, sin necesidad de ductos. Esto reduce significativamente el impacto en la estructura del edificio y el tiempo de instalación.',
  },
  {
    pregunta: '¿Qué COP tiene un sistema VRF comparado con otros sistemas?',
    respuesta:
      'Los sistemas VRF modernos de LG, Samsung y Gree alcanzan un COP entre 3,5 y 5,5, lo que significa un rendimiento entre 3,5 y 5,5 veces superior al consumo eléctrico. Esto supera ampliamente a los sistemas centrales convencionales (COP 2,5–3,0) y a los splits independientes.',
  },
  {
    pregunta: '¿Los sistemas VRF permiten calefacción y refrigeración simultánea?',
    respuesta:
      'Sí, los sistemas VRF de recuperación de calor (HR) permiten que algunas unidades interiores enfríen mientras otras calientan al mismo tiempo. Esto maximiza la eficiencia energética del sistema al recuperar el calor desplazado internamente.',
  },
  {
    pregunta: '¿Qué marcas VRF instala y distribuye D&Z Building?',
    respuesta:
      'D&Z Building es distribuidor oficial de LG, Samsung y Gree en Chile. Las tres marcas lideran el mercado VRF con sistemas desde 8 hasta 130+ HP y amplia disponibilidad de repuestos en el país.',
  },
  {
    pregunta: '¿Cuánto demora la instalación de un sistema VRF?',
    respuesta:
      'El plazo depende del tamaño del proyecto. Un sistema de 3–8 unidades para una oficina mediana tarda entre 3 y 7 días hábiles. Proyectos de edificios completos pueden extenderse entre 4 y 12 semanas. D&Z Building entrega cronograma detallado en la cotización.',
  },
  {
    pregunta: '¿Cómo solicito una cotización para un sistema VRF?',
    respuesta:
      'Puede solicitar cotización sin costo completando el formulario en dyzbuilding.cl, enviando un correo a contacto@dyzbuilding.cl o llamando al número publicado en el sitio. Nuestro equipo técnico le responde con una propuesta detallada.',
  },
]

const VENTAJAS = [
  {
    titulo: 'Distribuidores Oficiales',
    desc: 'LG, Samsung y Gree. Equipos originales con garantía de fábrica y respaldo de servicio técnico directo.',
    icon: (
      <path d="M18 3 L21 12 L30 12 L23 18 L26 27 L18 21 L10 27 L13 18 L6 12 L15 12 Z" />
    ),
  },
  {
    titulo: 'Ingeniería de Detalle',
    desc: 'Memorias de cálculo, selección de equipos y coordinación BIM para proyectos que requieren permisos o inspección técnica.',
    icon: (
      <>
        <rect key="a" x="3" y="4" width="30" height="22" rx=".5" />
        <line key="b" x1="10" y1="4" x2="10" y2="26" />
        <line key="c" x1="18" y1="4" x2="18" y2="26" />
        <line key="d" x1="3" y1="12" x2="33" y2="12" />
        <line key="e" x1="3" y1="20" x2="33" y2="20" />
      </>
    ),
  },
  {
    titulo: 'Cobertura Nacional',
    desc: 'Operamos en todo Chile. Proyectos en Región Metropolitana, regiones mineras, zona sur y extremos del país.',
    icon: (
      <>
        <circle key="a" cx="18" cy="15" r="8" />
        <path key="b" d="M18 3 C18 3 18 10 14 18 C10 26 18 33 18 33 C18 33 26 26 22 18 C18 10 18 3 18 3Z" />
        <line key="c" x1="10" y1="15" x2="26" y2="15" />
      </>
    ),
  },
  {
    titulo: 'Mantención Post-Instalación',
    desc: 'Planes de mantención preventiva con diagnóstico, limpieza y optimización de rendimiento.',
    icon: (
      <>
        <path key="a" d="M6 28 C8 22 14 18 18 18 C22 18 24 14 22 10" />
        <path key="b" d="M22 10 L26 14 M22 10 L18 14" />
        <circle key="c" cx="28" cy="10" r="3" />
        <path key="d" d="M10 32 L14 26 L18 29 L24 20" />
      </>
    ),
  },
]

export default async function VrfPage() {
  const c = await getSiteContent()
  const waNumber = c.empresa.telefono.replace(/\D/g, '')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 3, name: 'Climatización VRF/VRV', item: `${siteUrl}/servicios/climatizacion-vrf/` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/servicios/climatizacion-vrf#service`,
        name: 'Instalación y Mantención de Sistemas VRF/VRV',
        description:
          'Diseño, instalación y mantención de sistemas de climatización VRF y VRV para proyectos comerciales e industriales en Chile.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: { '@type': 'Country', name: 'Chile' },
        serviceType: 'HVAC Installation',
        url: `${siteUrl}/servicios/climatizacion-vrf/`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_VRF.map(faq => ({
          '@type': 'Question',
          name: faq.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: faq.respuesta },
        })),
      },
    ],
  }

  return (
    <>
      <Script id="ld-vrf" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnalyticsTracker />
      <div className="sp-wrap">

        {/* NAV */}
        <nav className="sp-topnav" role="navigation" aria-label="Navegación principal">
          <Link href="/" className="sp-topnav-logo">
            <Image src="/logo.png" alt={`${c.empresa.nombre} — Climatización Comercial`} width={120} height={44} priority />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/#servicios" className="sp-topnav-link">Todos los servicios</Link>
            <Link href="/#contacto" className="nav-cta" data-ga-event="cta_clicked" data-ga-location="sp_nav" data-ga-lang="es">
              Cotizar
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section className="sp-hero">
          <nav aria-label="Miga de pan" className="sp-breadcrumb">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">›</span>
            <Link href="/#servicios">Servicios</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Climatización VRF/VRV</span>
          </nav>
          <div className="sp-hero-eyebrow">Especialidad técnica · {c.empresa.nombre}</div>
          <h1 className="sp-hero-title">
            Sistemas VRF y VRV<br />para Climatización Comercial en Chile
          </h1>
          <p className="sp-hero-sub">
            Diseñamos, instalamos y mantenemos sistemas VRF/VRV de LG, Samsung y Gree para proyectos comerciales
            e industriales en todo Chile. Más de 20 años de experiencia y cotización sin costo.
          </p>
          <div className="sp-hero-tags">
            {['Sistema VRF', 'Sistema VRV', 'Multi-Split', 'Distribuidor LG · Samsung · Gree', 'Todo Chile'].map(tag => (
              <span key={tag} className="sp-hero-tag">{tag}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_hero"
              data-ga-lang="es"
            >
              Solicitar cotización gratuita
            </Link>
            <a
              href={`tel:${c.empresa.telefono.replace(/\s/g, '')}`}
              className="sp-hero-cta sp-hero-cta-outline"
              data-ga-event="phone_clicked"
              data-ga-location="sp_hero"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <path d="M3.5 3C5 3 6.5 5 7 7c.3.9 0 2-1 2.5C7.5 12 8 12.5 10.5 14c.5-1 1.6-1.3 2.5-1 2 .5 4 2 4 3.5 0 2-2 3.5-4 3C6.5 18 2 11.5 2 7c0-2 1.5-4 1.5-4Z" />
              </svg>
              {c.empresa.telefono}
            </a>
          </div>
        </section>

        {/* ¿QUÉ ES VRF/VRV? */}
        <RevealSection className="sp-section" id="sp-que-es">
          <div className="sec-eyebrow">Tecnología</div>
          <h2 className="sec-title">¿Qué es un sistema VRF o VRV?</h2>
          <div className="sp-what-grid">
            <div className="sp-what-col">
              <h3>Flujo variable de refrigerante</h3>
              <p>
                Un sistema VRF (Variable Refrigerant Flow) distribuye gas refrigerante a múltiples unidades interiores
                desde una sola unidad exterior. La tecnología inverter ajusta la capacidad exacta necesaria en cada
                momento, eliminando el ciclo de encendido y apagado de los sistemas convencionales.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Control individual por zona</h3>
              <p>
                Cada unidad interior opera de forma independiente: una sala de reuniones puede estar a 18 °C mientras
                la recepción está a 22 °C, todo conectado al mismo sistema. Esto reduce el consumo energético hasta un
                40% frente a sistemas centrales y ofrece confort personalizado por ambiente.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>VRF vs. VRV: ¿cuál es la diferencia?</h3>
              <p>
                Son la misma tecnología. &ldquo;VRV&rdquo; es la marca registrada de Daikin; el resto de fabricantes usan el
                término genérico &ldquo;VRF&rdquo;. D&Z Building instala sistemas VRF de LG, Samsung y Gree — distribuidores
                oficiales en Chile — con plena equivalencia técnica y mejor relación precio–rendimiento.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Recuperación de calor (HR)</h3>
              <p>
                Los sistemas VRF-HR permiten calefacción y refrigeración simultánea en el mismo edificio. El calor
                que extrae una zona se transfiere a otra que lo necesita, maximizando la eficiencia. Ideal para
                hoteles y edificios mixtos con exposiciones solares distintas por orientación.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* APLICACIONES */}
        <RevealSection className="sp-section" id="sp-aplicaciones">
          <div className="sec-eyebrow">Sectores de aplicación</div>
          <h2 className="sec-title">¿Para qué tipo de proyectos?</h2>
          <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.7, maxWidth: 640, marginTop: 12 }}>
            Los sistemas VRF son la solución estándar para proyectos comerciales de mediana y gran escala en Chile.
            Instalamos en los siguientes sectores:
          </p>
          <div className="sp-aplic-grid">
            {APLICACIONES.map(a => (
              <div className="sp-aplic-item" key={a.titulo}>
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                  {a.icon}
                </svg>
                <h3>{a.titulo}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* MARCAS */}
        <RevealSection className="sp-section" id="sp-marcas">
          <div className="sec-eyebrow">Distribuidores oficiales</div>
          <h2 className="sec-title">Marcas que instalamos</h2>
          <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.7, maxWidth: 640, marginTop: 12, marginBottom: 36 }}>
            Como distribuidores oficiales de LG, Samsung y Gree en Chile, tenemos acceso directo a equipos originales,
            repuestos y soporte técnico de fábrica para todos los sistemas VRF instalados.
          </p>
          <div className="brands-row" style={{ justifyContent: 'flex-start', gap: 40 }}>
            <Image src="/brands/lg.png" alt="LG VRF — distribuidor oficial Chile" width={63} height={34} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
            <Image src="/brands/samsung.png" alt="Samsung VRF — distribuidor oficial Chile" width={110} height={29} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
            <Image src="/brands/gree.png" alt="Gree VRF — distribuidor oficial Chile" width={90} height={18} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
          </div>
        </RevealSection>

        {/* PROCESO */}
        <RevealSection className="sp-section" id="sp-proceso">
          <div className="sec-eyebrow">Nuestro proceso</div>
          <h2 className="sec-title">¿Cómo trabajamos?</h2>
          <div className="proceso-grid" style={{ marginTop: 32 }}>
            {([
              { n: '01', titulo: 'Diagnóstico inicial', desc: 'Evaluamos el espacio, necesidades climáticas y condiciones del proyecto. Sin costo ni compromiso.' },
              { n: '02', titulo: 'Propuesta técnica', desc: 'Cotización detallada con selección de equipos VRF, plazos de ejecución y valor total del proyecto.' },
              { n: '03', titulo: 'Diseño e ingeniería', desc: 'Memorias de cálculo, planos de instalación y coordinación BIM para proyectos que requieren ITO.' },
              { n: '04', titulo: 'Instalación y puesta en marcha', desc: 'Ejecución con técnicos certificados por fabricante, pruebas de funcionamiento y entrega documentada.' },
            ] as const).map(s => (
              <div className="proceso-step" key={s.n}>
                <div className="proceso-n">{s.n}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* VENTAJAS */}
        <RevealSection className="sp-section" id="sp-ventajas">
          <div className="sec-eyebrow">Por qué D&amp;Z Building</div>
          <h2 className="sec-title">Lo que nos diferencia</h2>
          <div className="garantia-bar" style={{ marginTop: 32 }}>
            {VENTAJAS.map(v => (
              <div className="garantia-bar-item" key={v.titulo}>
                <svg className="garantia-bar-ico" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" style={{ width: 28, height: 28 }}>
                  {v.icon}
                </svg>
                <div className="garantia-bar-txt">
                  <span className="garantia-bar-titulo">{v.titulo}</span>
                  <span className="garantia-bar-desc">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection className="sp-section" id="sp-faq">
          <div className="sec-eyebrow">Preguntas frecuentes</div>
          <h2 className="sec-title">Sobre sistemas VRF/VRV</h2>
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ_VRF} lang="es" />
          </div>
        </RevealSection>

        {/* CTA FINAL */}
        <section className="sp-cta-bar">
          <div className="sec-eyebrow" style={{ marginBottom: 12 }}>¿Tiene un proyecto en mente?</div>
          <h2 className="sp-cta-title">Cotice su sistema VRF sin costo</h2>
          <p className="sp-cta-sub">
            Nuestro equipo técnico evalúa su proyecto y le entrega una propuesta detallada dentro de 48 horas hábiles.
          </p>
          <div className="sp-cta-btns">
            <Link
              href="/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="es"
            >
              Solicitar cotización gratuita
            </Link>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, me interesa cotizar un sistema VRF para un proyecto comercial. ¿Podrían contactarme?')}`}
              className="sp-hero-cta sp-hero-cta-outline"
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="whatsapp_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="es"
            >
              <svg viewBox="0 0 15 15" fill="currentColor" stroke="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.15.31 2.24.86 3.18L1.25 13.75l3.18-.86A6.19 6.19 0 0 0 7.5 13.75c3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25ZM5.6 4.69c.15 0 .3.01.43.04.14.03.32.07.49.5l.63 1.56c.08.2.04.43-.1.6l-.37.45c-.06.07-.1.16-.07.25.2.53.54 1.02.96 1.43.43.42.93.75 1.47.95.1.03.2 0 .26-.08l.38-.47c.16-.2.4-.26.62-.16l1.57.7c.43.19.48.38.49.53.03.34.01.67-.06.99-.23.97-1.18 1.5-2.1 1.5-1 0-2.3-.47-3.6-1.77C4.86 9.9 4.4 8.59 4.38 7.59c-.02-.93.5-1.87 1.47-2.1.08-.02.16-.03.24-.03l-.49.23Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sp-footer">
          <p>
            <Link href="/" style={{ color: 'var(--accent)' }}>{c.empresa.nombre}</Link>
            {' '}· Climatización Comercial y Refrigeración Industrial · Santiago, Chile
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/">Inicio</Link>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#contacto">Contacto</Link>
          </div>
        </footer>
      </div>
      <WhatsAppButton phone={c.empresa.telefono} lang="es" />
    </>
  )
}
