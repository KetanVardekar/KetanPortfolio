"use client";

import { portfolioData } from "@/lib/data";
import { GraduationCap, Award, Star } from "lucide-react";

export default function EducationPage() {
  const { education, certifications } = portfolioData;

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">EDUCATION</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Academic <span className="gradient-text">Foundation</span>
          </h1>
        </div>

        {/* Education Card */}
        <div className="space-y-6 mb-16">
          {education.map((edu) => (
            <div key={edu.degree} className="card p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(139,92,246,0.12))",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "var(--accent)",
                  }}
                >
                  <GraduationCap size={28} />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {edu.degree}
                  </h2>
                  <p
                    className="text-base mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--text-secondary)",
                        border: "1px solid rgba(0,212,255,0.1)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      📅 {edu.year}
                    </span>
                    <div className="flex items-center gap-2">
                      <Star
                        size={14}
                        fill="var(--accent)"
                        style={{ color: "var(--accent)" }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
                      >
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CGPA visual */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  CGPA / 10
                </p>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${(parseFloat(edu.cgpa) / 10) * 100}%`,
                      transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>0</span>
                  <span className="text-xs" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{edu.cgpa}/10</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>10</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-10">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Certifications
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div key={cert.name} className="card p-6 text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <Award size={20} />
                </div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                >
                  {cert.issuer}
                </p>
                <div
                  className="mt-4 pt-4 text-xs"
                  style={{
                    borderTop: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Verified ✓
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BTech highlight */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))",
            border: "1px solid rgba(0,212,255,0.12)",
          }}
        >
          <GraduationCap size={32} style={{ color: "var(--accent)", margin: "0 auto 16px" }} />
          <p
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Gujarat Technological University
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            Bachelor&apos;s in Electronic & Communication · Class of 2022 · CGPA 8.37
          </p>
        </div>
      </div>
    </div>
  );
}
