"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code,
  Layers,
  Database,
} from "lucide-react";
import { portfolioData } from "@/lib/data";

const floatingTags = [
  "React", "Next.js", "Angular", "Node.js",
  "TypeScript", "PostgreSQL", "NestJS", "AWS",
  "MongoDB", "Tailwind", "Prisma", "SQL",
];

const stats = [
  { label: "Years Experience", value: "4" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "5+" },
];

const highlights = [
  {
    icon: Code,
    title: "Frontend Craft",
    desc: "Building pixel-perfect UIs with React, Angular & Next.js",
  },
  {
    icon: Database,
    title: "Backend Power",
    desc: "Scalable APIs & DBs with Node.js, NestJS & PostgreSQL",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "End-to-end delivery from concept to production",
  },
];

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen grid-bg flex items-center overflow-hidden"
        style={{ paddingTop: "100px" }}
      >
        {/* Dynamic cursor glow */}
        <div
          className="pointer-events-none fixed rounded-full blur-3xl"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
            left: mousePos.x - 300,
            top: mousePos.y - 300,
            transition: "left 0.3s ease, top 0.3s ease",
            zIndex: 1,
          }}
        />

        {/* Floating blobs */}
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl float-1 pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full blur-2xl float-2 pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              {/* Status badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22C55E", boxShadow: "0 0 8px #22C55E" }}
                />
                Available for opportunities
                <Sparkles size={12} />
              </div>

              {/* Name */}
              <h1
                className={`mb-4 font-bold leading-none transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  color: "var(--text-primary)",
                }}
              >
                {portfolioData.personal.name.split(" ")[0]}{" "}
                <span className="gradient-text">
                  {portfolioData.personal.name.split(" ")[1]}
                </span>
              </h1>

              {/* Title */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <span
                  className="text-xl font-medium"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}
                >
                  {portfolioData.personal.title}
                </span>
                <span style={{ color: "var(--border)" }}>·</span>
                <div className="flex items-center gap-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  <MapPin size={13} />
                  {portfolioData.personal.location}
                </div>
              </div>

              {/* Summary */}
              <p
                className={`mb-10 leading-relaxed max-w-lg text-base transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ color: "var(--text-secondary)" }}
              >
                {portfolioData.personal.summary}
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Link href="/projects" className="btn-primary">
                  View My Work
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get In Touch
                  <Mail size={15} />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-outline"
                  title="Download Resume"
                >
                  <Download size={15} />
                  Resume
                </a>
              </div>

              {/* Social links */}
              <div
                className={`flex items-center gap-3 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <span className="text-xs mr-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  FIND ME ON
                </span>
                {[
                  { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
                  { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    aria-label={label}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right – floating tags sphere */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              {/* Central orb */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(139,92,246,0.05) 60%, transparent 80%)",
                    boxShadow:
                      "0 0 0 1px rgba(0,212,255,0.1), 0 0 60px rgba(0,212,255,0.08)",
                  }}
                />
                <div
                  className="absolute inset-8 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
                    border: "1px solid rgba(0,212,255,0.08)",
                  }}
                />
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold z-10"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  KV
                </div>
                {/* Orbiting tags */}
                {floatingTags.slice(0, 8).map((tag, i) => {
                  const angle = (i / 8) * 360;
                  const r = 140;
                  const x = r * Math.cos((angle * Math.PI) / 180);
                  const y = r * Math.sin((angle * Math.PI) / 180);
                  return (
                    <div
                      key={tag}
                      className="absolute badge"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>

              {/* More tags in corners */}
              <div className="absolute top-0 right-0 flex flex-col gap-2">
                {floatingTags.slice(8).map((tag) => (
                  <span key={tag} className="badge float-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">WHAT I DO</span>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Turning Ideas Into{" "}
              <span className="gradient-text">Reality</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-8 group cursor-pointer">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              I&apos;m currently open to new opportunities. Whether you have a project in mind or
              just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight size={15} />
              </Link>
              <Link href="/projects" className="btn-outline">
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
