# Improvement Plans — D&Z Building

Written against commit: `94562a8`

## Priority Order

| # | Plan | Status | Depends on |
|---|------|--------|------------|
| 001 | [URL-based i18n routing `/en/`](001-url-based-i18n.md) | DONE | — |
| 002 | [EN label translation for ordenes/contratos preview](002-doc-preview-en-labels.md) | DONE | — |

## Key Findings

### Critical
- **Cookie-based i18n is invisible to Googlebot.** Googlebot crawls with no cookies and no `Accept-Language` header. The entire EN content tree is unreachable to search engines. English-language queries for HVAC services in Chile will never surface this site in EN.

### Medium
- Ordenes de compra and contratos document editors have an EN toggle that saves `lang: 'en'` to the DB, but their preview sections still render all structural labels in Spanish.

## Considered and Rejected

_(empty — first audit run)_
