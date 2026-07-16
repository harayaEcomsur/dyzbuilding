/**
 * Uso: node --env-file=.env.local --import=tsx/esm scripts/translate-content.ts
 *   o:  npx tsx --env-file=.env.local scripts/translate-content.ts
 *
 * Lee el contenido español de Neon, lo traduce con DeepL y escribe
 * los campos `en` de vuelta en la misma fila. Correr una vez.
 *
 * Requiere en .env.local:
 *   DATABASE_URL   — Neon connection string
 *   DEEPL_API_KEY  — clave API de DeepL (plan Free sirve)
 */

import { neon } from '@neondatabase/serverless'

const DEEPL_ENDPOINT = 'https://api-free.deepl.com/v2/translate'

async function translateBatch(texts: string[]): Promise<string[]> {
  const key = process.env.DEEPL_API_KEY
  if (!key) throw new Error('DEEPL_API_KEY no está configurado en .env.local')

  const res = await fetch(DEEPL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: texts, source_lang: 'ES', target_lang: 'EN-US' }),
  })

  if (!res.ok) throw new Error(`DeepL error ${res.status}: ${await res.text()}`)
  const json = await res.json() as { translations: Array<{ text: string }> }
  return json.translations.map(t => t.text)
}

async function main() {
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) throw new Error('DATABASE_URL no está configurado en .env.local')

  const sql = neon(dbUrl)

  // Leer contenido actual
  const rows = await sql`SELECT data FROM site_content WHERE key = 'default'`
  if (!rows[0]?.data) {
    console.error('No hay fila en site_content con key = default')
    process.exit(1)
  }

  const c = rows[0].data as Record<string, unknown> & {
    hero: { eyebrow: string; titulo: string; subtitulo: string }
    nosotros: { titulo: string; p1: string; p2: string }
    servicios: { eyebrow: string; titulo: string; items: Array<{ titulo: string; descripcion: string }> }
    faq: { eyebrow: string; titulo: string; items: Array<{ pregunta: string; respuesta: string }> }
    seo: { titulo: string; descripcion: string; keywords: string }
  }

  const svcItems = c.servicios.items ?? []
  const faqItems = c.faq.items ?? []

  const texts = [
    c.hero.eyebrow,
    c.hero.titulo,
    c.hero.subtitulo,
    c.nosotros.titulo,
    c.nosotros.p1,
    c.nosotros.p2,
    c.servicios.eyebrow,
    c.servicios.titulo,
    ...svcItems.flatMap(it => [it.titulo, it.descripcion]),
    c.faq.eyebrow,
    c.faq.titulo,
    ...faqItems.flatMap(it => [it.pregunta, it.respuesta]),
    c.seo.titulo,
    c.seo.descripcion,
    c.seo.keywords,
  ]

  console.log(`Traduciendo ${texts.length} textos con DeepL…`)
  const t = await translateBatch(texts)

  let i = 0
  const take = () => t[i++] ?? ''

  const en = {
    hero:     { eyebrow: take(), titulo: take(), subtitulo: take() },
    nosotros: { titulo: take(), p1: take(), p2: take() },
    servicios: {
      eyebrow: take(),
      titulo:  take(),
      items: svcItems.map(() => ({ titulo: take(), descripcion: take() })),
    },
    faq: {
      eyebrow: take(),
      titulo:  take(),
      items: faqItems.map(() => ({ pregunta: take(), respuesta: take() })),
    },
    seo: { titulo: take(), descripcion: take(), keywords: take() },
  }

  const updated = { ...c, en }

  await sql`
    UPDATE site_content
    SET data = ${JSON.stringify(updated)}, updated_at = NOW()
    WHERE key = 'default'
  `

  console.log('✓ Contenido EN guardado en Neon.')
  console.log('  Hero EN:', en.hero.titulo)
  console.log('  SEO EN:', en.seo.titulo)
}

main().catch(err => { console.error(err); process.exit(1) })
