'use client'
import { useState } from 'react'
import { gtagEvent } from '@/lib/gtag'

interface FaqItem { pregunta: string; respuesta: string }

export default function FaqAccordion({ items, lang = 'es' }: { items: FaqItem[]; lang?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  function toggle(i: number, item: FaqItem) {
    const isOpening = open !== i
    setOpen(isOpening ? i : null)
    if (isOpening) gtagEvent('faq_item_opened', { question_index: i, question_text: item.pregunta, lang })
  }

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <article key={i} className={`faq-item${open === i ? ' faq-open' : ''}`}>
          <button
            className="faq-q"
            onClick={() => toggle(i, item)}
            aria-expanded={open === i}
          >
            <h3>{item.pregunta}</h3>
            <svg
              className="faq-chevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="faq-a" aria-hidden={open !== i}>
            <div className="faq-a-inner">
              <p>{item.respuesta}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
