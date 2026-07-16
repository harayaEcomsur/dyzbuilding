# Plan 002 — English label translation for ordenes/contratos document preview

Written against commit: `94562a8`  
Priority: **Medium** — completes the document translation feature

---

## Why this matters

The `ordenes/nueva/page.tsx` and `contratos/nuevo/page.tsx` editors have an EN toggle button that saves `data.lang = 'en'` to Neon. But when `lang === 'en'`, the document preview still shows all structural labels in Spanish ("ORDEN DE COMPRA", "Proveedor:", "Condiciones de entrega", etc.). Users who click EN get the toggle saved but the PDF is still in Spanish.

Cotizaciones and informes already have full EN label translation (with `docT` / `itT` objects). This plan extends that same pattern to ordenes and contratos.

---

## Files to modify

- `app/admin/(protected)/ordenes/nueva/page.tsx`
- `app/admin/(protected)/contratos/nuevo/page.tsx`

---

## Ordenes — labels to translate

Find the ordenes preview section (starts after `{/* RIGHT — PREVIEW */}` or similar comment). The labels to replace with translated versions:

| Spanish | English |
|---------|---------|
| ORDEN DE COMPRA | PURCHASE ORDER |
| Proveedor | Supplier |
| Condiciones | Conditions |
| Lugar de entrega | Delivery location |
| Plazo de entrega | Lead time |
| Forma de pago | Payment terms |
| Solicitado por | Requested by |
| IVA (19%) | VAT (19%) |
| Total | Total |
| Notas | Notes |

Add this object before the `return` statement (same pattern as cotizaciones `docT`):

```ts
const isEN = data.lang === 'en'
const ocT = isEN ? {
  title: 'PURCHASE ORDER',
  supplier: 'Supplier', conditions: 'Conditions',
  deliveryPlace: 'Delivery location', deliveryTime: 'Lead time',
  payment: 'Payment terms', requestedBy: 'Requested by',
  vat: 'VAT (19%)', total: 'Total', notes: 'Notes',
  dateLabel: 'Date:', currencyLabel: 'Currency:',
} : {
  title: 'ORDEN DE COMPRA',
  supplier: 'Proveedor', conditions: 'Condiciones',
  deliveryPlace: 'Lugar de entrega', deliveryTime: 'Plazo de entrega',
  payment: 'Forma de pago', requestedBy: 'Solicitado por',
  vat: 'IVA (19%)', total: 'Total', notes: 'Notas',
  dateLabel: 'Fecha:', currencyLabel: 'Moneda:',
}
```

Then replace each hardcoded Spanish string in the preview JSX with `{ocT.supplier}`, `{ocT.title}`, etc.

---

## Contratos — labels to translate

The contratos document is mostly user-edited clause content (which doesn't need translation — it's entered directly by the user). Only the structural frame labels need switching:

| Spanish | English |
|---------|---------|
| CONTRATO DE [tipo] | CONTRACT FOR [type] |
| En la ciudad de... | In the city of... |
| Mandante | Principal |
| Contratista | Contractor |
| Las partes suscriben... | The parties hereby enter into... |
| Firmas | Signatures |
| [number of day] | same (numeric) |

Add this object before the `return`:

```ts
const isEN = data.lang === 'en'
const ctrT = isEN ? {
  prefix: 'CONTRACT', in: 'In the city of', on: 'on the', day: 'day of',
  between: 'between', party1Label: 'Principal', party2Label: 'Contractor',
  agreePreamble: 'The parties hereby agree to the following:',
  signaturesLabel: 'Signatures', typeLabel: 'Contract type:',
} : {
  prefix: 'CONTRATO', in: 'En la ciudad de', on: 'con fecha', day: 'de',
  between: 'entre', party1Label: 'Mandante', party2Label: 'Contratista',
  agreePreamble: 'Las partes suscriben el presente contrato de acuerdo a las siguientes cláusulas:',
  signaturesLabel: 'Firmas', typeLabel: 'Tipo de contrato:',
}
```

---

## Verification

```bash
# TypeScript clean
npx tsc --noEmit

# Manual check: open /admin/ordenes/nueva, click 🇬🇧 EN
# Preview should show "PURCHASE ORDER" instead of "ORDEN DE COMPRA"
# "Supplier" instead of "Proveedor", etc.

# Manual check: open /admin/contratos/nuevo, click 🇬🇧 EN
# Preview should show "CONTRACT" and "Principal / Contractor"
```

---

## Done criteria

1. `npx tsc --noEmit` exits 0
2. In ordenes editor: clicking EN toggle changes preview title to "PURCHASE ORDER"
3. In contratos editor: clicking EN toggle changes party labels to "Principal" / "Contractor"
4. Clicking back to ES restores Spanish labels
5. Auto-save works with `lang: 'en'` (no regression — this is already implemented)

---

## Files in scope

- `app/admin/(protected)/ordenes/nueva/page.tsx` — add `ocT` object and replace preview labels
- `app/admin/(protected)/contratos/nuevo/page.tsx` — add `ctrT` object and replace preview labels

## Files out of scope

All other files.
