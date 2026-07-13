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
  faq: {
    eyebrow: string
    titulo: string
    items: Array<{ pregunta: string; respuesta: string }>
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
    rut: '78.353.685-4',
  },
  hero: {
    eyebrow: '20 años · Climatización · Refrigeración · Todo Chile',
    titulo: '20 años liderando la ingeniería climática en Chile',
    subtitulo: 'Expertos en sistemas VRF/VRV, refrigeración comercial, eficiencia energética HVAC y proyectos llave en mano para industria y comercio.',
  },
  nosotros: {
    titulo: 'Dos décadas de\nexcelencia climática',
    p1: 'D&Z Building es una empresa chilena de climatización comercial y refrigeración industrial con más de 20 años de experiencia. Diseña, instala y mantiene sistemas VRF/VRV para oficinas, hoteles y comercio en todo Chile, como distribuidor oficial de LG, Samsung y Gree.',
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
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titulo: 'Climatización comercial y sistemas VRF en Chile',
    items: [
      {
        pregunta: '¿Qué es D&Z Building?',
        respuesta: 'D&Z Building es una empresa chilena especializada en climatización comercial, sistemas VRF/VRV y refrigeración industrial. Con más de 20 años de experiencia, ofrece diseño, instalación, mantención y proyectos llave en mano para empresas en todo Chile.',
      },
      {
        pregunta: '¿Qué es un sistema VRF o VRV?',
        respuesta: 'VRF (Variable Refrigerant Flow) y VRV (Variable Refrigerant Volume) son sistemas de climatización multi-zona que permiten controlar la temperatura de varios ambientes con una sola unidad exterior. Son ideales para edificios comerciales, hoteles y oficinas por su eficiencia energética y flexibilidad.',
      },
      {
        pregunta: '¿En qué zonas de Chile opera D&Z Building?',
        respuesta: 'D&Z Building tiene cobertura nacional en Chile, con base en Santiago. Atiende proyectos de climatización y refrigeración comercial en la Región Metropolitana y regiones del país.',
      },
      {
        pregunta: '¿Qué marcas de climatización comercial distribuye D&Z Building?',
        respuesta: 'D&Z Building es distribuidor oficial de LG, Samsung y Gree en Chile. Estas marcas lideran el mercado de sistemas VRF/VRV y equipos de climatización comercial.',
      },
      {
        pregunta: '¿Ofrecen mantención preventiva de sistemas VRF?',
        respuesta: 'Sí. D&Z Building ofrece planes de mantención preventiva para sistemas VRF, VRV, aire acondicionado comercial y refrigeración industrial, incluyendo diagnóstico, limpieza y optimización del rendimiento.',
      },
      {
        pregunta: '¿Cuánto cuesta instalar un sistema VRF en Chile?',
        respuesta: 'El costo de un sistema VRF depende del tamaño del edificio, número de zonas, marca del equipo y complejidad de la instalación. D&Z Building entrega cotizaciones personalizadas sin costo tras evaluar el proyecto.',
      },
      {
        pregunta: '¿Cuál es la diferencia entre VRF y aire acondicionado split tradicional?',
        respuesta: 'Un sistema split tradicional climatiza uno o pocos ambientes con unidades independientes. Un sistema VRF conecta múltiples zonas a una sola unidad exterior, ofrece mejor eficiencia energética y control individual por ambiente, ideal para edificios comerciales medianos y grandes.',
      },
      {
        pregunta: '¿Cómo solicitar una cotización de climatización comercial?',
        respuesta: 'Puede solicitar una cotización gratuita completando el formulario de contacto en dyzbuilding.cl, escribiendo a contacto@dyzbuilding.cl o llamando al teléfono publicado en el sitio. El equipo responde en horario hábil de lunes a viernes.',
      },
    ],
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
  const faq = merged.faq ?? defaultContent.faq

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
    faq: {
      eyebrow: faq.eyebrow ?? defaultContent.faq.eyebrow,
      titulo: faq.titulo ?? defaultContent.faq.titulo,
      items: Array.isArray(faq.items) && faq.items.length > 0
        ? faq.items.map((item, i) => ({
            pregunta: item?.pregunta ?? defaultContent.faq.items[i]?.pregunta ?? '',
            respuesta: item?.respuesta ?? defaultContent.faq.items[i]?.respuesta ?? '',
          }))
        : defaultContent.faq.items,
    },
  }
}
