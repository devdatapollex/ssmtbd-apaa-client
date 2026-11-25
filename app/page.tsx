const portalUrl =
  process.env.NEXT_PUBLIC_PORTAL_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-background text-foreground">
      {/* Full-bleed stage atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,#f3e8d8_0%,transparent_55%),linear-gradient(180deg,#faf7f2_0%,#f3e8d8_38%,#2a1844_100%)]" />
        <div className="aapa-atmosphere absolute left-1/2 top-[-18%] h-[70vmax] w-[90vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_62%)] blur-2xl" />
        <div className="aapa-atmosphere absolute -left-[20%] bottom-[8%] h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(91,33,182,0.35),transparent_68%)] blur-3xl [animation-delay:-5s]" />
        <div className="aapa-atmosphere absolute -right-[18%] bottom-[12%] h-[36vmax] w-[36vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(243,232,216,0.25),transparent_70%)] blur-3xl [animation-delay:-9s]" />

        {/* Dominant visual — proscenium / stage wash */}
        <div className="aapa-stage absolute inset-x-0 bottom-0 h-[58%]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(42,24,68,0.35)_28%,#2a1844_72%)]" />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 820"
            fill="none"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0 0 L120 820 L0 820 Z"
              fill="url(#aapa-curtain-l)"
              opacity="0.9"
            />
            <path
              d="M1440 0 L1320 820 L1440 820 Z"
              fill="url(#aapa-curtain-r)"
              opacity="0.9"
            />
            <ellipse
              cx="720"
              cy="760"
              rx="420"
              ry="48"
              fill="rgba(243,232,216,0.18)"
            />
            <g stroke="#f3e8d8" strokeOpacity="0.28" strokeWidth="1.2">
              <path d="M360 420 C480 360 600 360 720 420 C840 480 960 480 1080 420" />
              <path d="M420 500 C540 440 660 440 780 500" />
              <path d="M540 560 C640 520 760 520 860 560" />
            </g>
            <g fill="#f3e8d8" fillOpacity="0.55">
              <circle cx="520" cy="390" r="3.5" />
              <circle cx="720" cy="360" r="4.5" />
              <circle cx="920" cy="390" r="3.5" />
            </g>
            <defs>
              <linearGradient
                id="aapa-curtain-l"
                x1="0"
                y1="0"
                x2="140"
                y2="820"
              >
                <stop stopColor="#5b21b6" stopOpacity="0.55" />
                <stop offset="1" stopColor="#1c1428" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient
                id="aapa-curtain-r"
                x1="1440"
                y1="0"
                x2="1300"
                y2="820"
              >
                <stop stopColor="#5b21b6" stopOpacity="0.55" />
                <stop offset="1" stopColor="#1c1428" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <main className="relative z-10 flex flex-1 flex-col px-6 pb-10 pt-10 sm:px-10 lg:px-16">
        <header className="aapa-rise flex items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.08em] text-stage sm:text-xl">
            Ananda Academy
          </p>
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase sm:text-sm">
            AAPA · SSMTBD
          </p>
        </header>

        <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-16 text-center sm:py-20">
          <p className="aapa-rise aapa-rise-delay-1 mx-auto mb-5 text-xs font-semibold tracking-[0.3em] text-brand uppercase sm:text-sm">
            Coming soon
          </p>
          <h1 className="aapa-rise aapa-rise-delay-2 font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,6.25rem)] leading-[0.92] font-semibold tracking-tight text-stage">
            Ananda Academy
          </h1>
          <p className="aapa-rise aapa-rise-delay-3 mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            A home for music, dance, painting, drama, and recitation — the
            public stage for Ananda Academy for Performing Arts is nearly ready.
          </p>
          <div className="aapa-rise aapa-rise-delay-4 mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={portalUrl}
              className="inline-flex h-12 items-center justify-center bg-stage px-7 text-sm font-semibold tracking-wide text-warm transition-colors hover:bg-brand-deep"
            >
              Open portal
            </a>
          </div>
        </section>

        <footer className="aapa-rise aapa-rise-delay-4 flex flex-col gap-2 text-center text-xs text-warm/75 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <p>Ananda Academy for Performing Arts · Public website</p>
          <p>Enrollment &amp; operations live on the SSMTBD portal.</p>
        </footer>
      </main>
    </div>
  );
}
