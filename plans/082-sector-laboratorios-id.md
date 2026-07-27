# Plan 082 — ES Sector `/sectores/laboratorios-centros-id/`

Written against commit: `1f99a44`

## Why this matters

Laboratories and R&D centers have the most demanding and differentiated HVAC requirements of any commercial sector: fume hood exhaustion, controlled cleanroom environments, negative pressure containment, and strict temperature/humidity stability. Key queries: "climatización laboratorios Chile", "HVAC laboratorios farmacéuticos Chile", "ventilación campanas extractoras Chile", "presión negativa laboratorios bioseguridad". High-margin clients include: CROs (contract research organizations), university research labs, food quality labs (SEREMI-licensed), veterinary labs, and petrochemical analysis labs.

## Scope

**Files to create:** `app/sectores/laboratorios-centros-id/page.tsx`
**Files to modify:** `app/sitemap.ts`
**Files NOT to touch:** `app/globals.css`, any EN files, admin routes.

## Reference files

1. ES sector structure (read in full): `.claude/worktrees/agent-ad64d37477ac429dd/app/sectores/mineria/page.tsx`

## CSS note

Use only existing classes. Inline styles for stats strip, FAQ items. `<nav className="sp-topnav">` — NEVER bare `<nav>`.

## Implementation

### Metadata

```tsx
export const metadata: Metadata = {
  title: 'Climatización y Ventilación para Laboratorios y Centros de I+D Chile | D&Z Building',
  description:
    'Sistemas HVAC para laboratorios: presión negativa/positiva, ventilación de campanas extractoras, control de humedad ±2% HR, cleanrooms ISO 14644 y cumplimiento MINSAL DS 594 y resolución 510/99.',
  alternates: {
    canonical: `${siteUrl}/sectores/laboratorios-centros-id/`,
    languages: {
      es: `${siteUrl}/sectores/laboratorios-centros-id/`,
      en: `${siteUrl}/en/sectors/laboratories/`,
    },
  },
  openGraph: {
    title: 'HVAC para Laboratorios Chile — Presión Negativa, Cleanrooms, Campanas Extractoras',
    description:
      'Diseño e instalación de sistemas de climatización y ventilación para laboratorios de análisis, I+D farmacéutico, laboratorios de bioseguridad y salas limpias en Chile.',
    url: `${siteUrl}/sectores/laboratorios-centros-id/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}
