"use client";

import { useState } from "react";

type Tab = "qr" | "ble" | "ar";

const techData = {
  qr: {
    label: "QR Code",
    badge: "Tier 1",
    subtitle: "Proven & Cost-Effective",
    description:
      "Guests scan a printed QR code at each designated stop to unlock narration, maps, content, and tour progression. Works on any smartphone camera — no app required.",
    pros: [
      "Works on every smartphone, no app download required",
      "Lowest infrastructure cost — only printed signage needed",
      "Familiar to most guests — widely understood technology",
      "Fastest to deploy — no hardware installation",
      "Easy to maintain and update content behind the code",
      "Zero hardware failure risk",
    ],
    cons: [
      "Guests must actively stop and scan — interrupts natural flow",
      "Physical QR codes can be obscured, damaged, or vandalised",
      "No passive awareness of guest movement or dwell time",
      "Less premium feel — associated with menus and check-ins",
      "Analytics limited to scan events only",
      "Guests who skip a point receive no content at all",
      "User behavior tracking (heatmaps, dwell time) is not available",
    ],
  },
  ble: {
    label: "BLE Beacons",
    badge: "Tier 2 — Recommended",
    subtitle: "Seamless & Enterprise-Grade",
    description:
      "Bluetooth Low Energy beacons are small, battery-powered devices installed at each tour point. When a guest's phone comes within range, the platform automatically triggers relevant content — no scanning required.",
    pros: [
      "Seamless, hands-free guest experience — content triggers automatically",
      "Enterprise-grade — standard in premium hotels and luxury retail",
      "No guest action required — removes friction entirely",
      "Full user behavior tracking — dwell time, movement, engagement",
      "Aligns with luxury positioning — intelligence without effort",
      "More resilient content delivery — no dependency on scanning",
      "Richer personalisation — adapts based on journey path",
      "Future-ready — supports Phase 2 features (in-room, loyalty, dining)",
      "Industry-standard SLA support with beacon monitoring",
      "Meaningfully differentiates from QR-only competitors",
    ],
    cons: [
      "Requires a lightweight companion app component",
      "Beacon hardware must be installed and maintained (battery changes)",
      "Marginally higher upfront cost compared to QR",
      "Requires physical installation at each tour point",
      "Bluetooth must be enabled on the guest's device",
    ],
  },
  ar: {
    label: "AR + AI",
    badge: "Tier 3",
    subtitle: "Most Immersive Experience",
    description:
      "The property is spatially mapped, enabling guests to hold up their phone and see architecture, storytelling, wayfinding overlays, and interactive content in augmented reality — layered directly onto the physical environment.",
    pros: [
      "Most immersive experience — story layered on the real world",
      "Not limited to fixed points — works throughout the property",
      "Spectacular for marketing — shareable, social-media-worthy moments",
      "Combines spatial computing with AI intelligence",
      "Sets Cinnamon Life apart as a genuine innovator",
      "Full user behavior tracking — spatial, dwell, engagement",
    ],
    cons: [
      "Highest cost and complexity — full-property spatial mapping",
      "Longer delivery timeline",
      "Requires AR-capable device with camera permissions",
      "Older or lower-end smartphones may have limited performance",
      "Content updates may require re-anchoring if spaces change",
      "Not all guests comfortable with AR interactions",
      "Higher ongoing maintenance complexity and cost",
    ],
  },
};

export default function TechnologySection() {
  const [activeTab, setActiveTab] = useState<Tab>("ble");
  const tech = techData[activeTab];

  return (
    <section id="technology" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column: Title & Tab Selector */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Technology Comparison</div>
          <h2 className="section-title">
            Choose Your <br />
            <span style={{ color: "var(--brand-purple)" }}>Technology</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 40, fontSize: "0.95rem" }}>
            All three tiers share the same Concierge, AI Knowledge Layer, and
            content library. The difference is how the platform detects guest
            location and triggers the experience.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {(["qr", "ble", "ar"] as Tab[]).map((key) => {
              const d = techData[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    padding: "16px 24px",
                    border: "1px solid",
                    borderColor: activeTab === key ? "var(--brand-purple)" : "var(--border-subtle)",
                    background: activeTab === key ? "var(--brand-purple)" : "transparent",
                    color: activeTab === key ? "#fff" : "var(--text-secondary)",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {d.label}
                  {key === "ble" && activeTab !== "ble" && (
                    <span style={{ fontSize: "0.75rem", color: "var(--brand-purple)" }}>★ Recommended</span>
                  )}
                  {key === "ble" && activeTab === "ble" && (
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>★ Recommended</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Content */}
        <div>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 12px",
                background: "rgba(97, 45, 135, 0.1)",
                color: "var(--brand-purple)",
              }}>
                {tech.badge}
              </span>
            </div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>
              {tech.label}
            </h3>
            <p style={{ fontSize: "1.1rem", color: "var(--brand-purple)", fontWeight: 500, marginBottom: 24 }}>
              {tech.subtitle}
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 40 }}>
              {tech.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {/* Pros */}
              <div>
                <h4 style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 20,
                  letterSpacing: "0.02em",
                  borderBottom: "1px solid var(--border-medium)",
                  paddingBottom: 8,
                }}>
                  Advantages
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {tech.pros.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--brand-purple)" }}>✓</span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h4 style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 20,
                  letterSpacing: "0.02em",
                  borderBottom: "1px solid var(--border-medium)",
                  paddingBottom: 8,
                }}>
                  Considerations
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {tech.cons.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--text-muted)", opacity: 0.7 }}>✕</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
