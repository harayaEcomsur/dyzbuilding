'use client'
import { gtagEvent } from '@/lib/gtag'

const DEFAULT_MSG = {
  es: 'Hola, me interesa cotizar un proyecto de climatización o refrigeración comercial. ¿Podrían contactarme?',
  en: 'Hello, I am interested in getting a quote for a commercial HVAC or refrigeration project. Could you contact me?',
}

const SERVICE_MSG_ES = [
  'Hola, me interesa cotizar un sistema de climatización comercial / VRF. ¿Podrían contactarme?',
  'Hola, me interesa cotizar un proyecto de refrigeración comercial. ¿Podrían contactarme?',
  'Hola, me interesa cotizar un sistema de ventilación y extracción. ¿Podrían contactarme?',
  'Hola, me interesa un plan de mantenimiento preventivo para equipos de climatización. ¿Podrían contactarme?',
  'Hola, me interesa cotizar un proyecto llave en mano de climatización. ¿Podrían contactarme?',
  'Hola, me interesa un análisis operacional de mi sistema VRV/VRF. ¿Podrían contactarme?',
  'Hola, me interesa una evaluación de eficiencia energética para mi sistema HVAC. ¿Podrían contactarme?',
  'Hola, me interesa asesoría de ingeniería HVAC para mi proyecto. ¿Podrían contactarme?',
]

const SERVICE_MSG_EN = [
  'Hello, I am interested in getting a quote for a commercial HVAC / VRF system. Could you contact me?',
  'Hello, I am interested in getting a quote for a commercial refrigeration project. Could you contact me?',
  'Hello, I am interested in a ventilation and extraction system quote. Could you contact me?',
  'Hello, I am interested in a preventive maintenance plan for HVAC equipment. Could you contact me?',
  'Hello, I am interested in a turnkey HVAC project quote. Could you contact me?',
  'Hello, I am interested in a VRV/VRF operational analysis. Could you contact me?',
  'Hello, I am interested in an HVAC energy efficiency assessment. Could you contact me?',
  'Hello, I am interested in HVAC engineering consultancy for my project. Could you contact me?',
]

const SECTOR_MSG_ES = [
  'Hola, tengo un proyecto de climatización para retail o centro comercial. ¿Podrían contactarme?',
  'Hola, tengo un proyecto de climatización o ventilación industrial / minería. ¿Podrían contactarme?',
  'Hola, tengo un proyecto de climatización VRF para un hotel. ¿Podrían contactarme?',
  'Hola, tengo un proyecto de climatización de precisión para data center. ¿Podrían contactarme?',
  'Hola, tengo un proyecto de refrigeración industrial para agroindustria o frigorífico. ¿Podrían contactarme?',
]

const SECTOR_MSG_EN = [
  'Hello, I have a commercial HVAC project for retail or a shopping center. Could you contact me?',
  'Hello, I have an industrial / mining HVAC or ventilation project. Could you contact me?',
  'Hello, I have a VRF HVAC project for a hotel. Could you contact me?',
  'Hello, I have a precision cooling project for a data center. Could you contact me?',
  'Hello, I have an industrial refrigeration project for agro-industry or cold storage. Could you contact me?',
]

function buildWaUrl(waNumber: string, lang: string): { url: string; context: string } {
  try {
    const serviceIdx = sessionStorage.getItem('preselect_service_idx')
    const sectorIdx = sessionStorage.getItem('preselect_sector_idx')
    const msgs = lang === 'en' ? SERVICE_MSG_EN : SERVICE_MSG_ES
    const sectorMsgs = lang === 'en' ? SECTOR_MSG_EN : SECTOR_MSG_ES

    if (serviceIdx !== null) {
      const i = parseInt(serviceIdx)
      const msg = msgs[i] ?? (lang === 'en' ? DEFAULT_MSG.en : DEFAULT_MSG.es)
      return { url: `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, context: `service_${i}` }
    }
    if (sectorIdx !== null) {
      const i = parseInt(sectorIdx)
      const msg = sectorMsgs[i] ?? (lang === 'en' ? DEFAULT_MSG.en : DEFAULT_MSG.es)
      return { url: `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, context: `sector_${i}` }
    }
  } catch {
    // sessionStorage unavailable (SSR or private context)
  }
  const msg = lang === 'en' ? DEFAULT_MSG.en : DEFAULT_MSG.es
  return { url: `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, context: 'default' }
}

export default function WhatsAppButton({ phone, lang = 'es' }: { phone: string; lang?: string }) {
  const digits = phone.replace(/\D/g, '')
  const waNumber = digits.startsWith('56') ? digits : `56${digits}`

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const { url, context } = buildWaUrl(waNumber, lang)
    gtagEvent('whatsapp_clicked', { lang, location: 'floating_button', context })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      href={`https://wa.me/${waNumber}`}
      className="wa-btn"
      aria-label={lang === 'en' ? 'Contact via WhatsApp' : 'Contactar por WhatsApp'}
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}
