export interface SiteContent {
  empresa: {
    nombre: string
    email: string
    telefono: string
    web: string
    direccion: string
    horario: string
    rut: string
  }
  hero: {
    eyebrow: string
    titulo: string
    subtitulo: string
  }
  nosotros: {
    titulo: string
    p1: string
    p2: string
  }
  servicios: {
    eyebrow: string
    titulo: string
    items: Array<{ titulo: string; descripcion: string }>
  }
  seo: {
    titulo: string
    descripcion: string
    keywords: string
  }
}

export const defaultContent: SiteContent = {
  empresa: {
    nombre: 'D&Z Building',
    email: 'contacto@dyzbuilding.cl',
    telefono: '+56 9 1234 5678',
    web: 'www.dyzbuilding.cl',
    direccion: 'Santiago, Chile',
    horario: 'Lunes a Viernes 8:30–18:00',
    rut: '76.XXX.XXX-X',
  },
  hero: {
    eyebrow: '20 años · Climatización · Refrigeración · Todo Chile',
    titulo: '20 años liderando la ingeniería climática en Chile',
    subtitulo: 'Expertos en sistemas VRF/VRV, refrigeración comercial, eficiencia energética HVAC y proyectos llave en mano para industria y comercio.',
  },
  nosotros: {
    titulo: 'Dos décadas de\nexcelencia climática',
    p1: 'D&Z Building es una empresa especializada en climatización y refrigeración con más de 20 años de experiencia en el mercado chileno.',
    p2: 'Trabajamos con las principales marcas del sector — LG, Samsung y Gree — ofreciendo soluciones integrales para proyectos residenciales, comerciales e industriales en todo Chile.',
  },
  servicios: {
    eyebrow: 'Especialidades técnicas',
    titulo: 'Lo que hacemos',
    items: [
      { titulo: 'Climatización Comercial / VRF', descripcion: 'Sistemas multi-split, VRF y fan-coils para oficinas, hoteles, locales y centros comerciales.' },
      { titulo: 'Refrigeración Comercial', descripcion: 'Vitrinas, góndolas y equipos de frío para supermercados, carnicerías y gastronomía.' },
      { titulo: 'Ventilación y Extracción', descripcion: 'Sistemas VMC, extractores industriales y renovación de aire para ambientes exigentes.' },
      { titulo: 'Mantenimiento Preventivo', descripcion: 'Planes de mantenimiento periódico, diagnóstico y garantía de rendimiento para toda la instalación.' },
      { titulo: 'Proyectos Llave en Mano', descripcion: 'Diseño, suministro, instalación y puesta en marcha. Un solo interlocutor de inicio a fin.' },
      { titulo: 'Análisis Operacional VRV/VRF', descripcion: 'Auditoría de sistemas instalados, lectura de datos y optimización del rendimiento real.' },
      { titulo: 'Eficiencia Energética HVAC', descripcion: 'Diagnóstico de consumo, selección de equipos A+++ y certificación de eficiencia energética.' },
      { titulo: 'Asesoría de Ingeniería', descripcion: 'Ingeniería de detalle, especificaciones técnicas y soporte para arquitectos y constructoras.' },
    ],
  },
  seo: {
    titulo: 'Climatización Comercial y Sistemas VRF en Chile | D&Z Building',
    descripcion: 'Empresa especialista en climatización comercial, sistemas VRF/VRV y refrigeración industrial en Chile. 20 años de experiencia. Distribuidores oficiales LG, Samsung y Gree. Cotización gratuita.',
    keywords: 'climatización comercial Chile, sistema VRF Chile, sistema VRV Chile, empresa climatización Santiago, refrigeración comercial empresa, instalación VRF empresa Chile, mantención climatización empresas, proyecto HVAC llave en mano, eficiencia energética HVAC, climatización industrial Chile, distribuidor LG VRF Chile, aire acondicionado comercial empresa',
  },
}

export function deepMerge<T extends object>(base: T, override: Partial<T>): T {
  const result = { ...base }
  for (const key in override) {
    const val = override[key]
    if (val === undefined || val === null) continue
    if (typeof val === 'object' && !Array.isArray(val) && typeof base[key] === 'object' && base[key] !== null) {
      result[key] = deepMerge(base[key] as object, val as object) as T[typeof key]
    } else {
      result[key] = val as T[typeof key]
    }
  }
  return result
}

export function normalizeSiteContent(data?: Partial<SiteContent> | null): SiteContent {
  const merged = deepMerge(defaultContent, data ?? {})
  const servicios = merged.servicios ?? defaultContent.servicios

  return {
    ...merged,
    servicios: {
      eyebrow: servicios.eyebrow ?? defaultContent.servicios.eyebrow,
      titulo: servicios.titulo ?? defaultContent.servicios.titulo,
      items: Array.isArray(servicios.items) && servicios.items.length > 0
        ? servicios.items.map((item, i) => ({
            titulo: item?.titulo ?? defaultContent.servicios.items[i]?.titulo ?? '',
            descripcion: item?.descripcion ?? defaultContent.servicios.items[i]?.descripcion ?? '',
          }))
        : defaultContent.servicios.items,
    },
  }
}
