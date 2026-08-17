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
