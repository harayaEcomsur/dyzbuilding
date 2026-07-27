import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Colegios y Universidades en Chile',

  description:
    'HVAC y ventilación para establecimientos educacionales en Chile: colegios, universidades, liceos y centros de formación. Aulas, auditorios, bibliotecas y gimnasios con cumplimiento DS 594 y normativa MINEDUC.',
  alternates: {
    canonical: `${siteUrl}/sectores/educacion/`,
    languages: {
      es: `${siteUrl}/sectores/educacion/`,
      en: `${siteUrl}/en/sectors/education/`,
    },
  },
  openGraph: {
    title: 'HVAC Sector Educación Chile — Colegios, Universidades, Liceos | D&Z Building',
    description:
      'Climatización y ventilación para establecimientos educacionales en Chile: aulas, auditorios, bibliotecas y gimnasios. DS 594, calidad de aire interior y licitaciones públicas.',
    url: `${siteUrl}/sectores/educacion/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Aulas y Salas de Clases',
    subtitulo: 'DS 594 · Calidad de aire interior · CO₂ < 1.000 ppm',
    desc: 'Climatización de aulas con alta densidad de ocupación intermitente. El CO₂ es el indicador clave: aulas sin ventilación adecuada superan los 2.000 ppm en 30 minutos, con impacto directo en la capacidad de concentración. Sistemas VRF o multi-split con ventilación mecánica controlada (VMC) para mantener CO₂ < 1.000 ppm. Modo ocupado/desocupado con sensores CO₂ para eficiencia energética.',
  },
  {
    titulo: 'Auditorios y Salas Magnas',
    subtitulo: 'Alta capacidad · Baja velocidad de aire · Bajo ruido',
    desc: 'Auditorios de 200 a 1.500 personas: unidades de tratamiento de aire (UTA) con distribución por difusores desplazamiento o rejillas de baja velocidad para evitar ruido de fondo durante presentaciones. Nivel sonoro HVAC ≤ NC-30. Prefiltros F7 para polvo. Control de caudal variable (VAV) según ocupación real, con modo de preenfriamiento antes de eventos.',
  },
  {
    titulo: 'Gimnasios y Pabellones Deportivos',
    subtitulo: 'Alta generación de calor · Ventilación forzada · DS 594',
    desc: 'Espacios deportivos con carga térmica de alta variabilidad: en uso intensivo, la generación de calor humano puede superar los 60 W/m². Sistemas de ventilación mecánica con extracción forzada por cubierta y aporte de aire exterior. En recintos cubiertos con piscinas, tratamiento de aire húmedo para evitar condensación en estructura y corrosión.',
  },
  {
    titulo: 'Bibliotecas y Centros de Estudios',
    subtitulo: 'Control de humedad · Protección de acervo · Silencioso',
    desc: 'Bibliotecas con colecciones físicas: temperatura 18–20°C y humedad relativa 45–55% para preservar libros y documentos. Filtración F7 para polvo y partículas que deterioran el acervo. Nivel sonoro NC-25 para estudio silencioso. Zonas de sala de lectura y estanterías pueden requerir condicionamiento diferenciado.',
  },
  {
    titulo: 'Casinos y Cocinas Industriales',
    subtitulo: 'NFPA 96 · Campanas de extracción · Reposición de aire',
    desc: 'Casinos escolares y universitarios: extracción de vapores y grasas sobre cocinas con campanas conforme a NFPA 96. Sistema de reposición de aire exterior proporcional al caudal extraído. Separadores de grasa en conductos, filtros de carbón activo para eliminación de olores. Dimensionamiento para turnos de alta afluencia simultánea.',
  },
  {
    titulo: 'Edificios de Aulas y Oficinas Administrativas',
    subtitulo: 'VRF · Multi-split · Licitación pública',
    desc: 'Para establecimientos con proyectos financiados por el Estado (MINEDUC, DGA, municipios), la climatización se licita vía Mercado Público/Chile Compra. D&Z Building tiene experiencia en elaboración de bases técnicas y participación como proveedor. Sistemas VRF o multi-split con certificación de marca, catálogos técnicos y garantía de fábrica exigida en licitaciones.',
  },
]

const STATS = [
  { valor: 'CO₂ < 1.000 ppm', etiqueta: 'Calidad de aire en aulas' },
  { valor: 'NC-25–30', etiqueta: 'Nivel sonoro en auditorios y bibliotecas' },
  { valor: 'DS 594', etiqueta: 'Normativa sanitaria del trabajo' },
  { valor: 'Mercado Público', etiqueta: 'Experiencia en licitaciones MINEDUC' },
]

const FAQ = [
  {
    pregunta: '¿Cuánta ventilación necesita un aula en Chile?',
    respuesta: 'El DS 594 establece que los espacios de trabajo (incluyendo aulas) deben tener ventilación suficiente para mantener concentraciones de CO₂ por debajo de los niveles que afectan la salud. La norma ASHRAE 62.1 recomienda un caudal mínimo de 5 l/s por persona más 0,6 l/s por m² de sala. Para un aula de 40 alumnos en 70 m², eso implica unos 250 l/s de aire exterior, lo que equivale a una renovación completa del volumen de aire cada 8–10 minutos. Sin ventilación mecánica, el CO₂ en aulas llenas supera los 2.000 ppm en menos de 30 minutos.',
  },
  {
    pregunta: '¿Qué sistema de climatización es mejor para un colegio?',
    respuesta: 'Para colegios y universidades, las alternativas más comunes son: (1) Multi-split convencional: menor inversión inicial, adecuado para colegios pequeños con pocas salas; (2) VRF/VRV inverter: mayor eficiencia en operación larga, control por sala, ideal para establecimientos medianos a grandes; (3) Ventilación mecánica con recuperación de calor (VMRC): prioritaria en climas fríos del sur de Chile, recupera hasta 75% del calor del aire extraído. En muchos proyectos se combinan: VRF para climatización de temperatura + VMC para calidad del aire.',
  },
  {
    pregunta: '¿Cómo se licita la climatización en establecimientos educacionales públicos?',
    respuesta: 'Los establecimientos públicos (municipalizados o dependientes de DGA) deben licitar a través de Mercado Público/Chile Compra (www.mercadopublico.cl). Las bases técnicas normalmente exigen: marca y modelo específicos o equivalente técnico, certificación del fabricante, garantía de fábrica de al menos 12 meses, instalación por técnicos certificados por la marca, y manual de operación. D&Z Building puede asesorar en la elaboración de bases técnicas y participar como proveedor acreditado.',
  },
  {
    pregunta: '¿Qué normativa aplica a la climatización de colegios en Chile?',
    respuesta: 'Las principales normativas son: (1) DS 594: condiciones sanitarias de los establecimientos de trabajo — temperatura, ventilación, ruido; (2) Resolución Exenta MINEDUC sobre habitabilidad escolar: contempla temperatura de confort en aulas; (3) ASHRAE 62.1: estándar de calidad del aire interior usado como referencia técnica; (4) NFPA 96: para cocinas industriales de casinos escolares; (5) DS 4 de Energía/MINVU (para edificios nuevos financiados por el Estado). En casinos: también aplica el Reglamento Sanitario de los Alimentos (DS 977).',
  },
  {
    pregunta: '¿Cuánto cuesta climatizar un colegio o universidad en Chile?',
    respuesta: 'Los costos varían considerablemente según el tipo de establecimiento: un colegio de 10–20 aulas con multi-split básico puede costar UF 200–500 (≈ USD 7K–16K). Un establecimiento mediano con VRF y VMC integrada de 30–60 aulas puede costar UF 800–2.500. Un campus universitario o edificio de facultad de 5.000–15.000 m² puede requerir UF 3.000–15.000. Estos valores incluyen equipos, instalación, conductos/cañerías y puesta en marcha, pero excluyen obras civiles.',
  },
  {
    pregunta: '¿Pueden climatizar un colegio o universidad mientras está en funcionamiento?',
    respuesta: 'Sí. La mayoría de los proyectos en establecimientos educacionales deben ejecutarse por etapas, aprovechando vacaciones de verano (enero–febrero), semana de receso y fines de semana. Trabajamos con el equipo directivo para planificar la secuencia de instalación sin interrumpir el funcionamiento. Para trabajos en cubiertas o salas con acceso restringido durante clases, coordinamos con el administrador del establecimiento los horarios de acceso.',
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
        { '@type': 'ListItem', position: 3, name: 'Educación', item: `${siteUrl}/sectores/educacion/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/educacion/#service`,
      name: 'Climatización y Ventilación para Establecimientos Educacionales en Chile',
      description: 'Diseño, instalación y mantención de sistemas HVAC y ventilación para establecimientos educacionales en Chile: colegios, universidades, liceos y centros de formación. Aulas, auditorios, bibliotecas, gimnasios y casinos.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Educational HVAC and Ventilation',
      url: `${siteUrl}/sectores/educacion/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/educacion/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorEducacionPage() {
  return (
    <>
      <Script id="ld-sector-educacion" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Servicios
            </Link>
            <Link href="/?servicio=2#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar Cotización
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/sectores/" style={{ color: 'inherit', textDecoration: 'none' }}>Sectores</Link>
            <span>›</span>
            <span>Educación</span>
          </div>
          <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            Colegios · Universidades · Liceos · Centros de Formación
          </div>
          <h1>Climatización para<br />Establecimientos Educacionales</h1>
          <p className="sp-hero-sub">
            HVAC y ventilación para colegios, universidades y liceos en Chile:
            aulas con control de CO₂, auditorios silenciosos, gimnasios, casinos
            y licitaciones Mercado Público con garantía de fábrica.
          </p>
          <div className="sp-hero-ctas">
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Solicitar Cotización</Link>
            <Link href="/sectores/" className="sp-hero-cta-outline">Ver Sectores</Link>
          </div>
        </header>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(16px,2vw,26px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Tipos de instalación
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Recintos que climatizamos en establecimientos educacionales
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((aplic, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {aplic.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {aplic.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {aplic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Ventilación, normativa y licitaciones
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
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sistemas VRF →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/servicios/ventilacion-industrial" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Ventilación industrial →
            </Link>
            <Link href="/sectores/data-centers/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector data centers →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto educacional?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Solicite una cotización
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de establecimiento, número de aulas y recintos a climatizar.
            Evaluamos el proyecto y respondemos con una propuesta técnica.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Solicitar Cotización</Link>
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
