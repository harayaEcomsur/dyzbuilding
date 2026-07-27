import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización y Refrigeración para Agroindustria en Chile',

  description:
    'Especialistas en HVAC para la agroindustria chilena: packings de fruta, cámaras frigoríficas, atmósfera controlada, pre-enfriamiento postcosecha y plantas procesadoras de alimentos. Cobertura nacional.',
  alternates: {
    canonical: `${siteUrl}/sectores/agroindustria/`,
    languages: {
      es: `${siteUrl}/sectores/agroindustria/`,
      en: `${siteUrl}/en/sectors/agro/`,
    },
  },
  openGraph: {
    title: 'HVAC Agroindustria Chile — Packings, Cámaras Frigoríficas, Atmósfera Controlada | D&Z Building',
    description:
      'Refrigeración industrial y climatización para packings, bodegas frigoríficas, plantas procesadoras y atmósfera controlada en Chile. Ingeniería BIM HVAC.',
    url: `${siteUrl}/sectores/agroindustria/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Packings de Fruta',
    subtitulo: 'T 8–14°C · HR 85–92%',
    desc: 'Las salas de packing requieren temperatura controlada durante el proceso de selección, calibración y embalaje. Un packing de fruta de escala media (5.000–20.000 m²) necesita sistemas VRF o expansión directa de alta capacidad con control de humedad para mantener la cadena de frío desde la llegada del campo hasta la palletización.',
  },
  {
    titulo: 'Cámaras Frigoríficas de Conservación',
    subtitulo: 'T -1 a +4°C · HR 90–95%',
    desc: 'Bodegas de conservación para manzana, uva de mesa, kiwi, arándano y pera. Sistemas de refrigeración con evaporadores de baja velocidad de aire (bajo ∆T) para minimizar pérdida de humedad y daño por frío. Paneles PUR de 100–150 mm con puerta hermética. Capacidad de 500 a 10.000 toneladas.',
  },
  {
    titulo: 'Atmósfera Controlada (AC)',
    subtitulo: 'O₂ 1–3% · CO₂ 0–5% · T -1 a +1°C',
    desc: 'Bodegas de atmósfera controlada para extensión de vida de post-cosecha (manzana hasta 12 meses, pera 8–10 meses). El sistema HVAC debe mantener temperatura ±0.3°C y la hermeticidad de la sala AC. Integración con generadores de nitrógeno, analizadores de gases y controladores Storex/Isolcell.',
  },
  {
    titulo: 'Pre-Enfriamiento Post-Cosecha',
    subtitulo: 'Túnel de aire forzado / Hidroenfriamiento',
    desc: 'Sistemas de pre-enfriamiento rápido (pre-cooling) para reducir la temperatura del producto desde T° de campo (25–35°C) a T° de conservación en 2–6 horas. Túneles de aire forzado con evaporadores de alta velocidad, condensadores remotos y control automático de temperatura diferencial.',
  },
  {
    titulo: 'Plantas Procesadoras de Alimentos',
    subtitulo: 'HACCP · Inocuidad alimentaria',
    desc: 'Climatización de plantas procesadoras bajo normas de inocuidad alimentaria (HACCP, DS 977 del MINSAL). Salas de proceso frío (T 0–10°C), salas de proceso caliente, áreas de lavado y desinfección con sistemas de drenaje integrados, y cuartos de máquinas con ventilación mecánica.',
  },
  {
    titulo: 'Bodega de Agroquímicos y Fertilizantes',
    subtitulo: 'Ventilación ATEX · 10 vol/h mínimo',
    desc: 'Bodegas de almacenamiento de agroquímicos requieren ventilación mecánica forzada (mínimo 10 renovaciones por hora), control de temperatura para preservar vida útil de productos fitosanitarios, y sistemas que cumplan normativa del SAG y del DS 78 del MINSAL para almacenamiento de plaguicidas.',
  },
]

const FAQ = [
  {
    pregunta: '¿Cuánto cuesta una cámara frigorífica de conservación en Chile?',
    respuesta: 'Una cámara frigorífica de conservación de tamaño mediano (1.000–3.000 toneladas de manzana o pera) tiene un costo referencial de UF 2.500–8.000 dependiendo de la temperatura de diseño, la aislación, el equipamiento de refrigeración (condensadores remotos vs. unidad compacta), y la automatización. En atmósfera controlada el costo sube un 25–40% por la hermeticidad y los sistemas de gas. Solicítenos una cotización orientativa con el volumen neto de la bodega y el producto a conservar.',
  },
  {
    pregunta: '¿Qué normativa rige la refrigeración en packings y cámaras frigoríficas en Chile?',
    respuesta: 'Las instalaciones frigoríficas en Chile se rigen por el DS 594 (Condiciones Sanitarias de Establecimientos de Trabajo), el Reglamento Sanitario de los Alimentos (DS 977 del MINSAL) para plantas procesadoras, y las normas ASHRAE 15 y EN 378 para instalaciones de refrigeración. Para exportación, adicionalmente aplican los requisitos GlobalGAP, BRC, y los protocolos fitosanitarios de SENASA (para EE.UU.) y EFSA (para Europa).',
  },
  {
    pregunta: '¿Pueden diseñar bodegas de atmósfera controlada en Chile?',
    respuesta: 'Sí. Diseñamos y ejecutamos bodegas de atmósfera controlada para manzana, pera, kiwi, uva de mesa y arándano. El diseño incluye la envolvente hermética (paneles PUR con vapor barrera), el sistema de refrigeración de baja ∆T, los generadores de nitrógeno o sistemas VPSA, y la integración con controladores de gases (Storex, Isolcell, ECA). También podemos hacer auditorías de hermeticidad (prueba de presión) en bodegas AC existentes.',
  },
  {
    pregunta: '¿Trabajan en regiones fuera de la Región Metropolitana?',
    respuesta: 'Sí. Tenemos cobertura nacional. La mayor parte de nuestra obra agroindustrial se ejecuta en la Región de O\'Higgins (Rancagua, San Fernando), Maule (Curicó, Talca), Bio-Bio (Chillán), Coquimbo (Ovalle, La Serena) y Atacama (Copiapó). Disponemos de equipos técnicos para obra fuera de Santiago sin sobrecargo en los plazos de respuesta.',
  },
  {
    pregunta: '¿Qué refrigerante usan en las cámaras frigoríficas?',
    respuesta: 'Para temperatura positiva (0 a +12°C) usamos predominantemente R-449A o R-452A (reemplazos del R-404A con menor GWP). Para temperatura negativa (−25 a −18°C) en túneles de congelado usamos R-449A o CO₂ en cascada. No instalamos equipos con R-404A ni R-22 en proyectos nuevos dado su impacto ambiental y la tendencia regulatoria. Todos los refrigerantes que usamos cumplen el Protocolo de Montreal y el Reglamento EU F-Gas 2024.',
  },
  {
    pregunta: '¿Ofrecen mantención preventiva para equipos de refrigeración agroindustrial?',
    respuesta: 'Sí. Ofrecemos contratos de mantención preventiva anual (pre-temporada) y semestral para cámaras frigoríficas, bodegas AC y sistemas de pre-enfriamiento. La mantención incluye cambio de aceite de compresor, revisión de válvulas de expansión, calibración de presostatos, limpieza de condensadores, revisión de hermeticidad en bodegas AC, y emisión de informe técnico para la temporada.',
  },
  {
    pregunta: '¿Cuánto tarda en construirse una cámara frigorífica?',
    respuesta: 'Una cámara frigorífica nueva de tamaño mediano (1.000–3.000 ton) tarda 8–16 semanas desde la orden de compra hasta la puesta en marcha, dependiendo de si la obra civil está lista. Para bodega AC el plazo sube a 14–20 semanas por la prueba de hermeticidad y la programación de los sistemas de gas. Recomendamos iniciar el proceso de cotización e ingeniería al menos 4 meses antes del inicio de la temporada.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Sectores', item: `${siteUrl}/sectores/` },
        { '@type': 'ListItem', position: 3, name: 'Agroindustria', item: `${siteUrl}/sectores/agroindustria/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/agroindustria/#service`,
      name: 'Refrigeración y Climatización para Agroindustria Chile',
      description: 'Diseño, ingeniería BIM, instalación y mantención de sistemas de refrigeración y climatización para la agroindustria chilena: packings, cámaras frigoríficas, atmósfera controlada y plantas procesadoras.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Agricultural HVAC & Refrigeration',
      url: `${siteUrl}/sectores/agroindustria/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/agroindustria/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorAgroindustriaPage() {
  return (
    <>
      <Script id="ld-sector-agro" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/refrigeracion-comercial" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Refrigeración
            </Link>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar cotización
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <span>Sectores</span>
            <span>›</span>
            <span>Agroindustria</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Packings, Cámaras Frigoríficas y Plantas Procesadoras
          </p>
          <h1 className="sp-hero-title">Refrigeración HVAC para<br />la Agroindustria en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Diseño e instalación de cámaras frigoríficas, sistemas de pre-enfriamiento,
            bodegas de atmósfera controlada y climatización de packings y plantas procesadoras
            en todo Chile. Ingeniería BIM HVAC para proyectos de todas las escalas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta">Cotizar proyecto frigorífico</Link>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta sp-hero-cta-outline">Consulta técnica gratuita</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2.5vw,28px) clamp(20px,6vw,96px)', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[
            { n: '4°', label: 'exportador mundial de fruta fresca', nota: 'Chile, posición 2024' },
            { n: '3.400+', label: 'plantas frigoríficas activas en Chile', nota: 'estimado ASOEX 2024' },
            { n: '−1°C', label: 'temperatura crítica manzana/pera', nota: 'ASHRAE HOF, cap. 37' },
            { n: '12m', label: 'vida útil manzana en AC óptima', nota: 'atmósfera controlada ULO' },
          ].map((s, i) => (
            <div key={i} style={{ minWidth: 120 }}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(22px,2.8vw,34px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.label}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)', marginTop: 2 }}>{s.nota}</div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Instalaciones que diseñamos e instalamos
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((a, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {a.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {a.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BIM callout */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 580 }}>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
                Ingeniería BIM HVAC
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: '0 0 10px' }}>
                Los packings y plantas procesadoras de gran superficie requieren coordinación precisa entre la estructura metálica, la aislación, la instalación frigorífica y los procesos productivos.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                Modelamos en Revit MEP (LOD 300) para detectar interferencias antes de la obra y entregar planos de fabricación a los instaladores. Esto reduce hasta un 30% los tiempos de montaje en obra.
              </p>
            </div>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">
              Consultar BIM →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Costos, normativa y plazos
          </h2>
          <div style={{ maxWidth: 820 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(13px,1.3vw,15px)', fontWeight: 400, letterSpacing: '.02em', color: 'var(--text)', margin: '0 0 10px' }}>
                  {f.pregunta}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {f.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/servicios/refrigeracion-comercial" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Refrigeración comercial →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/sectores/data-centers/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector Data Centers →
            </Link>
            <Link href="/sectores/salud/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector Salud →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto frigorífico o agroindustrial?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cotización orientativa
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el volumen de su bodega, el producto y la temperatura de diseño.
            Dimensionamos el sistema y entregamos una referencia de costo sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta">Solicitar cotización</Link>
            <Link href="/servicios/" className="sp-hero-cta sp-hero-cta-outline">Ver todos los servicios</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
