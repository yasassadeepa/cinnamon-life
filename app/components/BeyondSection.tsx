"use client";

export default function BeyondSection() {
  const channels = [
    {
      number: "01",
      title: "Social Media",
      items: [
        "AI-powered experiences shared across platforms",
        "Shareable AR moments for Instagram, TikTok, and LinkedIn",
        "Amplify Cinnamon Life's identity to global audiences",
      ],
    },
    {
      number: "02",
      title: "Print Marketing",
      items: [
        "QR and BLE-enabled advertising in brochures and print campaigns",
        "Transform static print into interactive digital experiences",
        "Drive engagement from physical collateral into the platform",
      ],
    },
    {
      number: "03",
      title: "Global Reach",
      items: [
        "Web-based architecture accessible from any device, anywhere",
        "Prospective guests and planners can explore remotely",
        "AI Concierge welcomes off-site audiences equally",
      ],
    },
    {
      number: "04",
      title: "Campaigns & Promotions",
      items: [
        "Promote restaurants, events, and seasonal offers through AI engagement",
        "Campaign-specific QR codes on TV and out-of-home media",
        "Time-limited promotions activated without redevelopment",
      ],
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Extended Reach</div>
          <h2 className="section-title">
            Beyond the <br />
            <span style={{ color: "var(--brand-purple)" }}>Property</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48, fontSize: "0.95rem" }}>
            The platform&apos;s AI layer and content reach prospective guests, event
            planners, and travellers anywhere in the world.
          </p>
        </div>

        {/* Right Column */}
        <div>
          {channels.map((ch, index) => (
            <div key={ch.title} style={{ marginBottom: 40 }}>
              {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 40 }} />}
              
              <div style={{ display: "flex", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--text-muted)", fontWeight: 300, paddingTop: 4 }}>
                  {ch.number}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 16 }}>
                    {ch.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {ch.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.9rem", color: "var(--text-secondary)" }}>
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
