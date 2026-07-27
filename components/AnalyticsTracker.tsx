'use client'
import { useEffect } from 'react'
import { gtagEvent } from '@/lib/gtag'

// Event delegation: tracks any element with data-ga-event attribute.
// Add data-ga-location and data-ga-label for context.
// Note: section_viewed events are fired by RevealSection — not duplicated here.
// Elements with data-service-idx pre-fill the quote form when #contacto is reached.
export default function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = (e.target as Element).closest('[data-ga-event]') as HTMLElement | null
      if (!el) return
      const event = el.dataset.gaEvent!
      const params: Record<string, string> = {}
      if (el.dataset.gaLocation) params.location = el.dataset.gaLocation
      if (el.dataset.gaLabel) params.label = el.dataset.gaLabel
      if (el.dataset.gaLang) params.lang = el.dataset.gaLang
      gtagEvent(event, params)
      if (el.dataset.serviceIdx !== undefined) {
        try { sessionStorage.setItem('preselect_service_idx', el.dataset.serviceIdx) } catch {}
      }
      if (el.dataset.sectorIdx !== undefined) {
        try { sessionStorage.setItem('preselect_sector_idx', el.dataset.sectorIdx) } catch {}
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return null
}
