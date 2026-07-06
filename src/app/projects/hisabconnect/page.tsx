import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Users,
  UserCheck,
  ShieldCheck,
  Layers,
  Lock,
  Smartphone,
  GaugeCircle,
  ClipboardCheck,
  Wrench,
  ScrollText,
  Banknote,
} from "lucide-react";
import { portfolioData } from "@/lib/data";

export const metadata = {
  title: "HisabConnect Case Study – Ketan Vardekar",
  description:
    "How I designed and built HisabConnect, a multi-tenant payroll & attendance SaaS for Indian SMEs, solo and end-to-end.",
};

const roleFeatures = [
  {
    icon: Users,
    role: "Business Owner",
    items: [
      "Dashboard with a live attendance snapshot, employee count, and outstanding balance",
      "Full employee lifecycle — CRUD, bulk CSV import, soft delete, per-employee financial ledger",
      "One-tap daily roll-call and a month-view calendar, both joining-date-aware",
      "Automated payroll — daily & monthly wages, overtime, half-day proration, holiday-aware working days",
      "Excel & PDF report export, month lock/unlock with cascading ledger recalculation",
    ],
  },
  {
    icon: UserCheck,
    role: "Employee (Self-Service)",
    items: [
      "Own running balance and current month's earnings/overtime breakdown",
      "Read-only attendance calendar on a rolling 4-month window",
      "Last 3 processed salary slips with full opening/closing ledger detail",
    ],
  },
  {
    icon: ShieldCheck,
    role: "Super Admin (Platform)",
    items: [
      "Cross-tenant business directory — suspend, activate, or cascade-delete any tenant",
      "Platform-wide role management with self-change and last-admin-standing safeguards",
      "Manual subscription assignment by phone number — plan tier, employee limit, expiry",
      "System health dashboard — live DB connectivity, uptime/memory, rolling error buffer",
    ],
  },
];

const technicalHighlights = [
  {
    icon: Banknote,
    title: "One payroll engine, three consumers",
    body: "SalaryService.calculateSalary() is the single source of truth reused by salary processing, the monthly report, and the live wage-summary widget — so the three can never quietly drift out of sync.",
  },
  {
    icon: Lock,
    title: "Server-side RBAC, always",
    body: "4 roles × 12 granular permissions, re-validated on every request. The frontend hides nav items and buttons for UX — it is never the actual security boundary.",
  },
  {
    icon: Layers,
    title: "An independent self-service auth path",
    body: "Resolves a logged-in user to their own employee record via phone-number matching scoped to the correct business — a separate path from the owner/staff RBAC flow, not bolted onto it.",
  },
  {
    icon: GaugeCircle,
    title: "Performance treated as a feature",
    body: "Page-size-selectable pagination across every previously-unbounded list, gzip response compression, and debounced search — added deliberately, not as an afterthought.",
  },
  {
    icon: Smartphone,
    title: "Installable, offline-capable PWA",
    body: "A Workbox-generated service worker caches app assets, making the mobile experience suited to on-the-ground use by foremen and site supervisors.",
  },
  {
    icon: ClipboardCheck,
    title: "A 9-step guarded request lifecycle",
    body: "Helmet → CORS → rate limiter → request ID/logging → subscription guard → JWT auth → RBAC check → Zod validation → Prisma → async audit log — every mutating request follows the same hardened path.",
  },
];

const decisions = [
  {
    title: "Never trust the UI for security",
    body: "Every permission check that matters is re-verified server-side, independent of whatever the frontend chose to render. Hiding a button is a UX nicety, not an access control.",
  },
  {
    title: "Defer billing, ship the product",
    body: "Razorpay integration would have been premature for a pre-revenue product with no paying customers yet — so subscriptions are admin-assigned manually today, and automated billing is queued for when it's actually load-bearing.",
  },
  {
    title: "Diagnose before patching",
    body: "A user reported the PWA sidebar intermittently showing an incomplete nav list. Rather than guessing, I ran independent parallel investigations, which traced it to a subtle interaction between service-worker response caching and two separately-fetched pieces of session state (role vs. permissions) — and fixed that root cause instead of the surface symptom.",
  },
];

const stack = [
  {
    group: "Frontend",
    tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Zustand", "React Hook Form", "Zod"],
  },
  {
    group: "Backend",
    tools: ["Node.js", "Express", "Prisma 5", "PostgreSQL", "JWT", "Helmet", "pino"],
  },
  {
    group: "Integrations",
    tools: ["2Factor.in (SMS OTP)", "Resend (Email)", "Cloudflare Turnstile", "Supabase"],
  },
];

export default function HisabConnectCaseStudy() {
  const project = portfolioData.flagshipProject;

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm mb-10 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>

        {/* Hero */}
        <span className="badge mb-4 inline-block">CASE STUDY</span>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {project.name}
        </h1>
        <p className="text-lg font-medium mb-5" style={{ color: "var(--accent)" }}>
          {project.tagline}
        </p>
        <p className="leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
          {project.description} Built solo — product decisions, schema design, backend and
          frontend implementation, security hardening, and QA — from a Next.js 15 frontend and
          an Express/TypeScript API to a PostgreSQL database via Prisma.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live Site
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl mb-16"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <span className="badge mb-4 inline-block">THE PROBLEM</span>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Payroll on paper doesn&apos;t scale — or reconcile
          </h2>
          <p className="leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Small Indian manufacturing and contracting businesses typically track attendance and
            calculate payroll on paper registers or ad hoc spreadsheets — error-prone, hard to
            audit, and giving workers no visibility into how their pay was actually calculated.
            HisabConnect digitizes that entire workflow end to end: mark attendance, let a real
            calculation engine turn it into salary, track advances and payments against a running
            balance, and give employees direct visibility into their own records.
          </p>
        </section>

        {/* What I Built */}
        <section className="mb-16">
          <span className="badge mb-4 inline-block">WHAT I BUILT</span>
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            One product, three distinct experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {roleFeatures.map(({ icon: Icon, role, items }) => (
              <div key={role} className="card p-6 flex flex-col">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {role}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed pl-3 relative"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="absolute left-0 top-2 w-1 h-1 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Under the Hood */}
        <section className="mb-16">
          <span className="badge mb-4 inline-block">UNDER THE HOOD</span>
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Engineering decisions that hold up under scrutiny
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {technicalHighlights.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <Icon size={16} />
                  </div>
                  <h3
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Decisions & Debugging */}
        <section className="mb-16">
          <span className="badge mb-4 inline-block">DECISIONS THAT MATTERED</span>
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Product thinking, not just implementation
          </h2>
          <div className="relative pl-8">
            <div className="timeline-line" />
            <div className="space-y-8">
              {decisions.map(({ title, body }) => (
                <div key={title} className="relative">
                  <span
                    className="absolute -left-8 top-1 w-3 h-3 rounded-full"
                    style={{ background: "var(--accent)", boxShadow: "0 0 0 4px var(--accent-soft)" }}
                  />
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <span className="badge mb-4 inline-block">TECH STACK</span>
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Built with
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {stack.map(({ group, tools }) => (
              <div key={group} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench size={14} style={{ color: "var(--accent)" }} />
                  <h3
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}
                  >
                    {group}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="badge text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <div
          className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
            border: "1px solid rgba(0,212,255,0.15)",
          }}
        >
          <ScrollText size={22} style={{ color: "var(--accent)", margin: "0 auto 12px" }} />
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            See it running
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
            HisabConnect is live and in active use — the fastest way to see the product thinking
            above is to click through it yourself.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit hisabconnect.com
              <ExternalLink size={15} />
            </a>
            <Link href="/projects" className="btn-outline">
              Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
