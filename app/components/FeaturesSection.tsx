"use client";

import { useState } from "react";

type TierKey = "qr" | "ble" | "ar";

const tiers: { key: TierKey; label: string; color: string }[] = [
  { key: "qr", label: "QR Code", color: "var(--text-secondary)" },
  { key: "ble", label: "BLE Beacons", color: "var(--gold-300)" },
  { key: "ar", label: "AR + AI", color: "var(--accent-blue)" },
];

const features = [
  {
    id: "core",
    icon: "⚡",
    bg: "rgba(251,191,36,0.1)",
    title: "Core Tour Platform",
    desc: "The technical foundation underpinning all four tours and every feature of the platform.",
    items: [
      "Mobile-first, web browser-based (no app download)",
      "Framework setup and architecture",
      "Up to 24 entry points",
      "Session management and tour selection",
      "Content management framework",
      "Analytics tracking",
      "AI-triggered tour recommendations",
    ],
    costs: { qr: "$5,000", ble: "$7,000", ar: "$14,000" },
  },
  {
    id: "avatar",
    icon: "🤖",
    bg: "rgba(94,234,212,0.1)",
    title: "AI Concierge Avatar",
    desc: "Fully custom digital avatar present at every step of the guest journey.",
    items: [
      "Custom Cinnamon Life branded avatar",
      "Location-aware greetings",
      "Context-aware narration",
      "Voice playback for immersive experience",
      "Tour introductions and guided storytelling",
      "Interactive experiences with buttons",
      "AI Chat — guests can ask anything",
    ],
    costs: { qr: "$3,500", ble: "$3,500", ar: "$3,500" },
  },
  {
    id: "ai",
    icon: "🧠",
    bg: "rgba(129,140,248,0.1)",
    title: "AI Knowledge & Intelligence Layer",
    desc: "The AI \"brain\" that powers the Concierge, guided tours, Ask AI, and every intelligent interaction.",
    items: [
      "Architecture knowledge base",
      "Interior design knowledge base",
      "Art collection knowledge base",
      "Venue information database",
      "Guided Q&A — structured responses",
      "Context-aware location responses",
      "FAQ library setup",
      "Brand-aligned AI prompt engineering",
      "Hallucination prevention",
      "\"Ask AI\" contextual chat",
    ],
    costs: { qr: "$14,500", ble: "$14,500", ar: "$14,500" },
  },
  {
    id: "maps",
    icon: "🗺️",
    bg: "rgba(251,113,133,0.1)",
    title: "Interactive Maps & Guided Navigation",
    desc: "Level-by-level floor maps with real-time positioning and guided navigation.",
    items: [
      "7 floor maps with level-by-level detail",
      "\"You Are Here\" real-time positioning",
      "Interactive hotspots linked to content",
      "Tour progression indicators",
      "Multi-floor navigation structure",
      "Avatar narration at every hotspot",
    ],
    costs: { qr: "$7,500", ble: "$9,500", ar: "$14,000" },
  },
  {
    id: "arch",
    icon: "🏛️",
    bg: "rgba(196,163,90,0.1)",
    title: "Architecture Experience",
    desc: "Immersive interactive section dedicated to the architectural story.",
    items: [
      "Interactive architecture section",
      "3D model integration (assets by ClanB)",
      "Interactive hotspots with rich content",
      "AI-powered storytelling",
      "Video & 360° video integration",
      "Avatar narration & Ask AI",
    ],
    costs: { qr: "$7,000", ble: "$7,000", ar: "$7,000" },
  },
  {
    id: "interior",
    icon: "🛋️",
    bg: "rgba(94,234,212,0.08)",
    title: "Interior Design Experience",
    desc: "Guided journey through design philosophy, materials, furniture, and spatial narrative.",
    items: [
      "Guided interior design tour",
      "Video integration of key spaces",
      "3D model integration (assets by ClanB)",
      "Interactive hotspots at key moments",
      "Avatar narration & Ask AI",
    ],
    costs: { qr: "$3,500", ble: "$3,500", ar: "$3,500" },
  },
  {
    id: "art",
    icon: "🎨",
    bg: "rgba(251,191,36,0.08)",
    title: "Art Experience (Design Archive)",
    desc: "Curated showcase of the art collection, bringing cultural identity to life.",
    items: [
      "Art collection overview section",
      "Featured artwork stories with rich media",
      "Guided art tour with narration",
      "Location-triggered storytelling",
      "Avatar narration & Ask AI",
    ],
    costs: { qr: "$3,000", ble: "$3,000", ar: "$3,000" },
  },
  {
    id: "engagement",
    icon: "🌍",
    bg: "rgba(129,140,248,0.08)",
    title: "Enhanced Guest Engagement",
    desc: "Multilingual support and event space showcasing for international guests.",
    items: [
      "Multilingual AI Concierge narration",
      "Automatic language selection",
      "Interactive event space showcase",
      "Venue highlights with capacity details",
      "Simple enquiry form for event leads",
    ],
    costs: { qr: "$2,000", ble: "$2,000", ar: "$2,000" },
  },
  {
    id: "tracking",
    icon: "📊",
    bg: "rgba(251,113,133,0.08)",
    title: "User Behavior Tracking",
    desc: "Recommendations, heatmaps & offers powered by real-time user behavior analytics.",
    items: [
      "User behavior heatmaps",
      "Personalized recommendations engine",
      "Location-based offers & promotions",
      "Session analytics & engagement metrics",
      "A/B testing framework",
    ],
    costs: { qr: "-", ble: "$4,000", ar: "$4,000" },
  },
];

