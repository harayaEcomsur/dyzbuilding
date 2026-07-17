export function gtagEvent(name: string, params: Record<string, unknown> = {}) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') w.gtag('event', name, params)
}
