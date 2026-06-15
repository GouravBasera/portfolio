import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf" },
];

const EXPERIENCE = [
  {
    company: "OculusIT",
    role: "Web Developer",
    period: "Dec 2024 — Present",
    location: "Gurugram, IN",
    bullets: [
      "Build responsive, cross-browser sites in HTML, CSS, JS, PHP & WordPress.",
      "Lead hosting migrations with zero downtime and preserved SEO.",
      "Ship WCAG accessibility upgrades across client portfolios.",
      "Designed Jenzabar→WordPress automation for admissions workflows.",
    ],
    tag: "current",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Apr 2024 — Dec 2024",
    location: "Remote",
    bullets: [
      "Shipped 8+ client websites end-to-end on WordPress, PHP & JS.",
      "Custom features, integrations, responsive UIs to spec.",
      "Owned hosting, deploys, perf, SEO and post-launch support.",
    ],
  },
  {
    company: "ZummitLabs",
    role: "Junior Web Developer",
    period: "Feb 2024 — Jun 2024",
    location: "Ghaziabad, IN",
    bullets: [
      "Built features for a mental-health booking platform on MERN.",
      "Responsive UI + REST APIs for scheduling and accounts.",
      "Integrated Twilio for auth and SMS verification flows.",
    ],
  },
  {
    company: "Affrise Media",
    role: "Senior SEO Executive",
    period: "Apr 2022 — Feb 2024",
    location: "Gurugram, IN",
    bullets: [
      "Grew organic traffic from 500 → 6,120 monthly clicks.",
      "Technical audits, on-page work, backlink strategy execution.",
      "Partnered with devs on perf and information architecture.",
    ],
  },
];

const PROJECTS = [
{
name: "Around Within",
stack: ["React", "Node.js", "Express", "MongoDB", "Twilio"],
role: "Full Stack Contributor",
blurb:
"Contributed to a production mental-healthcare platform enabling therapy session bookings and consultations. Developed user authentication flows, responsive frontend components, deployment workflows, and integrated Twilio-powered verification features.",
impact:
"Helped deliver a production-ready platform used for patient onboarding and appointment management.",
link: "https://aroundwithin.in/",
color: "var(--accent-yellow)",
},

{
name: "La Roche University",
stack: ["WordPress", "Jenzabar", "WCAG", "Automation"],
role: "Lead Developer",
blurb:
"Led the university's migration to WordPress, rebuilt site architecture, automated Jenzabar course synchronization, and implemented accessibility improvements across the platform.",
impact:
"Reduced downtime, improved administrative workflows, strengthened accessibility compliance, and delivered a faster, more maintainable platform.",
link: "https://laroche.edu/",
color: "var(--accent-blue)",
},

{
name: "SCUHS Security Remediation",
stack: ["WordPress", "Security", "Sucuri"],
role: "Lead Remediation Engineer",
blurb:
"Investigated and remediated a compromised university website affected by malicious content injection and cloaking. Conducted root cause analysis, backdoor discovery, stakeholder communication, and post-incident hardening.",
impact:
"Successfully restored the website, removed malicious code, and implemented security controls to prevent future compromise.",
link: "https://www.scuhs.edu/",
color: "var(--accent-red)",
},

{
name: "Bien Leaf",
stack: ["Shopify", "Custom Development"],
role: "Developer",
blurb:
"Built and customized a Shopify storefront with tailored functionality and custom theme enhancements to support product discovery and purchasing workflows.",
impact:
"Delivered a production-ready ecommerce experience with custom business requirements.",
link: "https://www.bienleaf.com/",
color: "var(--accent-green)",
},

{
name: "Schreiner University",
stack: ["WordPress", "Support", "Maintenance"],
role: "Web Developer",
blurb:
"Provide ongoing website maintenance, plugin management, issue resolution, stakeholder support, and technical troubleshooting for a university web platform.",
impact:
"Ensured platform stability, operational continuity, and timely resolution of production issues.",
link: "https://schreiner.edu/",
color: "var(--accent-yellow)",
},

{
name: "DineCollege",
stack: ["WordPress", "Frontend Development"],
role: "Frontend Developer",
blurb:
"Contributed to frontend development, theme template creation, and responsive layout implementation for a higher-education dining platform.",
impact:
"Improved usability, visual consistency, and responsiveness across key user journeys.",
link: "https://www.dinecollege.edu/",
color: "var(--accent-blue)",
},
];

