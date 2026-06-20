"use client";

import { useState } from "react";

type TierKey = "qr" | "ble" | "ar";

const tiers: { key: TierKey; label: string; color: string }[] = [
  { key: "qr", label: "QR Code", color: "var(--text-secondary)" },
  { key: "ble", label: "BLE Beacons", color: "var(--brand-purple)" },
  { key: "ar", label: "AR + AI", color: "var(--accent-cyan)" },
];

const features = [
  {
    id: "core",
    number: "01",
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
    number: "02",
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
    number: "03",
    title: "AI Knowledge Layer",
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
    number: "04",
    title: "Interactive Maps & Navigation",
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
    number: "05",
    title: "Architecture Experience",
    desc: "Immersive interactive section dedicated to the architectural story.",
    items: [
      "Interactive architecture section",
      "3D model integration",
      "Interactive hotspots with rich content",
      "AI-powered storytelling",
      "Video & 360° video integration",
      "Avatar narration & Ask AI",
    ],
    costs: { qr: "$7,000", ble: "$7,000", ar: "$7,000" },
  },
  {
    id: "interior",
    number: "06",
    title: "Interior Design Experience",
    desc: "Guided journey through design philosophy, materials, furniture, and spatial narrative.",
    items: [
      "Guided interior design tour",
      "Video integration of key spaces",
      "3D model integration",
      "Interactive hotspots at key moments",
      "Avatar narration & Ask AI",
    ],
    costs: { qr: "$3,500", ble: "$3,500", ar: "$3,500" },
  },
  {
    id: "art",
    number: "07",
    title: "Art Experience (Archive)",
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
    number: "08",
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
    number: "09",
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

  return (
    <section id="features" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column: Sticky Title & Filters */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Full Breakdown</div>
          <h2 className="section-title">
            Platform <span className="text-gradient-gold">Features</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 40, fontSize: "0.95rem" }}>
            Eight comprehensive feature areas, each carefully scoped and priced.
            Toggle tiers to compare costs.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tiers.map((tier) => (
              <button
                key={tier.key}
                onClick={() => setActiveTier(tier.key)}
                style={{
                  padding: "12px 20px",
                  border: "1px solid",
                  borderColor: activeTier === tier.key ? "var(--brand-purple)" : "var(--border-subtle)",
                  background: activeTier === tier.key ? "var(--brand-purple)" : "transparent",
                  color: activeTier === tier.key ? "#fff" : "var(--text-secondary)",
                  textAlign: "left",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {tier.label}
                {tier.key === "ble" && activeTier !== "ble" && (
                  <span style={{ fontSize: "0.7rem", color: "var(--brand-purple)" }}>★ Recommended</span>
                )}
                {tier.key === "ble" && activeTier === "ble" && (
                  <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}>★ Recommended</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Feature List */}
        <div>
          {features.map((f, index) => (
            <div key={f.id} style={{ marginBottom: 48 }}>
              {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 48 }} />}
              
              <div style={{ display: "flex", gap: 24, alignItems: "baseline" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--text-muted)", fontWeight: 300 }}>
                  {f.number}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {f.title}
                    </h3>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 600, color: "var(--brand-purple)" }}>
                      {f.costs[activeTier]}
                    </div>
                  </div>
                  
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
                    {f.desc}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {f.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--brand-purple)" }}>—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
