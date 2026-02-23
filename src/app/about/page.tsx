"use client";

import { portfolioData } from "@/lib/data";
import { User, MapPin, Phone, Mail, Github, Linkedin, Award } from "lucide-react";

export default function AboutPage() {
  const { personal, certifications } = portfolioData;

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">ABOUT ME</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            The Person <span className="gradient-text">Behind the Code</span>
          </h1>
          <div className="w-16 h-0.5 mt-2" style={{ background: "var(--accent)" }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left - Profile Card */}
          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-28">
              {/* Avatar */}
              <div className="mb-6">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  KV
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {personal.name}
                </h2>
                <p className="text-sm" style={{ color: "var(--accent)" }}>
                  {personal.title}
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                {[
                  { icon: MapPin, label: personal.location },
                  { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                  { icon: Github, label: "GitHub Profile", href: personal.github },
                  { icon: Linkedin, label: "LinkedIn Profile", href: personal.linkedin },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={13} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm transition-colors hover:underline"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <User size={18} />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Professional Summary
                </h2>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {personal.summary}
              </p>
            </div>

            {/* What I bring */}
            <div className="card p-8">
              <h2
                className="text-xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                What I Bring to the Table
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Clean Code", desc: "I write readable, maintainable code following best practices." },
                  { label: "Full Stack", desc: "Comfortable across the entire stack from DB to UI." },
                  { label: "Problem Solver", desc: "Strong analytical thinking to tackle complex challenges." },
                  { label: "Team Player", desc: "Collaborative, communicative, and adaptable to any team." },
                  { label: "Mentor", desc: "Experienced in training and upskilling colleagues in Angular." },
                  { label: "Continuous Learner", desc: "Passionate about staying current with tech trends." },
                ].map(({ label, desc }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl"
                    style={{
                      background: "var(--accent-soft)",
                      border: "1px solid rgba(0,212,255,0.08)",
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {label}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Award size={18} />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Certifications
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="px-4 py-2.5 rounded-xl"
                    style={{
                      background: "var(--bg-card-hover)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cert.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
