"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Ketan! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
    const whatsappUrl = `https://wa.me/917977120757?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const inputStyles = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "10px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-body)",
  };

  return (
    <div className="section" style={{ paddingTop: "140px" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="badge mb-4 inline-block">CONTACT</span>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Have a project in mind or want to collaborate? I&apos;m always open to discussing
            new opportunities and interesting ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-7">
              <h2
                className="text-lg font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Contact Information
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: personal.email,
                    href: `mailto:${personal.email}`,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: personal.phone,
                    href: `tel:${personal.phone}`,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: personal.location,
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--accent-soft)",
                        border: "1px solid rgba(0,212,255,0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p
                        className="text-xs mb-0.5"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm transition-colors hover:underline"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="card p-7">
              <h2
                className="text-lg font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Social Profiles
              </h2>
              <div className="space-y-3">
                {[
                  { icon: Github, label: "GitHub", href: personal.github, handle: "@ketan-vardekar" },
                  { icon: Linkedin, label: "LinkedIn", href: personal.linkedin, handle: "ketan-vardekar" },
                ].map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl transition-all hover:scale-[1.02]"
                    style={{
                      background: "var(--bg-card-hover)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {label}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        {handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <h2
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Send a Message
              </h2>

              {submitted ? (
                <div
                  className="text-center py-16 rounded-xl"
                  style={{ background: "var(--accent-soft)", border: "1px solid rgba(0,212,255,0.15)" }}
                >
                  <CheckCircle size={48} style={{ color: "var(--accent)", margin: "0 auto 16px" }} />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="btn-outline mt-6"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs mb-1.5"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyles}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs mb-1.5"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyles}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Collaboration"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      style={inputStyles}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-1.5"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyles, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                    <Send size={14} />
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    I typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
