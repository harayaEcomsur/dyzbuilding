'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CotizacionResumen {
  id: string
  numero: string
  clienteNombre: string
  clienteEmpresa: string
  total: number
  moneda: string
  estado: string
  estadoCliente: string
  updatedAt: string
}

interface DashboardData {
  cotizaciones: {
    total: number
    borradores: number
    emitidas: number
    pendientes: number
    aprobadas: number
    rechazadas: number
    montoPromedio: number
    montoAprobado: number
  }
  cotizacionesRecientes: CotizacionResumen[]
  ordenes: { total: number; borradores: number; montoTotal: number }
  contratos: { total: number; borradores: number; emitidos: number }
  inventario: { total: number; bajoStock: number; publicados: number }
  guiasDespacho: { total: number; esteMes: number }
  solicitudesRepuestos: { total: number; nuevas: number; enProceso: number }
}

const SYM: Record<string, string> = { CLP: '$', USD: 'US$', UF: 'UF' }

function fmt(total: number, moneda = 'CLP') {
  if (moneda === 'UF') return `UF ${total.toFixed(1)}`
  return `${SYM[moneda] ?? '$'} ${Math.round(total).toLocaleString('es-CL')}`
}

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
  } catch { return iso }
}

function Kpi({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ background: 'var(--bg2)', padding: '22px 20px', borderTop: `2px solid ${accent ? 'var(--accent)' : 'var(--border)'}`, flex: '1 0 auto' }}>
      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 26, fontWeight: 300, color: accent ? 'var(--accent)' : 'var(--text)', marginBottom: 6, whiteSpace: 'nowrap' }}>
        {value}
      </div>
      <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', whiteSpace: 'nowrap' }}>
        {label}
      </div>
    </div>
  )
}

function Section({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '22px 24px', flex: '1 1 300px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
        <h2 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 14, fontWeight: 300, letterSpacing: '0.06em', color: 'var(--text)', whiteSpace: 'nowrap' }}>{title}</h2>
        <Link href={href} style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Ver →</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {children}
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, fontSize: 13.5 }}>
      <span style={{ color: 'var(--dim)', whiteSpace: 'nowrap' }}>{label}</span>
      <span style={{ color: 'var(--text)', fontFamily: 'Josefin Sans, sans-serif', whiteSpace: 'nowrap' }}>{value}</span>
    </div>
  )
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    fetch('/api/dashboard')
      .then(r => r.json())
      .then(setData)
      .catch(() => { /* silently fail, keep placeholders */ })
  }, [])

  const c = data?.cotizaciones
  const respondidas = (c?.aprobadas ?? 0) + (c?.rechazadas ?? 0)
  const tasaAprobacion = respondidas > 0 ? Math.round((c!.aprobadas / respondidas) * 100) : null

  return (
    <div className="admin-page">
      <div className="eyebrow" style={{ marginBottom: 12 }}>Panel de Administración</div>
      <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 30, fontWeight: 200, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 32 }}>
        Dashboard
      </h1>

      {/* KPIs de presupuestos */}
      <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 12 }}>
        Presupuestos
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 1, background: 'var(--border)', marginBottom: 40 }}>
        <Kpi label="Realizados" value={data ? String(c!.total) : '—'} />
        <Kpi label="Monto promedio" value={data ? fmt(c!.montoPromedio) : '—'} />
        <Kpi label="Pendientes" value={data ? String(c!.pendientes) : '—'} />
        <Kpi label="Aprobados" value={data ? String(c!.aprobadas) : '—'} accent />
        <Kpi label="Monto aprobado" value={data ? fmt(c!.montoAprobado) : '—'} accent />
        <Kpi label="Rechazados" value={data ? String(c!.rechazadas) : '—'} />
        <Kpi label="Tasa de aprobación" value={tasaAprobacion !== null ? `${tasaAprobacion}%` : '—'} />
      </div>

      {/* Secciones */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
        <Section title="Órdenes de compra" href="/admin/ordenes">
          <Row label="Total" value={data ? String(data.ordenes.total) : '—'} />
          <Row label="Borradores" value={data ? String(data.ordenes.borradores) : '—'} />
          <Row label="Monto emitido" value={data ? fmt(data.ordenes.montoTotal) : '—'} />
        </Section>

        <Section title="Contratos" href="/admin/contratos">
          <Row label="Total" value={data ? String(data.contratos.total) : '—'} />
          <Row label="Borradores" value={data ? String(data.contratos.borradores) : '—'} />
          <Row label="Emitidos" value={data ? String(data.contratos.emitidos) : '—'} />
        </Section>

        <Section title="Inventario" href="/admin/inventario">
          <Row label="Ítems" value={data ? String(data.inventario.total) : '—'} />
          <Row label="Bajo stock" value={data ? String(data.inventario.bajoStock) : '—'} />
          <Row label="Publicados en el sitio" value={data ? String(data.inventario.publicados) : '—'} />
        </Section>

        <Section title="Guías de despacho" href="/admin/guias-despacho">
          <Row label="Total" value={data ? String(data.guiasDespacho.total) : '—'} />
          <Row label="Este mes" value={data ? String(data.guiasDespacho.esteMes) : '—'} />
        </Section>

        <Section title="Solicitudes de repuestos" href="/admin/solicitudes-repuestos">
          <Row label="Total" value={data ? String(data.solicitudesRepuestos.total) : '—'} />
          <Row label="Nuevas" value={data ? String(data.solicitudesRepuestos.nuevas) : '—'} />
          <Row label="En proceso" value={data ? String(data.solicitudesRepuestos.enProceso) : '—'} />
        </Section>
      </div>

      {/* Últimos presupuestos */}
      <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 12 }}>
        Últimos presupuestos
      </div>
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', marginBottom: 40 }}>
        {!data ? (
          <div style={{ padding: 24, color: 'var(--dim)', fontSize: 13.5 }}>Cargando…</div>
        ) : data.cotizacionesRecientes.length === 0 ? (
          <div style={{ padding: 24, color: 'var(--dim)', fontSize: 13.5 }}>Aún no hay cotizaciones.</div>
        ) : (
          data.cotizacionesRecientes.map(r => (
            <Link
              key={r.id}
              href={`/admin/cotizaciones/nueva?id=${r.id}`}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                padding: '14px 24px', borderBottom: '1px solid var(--border)', textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', minWidth: 0 }}>
                <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 13, color: 'var(--text)', whiteSpace: 'nowrap', flexShrink: 0 }}>{r.numero}</span>
                <span style={{ fontSize: 13.5, color: 'var(--dim)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {r.clienteNombre || r.clienteEmpresa || '—'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 13, color: 'var(--dim)', whiteSpace: 'nowrap' }}>{fmtDate(r.updatedAt)}</span>
                <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 13.5, color: r.total > 0 ? 'var(--text)' : 'var(--dim)', whiteSpace: 'nowrap' }}>
                  {r.total > 0 ? fmt(r.total, r.moneda) : '—'}
                </span>
                <span className={`badge badge-${r.estado === 'emitida' ? r.estadoCliente : r.estado}`} style={{ whiteSpace: 'nowrap' }}>
                  {r.estado === 'emitida' ? r.estadoCliente : r.estado}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Accesos rápidos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1, background: 'var(--border)' }}>
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
