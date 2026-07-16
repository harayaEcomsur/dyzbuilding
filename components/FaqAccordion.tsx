'use client'
import { useState } from 'react'

interface FaqItem { pregunta: string; respuesta: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <article key={i} className={`faq-item${open === i ? ' faq-open' : ''}`}>
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
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
