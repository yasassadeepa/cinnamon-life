"use client";

export default function OverviewSection() {
  return (
    <section id="overview" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column: Headings */}
        <div>
          <div className="section-label">Executive Summary</div>
          <h2 className="section-title">
            A Disciplined Approach to<br />
            <span className="text-gradient-gold">Guest Experience</span>
          </h2>
        </div>

        {/* Right Column: Content */}
        <div>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            The Cinnamon Life Digital Discovery Platform brings together three core
            pillars — an AI Concierge, Guided Tours, and a Design Archive — creating
            a cohesive, intelligent, and immersive guest journey.
          </p>

          <div className="divider-sharp" />

          {/* Key Highlights as clean list items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 56 }}>
            {[
              {
                number: "01",
                title: "Custom AI Knowledge Layer",
                text: "Trained specifically on Cinnamon Life — covering architecture, interior design, art, dining, and venue information.",
              },
              {
                number: "02",
                title: "24/7 Digital Concierge",
                text: "A highly knowledgeable digital concierge available around the clock, speaking in Cinnamon Life's voice.",
              },
              {
                number: "03",
                title: "Continuously Evolving",
                text: "The AI layer grows smarter over time, forming the foundation for all future guest services and experiences.",
              },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--text-muted)", fontWeight: 300, paddingTop: 4 }}>
                  {item.number}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="divider-sharp" />

          {/* Quick tier overview in a clean table */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 20 }}>
              Three Technology Tiers
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table className="proposal-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Trigger Method</th>
                    <th style={{ textAlign: "right" }}>Investment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 500 }}>QR Code</td>
                    <td>Guest scans a QR code at each stop</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>~$46,000</td>
                  </tr>
                  <tr className="highlight-row">
                    <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      BLE Beacons
                      <span className="badge badge-gold">Recommended</span>
                    </td>
                    <td>Automatic location detection via Bluetooth</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>~$54,000</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>AR + AI</td>
                    <td>Augmented Reality with spatial mapping</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>~$65,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
