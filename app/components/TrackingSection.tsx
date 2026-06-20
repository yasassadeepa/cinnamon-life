"use client";

export default function TrackingSection() {
  const trackedItems = [
    {
      number: "01",
      label: "Guest journey paths",
      desc: "Sequence of spaces visited, in order",
    },
    {
      number: "02",
      label: "Dwell time per location",
      desc: "Time spent at each artwork, feature, or space",
    },
    {
      number: "03",
      label: "Engagement depth",
      desc: "Hotspots, videos, or Ask AI prompts interacted with",
    },
    {
      number: "04",
      label: "Drop-off points",
      desc: "Where guests disengage from a tour",
    },
    {
      number: "05",
      label: "Peak traffic patterns",
      desc: "Most visited spaces and timing",
    },
  ];

  const enabledItems = [
    {
      number: "06",
      label: "Personalised recommendations",
      desc: "Tailored suggestions based on what guests have explored",
    },
    {
      number: "07",
      label: "Future offer targeting",
      desc: "Inform which experiences to promote to specific segments",
    },
    {
      number: "08",
      label: "Heatmap analysis",
      desc: "Visual maps of movement across all floors",
    },
    {
      number: "09",
      label: "Content optimisation",
      desc: "Understand which stories generate the most engagement",
    },
    {
      number: "10",
      label: "Revenue intelligence",
      desc: "Correlate engagement with F&B, event, and spa revenue",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Intelligence Engine</div>
          <h2 className="section-title">
            User Behavior <br />
            <span style={{ color: "var(--brand-purple)" }}>Tracking</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48, fontSize: "0.95rem" }}>
            One of the most strategically valuable capabilities of the platform.
          </p>

          <div style={{
            borderLeft: "4px solid var(--brand-purple)",
            padding: "16px 20px",
            background: "var(--bg-primary)",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}>
            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>
              BLE Beacons & AR Tiers Only
            </strong>
            By using BLE Beacons, the platform can actively capture location and dwell data to unlock strategic value (such as personalized recommendations and targeted offers).
            <span style={{ color: "var(--accent-rose)", display: "block", marginTop: 8 }}>
              Note: This feature is unavailable in the QR Code tier, as QR codes are limited to static scans with no continuous awareness of guest movement.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* What is tracked */}
          <div style={{ marginBottom: 64 }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid var(--border-medium)" }}>
              What Is Tracked
            </h3>
            
            {trackedItems.map((item, index) => (
              <div key={item.label} style={{ marginBottom: 24 }}>
                {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 24 }} />}
                <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)", fontWeight: 300 }}>
                    {item.number}
                  </div>
                  <div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What it enables */}
          <div style={{ marginBottom: 64 }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid var(--border-medium)" }}>
              What This Enables
            </h3>
            
            {enabledItems.map((item, index) => (
              <div key={item.label} style={{ marginBottom: 24 }}>
                {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 24 }} />}
                <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)", fontWeight: 300 }}>
                    {item.number}
                  </div>
                  <div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary callout */}
          <div style={{
            borderTop: "1px solid var(--brand-purple)",
            paddingTop: 32,
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
          }}>
            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8, fontSize: "1rem" }}>
              In Summary
            </strong>
            User behavior tracking transforms the platform from a static content
            delivery tool into an active intelligence engine — one that learns from
            every guest visit and continuously improves the experience, the
            marketing, and the revenue outcomes for Cinnamon Life.
          </div>
        </div>
      </div>
    </section>
  );
}