const STACK = {
"Core Technologies": [
"Java",
"Spring Boot",
"React",
"Node.js",
"WordPress"
],

"Backend & APIs": [
"Spring Boot",
"Node.js",
"Express.js",
"REST APIs",
"Authentication"
],

"Frontend": [
"React.js",
"JavaScript",
"Tailwind CSS",
"Bootstrap",
"HTML5",
"CSS3"
],

"Data & Integrations": [
"MongoDB",
"Jenzabar",
"Twilio",
],

"CMS & Platforms": [
"WordPress",
"Shopify"
],

"Developer Tools": [
"Git",
"GitHub",
"Postman",
"Jira",
"VS Code"
]
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-bold"
        >
          <span className="inline-block h-3 w-3 rotate-45 bg-foreground" />
          gourav.basera
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              target={n.label === "Resume" ? "_blank" : undefined}
              rel={n.label === "Resume" ? "noopener noreferrer" : undefined}
              className="rounded px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:Gouravbasera06@gmail.com"
          className="border-2 border-ink bg-foreground px-3 py-1.5 font-mono text-xs font-bold text-background transition-transform hover:-translate-y-0.5"
        >
          hire_me()
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink bg-grid"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-8">
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-ink bg-card px-3 py-1 font-mono text-xs shadow-brutal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--accent-green)" }}
              />
            </span>
            available for select work · q3 2026
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Software Developer
            <br />
            building{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Production-Ready</span>
              <span
                className="absolute inset-x-0 bottom-1 -z-0 h-4 md:h-6"
                style={{ background: "var(--accent-yellow)" }}
              />
            </span>
            <br />
            web applications.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            <strong className="text-foreground">Software Developer</strong> with
            3+ years of experience building{" "}
            <span className="font-mono">React</span>,{" "}
            <span className="font-mono">Node.js</span>,{" "}
            <span className="font-mono">Java</span>,{" "}
            <span className="font-mono">Spring Boot</span>,{" "}
            <span className="font-mono">PHP</span>, and{" "}
            <span className="font-mono">WordPress</span>. Currently at{" "}
            <strong className="text-foreground">OculusIT</strong>, Gurugram.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-foreground px-5 py-3 font-mono text-sm font-bold text-background shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0 hover:shadow-brutal-lg"
            >
              See projects{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-ink bg-card px-5 py-3 font-mono text-sm font-bold shadow-brutal transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="border-2 border-ink bg-card shadow-brutal-lg">
            <div className="flex items-center justify-between border-b-2 border-ink bg-foreground px-3 py-2 font-mono text-xs text-background">
              <span>~/whoami.json</span>
              <span className="flex gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--accent-red)" }}
                />
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--accent-yellow)" }}
                />
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--accent-green)" }}
                />
              </span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-relaxed">
              {`{
  "name": "Gourav Basera",
  "role": "Software Developer",
  "experience": "3+ years",
  "location": "Gurugram, IN",
  "specialization": "Web Applications",
  "stack": ["Java","React","Node","PHP"],
  "sites_shipped": "12+",
  "status": "open to opportunities"
}`}
            </pre>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-3">
            <Stat k="3+" v="years building" />
            <Stat k="12+" v="sites shipped" />
            <Stat k="WCAG" v="accessibility" />
            <Stat k="MERN" v="+ Spring" />
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-2 border-ink bg-card px-3 py-3">
      <div className="font-display text-2xl font-extrabold">{k}</div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {v}
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "React",
    "Node.js",
    "Java",
    "SpringBoot",
    "PHP",
    "WordPress",
    "MongoDB",
    "Tailwind",
    "Twillio",
    "REST APIs",
    "WCAG",
    "Shopify",
  ];
  const row = [...items, ...items];
  return (
    <section
      aria-hidden
      className="overflow-hidden border-b border-ink bg-foreground py-4 text-background"
    >
      <div className="flex animate-[marquee_30s_linear_infinite] gap-10 whitespace-nowrap font-mono text-sm">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            {s}
            <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

function SectionHeader({
  tag,
  title,
  sub,
}: {
  tag: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-foreground" />
          {tag}
        </div>
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {sub ? <p className="max-w-md text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <SectionHeader
          tag="01 — about"
          title="The TL;DR"
          sub="Frontend-leaning full-stack. WordPress whisperer. Spring learner. SEO past life."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Build"
            body="Responsive UIs, RESTful services, and CMS-driven sites that hold up in production."
          />
          <Card
            title="Migrate"
            body="Hosting moves, CMS replatforms (Ektron→WordPress), zero-downtime cutovers."
          />
          <Card
            title="Optimize"
            body="Perf budgets, asset & caching strategy, accessibility audits, security hardening."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="group relative border-2 border-ink bg-card p-6 shadow-brutal transition-transform hover:-translate-y-1 hover:shadow-brutal-lg">
      <div className="mb-4 inline-block border-2 border-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
        {title}
      </div>
      <p className="text-foreground/80">{body}</p>
    </div>
  );
}

function Experience() {
  return (
    <section id="work" className="border-b border-ink bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <SectionHeader
          tag="02 — experience"
          title="Where I've been shipping."
        />
        <div className="border-2 border-ink bg-card shadow-brutal-lg">
          {EXPERIENCE.map((e, i) => (
            <article
              key={e.company}
              className={`grid gap-4 px-6 py-8 md:grid-cols-12 md:gap-6 md:px-10 ${i !== EXPERIENCE.length - 1 ? "border-b-2 border-ink" : ""}`}
            >
              <div className="md:col-span-3">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {e.location}
                </div>
                {e.tag === "current" ? (
                  <span
                    className="mt-3 inline-block border-2 border-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                    style={{ background: "var(--accent-yellow)" }}
                  >
                    now
                  </span>
                ) : null}
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                  {e.role}{" "}
                  <span className="text-muted-foreground">@ {e.company}</span>
                </h3>
                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/85">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
return ( <section id="projects" className="border-b border-ink"> <div className="mx-auto max-w-7xl px-5 py-20 md:py-28"> <SectionHeader
       tag="03 — projects"
       title="Selected work."
       sub="Production systems, migrations, security remediation, and web platforms."
     />
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((p) => (
        <article
          key={p.name}
          className="group relative flex flex-col border-2 border-ink bg-card shadow-brutal transition-transform hover:-translate-y-1 hover:shadow-brutal-lg"
        >
          <div
            className="h-32 border-b-2 border-ink"
            style={{ background: p.color }}
          >
            <div className="flex h-full items-end justify-between px-5 pb-3 font-mono text-[10px] uppercase tracking-widest opacity-70">
              <span>project</span>
              <span>/{p.name.toLowerCase().replace(/\s+/g, "-")}</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.role}
            </div>

            <h3 className="font-display text-xl font-extrabold tracking-tight">
              {p.name}
            </h3>

            <p className="mt-3 text-sm text-foreground/80">
              {p.blurb}
            </p>

            <div className="mt-4 border-l-2 border-foreground pl-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Impact
              </p>

              <p className="mt-1 text-xs text-foreground/70">
                {p.impact}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold transition-opacity hover:opacity-70"
              >
                Visit Site ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
);
}

function Stack() {
return ( <section id="stack" className="border-b border-ink bg-card/40"> <div className="mx-auto max-w-7xl px-5 py-20 md:py-28"> <SectionHeader
       tag="04 — stack"
       title="Tools of the trade."
       sub="Technologies used across production systems, integrations, security remediation, and modern web applications."
     />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(STACK).map(([k, v]) => (
        <div
          key={k}
          className="border-2 border-ink bg-card p-5 shadow-brutal transition-transform hover:-translate-y-1"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {k}
            </div>

            {k === "Core Technologies" && (
              <span className="border border-ink px-2 py-0.5 font-mono text-[10px] uppercase">
                Primary
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {v.map((t) => (
              <span
                key={t}
                className="border-2 border-ink px-2 py-1 font-mono text-xs transition-colors hover:bg-foreground hover:text-background"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 border-2 border-ink bg-card p-6 shadow-brutal">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Current Focus
      </div>

      <p className="max-w-3xl text-sm text-foreground/80">
        Deepening expertise in Java, Spring Boot, backend architecture,
        REST API development, authentication, security, and scalable
        application design while continuing to build production-ready web
        applications.
      </p>
    </div>
  </div>
</section>
);
}


function Contact() {
  return (
    <section id="contact" className="border-b border-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="border-2 border-ink bg-foreground p-8 text-background shadow-brutal-lg md:p-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
            05 — contact
          </div>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-7xl">
            Got a project?
            <br />
            <span style={{ color: "var(--accent-yellow)" }}>
              Let&apos;s build it.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-background/70 md:text-lg">
            Open to full-time roles and select freelance engagements. Fastest
            reply via email.
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <ContactLink
              label="email"
              value="Gouravbasera06@gmail.com"
              href="mailto:Gouravbasera06@gmail.com"
            />
            <ContactLink
              label="phone"
              value="+91 70425 74559"
              href="tel:+917042574559"
            />
            <ContactLink
              label="linkedin"
              value="/in/gourav-basera"
              href="https://www.linkedin.com/in/gourav-basera/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex flex-col gap-1 border-2 border-background/30 bg-background/5 px-4 py-3 transition-colors hover:border-background hover:bg-background hover:text-foreground"
    >
      <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
        {label}
      </span>
      <span className="truncate font-mono text-sm">
        {value}{" "}
        <span className="opacity-60 transition-transform group-hover:translate-x-1 inline-block">
          ↗
        </span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-8 md:flex-row md:items-center">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gourav Basera · built with care in
          Gurugram
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          v1.0 · last_deploy:{" "}
          <span className="text-foreground">
            {new Date().toISOString().slice(0, 10)}
          </span>
        </div>
      </div>
    </footer>
  );
}
