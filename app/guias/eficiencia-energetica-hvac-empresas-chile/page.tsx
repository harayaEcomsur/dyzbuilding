import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Eficiencia Energética HVAC para Empresas Chile: Guía 2025',

  description:
    'Cómo reducir el consumo eléctrico de climatización en empresas chilenas: sistemas VRF inverter, auditorías energéticas, COP, free cooling y certificación LEED/nZEB.',
  alternates: {
    canonical: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
    languages: {
      es: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
    },
  },
  openGraph: {
    title: 'Reducir Consumo Climatización Empresa Chile — Guía Eficiencia HVAC',
    description:
      'Sistemas VRF inverter, free cooling, recuperación de calor, automatización BMS y auditorías energéticas para reducir 30–50% el consumo de climatización.',
    url: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const ESTRATEGIAS = [
  {
    titulo: 'Reemplazo por sistemas VRF inverter',
    subtitulo: 'COP 3,5–5,0 · 30–50% menos consumo',
    desc: 'Los sistemas de expansión directa de velocidad fija (splits on/off) funcionan al 100% de capacidad o apagados. Un sistema VRF inverter modula la velocidad del compresor según la demanda real, logrando COP de 3,5 a 5,0 frente a COP 2,5–3,0 de los equipos más antiguos. Para una empresa con 500 m² de oficinas en Santiago, el reemplazo puede ahorrar CLP 2–4 millones anuales en electricidad.',
  },
  {
    titulo: 'Free cooling y economizadores',
    subtitulo: 'Usar el frío exterior gratuitamente',
    desc: 'En Santiago y otras ciudades con noches frías, los sistemas con economizador de aire o free cooling enfrían el edificio usando aire exterior cuando la temperatura exterior es menor que la interior. Esto puede reducir el consumo de compresores en 20–40% durante los meses intermedios (mayo–agosto en Santiago). D&Z Building diseña sistemas con módulo economizador compatible con el BMS existente.',
  },
  {
    titulo: 'Recuperación de calor en VRF',
    subtitulo: 'Calentar una zona mientras se enfría otra',
    desc: 'Los sistemas VRF de recuperación de calor (3 tubos) transfieren el calor rechazado por las zonas que enfrían hacia las zonas que necesitan calefacción, en lugar de disiparlo al exterior. En un edificio de oficinas con orientaciones mixtas (norte/sur), esto puede reducir el consumo total de climatización en 40–60% frente a sistemas convencionales, porque el calor aprovechado no paga tarifa eléctrica.',
  },
  {
    titulo: 'Automatización BMS y control por demanda',
    subtitulo: 'Ocupación · Horarios · Setpoints optimizados',
    desc: 'El 25–35% del consumo de climatización en oficinas corresponde a horas sin ocupación (fuera del horario laboral, fines de semana, vacaciones). Un BMS (Building Management System) con sensores de presencia o integrado con el control de acceso puede reducir automáticamente los setpoints cuando no hay ocupación. D&Z Building integra sistemas HVAC con BMS mediante protocolos BACnet, Modbus o LonWorks.',
  },
]

const STATS = [
  { valor: '30–50%', etiqueta: 'Ahorro típico al reemplazar por VRF inverter' },
  { valor: 'COP 5,0', etiqueta: 'Eficiencia máxima VRF recuperación de calor' },
  { valor: '25–35%', etiqueta: 'Consumo en horas sin ocupación (sin BMS)' },
  { valor: 'LEED', etiqueta: 'Certificación que valora eficiencia HVAC' },
]

const PASOS_AUDITORIA = [
  {
    titulo: '1. Levantamiento del consumo actual',
    subtitulo: 'Facturas · Submedición · Horas de uso',
    desc: 'La auditoría comienza con el análisis de las facturas eléctricas de los últimos 12 meses y, si existen, los datos de submedición por circuito. D&Z Building instala registradores de energía temporales para medir el consumo real de cada unidad HVAC durante 1–2 semanas representativas.',
  },
  {
    titulo: '2. Análisis del sistema existente',
    subtitulo: 'Eficiencia · Edad · Estado · Setpoints',
    desc: 'Se evalúa la eficiencia real del sistema instalado (COP/EER medido vs. especificado en ficha técnica), la edad y estado de los equipos, los setpoints usados, los horarios de operación, y si existe automatización o control manual. Un equipo de 10 años puede estar funcionando a 60–70% de su eficiencia original por falta de mantención.',
  },
  {
    titulo: '3. Identificación de oportunidades',
    subtitulo: 'Quick wins · Inversiones de mediano plazo · Reemplazos',
    desc: 'D&Z Building presenta un informe con tres categorías de medidas: (1) Ajustes sin inversión (cambios de setpoints, horarios, filtros limpios) que pueden reducir 10–20% el consumo inmediatamente; (2) Medidas de bajo costo (automatización, sensores de presencia) con payback 1–2 años; (3) Reemplazos de equipos con payback 3–7 años. Cada medida incluye estimación de ahorro en kWh/año y CLP/año.',
  },
  {
    titulo: '4. Implementación y certificación',
    subtitulo: 'Ingeniería · Instalación · Medición y verificación',
    desc: 'D&Z Building implementa las medidas seleccionadas y realiza una medición de verificación (M&V) post-implementación para confirmar el ahorro real. Para proyectos que aplican a subsidios de eficiencia energética del MINENERGIA o a certificaciones LEED/EDGE, D&Z Building entrega la documentación técnica requerida.',
  },
]

const FAQ = [
  {
    pregunta: '¿Cuánto puedo ahorrar al reemplazar splits convencionales por un sistema VRF?',
    respuesta: 'Para una oficina de 500 m² en Santiago con splits on/off de 8 años de antigüedad, el reemplazo por un sistema VRF inverter puede reducir el consumo de climatización en 35–50%. A una tarifa BT2 de aproximadamente CLP 150/kWh, eso equivale a CLP 2–4 millones anuales. El payback del sistema VRF (considerando el costo de instalación menos el valor residual de los equipos viejos) es típicamente 4–8 años. D&Z Building entrega una proyección financiera detallada antes de la inversión.',
  },
  {
    pregunta: '¿Qué es el COP y cómo sé si mi sistema es eficiente?',
    respuesta: 'El COP (Coefficient of Performance) mide cuántas unidades de calor o frío produce el sistema por cada unidad de electricidad consumida. Un COP de 3,0 significa que el sistema produce 3 kW de enfriamiento por cada 1 kW eléctrico consumido. Los splits inverter modernos tienen COP 3,5–4,5 en condiciones nominales. Los sistemas VRF llegan a COP 4,0–5,0. Un equipo antiguo de velocidad fija puede haber caído a COP 2,0–2,5 por desgaste. El COP real de su sistema puede medirse durante la auditoría energética.',
  },
  {
    pregunta: '¿Existen subsidios o beneficios tributarios para eficiencia energética HVAC en Chile?',
    respuesta: 'Sí. El MINENERGIA (Ministerio de Energía) ofrece programas de cofinanciamiento para proyectos de eficiencia energética en PYME (programa PYMES Energía), con subsidios de hasta 50% del costo del proyecto. Las grandes empresas pueden acceder a Acuerdos de Producción Limpia (APL) que incluyen metas de eficiencia y beneficios reputacionales. Adicionalmente, la Ley 21.305 de 2021 impone obligaciones de eficiencia energética para grandes consumidores (sobre 50 TEP/año). D&Z Building asesora en la postulación a estos instrumentos.',
  },
  {
    pregunta: '¿El certificado LEED obliga a usar sistemas HVAC específicos?',
    respuesta: 'LEED no exige equipos de marcas o tipos específicos, sino cumplir con niveles de eficiencia expresados en porcentaje de mejora sobre la línea base ASHRAE 90.1. Para la categoría EA (Energía y Atmósfera), el sistema HVAC representa 35–45% de los créditos disponibles. Los sistemas VRF de recuperación de calor, los chillers de alta eficiencia y los sistemas con free cooling son las opciones más frecuentes en proyectos LEED en Chile. D&Z Building ha participado en proyectos certificados LEED Silver y Gold en Santiago.',
  },
  {
    pregunta: '¿Vale la pena hacer una auditoría energética HVAC si la empresa es pequeña?',
    respuesta: 'Para empresas con menos de 200 m² de oficinas, el costo de una auditoría formal (UF 5–15) puede no justificarse. En esos casos, D&Z Building ofrece una visita diagnóstica gratuita donde el técnico revisa el estado de los equipos, los setpoints y los horarios, y entrega recomendaciones de ajuste sin costo. Para empresas medianas (200–2.000 m²), la auditoría formal se justifica cuando el costo anual de electricidad de climatización supera CLP 5 millones.',
  },
  {
    pregunta: '¿Cuánto tarda una implementación de eficiencia energética HVAC?',
    respuesta: 'Los ajustes de setpoints y horarios son inmediatos (1 día de configuración). La instalación de automatización BMS o sensores de presencia toma 1–2 semanas. El reemplazo de equipos (de splits a VRF) en una planta de 1.000 m² toma 2–4 semanas, con continuidad operacional del 80–90% durante la instalación (los equipos viejos se retiran zona por zona). D&Z Building coordina la instalación fuera de horas pico (fines de semana, noches) para minimizar la interrupción operacional.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${siteUrl}/guias/` },
        { '@type': 'ListItem', position: 3, name: 'Eficiencia Energética HVAC', item: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/#article`,
      headline: 'Eficiencia Energética HVAC para Empresas Chile: Guía 2025',
      description:
        'Cómo reducir el consumo eléctrico de climatización en empresas chilenas: sistemas VRF inverter, auditorías energéticas, COP, free cooling y certificación LEED/nZEB.',
      url: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
      inLanguage: 'es-CL',
      publisher: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      author: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#business`,
      },
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      about: {
        '@type': 'Service',
        name: 'Eficiencia Energética HVAC',
        '@id': `${siteUrl}/servicios/eficiencia-energetica/#service`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaEficienciaEnergeticaPage() {
  return (
    <>
      <Script id="ld-guia-eficiencia-energetica" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/eficiencia-energetica" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Eficiencia Energética
            </Link>
            <Link href="/?servicio=eficiencia-energetica#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar auditoría
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <span>Guías</span>
            <span>›</span>
            <span>Eficiencia Energética HVAC</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía técnica · 2025
          </p>
          <h1 className="sp-hero-title">Eficiencia Energética HVAC<br />para Empresas Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Cómo reducir el consumo eléctrico de climatización en su empresa: sistemas VRF inverter, free cooling, recuperación de calor, automatización BMS y auditorías energéticas certificadas.
          </p>
          <Link href="/?servicio=eficiencia-energetica#contacto" className="sp-hero-cta">
            Solicitar auditoría gratuita →
          </Link>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.4vw,28px)', color: 'var(--text)', margin: '0 0 20px' }}>
              ¿Por qué la climatización es prioridad en eficiencia energética?
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              En una empresa de servicios o industrial en Chile, el sistema de climatización representa entre el 30 y el 50% de la factura eléctrica total. Con tarifas eléctricas que han aumentado más del 60% en la última década y la incorporación de reportes ESG obligatorios para empresas de mayor tamaño, reducir el consumo de climatización es hoy una prioridad financiera y regulatoria.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              La buena noticia: con la tecnología disponible hoy —sistemas VRF inverter, recuperación de calor, free cooling y automatización BMS— es posible reducir el consumo de climatización entre un 30 y un 65% sin sacrificar confort. Esta guía explica las cuatro estrategias principales y cómo estructurar una auditoría energética para identificar la mejor combinación para su caso.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              D&Z Building realiza auditorías energéticas HVAC y ejecuta proyectos de mejora para empresas industriales y comerciales en Chile, con foco en sistemas de climatización de mediana y gran escala.
            </p>
          </div>
        </div>

        {/* ESTRATEGIAS */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Cuatro estrategias clave
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Cómo reducir el consumo de climatización
          </h2>
          <div className="sp-aplic-grid">
            {ESTRATEGIAS.map((e) => (
              <div key={e.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {e.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {e.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARATIVA table */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Comparativa de sistemas HVAC por eficiencia
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Sistema', 'COP típico', 'Costo instalación', 'Ahorro vs split convencional'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { sistema: 'Split on/off (velocidad fija)', cop: '2,5–3,0', costo: 'Bajo', ahorro: '— (referencia)' },
                  { sistema: 'Split inverter', cop: '3,0–4,0', costo: 'Bajo–medio', ahorro: '15–25%' },
                  { sistema: 'VRF inverter (solo frío / bomba de calor)', cop: '3,5–5,0', costo: 'Medio–alto', ahorro: '30–45%' },
                  { sistema: 'VRF recuperación de calor', cop: 'Hasta 6,0 en recuperación', costo: 'Alto', ahorro: '40–60%' },
                  { sistema: 'Chiller + AHU de alta eficiencia', cop: '4,0–6,5 (EER)', costo: 'Alto', ahorro: '35–55%' },
                  { sistema: 'Free cooling + VRF/chiller', cop: 'Variable', costo: 'Alto', ahorro: '40–65%' },
                ].map((row, i) => (
                  <tr key={row.sistema} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.sistema}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.cop}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.costo}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.ahorro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '28px 40px' }}>
            {STATS.map((s) => (
              <div key={s.etiqueta} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 300, color: 'var(--accent)', margin: '0 0 6px', letterSpacing: '-.01em' }}>
                  {s.valor}
                </p>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', margin: 0 }}>
                  {s.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PASOS DE UNA AUDITORÍA */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Metodología D&Z Building
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Pasos de una auditoría energética HVAC
          </h2>
          <div className="sp-aplic-grid">
            {PASOS_AUDITORIA.map((p) => (
              <div key={p.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {p.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {p.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-article CTA */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                Auditoría energética HVAC
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                D&Z Building evalúa el sistema de climatización de su empresa e identifica oportunidades de ahorro con retorno estimado por medida.
              </p>
            </div>
            <Link href="/?servicio=eficiencia-energetica#contacto" className="sp-hero-cta">
              Solicitar auditoría →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Eficiencia energética HVAC: dudas frecuentes
          </h2>
          <div style={{ maxWidth: 780 }}>
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

        {/* Related links */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>
            Recursos relacionados
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/guias/precio-sistema-vrf-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía de precios VRF →
            </Link>
            <Link href="/guias/precio-climatizacion-comercial-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Precio climatización comercial →
            </Link>
            <Link href="/guias/decreto-supremo-594-ventilacion-hvac-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Decreto Supremo 594 ventilación →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            ¿Cuánto puede ahorrar su empresa en climatización?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Nuestro equipo técnico realiza una visita diagnóstica gratuita y le entrega una estimación de ahorro por medida antes de comprometer ninguna inversión.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=eficiencia-energetica#contacto" className="sp-hero-cta">Solicitar auditoría gratuita</Link>
            <Link href="/servicios/eficiencia-energetica" className="sp-hero-cta sp-hero-cta-outline">Ver servicio eficiencia energética</Link>
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
