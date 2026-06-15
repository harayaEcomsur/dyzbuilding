import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="admin-page" style={{ maxWidth: 800 }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Panel de Administración</div>
      <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 30, fontWeight: 200, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 48 }}>
        Dashboard
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1, background: 'var(--border)', maxWidth: 800 }}>
        {[
          {
            title: 'Nueva Cotización',
            desc: 'Crear y descargar una cotización en PDF con diseño profesional.',
            href: '/admin/cotizaciones/nueva',
            cta: 'Crear cotización →',
          },
          {
            title: 'Ir al sitio web',
            desc: 'Ver el sitio público de D&Z Building.',
            href: '/',
            cta: 'Ver sitio →',
          },
        ].map(({ title, desc, href, cta }) => (
          <div key={href} style={{ background: 'var(--bg2)', padding: '32px 28px', borderTop: '2px solid var(--accent)' }}>
            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 15, fontWeight: 300, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 10 }}>{title}</h2>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(240,238,235,0.45)', lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
            <Link href={href} style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>{cta}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
