# Plan 001 — URL-based i18n routing for proper SEO indexability

Written against commit: `94562a8`  
Priority: **CRITICAL** — current cookie-based approach is invisible to search engines

---

## Why this matters

The current bilingual implementation stores language preference in a `lang` cookie. Googlebot crawls `dyzbuilding.cl` with:
- No cookies (first-party cookies don't persist across Googlebot visits)
- No `Accept-Language` header  
- US IP addresses

Result: Googlebot **always** sees the Spanish version. The English content never gets indexed. Ranking for English HVAC queries in Chile, or for foreign companies searching for Chilean HVAC suppliers, is impossible with the current approach.

The fix is URL-based routing: `/` serves Spanish, `/en/` serves English. Both URLs are independently indexable, crawlable, and linkable.

---

## Current state

```
app/
  layout.tsx          ← reads lang cookie to set <html lang>
  page.tsx            ← reads lang cookie, renders ES or EN content
  middleware.ts       ← sets lang cookie from Accept-Language on first visit
components/
  LangSwitcher.tsx    ← sets lang cookie + router.refresh()
```

The `lang` cookie drives everything. `app/page.tsx` calls `await cookies()` inside a Server Component (making it dynamic), reads `'es' | 'en'`, and picks content accordingly.

---

## Target state

```
app/
  layout.tsx          ← keep, but remove cookies() — html lang set by locale param
  page.tsx            ← Spanish version (default, canonical URL: /)
  en/
    page.tsx          ← English version (canonical URL: /en/)
  middleware.ts       ← updated: redirect to /en/ if lang=en cookie AND on /
components/
  LangSwitcher.tsx    ← updated: navigate to /en/ or / instead of setting cookie + refresh
```

---

## Implementation steps

### Step 1 — Create `app/en/page.tsx`

Copy `app/page.tsx` to `app/en/page.tsx`. Change it to:
- Remove `cookies()` import and usage
- Always use `lang = 'en'` (hardcode `isEN = true`)
- Use `c.en.*` directly (no conditional)
- Pass `lang="en"` to `LangSwitcher` and `ContactForm`
- Set canonical in `generateMetadata` to `/en/` and add hreflang:
  ```ts
  alternates: {
    canonical: '/en/',
    languages: { 'es': '/', 'en': '/en/', 'x-default': '/' },
  }
  ```
- LangSwitcher href: `'/'` (go to Spanish)

### Step 2 — Update `app/page.tsx`

- Remove `cookies()` call and `lang` detection
- Always use `lang = 'es'` (hardcode `isEN = false`)
- Use `c.hero`, `c.nosotros`, `c.servicios`, `c.faq`, `c.seo` directly
- Set canonical to `/` with hreflang pointing to `/en/`:
  ```ts
  alternates: {
    canonical: '/',
    languages: { 'es': '/', 'en': '/en/', 'x-default': '/' },
  }
  ```
- LangSwitcher href: `'/en/'` (go to English)

### Step 3 — Update `LangSwitcher.tsx`

Replace cookie + router.refresh() with `<a>` navigation:

```tsx
// Instead of setting cookie and refreshing:
export default function LangSwitcher({ lang }: { lang: 'es' | 'en' }) {
  const handleClick = () => {
    const targetUrl = lang === 'es' ? '/en/' : '/'
    // fire GA4 event
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'lang_switched', { from_lang: lang, to_lang: lang === 'es' ? 'en' : 'es' })
    }
    // simple navigation — no cookie needed
    window.location.href = targetUrl
  }
  // ... existing button JSX, onClick={handleClick}
}
```

Or use a plain `<Link href={lang === 'es' ? '/en/' : '/'}>`  (simpler, works without JS).

### Step 4 — Update `middleware.ts`

Instead of setting a cookie, redirect to `/en/` when Accept-Language is `en` and the user is on `/`:

```ts
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/admin') || pathname.startsWith('/api') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }
  // Only redirect root to /en/ if Accept-Language starts with 'en' and no manual preference cookie
  if (pathname === '/') {
    const manualPref = req.cookies.get('lang-manual')?.value  // only manual overrides
    if (!manualPref) {
      const accept = req.headers.get('accept-language') ?? ''
      const first = accept.split(',')[0]?.split('-')[0]?.toLowerCase()
      if (first === 'en') {
        return NextResponse.redirect(new URL('/en/', req.url))
      }
    }
  }
  return NextResponse.next()
}
```

Note: use a separate `lang-manual` cookie (set only by LangSwitcher) so auto-detection only applies on truly first visits. When the user clicks ES from `/en/`, set `lang-manual=es` so they stay on `/` even if their browser is in English.

### Step 5 — Update `app/layout.tsx`

Remove the `cookies()` call. The `<html lang>` can be inferred from the URL path in a layout, or each page can pass it explicitly. Simplest: make each page component a separate layout that sets `lang`:

```tsx
// app/en/layout.tsx (new file)
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{/* ... */}</html>
}
// That won't work with nested layouts — instead, pass lang as a prop via params if using [locale] routing
```

Alternative (simpler): keep `app/layout.tsx` language-agnostic (`lang="es"` default), and override in `app/en/layout.tsx` with `lang="en"`. Next.js App Router supports nested layouts that override html attributes.

Or: use `<html lang="es">` in root layout, create `app/en/layout.tsx` with:
```tsx
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
  // The html element is set in the root layout — for /en/ pages we want lang="en"
}
```

This won't work cleanly with the root layout setting `<html lang>`. The cleanest architecture is the `[locale]` dynamic segment approach described in the Escape Hatch below.

**Pragmatic shortcut**: skip `<html lang>` correction in the layout for now and use a `useEffect` in a client component on the EN page to set `document.documentElement.lang = 'en'`. Not ideal but functional, and the search engine signal that matters most is the `hreflang` in `<head>`, not the `<html lang>` attribute.

### Step 6 — Update admin contenido editor

The English content fields in the admin now live at `cfg.en.*`. This is unchanged — just make sure the admin saves `en.hero`, `en.nosotros`, etc. correctly. No changes needed if the current save works.

### Step 7 — Verification

```bash
# TypeScript clean
npx tsc --noEmit

# Crawl check: both URLs should return 200 with distinct content
curl -s -o /dev/null -w "%{http_code}" https://dyzbuilding.cl/
curl -s -o /dev/null -w "%{http_code}" https://dyzbuilding.cl/en/

# Hreflang check (look for <link rel="alternate" hreflang="en" href="/en/"> in /)
curl -s https://dyzbuilding.cl/ | grep hreflang
curl -s https://dyzbuilding.cl/en/ | grep hreflang

# GA4: open /en/ with GA4 DebugView active — verify no lang_switched event fires on page load
# GA4: click ES button on /en/ — verify lang_switched event fires with from_lang=en, to_lang=es
```

---

## Files in scope

- `app/page.tsx` — remove cookies(), hardcode ES
- `app/en/page.tsx` — new file (copy of page.tsx, hardcoded EN)
- `app/en/layout.tsx` — optional, for html lang override
- `app/layout.tsx` — remove cookies() 
- `components/LangSwitcher.tsx` — navigate instead of cookie+refresh
- `middleware.ts` — redirect-based instead of cookie-only

## Files out of scope

- `lib/site-content-types.ts` — no changes needed
- `lib/site-content.ts` — no changes needed
- Admin pages — no changes needed
- Document editors — no changes needed

---

## Done criteria

1. `npx tsc --noEmit` exits 0
2. `GET /` returns HTML with `<link rel="alternate" hreflang="en" href="https://www.dyzbuilding.cl/en/">` in `<head>`
3. `GET /en/` returns HTML with English content (title "Commercial HVAC..." not "Climatización...")
4. `GET /en/` returns `<link rel="alternate" hreflang="es" href="https://www.dyzbuilding.cl/">` in `<head>`
5. GA4 DebugView shows `lang_switched` event when user clicks the language toggle
6. Browser with `Accept-Language: en` visiting `/` is redirected to `/en/`

---

## Escape hatch

If the two-page approach (`app/page.tsx` + `app/en/page.tsx`) causes too much duplication or layout conflicts with `<html lang>`, the proper long-term architecture is `app/[locale]/page.tsx` with `generateStaticParams` returning `['es', 'en']` and a redirect from `/` to `/es/` or `/en/` in middleware. This requires moving the current `app/page.tsx` to `app/[locale]/page.tsx` and updating all internal links. Stop and report back before attempting this — it's a larger refactor.

---

## Maintenance note

Every time new content sections are added to `app/page.tsx`, the same change must be mirrored in `app/en/page.tsx`. Consider adding a comment at the top of each file: `// Mirror any structural changes to app/en/page.tsx (or app/page.tsx)`. A test that compares the JSX structure of both pages would be ideal but is non-trivial to write.
