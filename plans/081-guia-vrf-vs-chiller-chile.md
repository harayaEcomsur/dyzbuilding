# Plan 081 — ES Guide `/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`

Written against commit: `1f99a44`

## Why this matters

"VRF vs chiller" is one of the highest-intent comparison queries in commercial HVAC — someone typing this is already evaluating systems for a real project. Key queries: "diferencia VRF chiller Chile", "cuándo usar VRF vs chiller", "VRF o chiller oficinas Chile", "chiller vs multisplit empresas". Captures CFOs, facility managers, and project managers at the decision point.

This guide also links to 3 existing service pages and the VRF pricing guide, creating a strong internal linking hub.

## Scope

**Files to create:** `app/guias/vrf-vs-chiller-cual-elegir-empresa-chile/page.tsx`
**Files to modify:** `app/sitemap.ts`
**Files NOT to touch:** `app/globals.css`, any EN files, admin routes.

## Reference files

1. ES guide structure (read in full): `.claude/worktrees/agent-a1cfbf3cbd67e43cc/app/guias/que-es-un-sistema-vrf/page.tsx`

## CSS note

Use only existing classes. Inline styles for stats strip, tables, FAQ items.

## Implementation

### Metadata

```tsx
export const metadata: Metadata = {
  title: '¿VRF o Chiller? Cómo Elegir el Sistema HVAC para su Empresa Chile | D&Z Building',
  description:
    'Comparación técnica y económica entre sistemas VRF y chiller para empresas chilenas: cuándo usar cada uno, costos de instalación, eficiencia, mantenimiento y casos de uso reales.',
  alternates: {
    canonical: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    languages: {
      es: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    },
  },
  openGraph: {
    title: 'VRF vs Chiller en Chile: Guía de Decisión para Empresas',
    description:
      'Cuándo VRF supera al chiller y viceversa: comparativa por superficie, número de zonas, eficiencia, costo de instalación y mantenimiento para proyectos comerciales e industriales en Chile.',
    url: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}
```

### Page structure

Follow ES VRF guide structure. Sections:
1. `sp-topnav` nav
2. `sp-hero` with breadcrumb (Inicio › Guías › VRF vs Chiller)
3. Intro paragraph
4. CRITERIOS: 4 cards using `sp-aplic-grid` / `sp-aplic-item`
5. COMPARATIVA table (HTML table inline styles — key technical and economic comparison)
6. Stats strip (4 valores)
7. CASOS_DE_USO: 4 cards (cuándo elegir VRF vs cuándo elegir chiller)
8. Mid-article CTA
9. FAQ (6 items)
10. Related guides links
11. `sp-cta-bar`
12. `sp-footer`

### CRITERIOS array (4 items — factores clave de decisión)

