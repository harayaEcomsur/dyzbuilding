# Plan de Consolidación de Worktrees

Generado: 2026-07-27 · Contra commit base `1f99a44` (main está en `f1d7a70` tras el fix de datos de empresa)

## Por qué esto NO es un merge de ramas normal

Los 84 worktrees en `.claude/worktrees/` **nunca hicieron commit**. Cada uno es una copia de trabajo con cambios sin confirmar sobre el mismo commit base (`1f99a44`). `git merge` no aplica aquí — es una **consolidación de archivos**: copiar páginas nuevas y reconciliar 6 archivos índice + `sitemap.ts` que fueron editados de forma independiente y descoordinada por decenas de ejecutores distintos.

## Inventario: 68 páginas nuevas encontradas

| Categoría | Cantidad | Worktrees |
|---|---|---|
| Sectores (ES) | 15 | oficinas, centros-deportivos, farmaceutica, educacion, hoteleria, retail, laboratorios-centros-id\*, salud, bodegas-logistica, data-centers, mineria, centros-comerciales, plantas-industriales, agroindustria, restaurantes-alimentacion |
| Sectors (EN) | 14 | offices, retail, warehousing, agro, shopping-centers, industrial, hotels, pharmaceutical, food-service, sports-facilities, mining, data-centers, education, health |
| Servicios (ES) | 7 | climatizacion-vrf, eficiencia-energetica, mantenimiento-preventivo, modelamiento-bim-hvac, proyectos-llave-en-mano, refrigeracion-comercial, ventilacion-industrial |
| Services (EN) | 7 | vrf-systems, commercial-refrigeration, industrial-ventilation, bim-hvac-modeling, turnkey-projects, energy-efficiency, preventive-maintenance |
| Guías (ES) | 8 | que-es-un-sistema-vrf, precio-sistema-vrf-chile, decreto-supremo-594-ventilacion-hvac-chile, mantenimiento-preventivo-hvac-empresas-chile, eficiencia-energetica-hvac-empresas-chile, como-elegir-sistema-hvac-empresa-chile, precio-climatizacion-comercial-chile, vrf-vs-chiller-cual-elegir-empresa-chile |
| Guide (EN) | 5 | what-is-a-vrf-system, choosing-hvac-system-chile, commercial-hvac-costs-chile, energy-efficiency-hvac-chile, hvac-regulations-chile-foreign-companies |

\* `laboratorios-centros-id` viene de un worktree que falló por límite de sesión (`agent-a7ef838b2a7fccc59`) — **verificar que el archivo esté completo (no truncado) antes de usarlo**, o esperar el re-run. El EN counterpart (`laboratories`) aún no existe — falló sin producir archivo.

## Duplicados a resolver (misma página, generada 2 veces)

Cuando un plan falló por límite de sesión y se re-lanzó, quedaron dos worktrees con el mismo slug. Usar el más reciente/completo, descartar el otro:

| Página | Worktree A | Worktree B | Usar |
|---|---|---|---|
| `sectores/bodegas-logistica` | `a860b576fb582c203` | `ae5cc2f3205991168` | Verificar cuál compila, cualquiera sirve (contenido idéntico) |
| `servicios/modelamiento-bim-hvac` | `a38f3e3c90a958545` | `aaab73774fc2cc846` | Idem |
| `guias/decreto-supremo-594-...` | `a1a950ae05b053609` | `ad274d2145b74bda0` | Idem |
| `guias/como-elegir-sistema-hvac-...` | `a4a4cae08e92623fb` | `aa5cd2fd85439f75f` | Idem |
| `guias/eficiencia-energetica-hvac-...` | `ab21d7b21c1d7713a` | `ad056ecd0b11b4f53` | Idem |
| `guias/vrf-vs-chiller-...` | `a92f7947d5f386632` (**falló, descartar**) | `ad73d0739a3a417aa` (completo) | **`ad73d0739a3a417aa`** |

## Cambios auxiliares fuera del patrón sectores/servicios/guías

Estos worktrees tocan archivos que no son páginas nuevas — revisar el diff individualmente antes de aplicar, no son mecánicos:

| Worktree | Archivos | Probable origen |
|---|---|---|
| `a0d0e3bb035a61578` | `components/ContactForm.tsx` | Plan 007 (prefill de URL en formulario) |
| `a65a61da8d7b4f314` | `app/globals.css` + `app/servicios/page.tsx` | Estilos del índice de servicios |
| `aad0e90d0ffea1970` | `app/page.tsx` + `app/servicios/refrigeracion-comercial/` | Posible link desde home a servicios |
| `afedc6ec4972c906c` | `app/page.tsx` + `app/servicios/mantenimiento-preventivo/` | Idem |

## Archivos índice: "campeón" + huecos detectados

Ningún worktree tiene la versión 100% completa de ningún índice — cada cadena de actualización se ramificó de forma independiente. Se eligió el worktree con más entradas válidas como base, pero **todos tienen huecos que hay que parchar a mano** con las entradas de otros worktrees:

