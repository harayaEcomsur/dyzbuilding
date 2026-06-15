'use client'
import { useEffect, useRef } from 'react'

const ACCENT: [number, number, number] = [200, 168, 75]
const COUNT = 200
const TAIL = 0.92

interface Particle {
  x: number; y: number; life: number; maxLife: number
  speed: number; size: number; alpha: number
}

function vectorField(x: number, y: number, W: number, H: number, t: number) {
  const nx = x / W, ny = y / H
  const a1 = Math.atan2(ny - 0.35, nx - 0.72) + t * 0.22
  const r1 = Math.hypot(nx - 0.72, ny - 0.35)
  const s1 = 1.1 / (1 + r1 * 5)
  const a2 = Math.atan2(ny - 0.68, nx - 0.30) - t * 0.16
  const r2 = Math.hypot(nx - 0.30, ny - 0.68)
  const s2 = 0.7 / (1 + r2 * 6)
  const wave = Math.sin(ny * Math.PI * 2.5 + t * 0.8) * 0.38
  return {
    vx: Math.cos(a1) * s1 + Math.cos(a2) * s2 + wave + 0.12,
    vy: Math.sin(a1) * s1 + Math.sin(a2) * s2 + Math.sin(nx * Math.PI * 3 + t * 0.5) * 0.12,
  }
}

function mkParticle(W: number, H: number): Particle {
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    life: 0,
    maxLife: 120 + Math.random() * 180,
    speed: 0.55 + Math.random() * 0.9,
    size: 0.8 + Math.random() * 1.6,
    alpha: 0.18 + Math.random() * 0.38,
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const ctx = el.getContext('2d')
    if (!ctx) return

    // Bind to non-nullable variables so closures below don't have null issues
    const cvs: HTMLCanvasElement = el
    const c: CanvasRenderingContext2D = ctx

    let W = 0, H = 0
    let particles: Particle[] = []
    let animId = 0
    let t = 0
    let drawing = false

    function resize() {
      W = cvs.offsetWidth
      H = cvs.offsetHeight
      cvs.width = W
      cvs.height = H
    }

    function spawn() {
      particles = Array.from({ length: COUNT }, () => mkParticle(W, H))
    }

    function loop() {
      animId = requestAnimationFrame(loop)
      t += 0.005

      c.globalCompositeOperation = 'source-over'
      c.fillStyle = `rgba(10,10,12,${1 - TAIL})`
      c.fillRect(0, 0, W, H)
      c.globalCompositeOperation = 'screen'

      const [r, g, b] = ACCENT
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const { vx, vy } = vectorField(p.x, p.y, W, H, t)
        const px = p.x, py = p.y
        p.x += vx * p.speed * (W / 1440)
        p.y += vy * p.speed * (W / 1440)
        p.life++

        const lr = p.life / p.maxLife
        const fade = lr < 0.1 ? lr / 0.1 : lr > 0.85 ? (1 - lr) / 0.15 : 1

        c.strokeStyle = `rgba(${r},${g},${b},${p.alpha * fade})`
        c.lineWidth = p.size
        c.beginPath()
        c.moveTo(px, py)
        c.lineTo(p.x, p.y)
        c.stroke()

        if (p.life >= p.maxLife || p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
          particles[i] = mkParticle(W, H)
        }
      }
      c.globalCompositeOperation = 'source-over'
    }

    function start() {
      if (drawing) return
      drawing = true
      loop()
    }

    function stop() {
      cancelAnimationFrame(animId)
      drawing = false
    }

    const onResize = () => { resize(); spawn() }
    window.addEventListener('resize', onResize)

    const section = document.getElementById('inicio')
    let obs: IntersectionObserver | null = null
    if (section) {
      obs = new IntersectionObserver(entries => {
        entries.forEach(e => { e.isIntersecting ? start() : stop() })
      }, { threshold: 0.05 })
      obs.observe(section)
    }

    resize()
    spawn()
    start()

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
      obs?.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
