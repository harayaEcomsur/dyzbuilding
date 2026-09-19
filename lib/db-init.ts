import 'server-only'
import { sql } from './db'

let ensured: Promise<unknown> | null = null

// Auto-provisión idempotente: no hay sistema de migraciones en el proyecto, así
// que la tabla se crea (si no existe) en el primer request tras cada deploy.
export function ensureSistemasTable() {
  if (!ensured) {
    ensured = sql`
      CREATE TABLE IF NOT EXISTS informes_sistemas (
        id          TEXT PRIMARY KEY,
        tipo        TEXT NOT NULL,
        codigo      TEXT NOT NULL DEFAULT '',
        cliente     TEXT NOT NULL DEFAULT '',
        fecha       TEXT NOT NULL DEFAULT '',
        estado      TEXT NOT NULL DEFAULT 'borrador',
        data        JSONB NOT NULL,
        parent_id   TEXT,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `.then(() => sql`CREATE INDEX IF NOT EXISTS informes_sistemas_tipo_idx ON informes_sistemas (tipo)`)
  }
  return ensured
}

let inventarioEnsured: Promise<unknown> | null = null

export function ensureInventarioTables() {
  if (!inventarioEnsured) {
    inventarioEnsured = sql`
      CREATE TABLE IF NOT EXISTS inventario_items (
        id             TEXT PRIMARY KEY,
        sku            TEXT NOT NULL DEFAULT '',
        nombre         TEXT NOT NULL DEFAULT '',
        categoria      TEXT NOT NULL DEFAULT '',
        unidad         TEXT NOT NULL DEFAULT 'un',
        stock_actual   NUMERIC NOT NULL DEFAULT 0,
        stock_minimo   NUMERIC NOT NULL DEFAULT 0,
        costo_unitario NUMERIC,
        ubicacion      TEXT NOT NULL DEFAULT '',
        notas          TEXT NOT NULL DEFAULT '',
        created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `
      .then(() => sql`
        CREATE TABLE IF NOT EXISTS inventario_movimientos (
          id                TEXT PRIMARY KEY,
          item_id           TEXT NOT NULL REFERENCES inventario_items(id) ON DELETE CASCADE,
          tipo              TEXT NOT NULL,
          cantidad          NUMERIC NOT NULL,
          motivo            TEXT NOT NULL DEFAULT '',
          referencia        TEXT,
          stock_resultante  NUMERIC NOT NULL,
          created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `)
      .then(() => sql`CREATE INDEX IF NOT EXISTS inventario_movimientos_item_idx ON inventario_movimientos (item_id)`)
  }
  return inventarioEnsured
}

let guiasDespachoEnsured: Promise<unknown> | null = null

export function ensureGuiasDespachoTable() {
  if (!guiasDespachoEnsured) {
    guiasDespachoEnsured = sql`
      CREATE TABLE IF NOT EXISTS guias_despacho (
        id          TEXT PRIMARY KEY,
        numero      TEXT NOT NULL DEFAULT '',
        receptor    TEXT NOT NULL DEFAULT '',
        fecha       TEXT NOT NULL DEFAULT '',
        estado      TEXT NOT NULL DEFAULT 'borrador',
        data        JSONB NOT NULL,
        parent_id   TEXT,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `
  }
  return guiasDespachoEnsured
}