```tsx
const CRITERIOS = [
  {
    titulo: 'Superficie y Número de Zonas',
    subtitulo: 'VRF: 200–5.000 m² · Chiller: >3.000 m²',
    desc: 'El VRF es rentable en proyectos de 200 a 5.000 m² con múltiples zonas de control independiente (hasta 64 unidades indoor por sistema en equipos de alta gama). Para superficies mayores (>5.000 m²) con grandes espacios abiertos (salas de conferencia de 1.000 m², plantas industriales), el chiller con AHUs centralizada puede ofrecer menor costo total de instalación. En proyectos mixtos (una planta de oficinas con salas abiertas y oficinas privadas), es común usar un chiller para las zonas abiertas y VRF para las privadas.',
  },
  {
    titulo: 'Flexibilidad de Zonificación',
    subtitulo: 'VRF: control independiente por zona · Chiller: zonificación de AHU',
    desc: 'El VRF tiene una ventaja clara cuando cada zona necesita control totalmente independiente (temperatura diferente, horarios distintos, facturación separada por arrendatario). Cada unidad indoor VRF es una zona independiente. El chiller requiere una AHU por zona o cajas VAV (Variable Air Volume) para zonificación, que añaden complejidad y costo. En hoteles con cientos de habitaciones, el VRF es imbatible: cada habitación es una zona independiente sin ductos.',
  },
  {
    titulo: 'Eficiencia Energética Estacional',
    subtitulo: 'VRF: mejor en cargas parciales · Chiller: mejor en plena carga',
    desc: 'El VRF inverter es más eficiente que el chiller convencional a cargas parciales (30–70% de la capacidad nominal), que es el rango en que operan la mayoría de los edificios de oficinas el 80% del tiempo. El chiller de alta eficiencia (centrifugo con VSD) supera al VRF a plena carga sostenida (plantas de manufactura, data centers con carga constante). El VRF de recuperación de calor tiene una ventaja adicional cuando simultáneamente hay zonas que enfrían y zonas que calientan, lo que es el caso en la mayoría de los edificios de oficinas en Chile durante 6–7 meses al año.',
  },
  {
    titulo: 'Costo de Instalación y Mantenimiento',
    subtitulo: 'VRF: menor costo en proyectos medianos · Chiller: economías de escala',
    desc: 'Para proyectos de 500–3.000 m², el VRF tiene un costo de instalación típicamente 15–25% menor que el chiller equivalente, principalmente porque no requiere sala de máquinas, torres de enfriamiento ni sistema hidráulico. Para proyectos grandes (>10.000 m²), el chiller tiene economías de escala que lo hacen competitivo. En términos de mantenimiento, el VRF tiene menor costo anual (sin agua, sin torres, sin tratamiento químico), pero sus componentes de refrigeración (compresores VRF) son más caros de reemplazar que los de un chiller de tornillo.',
  },
]
```

### COMPARATIVA table

| Factor | VRF Inverter | Chiller (agua helada) | Chiller (expansión directa) |
|---|---|---|---|
| Superficie óptima | 200–5.000 m² | >3.000 m² | 500–3.000 m² |
| Número de zonas | Hasta 64 indoor por sistema | Ilimitado (cajas VAV) | Hasta 64 indoor |
| COP a carga parcial (50%) | 4,5–6,0 | 3,5–5,0 | 3,0–4,5 |
| COP a plena carga | 3,5–5,0 | 5,0–7,0 | 3,5–5,0 |
| Requiere sala de máquinas | No | Sí (chiller + torres) | No |
| Sistema hidráulico | No | Sí | No |
| Recuperación de calor | Sí (3 tubos) | Parcial (chiller reversible) | No |
| Costo instalación (por m²) | UF 0,15–0,35 | UF 0,20–0,45 | UF 0,15–0,30 |
| Mantenimiento anual (por m²) | UF 0,02–0,04 | UF 0,04–0,08 | UF 0,03–0,06 |

### Stats strip (4 valores)

```tsx
const STATS = [
  { valor: '64', etiqueta: 'Unidades indoor máximas por sistema VRF de alta gama' },
  { valor: '15–25%', etiqueta: 'Menor costo de instalación VRF vs chiller en 500–3.000 m²' },
  { valor: 'COP 6,0', etiqueta: 'Eficiencia VRF recuperación de calor a carga parcial' },
  { valor: '80%', etiqueta: 'Del tiempo un edificio opera entre 30–70% de capacidad' },
]
```

### CASOS_DE_USO array (4 items)

