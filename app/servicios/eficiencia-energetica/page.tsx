import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Eficiencia Energética en Climatización — Auditoría HVAC y Ley 21.305 Chile',

  description:
    'Auditoría energética de sistemas HVAC, diagnóstico de consumo y plan de mejora para cumplir la Ley 21.305 de Eficiencia Energética en Chile. Reducción del 20–40% en consumo eléctrico de climatización.',
  alternates: {
    canonical: `${siteUrl}/servicios/eficiencia-energetica/`,
    languages: {
      es: `${siteUrl}/servicios/eficiencia-energetica/`,
      en: `${siteUrl}/en/services/energy-efficiency/`,
    },
  },
  openGraph: {
    title: 'Eficiencia Energética HVAC Chile — Auditoría y Ley 21.305 | D&Z Building',
    description:
      'Reducimos el consumo eléctrico de tu sistema de climatización entre un 20–40%. Auditoría, diagnóstico y plan de mejora con retorno de inversión en 2–5 años.',
    url: `${siteUrl}/servicios/eficiencia-energetica/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SERVICIOS_EE = [
  {
    titulo: 'Auditoría Energética de HVAC',
    subtitulo: 'ISO 50001 · ASHRAE Level 1–2',
    desc: 'Levantamiento de todos los equipos de climatización, medición de consumo real (kWh/mes por equipo), análisis de horarios de operación, temperatura setpoint vs. real, y estado de mantenimiento. Entregamos un informe con el "baseline" energético del sistema y los puntos de mayor ineficiencia.',
  },
  {
    titulo: 'Diagnóstico VRF/VRV Existente',
    subtitulo: 'Análisis de histórico de errores',
    desc: 'Lectura del histórico de errores y datos de operación vía software del fabricante (Daikin D-Checker, Mitsubishi PAC-SIF, LG LGAP). Identificamos modos de operación ineficientes, válvulas de expansión descalibradas, fugas de refrigerante, y unidades exteriores sucias o con ventiladores degradados que aumentan el consumo entre un 10–30%.',
  },
  {
    titulo: 'Plan de Mejora y Proyección de Ahorros',
    subtitulo: 'ROI calculado · TIR · Payback',
    desc: 'Para cada medida identificada en la auditoría: descripción de la mejora, inversión requerida, ahorro estimado en kWh/año y en pesos chilenos al precio de energía vigente, tiempo de retorno de inversión (payback simple y descontado), y reducción de emisiones de CO₂.',
  },
  {
    titulo: 'Implementación de Mejoras',
    subtitulo: 'Ejecución de las medidas',
    desc: 'Realizamos las mejoras identificadas: limpieza de intercambiadores, recarga de refrigerante, cambio de controladores por versiones eficientes, instalación de variadores de frecuencia (VFD) en motores de manejadoras y torres de enfriamiento, y actualización de setpoints y horarios en el BMS.',
  },
  {
    titulo: 'Medición y Verificación (M&V)',
    subtitulo: 'IPMVP Opción A/B',
    desc: 'Instalamos medidores de energía (submédición) en los circuitos de climatización para verificar el ahorro real después de las mejoras. Entregamos informes mensuales de M&V conforme al protocolo IPMVP (International Performance Measurement and Verification Protocol) para acreditación de ahorros ante aseguradoras o entidades de financiamiento verde.',
  },
  {
    titulo: 'Cumplimiento Ley 21.305',
    subtitulo: 'Grandes consumidores de energía',
    desc: 'Asesoramos en el cumplimiento de la Ley 21.305 de Eficiencia Energética para empresas con consumo superior a 50 TOE/año: implementación del Sistema de Gestión de Energía (SGE según ISO 50001), elaboración del Reporte de Consumo Energético (RCE) para el Ministerio de Energía, y definición de los Programas de Gestión de Energía (PGE) para la línea base de HVAC.',
  },
]

const CASOS = [
  { tipo: 'Edificio de Oficinas', superficie: '5.000 m²', consumo_antes: '420.000 kWh/año', consumo_despues: '290.000 kWh/año', ahorro: '31%', medida: 'Actualización controladores VRF + limpieza + corrección de setpoints' },
  { tipo: 'Hotel 4 estrellas', superficie: '8.500 m²', consumo_antes: '680.000 kWh/año', consumo_despues: '460.000 kWh/año', ahorro: '32%', medida: 'Instalación VFD en bombas AHU + optimización horarios + recarga refrigerante' },
  { tipo: 'Supermercado', superficie: '2.800 m²', consumo_antes: '950.000 kWh/año', consumo_despues: '650.000 kWh/año', ahorro: '32%', medida: 'Migración R-404A → R-449A + controladores electrónicos de expansión + sellado puertas' },
]

const FAQ = [
  {
    pregunta: '¿Cuánto se puede reducir el consumo de un sistema VRF antiguo?',
    respuesta: 'Un sistema VRF instalado hace más de 5 años sin mantención adecuada puede estar consumiendo entre un 20–40% más de lo que debería. Las causas más comunes son: filtros sucios en unidades interiores (reduce flujo de aire y obliga a trabajar más al compresor), suciedad en el intercambiador de la unidad exterior (sube la temperatura de condensación +3–5°C, equivalente a +10–15% de consumo), fugas de refrigerante (el sistema trabaja más tiempo para alcanzar la temperatura), y setpoints muy bajos para el uso real.',
  },
  {
    pregunta: '¿Qué es la Ley 21.305 y cómo afecta a mi empresa?',
    respuesta: 'La Ley de Eficiencia Energética (Ley 21.305, promulgada en 2021) establece obligaciones para "grandes consumidores de energía" (empresas con consumo anual superior a 50 TEP — toneladas equivalentes de petróleo, equivalente a aproximadamente 580.000 kWh/año de electricidad). Estas empresas deben: implementar un Sistema de Gestión de Energía (SGE) certificable según ISO 50001 o equivalente, reportar su consumo energético anualmente al Ministerio de Energía, y establecer metas de eficiencia. Las sanciones por incumplimiento pueden llegar a 500 UTM.',
  },
  {
    pregunta: '¿Cuánto cuesta una auditoría energética de HVAC?',
    respuesta: 'Una auditoría energética ASHRAE Level 1 (recorrido de instalación, revisión de facturas, identificación de medidas de bajo costo) para un edificio de 1.000–5.000 m² cuesta entre UF 20–60. Una auditoría Level 2 (medición de consumo por equipo, análisis detallado, proyecciones de ahorro) para el mismo tamaño cuesta entre UF 60–150. Para edificios sobre 10.000 m² u operaciones industriales, el costo se cotiza en función del número de equipos y sistemas a auditar.',
  },
  {
    pregunta: '¿Qué tecnología permite mayor ahorro energético en climatización comercial?',
    respuesta: 'En climatización de confort (oficinas, hoteles, retail), los sistemas VRF de última generación (inverter de alta eficiencia, EER/COP > 4.5) consumen hasta un 40% menos que sistemas de velocidad fija equivalentes. En refrigeración comercial, la mayor palanca de ahorro es la migración a refrigerantes de bajo GWP con controladores electrónicos de expansión (EEV) y gestión centralizada. Para sistemas de agua helada, la instalación de variadores de frecuencia (VFD) en compresores y bombas puede reducir el consumo un 25–50% en cargas parciales.',
  },
  {
    pregunta: '¿Pueden emitir un certificado de eficiencia energética del edificio?',
    respuesta: 'La Certificación de Eficiencia Energética de Edificios (CEE) en Chile es administrada por el Ministerio de Vivienda (MINVU) para edificios de habitación y el Ministerio de Energía para edificios comerciales. D&Z Building no es un organismo certificador, pero podemos preparar la documentación técnica del sistema HVAC que se requiere para la certificación (consumo de energía, índice de eficiencia, descripción de sistemas) y asesorar en las mejoras necesarias para alcanzar la calificación objetivo.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda en verse el retorno de una inversión en eficiencia energética HVAC?',
    respuesta: 'Para medidas de bajo costo (limpieza de equipos, corrección de setpoints, ajuste de horarios), el retorno es inmediato — sin inversión significativa, solo el costo de mano de obra. Para medidas de inversión media (recarga de refrigerante, cambio de controladores, VFD en motores), el payback típico es 1–3 años. Para reemplazo de equipos (nuevo VRF de alta eficiencia), el payback es 4–8 años dependiendo del precio de la energía y el perfil de uso. Con el precio actual de la electricidad en Chile (>$170 CLP/kWh para clientes BT1), los proyectos de eficiencia son muy atractivos.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/servicios/` },
        { '@type': 'ListItem', position: 3, name: 'Eficiencia Energética', item: `${siteUrl}/servicios/eficiencia-energetica/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/servicios/eficiencia-energetica/#service`,
      name: 'Auditoría y Eficiencia Energética HVAC — Chile',
      description: 'Auditoría energética, diagnóstico y mejora de sistemas de climatización y refrigeración. Reducción del 20–40% en consumo eléctrico. Cumplimiento Ley 21.305.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'HVAC Energy Efficiency',
      url: `${siteUrl}/servicios/eficiencia-energetica/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/servicios/eficiencia-energetica/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function EficienciaEnergeticaPage() {
  return (
    <>
      <Script id="ld-eficiencia" type="application/ld+json">
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
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar auditoría
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/servicios/" style={{ color: 'inherit', textDecoration: 'none' }}>Servicios</Link>
            <span>›</span>
            <span>Eficiencia Energética</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Servicio · Auditoría Energética · Ley 21.305 · Reducción de Consumo
          </p>
          <h1 className="sp-hero-title">Eficiencia Energética<br />en Climatización — Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Auditamos el consumo real de su sistema HVAC, identificamos ineficiencias
            y ejecutamos mejoras para reducir el consumo eléctrico entre un 20–40%.
            Cumplimiento de la Ley 21.305 de Eficiencia Energética.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta">Solicitar auditoría energética</Link>
            <Link href="/?servicio=analisis-vrf#contacto" className="sp-hero-cta sp-hero-cta-outline">Análisis VRF específico</Link>
          </div>
        </div>

        {/* Potencial de ahorro */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)', background: 'var(--bg2)' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 20px' }}>
            Casos reales de ahorro (datos anonimizados)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1px', background: 'var(--border)' }}>
            {CASOS.map((c, i) => (
              <div key={i} style={{ background: 'var(--bg2)', padding: '20px' }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 12 }}>
                  {c.tipo} · {c.superficie}
                </div>
                <div style={{ display: 'flex', gap: 16, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)', marginBottom: 2 }}>Antes</div>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '16px', color: 'var(--dim)' }}>{c.consumo_antes}</div>
                  </div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '18px', color: 'var(--border)', alignSelf: 'center' }}>→</div>
                  <div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--accent)', marginBottom: 2 }}>Después</div>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '16px', color: 'var(--accent)' }}>{c.consumo_despues}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '24px', color: 'var(--accent)', lineHeight: 1 }}>−{c.ahorro}</div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)' }}>consumo</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', borderTop: '1px solid var(--border)', paddingTop: 8 }}>
                  {c.medida}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Qué hacemos
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Del diagnóstico a la mejora verificable
          </h2>
          <div className="sp-aplic-grid">
            {SERVICIOS_EE.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {s.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {s.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
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
            Ahorros, Ley 21.305 y costos
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
            <Link href="/guias/precio-sistema-vrf-chile/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía de precios →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Cuánto está gastando de más?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Solicite una auditoría energética
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Necesitamos: tipo y cantidad de equipos, facturas eléctricas de los últimos 3 meses,
            y horario de operación del recinto. Con eso podemos identificar el potencial de ahorro.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta">Solicitar auditoría energética</Link>
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
