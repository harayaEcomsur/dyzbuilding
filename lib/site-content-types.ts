export interface SiteContentEN {
  hero: { eyebrow: string; titulo: string; subtitulo: string }
  nosotros: { titulo: string; p1: string; p2: string }
  servicios: { eyebrow: string; titulo: string; items: Array<{ titulo: string; descripcion: string }> }
  seo: { titulo: string; descripcion: string; keywords: string }
  faq: { eyebrow: string; titulo: string; items: Array<{ pregunta: string; respuesta: string }> }
}

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
  en: SiteContentEN
}

export const defaultEN: SiteContentEN = {
  hero: {
    eyebrow: '20 Years · HVAC · Refrigeration · All Chile',
    titulo: '20 years leading climate engineering in Chile',
    subtitulo: 'Experts in VRF/VRV systems, commercial refrigeration, HVAC energy efficiency, and turnkey projects for industry and commerce.',
  },
  nosotros: {
    titulo: 'Two decades of\nclimate excellence',
    p1: 'D&Z Building is a Chilean company specialized in commercial HVAC and industrial refrigeration with over 20 years of experience. We design, install, and maintain VRF/VRV systems for offices, hotels, and retail across Chile, as an authorized distributor of LG, Samsung, and Gree.',
    p2: 'We work with the leading brands in the sector — LG, Samsung, and Gree — offering comprehensive solutions for residential, commercial, and industrial projects throughout Chile.',
  },
  servicios: {
    eyebrow: 'Technical expertise',
    titulo: 'What we do',
    items: [
      { titulo: 'Commercial HVAC / VRF', descripcion: 'Multi-split, VRF, and fan-coil systems for offices, hotels, retail, and shopping centers.' },
      { titulo: 'Commercial Refrigeration', descripcion: 'Display cases, gondolas, and cold equipment for supermarkets, butchers, and food service.' },
      { titulo: 'Ventilation & Extraction', descripcion: 'HRV systems, industrial extractors, and air renewal for demanding environments.' },
      { titulo: 'Preventive Maintenance', descripcion: 'Periodic maintenance plans, diagnostics, and performance guarantees for all installations.' },
      { titulo: 'Turnkey Projects', descripcion: 'Design, supply, installation, and commissioning. One point of contact from start to finish.' },
      { titulo: 'VRV/VRF Operational Analysis', descripcion: 'Audit of installed systems, data reading, and real performance optimization.' },
      { titulo: 'HVAC Energy Efficiency', descripcion: 'Consumption diagnostics, A+++ equipment selection, and energy efficiency certification.' },
      { titulo: 'Engineering Consultancy', descripcion: 'Detailed engineering, technical specifications, and support for architects and contractors.' },
    ],
  },
  seo: {
    titulo: 'Commercial HVAC and VRF Systems in Chile | D&Z Building',
    descripcion: 'Leading company in commercial HVAC, VRF/VRV systems, and industrial refrigeration in Chile. 20+ years of experience. Authorized distributors of LG, Samsung, and Gree. Free quotation.',
    keywords: 'commercial HVAC Chile, VRF system Chile, VRV system Chile, HVAC company Santiago Chile, commercial refrigeration company, VRF installation Chile, HVAC maintenance companies, turnkey HVAC project, energy efficiency HVAC, industrial HVAC Chile, LG VRF distributor Chile, commercial air conditioning company',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    titulo: 'Commercial HVAC and VRF systems in Chile',
    items: [
      { pregunta: 'What is D&Z Building?', respuesta: 'D&Z Building is a Chilean company specialized in commercial HVAC, VRF/VRV systems, and industrial refrigeration. With over 20 years of experience, we offer design, installation, maintenance, and turnkey projects for companies throughout Chile.' },
      { pregunta: 'What is a VRF or VRV system?', respuesta: 'VRF (Variable Refrigerant Flow) and VRV (Variable Refrigerant Volume) are multi-zone HVAC systems that allow temperature control across multiple areas with a single outdoor unit. Ideal for commercial buildings, hotels, and offices due to their energy efficiency and flexibility.' },
      { pregunta: 'What areas of Chile does D&Z Building serve?', respuesta: 'D&Z Building has nationwide coverage in Chile, based in Santiago. We handle HVAC and commercial refrigeration projects in the Metropolitan Region and throughout the country.' },
      { pregunta: 'Which HVAC brands does D&Z Building distribute?', respuesta: 'D&Z Building is an authorized distributor of LG, Samsung, and Gree in Chile. These brands lead the VRF/VRV systems and commercial HVAC market.' },
      { pregunta: 'Do you offer preventive maintenance for VRF systems?', respuesta: 'Yes. D&Z Building offers preventive maintenance plans for VRF, VRV, commercial air conditioning, and industrial refrigeration systems, including diagnostics, cleaning, and performance optimization.' },
      { pregunta: 'How much does a VRF system cost in Chile?', respuesta: 'The cost of a VRF system depends on building size, number of zones, equipment brand, and installation complexity. D&Z Building provides free personalized quotations after evaluating your project.' },
      { pregunta: 'What is the difference between VRF and traditional split air conditioning?', respuesta: 'A traditional split system conditions one or a few areas with independent units. A VRF system connects multiple zones to a single outdoor unit, offering better energy efficiency and individual zone control — ideal for medium and large commercial buildings.' },
      { pregunta: 'How do I request a commercial HVAC quotation?', respuesta: 'You can request a free quotation by filling out the contact form at dyzbuilding.cl, emailing contacto@dyzbuilding.cl, or calling the phone number listed on the website. Our team responds during business hours, Monday through Friday.' },
    ],
  },
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
  en: defaultEN,
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

function normalizeEN(en?: Partial<SiteContentEN> | null): SiteContentEN {
  const svcs = en?.servicios
  const faqEN = en?.faq
  return {
    hero: {
      eyebrow: en?.hero?.eyebrow ?? defaultEN.hero.eyebrow,
      titulo: en?.hero?.titulo ?? defaultEN.hero.titulo,
      subtitulo: en?.hero?.subtitulo ?? defaultEN.hero.subtitulo,
    },
    nosotros: {
      titulo: en?.nosotros?.titulo ?? defaultEN.nosotros.titulo,
      p1: en?.nosotros?.p1 ?? defaultEN.nosotros.p1,
      p2: en?.nosotros?.p2 ?? defaultEN.nosotros.p2,
    },
    servicios: {
      eyebrow: svcs?.eyebrow ?? defaultEN.servicios.eyebrow,
      titulo: svcs?.titulo ?? defaultEN.servicios.titulo,
      items: Array.isArray(svcs?.items) && svcs.items.length > 0
        ? svcs.items.map((item, i) => ({
            titulo: item?.titulo ?? defaultEN.servicios.items[i]?.titulo ?? '',
            descripcion: item?.descripcion ?? defaultEN.servicios.items[i]?.descripcion ?? '',
          }))
        : defaultEN.servicios.items,
    },
    seo: {
      titulo: en?.seo?.titulo ?? defaultEN.seo.titulo,
      descripcion: en?.seo?.descripcion ?? defaultEN.seo.descripcion,
      keywords: en?.seo?.keywords ?? defaultEN.seo.keywords,
    },
    faq: {
      eyebrow: faqEN?.eyebrow ?? defaultEN.faq.eyebrow,
      titulo: faqEN?.titulo ?? defaultEN.faq.titulo,
      items: Array.isArray(faqEN?.items) && faqEN.items.length > 0
        ? faqEN.items.map((item, i) => ({
            pregunta: item?.pregunta ?? defaultEN.faq.items[i]?.pregunta ?? '',
            respuesta: item?.respuesta ?? defaultEN.faq.items[i]?.respuesta ?? '',
          }))
        : defaultEN.faq.items,
    },
  }
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
    en: normalizeEN((data as Record<string, unknown>)?.en as Partial<SiteContentEN> | undefined),
  }
}
