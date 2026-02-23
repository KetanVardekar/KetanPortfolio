"use client";

import { portfolioData } from "@/lib/data";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">EXPERIENCE</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            My <span className="gradient-text">Journey</span>
          </h1>
          <p className="max-w-xl" style={{ color: "var(--text-secondary)" }}>
            3+ years of building scalable web applications across diverse industries and
            tech stacks.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, var(--accent), rgba(0,212,255,0.1), transparent)",
            }}
          />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div key={job.company} className="relative pl-20 group">
                {/* Dot */}
                <div
                  className="absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    background: idx === 0 ? "var(--accent)" : "var(--bg-card)",
                    border: `2px solid ${idx === 0 ? "var(--accent)" : "var(--border)"}`,
                    color: idx === 0 ? "var(--bg)" : "var(--text-secondary)",
                    boxShadow: idx === 0 ? "0 0 20px var(--accent-glow)" : "none",
                  }}
                >
                  <Briefcase size={18} />
                </div>

                {/* Content */}
                <div className="card p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {idx === 0 && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: "rgba(34,197,94,0.1)",
                              color: "#22C55E",
                              border: "1px solid rgba(34,197,94,0.2)",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            CURRENT
                          </span>
                        )}
                      </div>
                      <h2
                        className="text-xl font-bold"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {job.company}
                      </h2>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        {job.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className="flex items-center gap-1.5 text-sm mb-1"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        <Calendar size={12} />
                        {job.duration}
                      </div>
                      <div
                        className="flex items-center gap-1.5 text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <MapPin size={12} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3">
                        <ChevronRight
                          size={14}
                          className="flex-shrink-0 mt-1"
                          style={{ color: "var(--accent)" }}
                        />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {resp}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total experience callout */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))",
            border: "1px solid rgba(0,212,255,0.12)",
          }}
        >
          <p
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
          >
            3+ Years
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            of professional full stack development experience across 3 companies
          </p>
        </div>
      </div>
    </div>
  );
}
