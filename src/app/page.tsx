const stats = [
  { value: "100+", label: "videos delivered" },
  { value: "5 years", label: "in development" },
  { value: "10 day", label: "rapid launch cycles" },
];

const services = [
  {
    title: "UGC Video Packages",
    items: [
      "Concepts, scripting, and hooks",
      "Filming, editing, captions, variants",
      "Platform-ready exports for paid + organic",
    ],
  },
  {
    title: "Web Development",
    items: [
      "Landing pages and multi-page sites",
      "Performance optimization and SEO basics",
      "Conversion-first UX with clean code",
    ],
  },
  {
    title: "Optional Add-ons",
    items: [
      "Creative strategy and campaign planning",
      "A/B testing and CRO iteration",
      "Content repurposing for social channels",
    ],
  },
];

const pricing = [
  {
    name: "Starter UGC",
    price: "3 videos / month",
    details: ["Discovery call included", "2 revision rounds", "Fast delivery cadence"],
    highlight: false,
  },
  {
    name: "Growth UGC",
    price: "8 videos / month",
    details: ["Creative testing workflow", "Hook and CTA variants", "Best for scale-focused teams"],
    highlight: true,
  },
  {
    name: "Web Dev Sprint",
    price: "Single or multi-page build",
    details: ["Planning + implementation", "Performance pass", "Handoff and launch support"],
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "Abie shipped launch-ready UGC and our paid CTR increased by 28% in the first month.",
    author: "Growth Lead, Nomad Gear",
    result: "+28% CTR",
  },
  {
    quote:
      "From concept to production site in 10 days. The process was fast, clear, and highly technical.",
    author: "Founder, Drift Studio",
    result: "Launch in 10 days",
  },
  {
    quote:
      "Creator energy plus engineering precision. We kept momentum without sacrificing quality.",
    author: "CMO, Velocity Labs",
    result: "Higher conversion quality",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-14">
      <section className="px-6 pb-20 pt-14 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent">
              Signal Feed // Abie Maxey
            </p>
            <h1
              className="cyber-glitch font-heading text-5xl font-black uppercase leading-[0.95] tracking-[0.18em] text-foreground sm:text-6xl lg:text-7xl"
              data-text="UGC Videos + Web Development for Brands That Move"
            >
              UGC Videos + Web Development for Brands That Move
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Digital nomad and software engineer helping brands grow with
              high-converting UGC and modern web builds.
              <span className="blink-cursor ml-1 text-accent">|</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="cyber-btn cyber-chamfer-sm"
                href="https://cal.com/abie-maxey"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Consult
              </a>
              <a className="cyber-btn cyber-btn-outline cyber-chamfer-sm" href="#services">
                View Work
              </a>
            </div>

            <div className="cyber-card cyber-chamfer mt-8 grid gap-5 border px-5 py-6 sm:grid-cols-3 sm:divide-x sm:divide-border">
              {stats.map((item) => (
                <div key={item.label} className="space-y-2 sm:px-4">
                  <p className="font-heading text-2xl font-bold uppercase tracking-[0.08em] text-accent">
                    {item.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="cyber-card cyber-chamfer noise-overlay relative h-full min-h-[420px] overflow-hidden border p-5">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,#00ff8815,#ff00ff14_45%,#00d4ff18)]" />
              <div className="relative z-10 grid h-full content-between gap-6">
                <div className="rounded-sm border border-border bg-background/80 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent-tertiary">
                  Live Scene // Lisbon to Berlin to Seoul
                </div>
                <div className="relative ml-auto w-[85%] border border-accent/35 bg-card/90 p-3 shadow-[0_0_10px_#00ff8850] cyber-chamfer-sm">
                  <p className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-accent">
                    UGC Frame
                  </p>
                  <div className="mt-3 h-28 rounded-sm border border-border bg-[linear-gradient(120deg,#12121a,#1c1c2e)]" />
                </div>
                <div className="-mt-16 w-[90%] rotate-[-1.5deg] border border-accent-tertiary/45 bg-card/95 p-3 shadow-[0_0_14px_#00d4ff40] cyber-chamfer-sm">
                  <p className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-accent-tertiary">
                    Website Preview
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full bg-muted" />
                    <div className="h-3 w-5/6 bg-muted" />
                    <div className="h-24 w-full border border-border bg-background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by teams in ecommerce, SaaS, wellness, and creator-led brands
          </p>
        </div>
      </section>

      <section id="about" className="-mt-8 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="cyber-card cyber-chamfer p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent-secondary">
              About // Profile
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">
              Creator Mindset, Engineer Execution
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Abie blends software engineering discipline with creator intuition.
              The workflow prioritizes speed, authenticity, and measurable growth.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Currently based in Lisbon, traveling worldwide.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="cyber-card cyber-chamfer p-5 md:translate-y-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent-tertiary">
                Field Notes
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Travel snapshots, creator BTS footage, and story-led product
                demos.
              </p>
            </article>
            <article className="cyber-card cyber-chamfer p-5 md:-translate-y-3">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent-secondary">
                Ops Rhythm
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Weekly planning, quick approvals, and implementation sprints.
              </p>
            </article>
            <div className="cyber-chamfer terminal-window md:col-span-2">
              <div className="terminal-top">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  remote.session
                </span>
              </div>
              <div className="space-y-3 px-5 py-5 font-mono text-xs uppercase tracking-[0.15em]">
                <p className="terminal-line text-accent">values=speed|authenticity|growth</p>
                <p className="terminal-line text-accent-tertiary">
                  stack=ugcvideo+nextjs+conversionops
                </p>
                <p className="terminal-line text-accent-secondary">
                  status=online<span className="blink-cursor ml-1">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent">
                Services // Build + Content
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">
                Built for Conversion Velocity
              </h2>
            </div>
            <a className="cyber-btn cyber-btn-secondary cyber-chamfer-sm" href="mailto:hello@abiemaxey.com">
              Request Custom Quote
            </a>
          </div>

          <div className="-skew-y-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="cyber-card cyber-chamfer skew-y-1 p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[0.09em] text-accent-tertiary">
                  {service.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="terminal-line">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent-secondary">
            Pricing // Packages
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">
            Select Your Growth Mode
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            All packages include a discovery call and revision rounds.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricing.map((tier) => (
              <article
                key={tier.name}
                className={`cyber-chamfer relative ${
                  tier.highlight ? "gradient-border md:scale-[1.03]" : "cyber-card"
                }`}
              >
                <div className="cyber-chamfer h-full bg-card px-5 py-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {tier.name}
                  </p>
                  <p className="mt-4 font-heading text-2xl uppercase tracking-[0.08em] text-accent">
                    {tier.price}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {tier.details.map((detail) => (
                      <li key={detail} className="terminal-line">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent-tertiary">
            Testimonials // Outcomes
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl">
            Results from Founder and Brand Teams
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.author} className="cyber-card cyber-chamfer p-6">
                <p className="text-sm text-foreground">{item.quote}</p>
                <p className="mt-5 font-mono text-[0.63rem] uppercase tracking-[0.2em] text-accent">
                  {item.result}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {item.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-16 md:px-10 lg:px-16">
        <div className="cyber-card cyber-chamfer mx-auto max-w-7xl p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-accent">
                Contact // Remote Worldwide
              </p>
              <h2 className="mt-3 font-heading text-2xl uppercase tracking-[0.1em] sm:text-3xl">
                Ready to Build and Ship?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Email hello@abiemaxey.com or book a consult to map content and web
                execution together.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <a className="cyber-btn cyber-chamfer-sm" href="mailto:hello@abiemaxey.com">
                  Email Abie
                </a>
                <a
                  className="cyber-btn cyber-btn-outline cyber-chamfer-sm"
                  href="https://cal.com/abie-maxey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Booking Link
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                Socials
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li>
                  <a className="hover:text-accent" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    TikTok
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                Quick Links
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li>
                  <a className="hover:text-accent" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href="#testimonials">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
