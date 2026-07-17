'use client'
import { useRef, useEffect } from 'react'
import { gtagEvent } from '@/lib/gtag'

type Props = Omit<React.ComponentProps<'section'>, 'ref'>

export default function RevealSection({ children, className = '', ...rest }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-in')
      return
    }
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.classList.add('reveal-in')
        if (rest.id) gtagEvent('section_viewed', { section_id: rest.id })
        obs.disconnect()
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className={`reveal-start ${className}`} {...rest}>
      {children}
    </section>
  )
}
