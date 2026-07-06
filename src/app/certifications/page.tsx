"use client";

import { portfolioData } from "@/lib/data";
import { Award, ExternalLink, Database, Server, Component, Layers, Box, ShieldCheck } from "lucide-react";

const iconFor = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("sql")) return Database;
  if (n.includes("node")) return Server;
  if (n.includes("angular")) return Component;
  if (n.includes("next")) return Layers;
  if (n.includes("docker")) return Box;
  return Award;
};

const levelFor = (name: string) => {
  const match = name.match(/\(([^)]+)\)/);
  return match ? match[1] : null;
};

const skillFor = (name: string) => name.replace(/\s*\([^)]*\)\s*$/, "").trim();

export default function CertificationsPage() {
  const { certifications } = portfolioData;
  const providers = new Set(certifications.map((c) => c.issuer)).size;

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">CERTIFICATIONS</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Skills, <span className="gradient-text">Verified</span>
          </h1>
          <p className="max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Certifications earned across languages, frameworks, and tooling — each one backed
            by a verifiable link.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-md">
          <div>
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
            >
              {certifications.length}
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              Certifications
            </div>
          </div>
          <div>
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
            >
              {providers}
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              Providers
            </div>
          </div>
          <div>
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
            >
              3
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              SQL Tiers Cleared
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = iconFor(cert.name);
            const level = levelFor(cert.name);
            const skill = skillFor(cert.name);

            return (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-7 flex flex-col group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(139,92,246,0.08))",
                      border: "1px solid rgba(0,212,255,0.12)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  {level && <span className="badge text-xs">{level}</span>}
                </div>

                <h2
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {skill}
                </h2>
                <p
                  className="text-xs mb-6 flex items-center gap-1.5"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  <ShieldCheck size={12} />
                  {cert.issuer}
                </p>

                <div
                  className="flex items-center gap-1.5 text-xs font-medium mt-auto pt-4"
                  style={{ borderTop: "1px solid var(--border)", color: "var(--accent)" }}
                >
                  Verify Certificate
                  <ExternalLink size={11} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
