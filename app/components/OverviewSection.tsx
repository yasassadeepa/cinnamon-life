"use client";

export default function OverviewSection() {
  return (
    <section id="overview" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner">
        <div className="section-label">Executive Summary</div>
        <h2 className="section-title">
          The Future of Guest&nbsp;
          <span className="text-gradient-gold">Experience</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          The Cinnamon Life Digital Discovery Platform brings together three core
          pillars — an AI Concierge, Guided Tours, and a Design Archive — creating
          a cohesive, intelligent, and immersive guest journey.
        </p>

        {/* Key Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {[
            {
              icon: "🧠",
              color: "rgba(129,140,248,0.12)",
              title: "Custom AI Knowledge Layer",
              text: "Trained specifically on Cinnamon Life — covering architecture, interior design, art, dining, and venue information.",
            },
            {
              icon: "🏨",
              color: "rgba(94,234,212,0.12)",
              title: "24/7 Digital Concierge",
              text: "A highly knowledgeable digital concierge available around the clock, speaking in Cinnamon Life's voice.",
            },
            {
              icon: "📈",
              color: "rgba(251,191,36,0.12)",
              title: "Continuously Evolving",
              text: "The AI layer grows smarter over time, forming the foundation for all future guest services and experiences.",
            },
          ].map((item) => (
            <div key={item.title} className="card" style={{ padding: "32px 28px" }}>
              <div
                className="feature-icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quick tier overview */}
        <div
          className="glass-gold"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "32px",
            overflow: "hidden",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: 20,
            }}
          >
            Three Technology Tiers Available
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Trigger Method</th>
                  <th style={{ textAlign: "right" }}>Investment (USD)</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                  <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>
                    QR Code
                  </td>
                  <td>Guest scans a QR code at each stop</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>
                    ~$46,000
                  </td>
                </tr>
                <tr
                  style={{
                    background: "rgba(196, 163, 90, 0.06)",
                  }}
                >
                  <td
                    style={{
                      fontWeight: 600,
                      color: "var(--gold-300)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    BLE Beacons
                    <span
                      className="badge badge-gold"
                      style={{ fontSize: "0.65rem", padding: "2px 8px" }}
                    >
                      Recommended
                    </span>
                  </td>
                  <td style={{ color: "var(--gold-200)" }}>
                    Automatic location detection via Bluetooth
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                      color: "var(--gold-300)",
                      fontWeight: 600,
                    }}
                  >
                    ~$54,000
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>
                    AR + AI
                  </td>
                  <td>Augmented Reality with spatial mapping</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>
                    ~$65,500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
