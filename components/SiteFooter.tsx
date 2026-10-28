import Link from 'next/link'
import Image from 'next/image'

const CREDIT = {
  es: 'Sitio por HarayaDev',
  en: 'Site by HarayaDev',
}

export default function SiteFooter({ lang, padTabbar }: { lang: 'es' | 'en'; padTabbar?: boolean }) {
  const home = lang === 'en' ? '/en' : '/'

  return (
    <footer className={padTabbar ? 'sp-footer sp-footer-pad-tabbar' : 'sp-footer'}>
      <Link href={home} style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
      </Link>
      <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
        © {new Date().getFullYear()} D&amp;Z Building SpA
        {' · '}
        <a
          href="https://haraya.dev"
          target="_blank"
          rel="noopener"
          className="sp-footer-credit"
          style={{ color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit', textTransform: 'none' }}
        >
          {CREDIT[lang]}
        </a>
      </span>
    </footer>
  )
}
