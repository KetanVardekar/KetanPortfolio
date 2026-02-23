"use client";

import { portfolioData } from "@/lib/data";
import { ExternalLink, Code2, Layers, Activity, Users } from "lucide-react";

const projectIcons = [Activity, Layers, Users];
const projectColors = [
  { from: "rgba(0,212,255,0.12)", to: "rgba(139,92,246,0.08)" },
  { from: "rgba(139,92,246,0.12)", to: "rgba(0,212,255,0.08)" },
  { from: "rgba(34,197,94,0.12)", to: "rgba(0,212,255,0.08)" },
];

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">PROJECTS</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h1>
          <p className="max-w-xl" style={{ color: "var(--text-secondary)" }}>
            A selection of projects showcasing my full stack capabilities — from healthcare
            to blockchain to HR tech.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = projectIcons[idx % projectIcons.length];
            const colors = projectColors[idx % projectColors.length];

            return (
              <div key={project.name} className="card p-7 flex flex-col group">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                    border: "1px solid rgba(0,212,255,0.12)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h2
                  className="text-lg font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.name}
                </h2>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="badge text-xs">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    <Code2 size={11} />
                    {project.tools.length} technologies
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: "var(--accent)" }}
                    >
                      View Project
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Private
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured callout */}
        <div
          className="mt-12 rounded-2xl p-8"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Treatment Tracker — Highlight Project
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                A production healthcare application built for Cell & Gene Therapy patient management.
                Uses Next.js 15 with server components, a Node.js REST API documented via Swagger,
                and comprehensive Jest test coverage for reliability in a critical domain.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:w-48 justify-end">
              {["Next.js 15", "Node.js", "SQL", "Jest", "Swagger"].map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
