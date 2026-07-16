import 'server-only'
import type { SiteContent, SiteContentEN } from '@/lib/site-content-types'

const DEEPL_ENDPOINT = 'https://api-free.deepl.com/v2/translate'

async function translateBatch(texts: string[]): Promise<string[]> {
  const key = process.env.DEEPL_API_KEY
  if (!key) throw new Error('DEEPL_API_KEY not set')

  const res = await fetch(DEEPL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: texts,
      source_lang: 'ES',
      target_lang: 'EN-US',
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`DeepL error ${res.status}: ${body}`)
  }

  const json = await res.json() as { translations: Array<{ text: string }> }
  return json.translations.map(t => t.text)
}

export async function translateContentToEN(c: SiteContent): Promise<SiteContentEN> {
  const svcItems = c.servicios.items
  const faqItems = c.faq.items

  // Build ordered flat array — mapping is positional, keep this in sync
  const texts = [
    c.hero.eyebrow,           // 0
    c.hero.titulo,            // 1
    c.hero.subtitulo,         // 2
    c.nosotros.titulo,        // 3
    c.nosotros.p1,            // 4
    c.nosotros.p2,            // 5
    c.servicios.eyebrow,      // 6
    c.servicios.titulo,       // 7
    ...svcItems.flatMap(it => [it.titulo, it.descripcion]),   // 8 … 8+N*2-1
    c.faq.eyebrow,            // 8+N*2
    c.faq.titulo,             // 9+N*2
    ...faqItems.flatMap(it => [it.pregunta, it.respuesta]),   // 10+N*2 …
    c.seo.titulo,
    c.seo.descripcion,
    c.seo.keywords,
  ]

  const t = await translateBatch(texts)

  let i = 0
  const take = () => t[i++] ?? ''

  return {
    hero: {
      eyebrow: take(),
      titulo:  take(),
      subtitulo: take(),
    },
    nosotros: {
      titulo: take(),
      p1: take(),
      p2: take(),
    },
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
    seo: {
      titulo:      take(),
      descripcion: take(),
      keywords:    take(),
    },
  }
}
