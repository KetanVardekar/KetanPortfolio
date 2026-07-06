"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Rocket } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function FeaturedProject() {
  const project = portfolioData.flagshipProject;

  return (
    <div
      className="relative rounded-2xl p-8 md:p-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,212,255,0.10) 0%, var(--bg-card) 45%, rgba(139,92,246,0.08) 100%)",
        border: "1px solid rgba(0,212,255,0.25)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 40px var(--accent-glow)",
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pulse-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-5">
          <span
            className="badge flex items-center gap-1.5"
            style={{ borderColor: "rgba(0,212,255,0.35)" }}
          >
            <Rocket size={11} />
            FLAGSHIP PROJECT
          </span>
          <span
            className="text-xs px-2 py-1 rounded-full flex items-center gap-1.5"
            style={{
              background: "rgba(34,197,94,0.12)",
              color: "rgba(34,197,94,0.9)",
              border: "1px solid rgba(34,197,94,0.2)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Live in Production
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {project.name}
        </h2>
        <p
          className="text-base font-medium mb-4"
          style={{ color: "var(--accent)" }}
        >
          {project.tagline}
        </p>
        <p
          className="max-w-2xl leading-relaxed mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-2xl">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool) => (
            <span key={tool} className="badge text-xs">
              {tool}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link href={project.caseStudyHref} className="btn-primary">
            Read the Case Study
            <ArrowRight size={15} />
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Visit Live Site
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