```

### Page structure

Follow ES mining sector structure exactly. Sections:
1. `sp-topnav` nav
2. `sp-hero` with breadcrumb (Inicio › Sectores › Laboratorios y Centros de I+D)
3. `sp-aplic-grid` / `sp-aplic-item` — 6 APLICACIONES
4. Stats strip (4 valores inline styles)
5. Mid-section CTA
6. FAQ (6 items inline styles)
7. `sp-cta-bar`
8. `sp-footer`

### APLICACIONES array (6 items)

```tsx
const APLICACIONES = [
  {
    titulo: 'Ventilación de Campanas Extractoras',
    subtitulo: 'ANSI/ASHRAE 110 · Caudal mínimo 0,5 m/s en la cara',
    desc: 'Las campanas de laboratorio (chemical fume hoods) requieren sistemas de extracción con caudal variable (VAV) para mantener la velocidad facial mínima de 0,5 m/s independiente de la posición del sash. D&Z Building diseña los ductos de extracción en acero inoxidable o PVC antisolvente según los agentes manejados, los ventiladores de extracción con materiales resistentes a ácidos (polipropileno o fibra de vidrio), y el aire de reposición (make-up air) calefaccionado o enfriado para compensar el volumen extraído sin crear corrientes sobre la campana.',
  },
  {
    titulo: 'Control de Presión Diferencial',
    subtitulo: 'Laboratorios BSL-2/3 · Presión negativa −12,5 Pa',
    desc: 'Los laboratorios de bioseguridad nivel 2 y 3 (BSL-2/3) deben mantenerse en presión negativa respecto a los corredores, evitando la fuga de bioaerosoles al exterior. D&Z Building instala sistemas de control de presión diferencial con transductores de precisión (±0,5 Pa de resolución), controladores DDC y válvulas de caudal variable de respuesta rápida (<2 segundos). El sistema mantiene la cascada de presiones (corredor → ante-sala → laboratorio) conforme a CDC/NIH BMBL 6ª edición y verifica la integridad con pruebas de humo (smoke pencil).',
  },
  {
    titulo: 'Salas Limpias (Cleanrooms)',
    subtitulo: 'ISO 14644-1 · Clase ISO 5–8 · 20–600 ACH',
    desc: 'Las salas limpias para fabricación farmacéutica, envasado estéril, y electrónica de precisión requieren control simultáneo de partículas, temperatura (±0,5°C), humedad relativa (±2% HR), y presión diferencial. D&Z Building diseña el sistema de recirculación con filtros HEPA H14 (eficiencia 99,995%), las unidades manejadoras de aire con deshumidificación por enfriamiento + rehumidificación eléctrica para control fino, y el layout de los difusores de flujo laminar unidireccional (unidirectional airflow). El diseño sigue los estándares ISO 14644-1 e ISPEbuenas prácticas de fabricación (GMP).',
  },
  {
    titulo: 'Control de Temperatura y Humedad',
    subtitulo: '±0,5°C · ±2% HR · Laboratorios de calibración y metereología',
    desc: 'Los laboratorios de calibración (acreditados por INN o ENAC), ensayos de materiales (IDIEM), y estaciones meteorológicas requieren control de temperatura de ±0,5°C y humedad relativa de ±2% HR durante 24/7/365. D&Z Building utiliza unidades de precisión (CRAC/CRAH units o unidades de proceso para mayor superficie), con sistemas redundantes N+1 para garantizar continuidad operacional. La instalación incluye monitoreo continuo con sensores calibrados trazables al Sistema Internacional y registro de datos conforme a NCh ISO 17025.',
  },
  {
    titulo: 'Extracción de Laboratorios de Química Analítica',
    subtitulo: 'Solventes · Ácidos · Percloro · Escape de emergencia',
    desc: 'Los laboratorios que trabajan con solventes inflamables (etanol, acetona, hexano) o ácidos concentrados (sulfúrico, nítrico, perclórico) requieren extractores antideflagrantes (prueba de explosión) con materiales resistentes a la corrosión. D&Z Building diseña los sistemas conforme a NFPA 45 (laboratorios con líquidos inflamables): ductos de PVC o polipropileno para ácidos, ductos de acero inox 316 para solventes halogenados, separación de corrientes de extracción incompatibles (no mezclar ácidos con solventes en el mismo ducto), y neutralizadores o sistemas de tratamiento de gases antes de la descarga al exterior.',
  },
  {
    titulo: 'Laboratorios de Análisis de Alimentos (SEREMI)',
    subtitulo: 'HACCP · Control de contaminación cruzada · Flujo unidireccional',
    desc: 'Los laboratorios de análisis microbiológico y fisicoquímico de alimentos, acreditados por el SEREMI de Salud para emitir certificados oficiales, deben cumplir la resolución MINSAL 510/99 de laboratorios clínicos y ambientales. D&Z Building diseña la ventilación para separar las zonas de "sucio" (recepción de muestras, preparación) y "limpio" (análisis microbiológico, medios de cultivo) mediante presiones diferenciales y un flujo unidireccional desde limpio a sucio. Los sistemas incluyen autoclave con extracción independiente, zona de lavado con extracción de vapores y cámara de cultivo (incubadora de 37°C) con control de temperatura independiente.',
  },
]
```

### Stats strip (4 valores)

```tsx
const STATS = [
  { valor: 'ISO 14644', etiqueta: 'Estándar internacional para clasificación de salas limpias' },
  { valor: '−12,5 Pa', etiqueta: 'Presión negativa mínima para laboratorios BSL-2/3' },
  { valor: '0,5 m/s', etiqueta: 'Velocidad facial mínima en campana extractora (ASHRAE 110)' },
  { valor: '±0,5°C', etiqueta: 'Precisión de control en laboratorios de calibración' },
]
```

### FAQ (6 items)

```tsx
const FAQ = [
  {
    pregunta: '¿Cuántos cambios de aire por hora necesita un laboratorio BSL-2?',
    respuesta: 'Un laboratorio de bioseguridad nivel 2 (BSL-2) requiere un mínimo de 6–12 cambios de aire por hora (ACH) de ventilación mecánica, sin recirculación del aire hacia otras zonas del edificio. Las directrices CDC/NIH BMBL 6ª edición recomiendan 10–12 ACH para laboratorios de patógenos. Para laboratorios BSL-3, el mínimo es 12–15 ACH con 100% de extracción directa al exterior (sin recirculación) y filtración HEPA en el escape. D&Z Building calcula los ACH según la carga de contaminantes, el número de campanas, y la superficie del laboratorio, no solo por el nivel de bioseguridad.',
  },
  {
    pregunta: '¿Qué regulación chilena aplica a la ventilación de laboratorios?',
    respuesta: 'La ventilación de laboratorios en Chile está regida por varias normas simultáneas: DS 594 (MINSAL) para condiciones de trabajo generales, incluyendo concentraciones máximas de contaminantes en el aire del trabajo; Resolución MINSAL 510/99 para laboratorios clínicos y ambientales; NCh 1993 para ventilación general; y NFPA 45 para laboratorios con líquidos inflamables (referenciada por Bomberos). Para laboratorios farmacéuticos que fabrican o controlan medicamentos, aplica además el Manual de Buenas Prácticas de Manufactura (BPM) del ISP. D&Z Building prepara el informe de cumplimiento DS 594 y la memoria de cálculo de ventilación para la resolución sanitaria.',
  },
  {
    pregunta: '¿Puedo recircular el aire de un laboratorio para ahorrar energía?',
    respuesta: 'Depende del tipo de laboratorio y los agentes manejados. Para laboratorios de bioseguridad BSL-2/3, laboratorios con solventes inflamables o agentes carcinogénicos, y cualquier área con campanas extractoras activas, la recirculación está prohibida: el 100% del aire debe extraerse al exterior. Para laboratorios de electrónica, metereología o análisis físico sin agentes peligrosos, la recirculación con filtros HEPA (para partículas) y carbón activado (para COVs) puede ser aceptable y lograr ahorros de 30–50% en energía de climatización. D&Z Building evalúa caso a caso según la ficha de seguridad (SDS) de los productos utilizados.',
  },
  {
    pregunta: '¿Qué es un sistema VAV y por qué se usa en ventilación de laboratorios?',
    respuesta: 'VAV (Variable Air Volume) es un sistema que varía el caudal de aire según la demanda en tiempo real, en lugar de operar siempre a caudal máximo (CAV = Constant Air Volume). En laboratorios, el VAV es esencial para las campanas extractoras: cuando el sash (vidrío deslizante) baja, la campana necesita menos extracción para mantener la velocidad facial de 0,5 m/s; si el VAV fuerza el caudal máximo, el exceso crea turbulencia que contamina la campana. Los sistemas VAV para laboratorios incluyen sensores de sash position, controladores de caudal por caja VAV, y un controlador maestro que coordina la extracción de todas las campanas del laboratorio con el sistema de make-up air.',
  },
  {
    pregunta: '¿Cuánto cuesta instalar HVAC en un laboratorio de 200 m²?',
    respuesta: 'El costo de HVAC para un laboratorio de 200 m² varía enormemente según las especificaciones: un laboratorio de análisis de alimentos básico puede instalarse por UF 80–150 (≈ CLP 2–4 millones); un laboratorio de química analítica con 4 campanas extractoras y control de presión diferencial, UF 200–400 (≈ CLP 5,2–10,4 millones); un laboratorio BSL-2 con sistema de presión negativa completo, UF 350–600; una sala limpia Clase ISO 7 de 50 m², UF 400–800. Los costos de mantenimiento son más altos que en oficinas: los filtros HEPA, las campanas extractoras y los sistemas de control de presión requieren calibración semestral o anual conforme a la normativa aplicable.',
  },
  {
    pregunta: '¿D&Z Building puede diseñar laboratorios bajo estándar GMP (Buenas Prácticas de Manufactura)?',
    respuesta: 'Sí. D&Z Building tiene experiencia en el diseño HVAC de laboratorios de control de calidad farmacéutico bajo estándar GMP (Buenas Prácticas de Manufactura del ISP), incluyendo salas limpias de clasificación A/B/C/D según EU GMP Annex 1, sistemas de monitoreo continuo de partículas y temperatura con registro conforme a 21 CFR Parte 11 (registros electrónicos), y procedimientos de calificación DQ/IQ/OQ/PQ requeridos para la aprobación del ISP. Los diseños se documentan con memorias de cálculo según ASHRAE 62.1, ISO 14644-4 (diseño de salas limpias) e ISPE Baseline Guide Vol. 3 (Facilities, 2nd edition).',
  },
]
```

### JSON-LD

Service + FAQPage + BreadcrumbList:
- Breadcrumb: Inicio → Sectores → Laboratorios y Centros de I+D
- Service name: "Climatización para Laboratorios y Centros de I+D"

### Component name

```tsx
export default function SectorLaboratoriosPage() { ... }
```

### Sitemap entry

```ts
{
  url: `${siteUrl}/sectores/laboratorios-centros-id/`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
  alternates: {
    languages: {
      es: `${siteUrl}/sectores/laboratorios-centros-id/`,
      en: `${siteUrl}/en/sectors/laboratories/`,
    },
  },
},
```

## Verification

```bash
npx tsc --noEmit
ls app/sectores/laboratorios-centros-id/page.tsx
grep "SectorLaboratoriosPage" app/sectores/laboratorios-centros-id/page.tsx
grep "laboratorios-centros-id" app/sitemap.ts
```

## Escape hatches

- Do NOT modify `app/globals.css`
- `app/sectores/` directory already exists
- CTA link: `/?servicio=ventilacion-industrial#contacto`
- Related: `/sectores/farmaceutica/`, `/sectores/data-centers/`, `/sectores/salud/`
