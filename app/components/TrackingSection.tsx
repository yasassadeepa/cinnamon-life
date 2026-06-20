"use client";

export default function TrackingSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="section-label">Intelligence Engine</div>
        <h2 className="section-title">
          User Behavior{" "}
          <span className="text-gradient-gold">Tracking</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 16 }}>
          One of the most strategically valuable capabilities of the platform.
        </p>

        {/* Availability notice */}
        <div
          className="glass-gold"
          style={{
            borderRadius: "var(--radius-md)",
            padding: "18px 24px",
            marginBottom: 48,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            fontSize: "0.9rem",
            color: "var(--gold-200)",
            borderLeft: "4px solid var(--gold-500)",
          }}
        >
          <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>⚠️</span>
          <span>
            <strong>User Behavior Tracking is exclusively available with BLE Beacons (and AR + AI) tiers.</strong>{" "}
            By using BLE Beacons, the platform can actively capture location and dwell data to unlock massive strategic value (such as **personalized guest recommendations**, **highly targeted future offers**, and **visual user heatmaps** of movement).
            <span style={{ color: "var(--accent-rose)", fontWeight: "bold", display: "block", marginTop: "6px" }}>
              Note: This feature is completely unavailable in the QR Code base system, as QR codes are limited to static, discrete scans with no continuous awareness of guest movement.
            </span>
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          {/* What is tracked */}
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              What Is Tracked
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                {
                  icon: "🗺️",
                  label: "Guest journey paths",
                  desc: "Sequence of spaces visited, in order",
                },
                {
                  icon: "⏱️",
                  label: "Dwell time per location",
                  desc: "Time spent at each artwork, feature, or space",
                },
                {
                  icon: "📱",
                  label: "Engagement depth",
                  desc: "Hotspots, videos, or Ask AI prompts interacted with",
                },
                {
                  icon: "📍",
                  label: "Drop-off points",
                  desc: "Where guests disengage from a tour",
                },
                {
                  icon: "📈",
                  label: "Peak traffic patterns",
                  desc: "Most visited spaces and timing",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card"
                  style={{
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What it enables */}
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              What This Enables
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                {
                  icon: "🎯",
                  label: "Personalised recommendations",
                  desc: "Tailored suggestions based on what guests have explored",
                },
                {
                  icon: "🎁",
                  label: "Future offer targeting",
                  desc: "Inform which experiences to promote to specific segments",
                },
                {
                  icon: "🗺️",
                  label: "Heatmap analysis",
                  desc: "Visual maps of movement across all floors",
                },
                {
                  icon: "📝",
                  label: "Content optimisation",
                  desc: "Understand which stories generate the most engagement",
                },
                {
                  icon: "💰",
                  label: "Revenue intelligence",
                  desc: "Correlate engagement with F&B, event, and spa revenue",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card"
                  style={{
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary callout */}
        <div
          className="glass-gold"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "28px 32px",
            marginTop: 48,
            fontSize: "0.92rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
          }}
        >
          <strong
            style={{ color: "var(--gold-300)", display: "block", marginBottom: 8 }}
          >
            In Summary
          </strong>
          User behavior tracking transforms the platform from a static content
          delivery tool into an active intelligence engine — one that learns from
          every guest visit and continuously improves the experience, the
          marketing, and the revenue outcomes for Cinnamon Life.
        </div>
      </div>
    </section>
  );
}
