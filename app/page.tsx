import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const SERVICES = [
  { title: 'Climatización Comercial / VRF', desc: 'Diseño e instalación de sistemas VRF/VRV para locales comerciales, oficinas y proyectos industriales.' },
  { title: 'Refrigeración Comercial', desc: 'Vitrinas exhibidoras, góndolas y cámaras frigoríficas para supermercados, restaurantes y cadenas de retail.' },
  { title: 'Ventilación y Extracción', desc: 'Sistemas de renovación de aire, extracción de humos y ventilación mecánica controlada (VMC).' },
  { title: 'Mantenimiento Preventivo', desc: 'Programas de mantención periódica para maximizar la vida útil y eficiencia de tus equipos.' },
  { title: 'Proyectos Llave en Mano', desc: 'Desde el estudio de factibilidad hasta la puesta en marcha. Un solo interlocutor, cero sorpresas.' },
  { title: 'Asesoría de Ingeniería', desc: 'Cálculo de cargas térmicas, selección de equipos y revisión de proyectos para arquitectos y constructoras.' },
  { title: 'Eficiencia Energética HVAC', desc: 'Auditorías energéticas y soluciones para reducir el consumo eléctrico de tus instalaciones de climatización.' },
  { title: 'Análisis Operacional VRV/VRF', desc: 'Diagnóstico avanzado de sistemas multisplit y VRF: lectura de parámetros, presiones y datos operacionales.' },
]

export default function Home() {
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 52px', height: 68,
        background: 'rgba(12,12,12,0.92)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain', height: 32, width: 'auto' }} priority />
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {([['Especialidades', '#especialidades'], ['Nosotros', '#nosotros'], ['Contacto', '#contacto']] as const).map(([label, href]) => (
            <a key={href} href={href} style={{
              fontFamily: 'var(--font-josefin), sans-serif',
              fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'var(--dim)', textDecoration: 'none',
            }}>{label}</a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: '9px 20px', fontSize: '9px' }}>
            Cotización
          </a>
        </div>
      </nav>

      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '140px 52px 90px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.028) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 60% at 68% 42%, rgba(200,168,75,0.08) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', maxWidth: 680 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <div style={{ width: 36, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
            <p className="eyebrow" style={{ fontSize: '8.5px', letterSpacing: '0.46em' }}>
              20 Años · Todo Chile · LG · Samsung · Gree
            </p>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-josefin), sans-serif',
            fontSize: 'clamp(42px, 5.5vw, 76px)', fontWeight: 200,
            lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 28,
          }}>
            Ingeniería<br />
            Climática<br />
            <span style={{ color: 'var(--accent)', fontWeight: 300 }}>de Precisión</span>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--dim)', maxWidth: 460, marginBottom: 46, fontWeight: 300, lineHeight: 1.82 }}>
            Diseño, instalación y mantenimiento de sistemas VRF/VRV, refrigeración comercial y HVAC para proyectos en todo Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#especialidades" className="btn-primary">Ver Especialidades</a>
            <a href="#contacto" className="btn-outline">Solicitar Cotización</a>
          </div>
        </div>
      </section>

      <div style={{
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '22px 52px', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap',
      }}>
        <span style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', opacity: 0.55 }}>
          Distribuidores oficiales
        </span>
        {['LG', 'Samsung', 'Gree'].map(b => (
          <span key={b} style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,238,235,0.2)' }}>{b}</span>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 44 }}>
          {[['20+', 'Años'], ['Chile', 'Cobertura'], ['24/7', 'Soporte']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 20, fontWeight: 200, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--dim)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="especialidades" style={{ padding: '96px 52px' }}>
        <div style={{ marginBottom: 52 }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Servicios</p>
          <h2 style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 200, letterSpacing: '-0.01em' }}>
            Nuestras Especialidades
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
          {SERVICES.map((svc) => (
            <div key={svc.title} style={{ background: 'var(--bg)', padding: '32px 28px' }}>
              <div style={{ width: 4, height: 4, background: 'var(--accent)', marginBottom: 20, opacity: 0.6 }} />
              <h3 style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 13, fontWeight: 300, letterSpacing: '0.04em', marginBottom: 12 }}>{svc.title}</h3>
              <p style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.7, fontWeight: 300 }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="nosotros" style={{ padding: '96px 52px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Nosotros</p>
          <div style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 200, color: 'var(--accent)', lineHeight: 1, marginBottom: 16 }}>20+</div>
          <p style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 24 }}>
            Años de Experiencia
          </p>
          <p style={{ fontSize: 14.5, color: 'var(--dim)', lineHeight: 1.82, fontWeight: 300, maxWidth: 440 }}>
            D&Z Building es el socio técnico de confianza para proyectos de climatización, refrigeración comercial y HVAC en todo el territorio nacional. Desde 2006 entregamos soluciones de alta ingeniería con equipos certificados LG, Samsung y Gree.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
          {([['20+', 'Años de experiencia'], ['Nacional', 'Cobertura Chile'], ['24/7', 'Soporte técnico'], ['LG · Samsung · Gree', 'Marcas certificadas']] as const).map(([n, l]) => (
            <div key={l} style={{ background: 'var(--bg)', padding: '32px 24px' }}>
              <div style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: (n as string).length > 8 ? 13 : 30, fontWeight: 200, color: 'var(--accent)', lineHeight: 1.2, marginBottom: 8 }}>{n}</div>
              <div style={{ fontSize: 12, color: 'var(--dim)', fontWeight: 300, lineHeight: 1.4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" style={{ padding: '96px 52px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Contacto</p>
          <h2 style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 200, letterSpacing: '-0.01em', marginBottom: 24 }}>
            Hablemos de<br />tu proyecto
          </h2>
          <p style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.82, fontWeight: 300, marginBottom: 40 }}>
            Cuéntanos tu proyecto. Nuestro equipo técnico te responderá con una propuesta personalizada.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {([['Email', 'contacto@dyzbuilding.cl'], ['Cobertura', 'Todo Chile'], ['Horario', 'Lunes a Viernes 8:00 – 18:00']] as const).map(([label, value]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 300 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <Image src="/logo.png" alt="D&Z Building" width={90} height={28} style={{ objectFit: 'contain', height: 24, width: 'auto', opacity: 0.7 }} />
        <p style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--dim)' }}>
          Climatización · Refrigeración · Ambientación Climática · Chile
        </p>
        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em' }}>© 2026 D&Z Building</p>
      </footer>
    </>
  )
}
