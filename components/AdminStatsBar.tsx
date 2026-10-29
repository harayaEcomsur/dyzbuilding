export interface StatItem {
  label: string
  value: string
  accent?: boolean
  warn?: boolean
}

export default function AdminStatsBar({ items }: { items: StatItem[] }) {
  return (
    <div className="admin-stats-bar">
      {items.map(({ label, value, accent, warn }) => (
        <div key={label} className="admin-stat-tile" style={{ borderTopColor: accent ? 'var(--accent)' : warn ? '#dc6464' : 'var(--border)' }}>
          <div className="admin-stat-value" style={{ color: accent ? 'var(--accent)' : warn ? '#dc6464' : 'var(--text)' }}>{value}</div>
          <div className="admin-stat-label">{label}</div>
        </div>
      ))}
    </div>
  )
}
