# Ananda Academy Client (`apaa-client`)

Public website for **Ananda Academy for Performing Arts (AAPA)** — cultural & arts academy under SSMTBD-ORG.

> Repo folder: `apaa-client`. Canonical product id elsewhere: **`aapa`**.

## Current status

Premium **Coming Soon** page only. Full marketing / catalog work is intentionally deferred.

## Ecosystem

```
apaa-client     →  public AAPA / Ananda site    (localhost:3104)
scl-client      →  public Socionova / SCL site  (localhost:3103)
itce-client     →  public ITCE site             (localhost:3101)
ssmtbd-client   →  public SSMT site             (localhost:3102)
ssmtbd-portal   →  auth hub + applications      (localhost:3000)
ssmtbd-server   →  Express API authority        (localhost:5000)
```

This app is an HTTP client only. Auth, enrollments, and ops live on `ssmtbd-portal`. Product id: `aapa`. CORS origin: `PRODUCT_ORIGINS_AAPA`.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript + Tailwind CSS v4
- Bun package manager
- Cormorant Garamond + Outfit (Coming Soon fonts)

## Getting started

```bash
bun install
cp .env.example .env
bun run dev
```

Open [http://localhost:3104](http://localhost:3104). Ensure `PRODUCT_ORIGINS_AAPA` on `ssmtbd-server` includes this origin when API calls start.

### Scripts

| Script | Purpose |
|---|---|
| `bun run dev` | Dev server on port 3104 |
| `bun run build` | Production build |
| `bun run start` | Start production server on 3104 |
| `bun run lint` | ESLint |
| `bun run typecheck` | `tsc --noEmit` |

See [AGENTS.md](./AGENTS.md) for agent and contributor rules.