```tsx
const CASOS_DE_USO = [
  {
    titulo: 'Elige VRF cuando...',
    subtitulo: 'Oficinas · Hoteles · Clínicas · Retail · Proyectos medianos',
    desc: 'El VRF es la mejor opción para: (1) Edificios de oficinas de 500–5.000 m² con múltiples zonas de control; (2) Hoteles de cualquier tamaño (una unidad indoor = una habitación = una zona independiente); (3) Clínicas y hospitales medianos donde cada consultorio necesita control independiente; (4) Strip centers y malls pequeños donde se requiere medición por arrendatario; (5) Edificios donde no hay espacio para sala de máquinas o el edificio ya está construido (retrofit es más simple que instalar un sistema hidráulico).',
  },
  {
    titulo: 'Elige Chiller cuando...',
    subtitulo: 'Grandes superficies · Data centers · Plantas industriales · Hospitales grandes',
    desc: 'El chiller supera al VRF en: (1) Plantas de manufactura y bodegas refrigeradas >5.000 m² con carga constante y alta; (2) Data centers de gran escala donde la carga es constante 24/7 y la eficiencia a plena carga es crítica; (3) Hospitales de más de 200 camas donde la centralización simplifica el mantenimiento y la redundancia; (4) Edificios con grandes espacios abiertos (plantas de producción, galpones) que se sirven mejor con AHUs centralizadas; (5) Proyectos donde ya existe infraestructura hidráulica y la ampliación del chiller es más económica.',
  },
  {
    titulo: 'Sistema Híbrido: VRF + Chiller',
    subtitulo: 'La solución cuando ninguno gana por completo',
    desc: 'En edificios mixtos, la solución óptima puede ser un sistema híbrido: chiller para las zonas abiertas de gran volumen (planta principal de un edificio corporativo, áreas de producción) y VRF para las zonas de control fino (oficinas privadas, salas de juntas, gerencias). D&Z Building diseña sistemas híbridos con integración BMS para gestión centralizada de ambos subsistemas, logrando el óptimo entre costo de instalación, eficiencia energética y flexibilidad de zonificación.',
  },
  {
    titulo: 'El Factor Determinante: el Estudio de Carga',
    subtitulo: 'No existe una respuesta correcta sin cálculo de ingeniería',
    desc: 'La decisión VRF vs chiller no puede tomarse solo por reglas generales. D&Z Building realiza el estudio de carga térmica del proyecto (según ASHRAE 14 o Manual J para proyectos de menor escala), que determina: pico de demanda por zona, perfil horario de carga, cargas latentes vs. sensibles, y requerimientos de ventilación. Con estos datos, se comparan las opciones en términos de costo total de ciclo de vida (CAPEX + OPEX en 15 años) y se presenta la recomendación fundamentada.',
  },
]
```

### FAQ (6 items)

