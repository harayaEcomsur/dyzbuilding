import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: '¿VRF o Chiller? Cómo Elegir el Sistema HVAC para su Empresa Chile',

  description:
    'Comparación técnica y económica entre sistemas VRF y chiller para empresas chilenas: cuándo usar cada uno, costos de instalación, eficiencia, mantenimiento y casos de uso reales.',
  alternates: {
    canonical: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    languages: {
      es: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    },
  },
  openGraph: {
    title: 'VRF vs Chiller en Chile: Guía de Decisión para Empresas',
    description:
      'Cuándo VRF supera al chiller y viceversa: comparativa por superficie, número de zonas, eficiencia, costo de instalación y mantenimiento para proyectos comerciales e industriales en Chile.',
    url: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const CRITERIOS = [
  {
    titulo: 'Superficie y Número de Zonas',
    subtitulo: 'VRF: 200–5.000 m² · Chiller: >3.000 m²',
    desc: 'El VRF es rentable en proyectos de 200 a 5.000 m² con múltiples zonas de control independiente (hasta 64 unidades indoor por sistema en equipos de alta gama). Para superficies mayores (>5.000 m²) con grandes espacios abiertos (salas de conferencia de 1.000 m², plantas industriales), el chiller con AHUs centralizada puede ofrecer menor costo total de instalación. En proyectos mixtos (una planta de oficinas con salas abiertas y oficinas privadas), es común usar un chiller para las zonas abiertas y VRF para las privadas.',
  },
  {
    titulo: 'Flexibilidad de Zonificación',
    subtitulo: 'VRF: control independiente por zona · Chiller: zonificación de AHU',
    desc: 'El VRF tiene una ventaja clara cuando cada zona necesita control totalmente independiente (temperatura diferente, horarios distintos, facturación separada por arrendatario). Cada unidad indoor VRF es una zona independiente. El chiller requiere una AHU por zona o cajas VAV (Variable Air Volume) para zonificación, que añaden complejidad y costo. En hoteles con cientos de habitaciones, el VRF es imbatible: cada habitación es una zona independiente sin ductos.',
  },
  {
    titulo: 'Eficiencia Energética Estacional',
    subtitulo: 'VRF: mejor en cargas parciales · Chiller: mejor en plena carga',
    desc: 'El VRF inverter es más eficiente que el chiller convencional a cargas parciales (30–70% de la capacidad nominal), que es el rango en que operan la mayoría de los edificios de oficinas el 80% del tiempo. El chiller de alta eficiencia (centrifugo con VSD) supera al VRF a plena carga sostenida (plantas de manufactura, data centers con carga constante). El VRF de recuperación de calor tiene una ventaja adicional cuando simultáneamente hay zonas que enfrían y zonas que calientan.',
  },
  {
    titulo: 'Costo de Instalación y Mantenimiento',
    subtitulo: 'VRF: menor costo en proyectos medianos · Chiller: economías de escala',
    desc: 'Para proyectos de 500–3.000 m², el VRF tiene un costo de instalación típicamente 15–25% menor que el chiller equivalente, principalmente porque no requiere sala de máquinas, torres de enfriamiento ni sistema hidráulico. Para proyectos grandes (>10.000 m²), el chiller tiene economías de escala que lo hacen competitivo. En términos de mantenimiento, el VRF tiene menor costo anual (sin agua, sin torres, sin tratamiento químico), pero sus componentes de refrigeración son más caros de reemplazar.',
  },
]

const STATS = [
  { valor: '64', etiqueta: 'Unidades indoor máximas por sistema VRF de alta gama' },
  { valor: '15–25%', etiqueta: 'Menor costo de instalación VRF vs chiller en 500–3.000 m²' },
  { valor: 'COP 6,0', etiqueta: 'Eficiencia VRF recuperación de calor a carga parcial' },
  { valor: '80%', etiqueta: 'Del tiempo un edificio opera entre 30–70% de capacidad' },
]

const CASOS_DE_USO = [
  {
    titulo: 'Elige VRF cuando...',
    subtitulo: 'Oficinas · Hoteles · Clínicas · Retail · Proyectos medianos',
    desc: 'El VRF es la mejor opción para: (1) Edificios de oficinas de 500–5.000 m² con múltiples zonas de control; (2) Hoteles de cualquier tamaño (una unidad indoor = una habitación = una zona independiente); (3) Clínicas y hospitales medianos donde cada consultorio necesita control independiente; (4) Strip centers y malls pequeños donde se requiere medición por arrendatario; (5) Edificios donde no hay espacio para sala de máquinas o el edificio ya está construido.',
  },
  {
    titulo: 'Elige Chiller cuando...',
    subtitulo: 'Grandes superficies · Data centers · Plantas industriales · Hospitales grandes',
    desc: 'El chiller supera al VRF en: (1) Plantas de manufactura y bodegas refrigeradas >5.000 m² con carga constante y alta; (2) Data centers de gran escala donde la carga es constante 24/7 y la eficiencia a plena carga es crítica; (3) Hospitales de más de 200 camas donde la centralización simplifica el mantenimiento y la redundancia; (4) Edificios con grandes espacios abiertos (plantas de producción, galpones) que se sirven mejor con AHUs centralizadas.',
  },
  {
    titulo: 'Sistema Híbrido: VRF + Chiller',
    subtitulo: 'La solución cuando ninguno gana por completo',
    desc: 'En edificios mixtos, la solución óptima puede ser un sistema híbrido: chiller para las zonas abiertas de gran volumen (planta principal de un edificio corporativo, áreas de producción) y VRF para las zonas de control fino (oficinas privadas, salas de juntas, gerencias). D&Z Building diseña sistemas híbridos con integración BMS para gestión centralizada de ambos subsistemas.',
  },
  {
    titulo: 'El Factor Determinante: el Estudio de Carga',
    subtitulo: 'No existe una respuesta correcta sin cálculo de ingeniería',
    desc: 'La decisión VRF vs chiller no puede tomarse solo por reglas generales. D&Z Building realiza el estudio de carga térmica del proyecto (según ASHRAE 14 o Manual J para proyectos de menor escala), que determina: pico de demanda por zona, perfil horario de carga, cargas latentes vs. sensibles, y requerimientos de ventilación. Con estos datos, se comparan las opciones en términos de costo total de ciclo de vida (CAPEX + OPEX en 15 años).',
  },
]

const FAQ = [
  {
    pregunta: '¿Por qué los hoteles prefieren VRF en lugar de chiller?',
    respuesta: 'En un hotel, cada habitación es una zona de control independiente con ocupación variable e impredecible. El VRF permite que cada habitación tenga su propio termostato (unidad indoor) con control de temperatura, horario de apagado automático al salir el huésped, y modo ahorro de energía cuando la habitación está vacía. El chiller con AHU central enviaría la misma temperatura a todas las habitaciones de un piso, lo cual es inaceptable en hotelería. Para un hotel de 100 habitaciones, el VRF instala 100 unidades indoor; el chiller necesitaría 100 cajas VAV y sus controles, con mayor costo y complejidad.',
  },
  {
    pregunta: '¿El VRF es confiable para un data center?',
    respuesta: 'El VRF no es la primera opción para data centers de misión crítica (Tier III/IV) por dos razones: (1) La longitud máxima del circuito de refrigerante limita la distancia entre las unidades outdoor e indoor; (2) Los data centers necesitan enfriamiento continuo 24/7 con redundancia N+1 o N+2, lo que se logra más fácilmente con chillers de agua. Para salas de servidores pequeñas (<100 kW de carga IT) en edificios de oficinas, el VRF es perfectamente adecuado. Para data centers de más de 500 kW, D&Z Building recomienda evaluar chillers de agua o CRAC/CRAH units.',
  },
  {
    pregunta: '¿Cuánto más cuesta instalar un chiller que un VRF para una oficina de 2.000 m²?',
    respuesta: 'Para una oficina de 2.000 m² en Santiago, el sistema VRF tiene un costo típico de UF 300–600 (≈ CLP 7,8–15,6 millones). El sistema chiller equivalente (chiller de agua fría + AHUs + red hidráulica + torres de enfriamiento o condensador remoto) costaría UF 400–800 (≈ CLP 10,4–20,8 millones), incluyendo la sala de máquinas. La diferencia de 15–30% se debe principalmente a la red hidráulica y al espacio para sala de máquinas.',
  },
  {
    pregunta: '¿El VRF con recuperación de calor puede calentar y enfriar simultáneamente?',
    respuesta: 'Sí. El VRF de 3 tubos (recuperación de calor) permite que algunas unidades indoor estén en modo frío mientras otras están en modo calor, simultáneamente. El calor rechazado por las zonas que enfrían se transfiere a las zonas que calientan, en lugar de disiparlo al exterior. En un edificio de oficinas de orientación mixta en Santiago durante el otoño, las oficinas orientadas al norte reciben radiación solar y necesitan frío, mientras que las del sur pueden necesitar calefacción. El VRF de recuperación de calor resuelve esto sin consumo eléctrico adicional por la parte del calor transferido.',
  },
  {
    pregunta: '¿Los sistemas VRF y chiller son compatibles con BMS?',
    respuesta: 'Ambas tecnologías son compatibles con BMS mediante protocolos estándar. Los sistemas VRF de las principales marcas (Daikin, Mitsubishi, LG, Samsung, Gree) se integran via BACnet, Modbus o pasarelas propietarias. Los chillers se integran naturalmente vía BACnet o LonWorks. D&Z Building diseña la integración BMS en la etapa de proyecto, asegurando que los setpoints, horarios y alarmas se gestionen desde un único punto de control.',
  },
  {
    pregunta: '¿Puedo reemplazar un chiller existente por VRF?',
    respuesta: 'Sí, es posible y es un retrofit común en edificios de oficinas construidos entre 1990 y 2010 que tienen chillers de baja eficiencia (COP 2,5–3,0). D&Z Building evalúa si la estructura de techos soporta las unidades outdoor VRF, si la distribución eléctrica existente puede adaptarse, y si las unidades indoor se pueden instalar aprovechando los ductos existentes. El retiro del chiller, las torres y la red hidráulica libera espacio que puede recuperarse como área útil.',
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
        { '@type': 'ListItem', position: 3, name: 'VRF vs Chiller', item: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/#article`,
      headline: '¿VRF o Chiller? Cómo Elegir el Sistema HVAC para su Empresa en Chile',
      description: 'Comparación técnica y económica entre sistemas VRF y chiller para empresas chilenas: cuándo usar cada uno, costos de instalación, eficiencia, mantenimiento y casos de uso reales.',
      url: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
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
      datePublished: '2026-07-27',
      dateModified: new Date().toISOString().split('T')[0],
      about: {
        '@type': 'Service',
        name: 'Sistemas VRF/VRV',
        '@id': `${siteUrl}/servicios/climatizacion-vrf/#service`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

const COMPARATIVA = [
  { factor: 'Superficie óptima', vrf: '200–5.000 m²', chillerAgua: '>3.000 m²', chillerExp: '500–3.000 m²' },
  { factor: 'Número de zonas', vrf: 'Hasta 64 indoor', chillerAgua: 'Ilimitado (cajas VAV)', chillerExp: 'Hasta 64 indoor' },
  { factor: 'COP a carga parcial (50%)', vrf: '4,5–6,0', chillerAgua: '3,5–5,0', chillerExp: '3,0–4,5' },
  { factor: 'COP a plena carga', vrf: '3,5–5,0', chillerAgua: '5,0–7,0', chillerExp: '3,5–5,0' },
  { factor: 'Requiere sala de máquinas', vrf: 'No', chillerAgua: 'Sí (chiller + torres)', chillerExp: 'No' },
  { factor: 'Sistema hidráulico', vrf: 'No', chillerAgua: 'Sí', chillerExp: 'No' },
  { factor: 'Recuperación de calor', vrf: 'Sí (3 tubos)', chillerAgua: 'Parcial (chiller reversible)', chillerExp: 'No' },
  { factor: 'Costo instalación (por m²)', vrf: 'UF 0,15–0,35', chillerAgua: 'UF 0,20–0,45', chillerExp: 'UF 0,15–0,30' },
  { factor: 'Mantenimiento anual (por m²)', vrf: 'UF 0,02–0,04', chillerAgua: 'UF 0,04–0,08', chillerExp: 'UF 0,03–0,06' },
]

export default function GuiaVrfVsChillerPage() {
  return (
    <>
      <Script id="ld-guia-vrf-vs-chiller" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/climatizacion-vrf" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Sistema VRF
            </Link>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar cotización
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
            <span>VRF vs Chiller</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía de decisión técnica
          </p>
          <h1 className="sp-hero-title">¿VRF o chiller?<br />Cómo elegir el sistema correcto</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Comparación técnica y económica entre sistemas VRF y chiller para empresas chilenas: cuándo usar cada uno, costos de instalación, eficiencia, mantenimiento y casos de uso reales.
          </p>
          <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">
            Cotización gratuita →
          </Link>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.4vw,28px)', color: 'var(--text)', margin: '0 0 20px' }}>
              VRF y chiller: dos tecnologías, dos propósitos distintos
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              VRF (Variable Refrigerant Flow) y chiller son las dos tecnologías dominantes en climatización comercial e industrial en Chile, pero no compiten en todos los escenarios. El VRF distribuye refrigerante directamente a unidades indoor, mientras que el chiller enfría agua (o una mezcla de agua-glicol) que luego se distribuye a unidades manejadoras de aire (AHU) o fan coils.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              La decisión correcta depende de la superficie del proyecto, el número de zonas de control independiente, el perfil de carga térmica y el presupuesto disponible. Esta guía compara ambas tecnologías criterio por criterio, con datos de referencia para tomar una decisión informada antes de solicitar una cotización.
            </p>
          </div>
        </div>

        {/* Criterios */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Criterios de decisión
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Los cuatro factores que determinan la elección
          </h2>
          <div className="sp-aplic-grid">
            {CRITERIOS.map((c) => (
              <div key={c.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {c.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {c.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativa table */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Comparativa técnica y económica
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Factor', 'VRF Inverter', 'Chiller (agua helada)', 'Chiller (exp. directa)'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map((row, i) => (
                  <tr key={row.factor} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.factor}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.vrf}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.chillerAgua}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.chillerExp}</td>
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

        {/* Casos de uso */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Casos de uso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            ¿Cuál conviene para su proyecto?
          </h2>
          <div className="sp-aplic-grid">
            {CASOS_DE_USO.map((c) => (
              <div key={c.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {c.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {c.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {c.desc}
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
                Cotización gratuita
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                Obtenga un presupuesto detallado para su proyecto.
              </p>
            </div>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">
              Solicitar cotización →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Todo lo que necesita saber sobre VRF vs chiller
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
            <Link href="/guias/que-es-un-sistema-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              ¿Qué es un sistema VRF? →
            </Link>
            <Link href="/guias/precio-sistema-vrf-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía de precios VRF →
            </Link>
            <Link href="/guias/eficiencia-energetica-hvac-empresas-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Eficiencia energética HVAC →
            </Link>
            <Link href="/guias/como-elegir-sistema-hvac-empresa-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Cómo elegir sistema HVAC →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            ¿VRF o chiller? Le ayudamos a decidir con datos
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Nuestro equipo técnico realiza el estudio de carga de su proyecto y le entrega una recomendación fundada, sin costo. Si un sistema híbrido conviene más, se lo diremos.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">Solicitar cotización gratuita</Link>
            <Link href="/servicios/climatizacion-vrf" className="sp-hero-cta sp-hero-cta-outline">Ver servicio VRF</Link>
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
