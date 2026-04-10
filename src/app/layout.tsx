"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";

function LeetCodeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}
import { portfolioData } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

function Navbar({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5"
        }`}
        style={{
          background: scrolled ? "rgba(var(--bg-rgb, 7, 12, 24), 0.85)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-all"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                border: "1px solid rgba(0,212,255,0.2)",
                fontFamily: "var(--font-mono)",
              }}
            >
              KV
            </div>
            <span
              className="font-semibold text-sm hidden sm:block"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}
            >
              Ketan Vardekar
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
          }}
        >
          <X size={18} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold transition-colors"
            style={{
              fontFamily: "var(--font-display)",
              color: pathname === link.href ? "var(--accent)" : "var(--text-primary)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer
      className="py-12 mt-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Code2 size={16} style={{ color: "var(--accent)" }} />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Built with Next.js 15 · Tailwind CSS
          </span>
        </div>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          © 2025 Ketan Vardekar. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <Github size={15} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <Mail size={15} />
          </a>
          <a
            href={portfolioData.personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <LeetCodeIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ketan Vardekar – Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer with 4 years of experience in Angular, React, Next.js 15, Node.js, and SQL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
