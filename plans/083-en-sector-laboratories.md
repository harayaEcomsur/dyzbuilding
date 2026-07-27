# Plan 083 — EN Sector `/en/sectors/laboratories/`

Written against commit: `1f99a44`

## Why this matters

EN counterpart to plan 082. International clients (mining companies, pharmaceutical multinationals, food exporters) planning Chilean lab facilities search in English: "laboratory HVAC Chile", "cleanroom design Chile", "fume hood ventilation Chile English", "BSL-2 lab ventilation Chile". This page also serves as a reference for foreign firms seeking D&Z Building's lab credentials.

## Scope

**Files to create:** `app/en/sectors/laboratories/page.tsx`
**Files to modify:** `app/sitemap.ts`
**Files NOT to touch:** `app/globals.css`, any ES files, admin routes.

## Reference files

1. EN sector structure (read in full): `.claude/worktrees/agent-abfd5e039545babfd/app/en/sectors/mining/page.tsx`

## CSS note

Use only existing classes. Inline styles for stats strip, FAQ items. `<nav className="sp-topnav">` — NEVER bare `<nav>`. FAQ field names for EN pages: use `q` and `a` (matching the mining reference).

## Implementation

### Metadata

```tsx
export const metadata: Metadata = {
  title: 'HVAC for Laboratories & R&D Centers Chile | D&Z Building',
  description:
    'Laboratory HVAC systems in Chile: fume hood VAV extraction, negative pressure BSL-2/3, cleanrooms ISO 14644, ±0.5°C precision control, and Chilean DS 594 / MINSAL Resolution 510/99 compliance.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/laboratories/`,
    languages: {
      en: `${siteUrl}/en/sectors/laboratories/`,
      es: `${siteUrl}/sectores/laboratorios-centros-id/`,
    },
  },
  openGraph: {
    title: 'Laboratory HVAC Chile — Cleanrooms, Negative Pressure, Fume Hoods | D&Z Building',
    description:
      'Design and installation of HVAC systems for analytical labs, pharmaceutical R&D, BSL-2/3 biosafety labs, and ISO-class cleanrooms in Chile.',
    url: `${siteUrl}/en/sectors/laboratories/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}
```

### SOLUTIONS array (6 items — EN translation of ES APLICACIONES)

```tsx
const SOLUTIONS = [
  {
    titulo: 'Fume Hood VAV Extraction',
    subtitulo: 'ANSI/ASHRAE 110 · 0.5 m/s minimum face velocity',
    desc: 'Chemical fume hoods require variable air volume (VAV) extraction to maintain minimum face velocity of 0.5 m/s regardless of sash position. D&Z Building designs extraction ducts in stainless steel or solvent-resistant PVC, acid-resistant fans (polypropylene or fiberglass housings), and tempered or cooled make-up air systems to replace extracted volume without creating cross-drafts at the hood face.',
  },
  {
    titulo: 'Differential Pressure Control',
    subtitulo: 'BSL-2/3 labs · −12.5 Pa negative pressure',
    desc: 'BSL-2 and BSL-3 biosafety laboratories must be maintained at negative pressure relative to corridors, preventing bioaerosol escape. D&Z Building installs differential pressure control systems with precision transducers (±0.5 Pa resolution), DDC controllers, and fast-response VAV dampers (<2 seconds). Systems maintain the pressure cascade (corridor → ante-room → lab) per CDC/NIH BMBL 6th edition and verify integrity with smoke pencil testing.',
  },
  {
    titulo: 'ISO-Class Cleanrooms',
    subtitulo: 'ISO 14644-1 · Class ISO 5–8 · 20–600 ACH',
    desc: 'Cleanrooms for pharmaceutical manufacturing, sterile packaging, and precision electronics require simultaneous control of particles, temperature (±0.5°C), relative humidity (±2% RH), and differential pressure. D&Z Building designs recirculation systems with H14 HEPA filters (99.995% efficiency), air handling units with cooling dehumidification and electric rehumidification for fine control, and unidirectional (laminar) airflow diffuser layouts per ISO 14644-1 and ISPE GMP Baseline Guide.',
  },
  {
    titulo: 'Temperature & Humidity Precision Control',
    subtitulo: '±0.5°C · ±2% RH · Calibration labs and testing chambers',
    desc: 'Calibration laboratories (INN/ENAC-accredited), materials testing facilities, and metrology chambers require ±0.5°C and ±2% RH control 24/7/365. D&Z Building uses precision CRAC/CRAH units with N+1 redundancy, continuous monitoring with traceable calibrated sensors, and data logging conformant with NCh ISO 17025 for laboratory accreditation.',
  },
  {
    titulo: 'Chemical & Analytical Lab Extraction',
    subtitulo: 'Solvents · Acids · Perchloric · Emergency purge',
    desc: 'Labs handling flammable solvents (ethanol, acetone, hexane) or concentrated acids (sulfuric, nitric, perchloric) require explosion-proof extraction fans and corrosion-resistant materials. D&Z Building designs systems per NFPA 45: PVC or polypropylene ducts for acids, 316 stainless steel for halogenated solvents, separated incompatible exhaust streams, and scrubbers or neutralizers before exterior discharge.',
  },
  {
    titulo: 'Food Analysis Laboratories (SEREMI-Licensed)',
    subtitulo: 'HACCP · Cross-contamination control · Unidirectional flow',
    desc: 'Microbiological and physicochemical food analysis laboratories licensed by SEREMI de Salud must comply with MINSAL Resolution 510/99. D&Z Building designs ventilation that separates "dirty" zones (sample receipt, preparation) from "clean" zones (microbiological analysis, culture media) via differential pressures and unidirectional airflow from clean to dirty. Systems include autoclave extraction, washroom vapor exhausts, and temperature-controlled incubation chambers.',
  },
]
```

### STATS array (4 items)

```tsx
const STATS = [
  { valor: 'ISO 14644', etiqueta: 'International cleanroom classification standard' },
  { valor: '−12.5 Pa', etiqueta: 'Minimum negative pressure for BSL-2/3 labs' },
  { valor: '0.5 m/s', etiqueta: 'Fume hood face velocity (ASHRAE 110 minimum)' },
  { valor: '±0.5°C', etiqueta: 'Temperature precision in calibration labs' },
]
```

### FAQ (6 items — use `q` and `a` field names matching mining reference)

```tsx
const FAQ = [
  {
    q: 'How many air changes per hour does a BSL-2 laboratory require?',
    a: 'A BSL-2 biosafety laboratory requires a minimum of 6–12 air changes per hour (ACH) of mechanical ventilation with no recirculation to other building zones. CDC/NIH BMBL 6th edition recommends 10–12 ACH for pathogen laboratories. BSL-3 requires 12–15 ACH with 100% direct exterior exhaust and HEPA filtration on the exhaust. D&Z Building calculates ACH based on contaminant load, number of fume hoods, and lab area — not solely on biosafety level.',
  },
  {
    q: 'Can laboratory air be recirculated to save energy?',
    a: 'It depends on the lab type and agents handled. For BSL-2/3 biosafety labs, labs with flammable solvents or carcinogens, and any area with active fume hoods, recirculation is prohibited — 100% of air must be exhausted outdoors. For electronics, metrology, or physical analysis labs with no hazardous agents, recirculation with HEPA (particles) and activated carbon (VOCs) filters can achieve 30–50% HVAC energy savings. D&Z Building evaluates each project against the Safety Data Sheet (SDS) of all materials used.',
  },
  {
    q: 'What is a VAV system and why is it required for lab fume hoods?',
    a: 'VAV (Variable Air Volume) varies airflow based on real-time demand rather than running at maximum flow constantly (CAV = Constant Air Volume). In laboratories, VAV is essential for fume hoods: when the sash (sliding glass) closes, the hood needs less extraction to maintain 0.5 m/s face velocity. A CAV system would create excess airflow that generates turbulence, pulling contaminants out of the hood. Lab VAV systems include sash position sensors, individual VAV box controllers, and a master controller that coordinates all hood exhausts with the make-up air system.',
  },
  {
    q: 'What Chilean regulations apply to laboratory ventilation?',
    a: 'Laboratory ventilation in Chile is governed simultaneously by: DS 594 (MINSAL) for workplace conditions including maximum airborne contaminant concentrations; MINSAL Resolution 510/99 for clinical and environmental labs; NCh 1993 for general ventilation; and NFPA 45 for labs with flammable liquids (referenced by Bomberos). Pharmaceutical labs manufacturing or testing medicines must also comply with ISP Good Manufacturing Practice (GMP) guidelines. D&Z Building prepares the DS 594 compliance report and ventilation calculation for the SEREMI health operating license.',
  },
  {
    q: 'What does HVAC for a 200 m² laboratory cost in Chile?',
    a: 'Laboratory HVAC costs vary significantly by specification: a basic food analysis lab can be installed for UF 80–150 (≈ USD 2,600–4,900); an analytical chemistry lab with 4 fume hoods and pressure control, UF 200–400 (≈ USD 6,500–13,100); a complete BSL-2 negative pressure system, UF 350–600; a 50 m² ISO Class 7 cleanroom, UF 400–800. Maintenance costs are higher than offices: HEPA filters, fume hood performance testing, and pressure control calibration require semi-annual or annual recertification per applicable standards.',
  },
  {
    q: 'Can D&Z Building design labs to GMP (Good Manufacturing Practice) standards?',
    a: 'Yes. D&Z Building has experience designing HVAC for pharmaceutical quality control laboratories under GMP standards, including cleanrooms classified A/B/C/D per EU GMP Annex 1, continuous particle and temperature monitoring with data logging per 21 CFR Part 11, and DQ/IQ/OQ/PQ qualification documentation required for ISP approval. Designs are documented with calculation reports per ASHRAE 62.1, ISO 14644-4 (cleanroom design), and ISPE Baseline Guide Vol. 3 (Facilities, 2nd edition).',
  },
]
```

### JSON-LD

Service + FAQPage + BreadcrumbList:
- Breadcrumb: Home → Sectors → Laboratories & R&D Centers
- Service name: "HVAC for Laboratories and R&D Centers"

### Component name

```tsx
export default function EnSectorLaboratoriesPage() { ... }
```

### Sitemap entry

```ts
{
  url: `${siteUrl}/en/sectors/laboratories/`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
  alternates: {
    languages: {
      en: `${siteUrl}/en/sectors/laboratories/`,
      es: `${siteUrl}/sectores/laboratorios-centros-id/`,
    },
  },
},
```

## Verification

```bash
npx tsc --noEmit
ls app/en/sectors/laboratories/page.tsx
grep "EnSectorLaboratoriesPage" app/en/sectors/laboratories/page.tsx
grep "laboratories" app/sitemap.ts
```

## Escape hatches

- Do NOT modify `app/globals.css`
- `app/en/sectors/` directory already exists
- CTA links: `/?servicio=ventilacion-industrial#contacto` — keep as-is for global ES landing page contact
- Related: `/en/sectors/pharmaceutical/`, `/en/sectors/data-centers/`, `/en/sectors/health/`
