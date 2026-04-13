"use client";

import { portfolioData } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

const categoryIcons: Record<string, string> = {
  "Web & Frontend": "🎨",
  "Backend & APIs": "⚙️",
  "Databases & ORM": "🗄️",
  "Languages": "💻",
  "Testing": "🧪",
  "Cloud & DevOps": "☁️",
  "Project Management": "📋",
};

// Proficiency levels (out of 100)
const proficiency: Record<string, number> = {
  "Angular": 90,
  "React": 85,
  "Next.js (v15)": 85,
  "Node.js": 80,
  "JavaScript": 90,
  "TypeScript": 75,
  "SQL": 80,
  "PostgreSQL": 78,
  "MySQL": 75,
  "MongoDB": 70,
  "Prisma ORM": 72,
  "NestJS": 70,
  "Jest": 72,
  "Karma": 70,
  "Jasmine": 70,
  "Cypress": 68,
  "Laravel": 60,
  "HTML/CSS": 88,
  "Tailwind": 80,
  "AWS S3": 65,
  "AWS SES": 62,
  "JIRA": 80,
  "Trello": 80,
  "Swagger": 75,
  "Python": 55,
};

function SkillBar({ name, value }: { name: string; value: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
        >
          {value}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%`, transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const { skills } = portfolioData;

  const allSkills = Object.values(skills).flat();
  const uniqueSkills = [...new Set(allSkills)];

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">SKILLS</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            My <span className="gradient-text">Tech Stack</span>
          </h1>
          <p className="max-w-xl" style={{ color: "var(--text-secondary)" }}>
            A curated toolkit built over 4 years of hands-on development across
            frontend, backend, databases, and cloud.
          </p>
        </div>

        {/* Skill cloud */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <h2
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              All Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {uniqueSkills.map((skill) => (
                <span
                  key={skill}
                  className="badge transition-all hover:scale-105 cursor-default"
                  style={{ fontSize: "0.8rem", padding: "6px 14px" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Categories with bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card p-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{categoryIcons[category] || "🔧"}</span>
                <h2
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {category}
                </h2>
              </div>
              {items.map((skill) => (
                <SkillBar
                  key={skill}
                  name={skill}
                  value={proficiency[skill] ?? 70}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Key strengths */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))",
            border: "1px solid rgba(0,212,255,0.12)",
          }}
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Core Strengths
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "SPA Development", detail: "Angular & React expert" },
              { label: "SSR & SSG", detail: "Next.js App Router" },
              { label: "REST APIs", detail: "Node.js & NestJS" },
              { label: "Type Safety", detail: "TypeScript & Prisma" },
              { label: "Payment Integration", detail: "Razorpay & Open Money" },
              { label: "Unit & E2E Testing", detail: "Jest, Karma, Jasmine & Cypress" },
            ].map(({ label, detail }) => (
              <div
                key={label}
                className="p-4 rounded-xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