export default function FeaturesSection() {
  const [activeTier, setActiveTier] = useState<TierKey>("ble");
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <section
      id="features"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="section-label">Full Feature Breakdown</div>
        <h2 className="section-title">
          Platform <span className="text-gradient-gold">Features</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 16 }}>
          Eight comprehensive feature areas, each carefully scoped and priced.
          Toggle tiers to compare costs.
        </p>

        {/* Notes */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "var(--gold-400)" }}>ℹ</span>
            All 3D models and spatial assets are provided by Cinnamon Life /
            ClanB. No 3D production costs included.
          </div>
        </div>

        {/* Tier selector */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {tiers.map((tier) => (
            <button
              key={tier.key}
              onClick={() => setActiveTier(tier.key)}
              style={{
                padding: "10px 24px",
                borderRadius: 100,
                border:
                  activeTier === tier.key
                    ? "1px solid var(--border-gold)"
                    : "1px solid var(--border-subtle)",
                background:
                  activeTier === tier.key
                    ? "rgba(196, 163, 90, 0.1)"
                    : "transparent",
                color:
                  activeTier === tier.key
                    ? "var(--gold-300)"
                    : "var(--text-secondary)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {tier.label}
              {tier.key === "ble" && (
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: "0.65rem",
                    background: "rgba(196,163,90,0.2)",
                    padding: "2px 6px",
                    borderRadius: 4,
                    color: "var(--gold-300)",
                  }}
                >
                  ★
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => {
            const isExpanded = expandedFeature === f.id;
            return (
              <div
                key={f.id}
                className="card"
                style={{
                  padding: "28px 24px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() =>
                  setExpandedFeature(isExpanded ? null : f.id)
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div
                    className="feature-icon"
                    style={{ background: f.bg }}
                  >
                    {f.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      color: "var(--gold-300)",
                    }}
                  >
                    {f.costs[activeTier]}
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    marginBottom: isExpanded ? 16 : 0,
                  }}
                >
                  {f.desc}
                </p>

                {isExpanded && (
                  <div
                    style={{
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {f.items.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: "0.84rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent-emerald)",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}

                    {/* All 3 tier costs */}
                    <div
                      style={{
                        marginTop: 12,
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      {tiers.map((t) => (
                        <div
                          key={t.key}
                          style={{
                            padding: "6px 14px",
                            borderRadius: 8,
                            fontSize: "0.78rem",
                            fontFamily: "var(--font-mono)",
                            background:
                              t.key === activeTier
                                ? "rgba(196,163,90,0.12)"
                                : "rgba(255,255,255,0.03)",
                            border:
                              t.key === activeTier
                                ? "1px solid var(--border-gold)"
                                : "1px solid var(--border-subtle)",
                            color:
                              t.key === activeTier
                                ? "var(--gold-300)"
                                : "var(--text-muted)",
                          }}
                        >
                          {t.label}: {f.costs[t.key]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 12,
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textAlign: "right",
                  }}
                >
                  {isExpanded ? "Click to collapse" : "Click for details"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
