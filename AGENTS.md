<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# APAA-CLIENT — Agent & Developer Architecture Guidelines

Normative guidelines for AI coding agents and humans working on `apaa-client`.

---

## 1. Identity & Ecosystem

`apaa-client` is the **public marketing website** for **Ananda Academy for Performing Arts (AAPA)** — the cultural & arts academy under SSMTBD-ORG for music, dance, painting, drama, and recitation.

> **Naming note:** The repository folder is `apaa-client` (historical spelling). The canonical product id everywhere else (`ssmtbd-portal`, `ssmtbd-server`, permissions, CORS) is **`aapa`**. Prefer “AAPA / Ananda Academy” in user-facing copy; use `aapa` in API paths, env keys, and permissions.

| Repo | Role | Dev host |
|---|---|---|
| `apaa-client` | Public AAPA / Ananda Academy website (this repo) | `http://localhost:3104` |
| `itce-client` | Public ITCE website | `http://localhost:3101` |
| `ssmtbd-client` | Public SSMT website | `http://localhost:3102` |
| `scl-client` | Public Socionova / SCL website | `http://localhost:3103` |
| `ssmtbd-portal` | Auth hub + applications / ops | `http://localhost:3000` |
| `ssmtbd-server` | Authoritative Express API | `http://localhost:5000` |

Product id on portal / server / CORS origins: **`aapa`**. Server allowlist: `PRODUCT_ORIGINS_AAPA` (default `http://localhost:3104`).

### Current state

This repo currently ships a **premium Coming Soon** homepage only. Do not invent full marketing sections, course catalogs, or enrollment forms until intentionally scoped. When the full site is built, follow the same contract as `itce-client` / `ssmtbd-client`.

### Boundaries (non-negotiable)

1. **HTTP client only** — no Prisma, no direct DB, no `DATABASE_URL`.
2. **Public by default** — no login wall on this site. Identity, enrollments, and ops belong on `ssmtbd-portal`.
3. **Single product** — AAPA / Ananda Academy only. Do not copy portal’s four-product rail.
4. **SSR catalog only (future)** — browser must **never** call `ssmtbd-server`. Use Server Components + a server-only public API client against `/api/v1/public/aapa/*` when those routes exist. Prefer `API_INTERNAL_BASE_URL`. Never put catalog API base in `NEXT_PUBLIC_*`.
5. **Enroll / apply handoff (future)** — CTAs link to `{PORTAL}/aapa/...`. Do not rebuild enrollment or payment forms here.
6. **Dev origin** — port **3104** (matches `PRODUCT_ORIGINS_AAPA` on the server).

---

## 2. Intended Directory Layering (when the full site ships)

```
src/
├── app/          # Thin App Router composition
├── shell/        # SiteHeader, SiteFooter, SiteShell
├── features/     # Page features + server loaders
├── shared/       # ui, api (server-only), lib
├── content/      # Static marketing copy until CMS/API exists
└── config/       # env.server / env.client, routes, site
```

Until that migration, keep the Coming Soon surface under top-level `app/`.

### Import rules (target)

| Layer | May import | Must never import |
|---|---|---|
| `src/app` | `shell`, `features`, `shared`, `config`, `content` | Untyped ad-hoc fetch, DB |
| `src/shell` | `@/shared/**`, `@/config/**` | Feature internals beyond public exports |
| `src/features/*` | `@/shared/**`, `@/config/**`, `@/content/**`, itself | `@/app/**` |
| `src/shared` | `@/shared/**`, `@/config/**` | `@/features/**`, `@/shell/**`, `@/app/**` |
| `src/config` | nothing from UI/features | — |

---

## 3. Environment

Copy `.env.example` → `.env`. Canonical vars:

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_APP_ENV` | `development` / `staging` / `production` |
| `NEXT_PUBLIC_APP_URL` | This site origin (`http://localhost:3104`) |
| `API_INTERNAL_BASE_URL` | Server-only `ssmtbd-server` base (future SSR) |
| `NEXT_PUBLIC_PORTAL_URL` | Auth hub |
| `NEXT_PUBLIC_ITCE_SITE_URL` / `NEXT_PUBLIC_SSMT_SITE_URL` / `NEXT_PUBLIC_SCL_SITE_URL` | Sibling public sites |

Never put the catalog API base in `NEXT_PUBLIC_*`. Product id in API paths remains `aapa`.

---

## 4. Brand & UI

- Brand voice: Ananda Academy / performing arts — violet / plum (`#7c3aed` family), aligned with portal `data-product="aapa"` tokens. Prefer theatrical warm ivory + deep stage plum over generic purple SaaS gradients.
- Temporary Coming Soon fonts: Cormorant Garamond (display) + Outfit (body).
- Prefer Server Components. Use `"use client"` only for genuine interactivity.
- Do **not** run `next dev` as a long-lived agent process; verify with `bun run typecheck`, `bun run lint`, `bun run build`.

---

## 5. Auth Handoff Contract (future)

1. Public site showcases Ananda Academy content via SSR.
2. Enroll / apply → `{NEXT_PUBLIC_PORTAL_URL}/aapa/...`.
3. Portal proxy sends unauthenticated users to `/login?next=...` (register preserves `next` too).
4. Existing portal enrollment / payment flows continue — never duplicate them here.
