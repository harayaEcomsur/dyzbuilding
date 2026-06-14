'use client'

interface ServiceCardProps {
  label: string
  title: string
  desc: string
}

export default function ServiceCard({ label, title, desc }: ServiceCardProps) {
  return (
    <div
      style={{
        background: 'var(--bg)',
        padding: '32px 28px',
        borderTop: '2px solid var(--accent)',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg2)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
    >
      <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 8, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 14 }}>{label}</div>
      <h3 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 14, fontWeight: 300, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 12, lineHeight: 1.4 }}>{title}</h3>
      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 300, color: 'rgba(240,238,235,0.45)', lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}
