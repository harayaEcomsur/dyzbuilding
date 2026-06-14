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
    titulo: 'Sobre nosotros',
    p1: 'D&Z Building es una empresa especializada en climatización y refrigeración con más de 20 años de experiencia en el mercado chileno.',
    p2: 'Trabajamos con las principales marcas del sector — LG, Samsung y Gree — ofreciendo soluciones integrales para proyectos residenciales, comerciales e industriales en todo Chile.',
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
    if (val && typeof val === 'object' && !Array.isArray(val) && typeof base[key] === 'object') {
      result[key] = deepMerge(base[key] as object, val as object) as T[typeof key]
    } else if (val !== undefined) {
      result[key] = val as T[typeof key]
    }
  }
  return result
}
