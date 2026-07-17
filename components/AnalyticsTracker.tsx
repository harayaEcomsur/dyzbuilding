'use client'
import { useEffect } from 'react'
import { gtagEvent } from '@/lib/gtag'

// Event delegation: tracks any element with data-ga-event attribute.
// Add data-ga-location and data-ga-label for context.
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
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return null
}