```tsx
const FAQ = [
  {
    pregunta: '¿Por qué los hoteles prefieren VRF en lugar de chiller?',
    respuesta: 'En un hotel, cada habitación es una zona de control independiente con ocupación variable e impredecible. El VRF permite que cada habitación tenga su propio termostato (unidad indoor) con control de temperatura, horario de apagado automático al salir el huésped, y modo ahorro de energía cuando la habitación está vacía (verificado por la llave magnética). El chiller con AHU central enviaría la misma temperatura a todas las habitaciones de un piso, lo cual es inaceptable en hotelería. Para un hotel de 100 habitaciones, el VRF instala 100 unidades indoor; el chiller necesitaría 100 cajas VAV y sus controles, con mayor costo y complejidad.',
  },
  {
    pregunta: '¿El VRF es confiable para un data center?',
    respuesta: 'El VRF no es la primera opción para data centers de misión crítica (Tier III/IV) por dos razones: (1) La longitud máxima del circuito de refrigerante limita la distancia entre las unidades outdoor e indoor, lo que puede ser un problema en data centers grandes; (2) Los data centers necesitan enfriamiento continuo 24/7 con redundancia N+1 o N+2, lo que se logra más fácilmente con chillers de agua que tienen componentes de respaldo independientes. Para salas de servidores pequeñas (<100 kW de carga IT) en edificios de oficinas, el VRF es perfectamente adecuado. Para data centers de más de 500 kW, D&Z Building recomienda evaluar chillers de agua o CRAC/CRAH units.',
  },
  {
    pregunta: '¿Cuánto más cuesta instalar un chiller que un VRF para una oficina de 2.000 m²?',
    respuesta: 'Para una oficina de 2.000 m² en Santiago, el sistema VRF tiene un costo típico de UF 300–600 (≈ CLP 7,8–15,6 millones). El sistema chiller equivalente (chiller de agua fría + AHUs + red hidráulica + torres de enfriamiento o condensador remoto) costaría UF 400–800 (≈ CLP 10,4–20,8 millones), incluyendo la sala de máquinas. La diferencia de 15–30% se debe principalmente a la red hidráulica y al espacio para sala de máquinas. Sin embargo, el chiller puede ofrecer mayor eficiencia a plena carga y menor costo de mantenimiento a largo plazo en superficies grandes.',
  },
  {
    pregunta: '¿El VRF con recuperación de calor puede calentar y enfriar simultáneamente?',
    respuesta: 'Sí. El VRF de 3 tubos (recuperación de calor) permite que algunas unidades indoor estén en modo frío mientras otras están en modo calor, simultáneamente. El calor rechazado por las zonas que enfrían se transfiere a las zonas que calientan, en lugar de disiparlo al exterior. En un edificio de oficinas de orientación mixta en Santiago durante el otoño (marzo–junio), las oficinas orientadas al norte reciben radiación solar y necesitan frío, mientras que las del sur pueden necesitar calefacción. El VRF de recuperación de calor resuelve esto sin consumo eléctrico adicional por la parte del calor transferido.',
  },
  {
    pregunta: '¿Los sistemas VRF y chiller son compatibles con BMS?',
    respuesta: 'Ambas tecnologías son compatibles con BMS (Building Management System) mediante protocolos estándar. Los sistemas VRF de las principales marcas (Daikin, Mitsubishi, LG, Samsung, Gree) se integran via BACnet, Modbus o pasarelas propietarias. Los chillers se integran naturalmente vía BACnet o LonWorks. D&Z Building diseña la integración BMS en la etapa de proyecto, asegurando que los setpoints, horarios y alarmas se gestionen desde un único punto de control, independientemente de si el sistema es VRF, chiller, o híbrido.',
  },
  {
    pregunta: '¿Puedo reemplazar un chiller existente por VRF?',
    respuesta: 'Sí, es posible y es un retrofit común en edificios de oficinas construidos entre 1990 y 2010 que tienen chillers de baja eficiencia (COP 2,5–3,0). D&Z Building evalúa si la estructura de techos soporta las unidades outdoor VRF, si la distribución eléctrica existente puede adaptarse, y si las unidades indoor se pueden instalar aprovechando los ductos existentes (VRF "ducted" tipo plenun) o si se necesitan nuevas unidades tipo cassette o pared. El retiro del chiller, las torres y la red hidráulica libera espacio que puede recuperarse como área útil.',
  },
]
```

### JSON-LD

Article + FAQPage + BreadcrumbList:
- Breadcrumb: Inicio → Guías → VRF vs Chiller
- Article headline: "¿VRF o Chiller? Cómo Elegir el Sistema HVAC para su Empresa en Chile"

### Component name

```tsx
export default function GuiaVrfVsChillerPage() { ... }
```

### Sitemap entry

```ts
{
  url: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
  alternates: {
    languages: {
      es: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
    },
  },
},
```

## Verification

```bash
npx tsc --noEmit
ls app/guias/vrf-vs-chiller-cual-elegir-empresa-chile/page.tsx
grep "GuiaVrfVsChillerPage" app/guias/vrf-vs-chiller-cual-elegir-empresa-chile/page.tsx
grep "vrf-vs-chiller" app/sitemap.ts
```

## Escape hatches

- Do NOT modify `app/globals.css`
- The `app/guias/` directory exists
- No EN counterpart planned (Spanish-language focus for this guide)
- Mid-article CTA: `/?servicio=climatizacion-vrf#contacto`
- Related guides: `/guias/que-es-un-sistema-vrf/`, `/guias/precio-sistema-vrf-chile/`, `/guias/eficiencia-energetica-hvac-empresas-chile/`, `/guias/como-elegir-sistema-hvac-empresa-chile/`
