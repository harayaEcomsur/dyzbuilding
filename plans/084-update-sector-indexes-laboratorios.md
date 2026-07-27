# Plan 084 — Update Sector Indexes: Add Laboratorios / Laboratories

Written against commit: `1f99a44`

## Why this matters

Plans 082 and 083 create `/sectores/laboratorios-centros-id/` and `/en/sectors/laboratories/`, but neither sector hub index links to them yet.

## Scope

**Files to modify:**
- `app/sectores/page.tsx` (ES sectors index)
- `app/en/sectors/page.tsx` (EN sectors index)

**Files NOT to touch:** `app/globals.css`, `app/sitemap.ts`, any other files.

## Sources (most recent versions — after plan 078 adds centros comerciales/shopping centers)

- ES sectors index: `.claude/worktrees/agent-ab54327c818df66db/app/sectores/page.tsx`
- EN sectors index: `.claude/worktrees/agent-ab54327c818df66db/app/en/sectors/page.tsx`

Read BOTH in full before editing. Do not drop any existing entries.

## Implementation

### ES: Add to SECTORES array

```tsx
{
  titulo: 'Laboratorios y Centros de I+D',
  descripcion: 'Ventilación de campanas extractoras con VAV, presión negativa para laboratorios BSL-2/3, salas limpias ISO 14644, control de humedad ±2% HR y cumplimiento MINSAL resolución 510/99.',
  hasPagina: true,
  href: '/sectores/laboratorios-centros-id/',
}
```

### EN: Add to SECTORS array

```tsx
{
  title: 'Laboratories & R&D Centers',
  desc: 'Fume hood VAV extraction, BSL-2/3 negative pressure, ISO 14644 cleanrooms, ±2% RH humidity control, and MINSAL Resolution 510/99 compliance for analytical and pharmaceutical labs.',
  hasPage: true,
  href: '/en/sectors/laboratories/',
}
```

## Verification

```bash
grep -A3 "laboratorios-centros-id\|Laboratorios" app/sectores/page.tsx | head -10
grep -A3 "laboratories\|Laboratories" app/en/sectors/page.tsx | head -10
npx tsc --noEmit
```

## Escape hatches

- Match exact field names from the source files
- Do NOT restructure pages — only add one new entry to each array
- If plan 078 worktree is not available, read from plan 074 worktree (`worktree-agent-af830f481fc88ff4a`) and also add the centros-comerciales/shopping-centers entries manually before adding laboratorios/laboratories
