"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Pillars", href: "#pillars" },
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Investment", href: "#investment" },
  { label: "Services", href: "#services" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" id="nav-top">
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#overview"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              background: "var(--brand-purple)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "var(--font-serif)",
              color: "#ffffff",
            }}
          >
            CL
          </span>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
            }}
          >
            Cinnamon Life
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--brand-purple)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            fontSize: 24,
            cursor: "pointer",
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