| Índice | Worktree base | Entradas | Huecos a agregar manualmente |
|---|---|---|---|
| `app/sectores/page.tsx` | `ab54327c818df66db` | 12/15 | **bodegas-logistica, educacion, laboratorios-centros-id** |
| `app/en/sectors/page.tsx` | `ab54327c818df66db` | 13/14 | **warehousing** |
| `app/servicios/page.tsx` | `a7479e1eb314df7ae` | 7/7 | ninguno — completo |
| `app/en/services/page.tsx` | `ab5bf8b4d34d55ee0` | 7/7 | ninguno — completo |
| `app/guias/page.tsx` | `ac1115e7790eca242` | 7/8 | **vrf-vs-chiller-cual-elegir-empresa-chile** |
| `app/en/guide/page.tsx` | `a76ef65592668aebb` | 5/5 | ninguno — completo |

Las entradas faltantes existen ya redactadas en los planes 060 (bodegas), 047 (educación), 059 (warehousing EN) y se pueden copiar del worktree que las originó (`a860b576fb582c203`/`ae5cc2f3205991168` para bodegas, `a6f0c2aa426265fe5`... revisar plan 047 para educación, `a50c8b9ea4e5cfcf2` para warehousing EN). La entrada de `laboratorios-centros-id` y `vrf-vs-chiller` las tengo redactadas en los planes 082 y 081 respectivamente (ya usadas para dispatchear los executors).

## `app/sitemap.ts`: no se puede copiar de un solo worktree

Cada worktree (índice o página) agregó **su propia entrada** al sitemap partiendo del mismo `1f99a44`, así que hay ~80 versiones con una entrada nueva cada una, sin acumular entre sí. La única forma confiable es extraer todas las entradas nuevas de todos los worktrees y unirlas por `url` (deduplicando), en vez de tomar el sitemap de un worktree "más reciente".

## Estrategia de ejecución (3 fases, en este orden)

**Fase 1 — Copiar páginas hoja (sin riesgo de conflicto).**
Cada página nueva vive en una carpeta propia que no existe en `main` todavía — copiar el `page.tsx` de cada worktree (lista de duplicados arriba ya resuelta) directo a su ruta final en `main`. 68 copias de archivo, cero conflictos entre sí.

**Fase 2 — Reconstruir los 6 índices.**
Partir del worktree "campeón" de la tabla de arriba, pegarlo en `main`, y agregar a mano las entradas listadas como "huecos". Son ediciones pequeñas (agregar 1 objeto a un array), no reescrituras.

**Fase 3 — Reconciliar `sitemap.ts`.**
Escribir un script (Node o Python) que:
1. Lea el `app/sitemap.ts` actual de `main`.
2. Recorra los 84 worktrees, extrayendo con regex cada bloque `{ url: \`${siteUrl}/...\`, ... }` de su `app/sitemap.ts`.
3. Deduplique por `url`, preferentes las versiones más completas (con `alternates.languages`).
4. Inserte las entradas nuevas antes del cierre del array en el `sitemap.ts` de `main`.

Este paso lo puedo escribir y correr yo mismo (es solo lectura + generación de texto), pero antes de tocar el repo real te muestro el diff resultante.

## Verificación antes de commitear

```bash
npx tsc --noEmit                                    # 0 errores
grep -c "href:" app/sectores/page.tsx                # = 15
grep -c "href:" app/en/sectors/page.tsx              # = 14
grep -c "href:" app/guias/page.tsx                   # = 8
grep -rn "SectorLaboratoriosPage\|EnSectorLaboratoriesPage" app/  # confirma páginas 082/083
```
Además: levantar `npm run dev` y click-through manual de 3-4 páginas nuevas al azar (una de cada categoría) para descartar problemas visuales que `tsc` no detecta.

## Limpieza final (requiere tu confirmación explícita — no la ejecuto sola)

Una vez todo commiteado y pusheado a `main`:
```bash
git worktree list | tail -n +2 | awk '{print $1}' | xargs -n1 git worktree remove --force
git branch | grep 'worktree-agent-' | xargs git branch -D
```
Esto borra las 84 carpetas y ramas locales `worktree-agent-*`. Es destructivo — lo dejo para el final y pido confirmación aparte cuando lleguemos ahí.

## Pendiente antes de poder cerrar esto

- Terminar de re-lanzar los planes 082 (sector Laboratorios ES) y 083 (EN) — 082 puede estar truncado por el fallo de sesión, 083 no produjo archivo.
- Escribir y dispatchear el plan de índice para laboratorios (084, ya escrito) y para vrf-vs-chiller en la guía ES (falta un plan nuevo, ~085).
- Decidir qué hacer con los 4 "cambios auxiliares" de la tabla de arriba (revisar si ya están reflejados en `main` de otra forma, dado que `app/page.tsx` y `globals.css` ya tienen cambios propios sin relación a estos worktrees).

## Siguiente paso

Dime si quieres que:
1. Ejecute la Fase 1 (copiar las 68 páginas) ahora — es mecánico y de bajo riesgo, o
2. Espere a que terminen 082/083/084/085 primero para hacer todo de una vez.
