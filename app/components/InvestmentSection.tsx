"use client";

export default function InvestmentSection() {
  const featureRows = [
    { name: "Core Tour Platform", qr: "$5,000", ble: "$7,000", ar: "$14,000" },
    { name: "AI Concierge Avatar", qr: "$3,500", ble: "$3,500", ar: "$3,500" },
    {
      name: "AI Knowledge & Intelligence Layer",
      qr: "$14,500",
      ble: "$14,500",
      ar: "$14,500",
    },
    {
      name: "Interactive Maps & Guided Navigation",
      qr: "$7,500",
      ble: "$9,500",
      ar: "$14,000",
    },
    {
      name: "Architecture Experience",
      qr: "$7,000",
      ble: "$7,000",
      ar: "$7,000",
    },
    {
      name: "Interior Design Experience",
      qr: "$3,500",
      ble: "$3,500",
      ar: "$3,500",
    },
    {
      name: "Art Experience (Design Archive)",
      qr: "$3,000",
      ble: "$3,000",
      ar: "$3,000",
    },
    {
      name: "Enhanced Guest Engagement",
      qr: "$2,000",
      ble: "$2,000",
      ar: "$2,000",
    },
    {
      name: "User Behavior Tracking (Recommendations, Heatmaps & Offers)",
      qr: "-",
      ble: "$4,000",
      ar: "$4,000",
    },
  ];

  const groupRows = [
    {
      name: "Concierge (AI Avatar + Knowledge Layer)",
      qr: "$18,000",
      ble: "$18,000",
      ar: "$18,000",
    },
    {
      name: "Core Platform & Maps",
      qr: "$12,500",
      ble: "$16,500",
      ar: "$28,000",
    },
    {
      name: "Architecture & Interior Experiences",
      qr: "$10,500",
      ble: "$10,500",
      ar: "$10,500",
    },
    {
      name: "Design Archive (Art Experience)",
      qr: "$3,000",
      ble: "$3,000",
      ar: "$3,000",
    },
    {
      name: "Enhanced Guest Engagement",
      qr: "$2,000",
      ble: "$2,000",
      ar: "$2,000",
    },
    {
      name: "User Behavior Tracking",
      qr: "-",
      ble: "$4,000",
      ar: "$4,000",
    },
  ];

  return (
    <section
      id="investment"
      className="section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="section-inner">
        <div className="section-label">Investment Summary</div>
        <h2 className="section-title">
          Phase 1 <span className="text-gradient-gold">Investment</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Transparent, per-feature pricing across all three technology tiers.
        </p>

        {/* Tier comparison cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 60,
          }}
        >
          {/* QR */}
          <div className="tier-card">
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 8,
              }}
            >
              Tier 1
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              QR Code
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: 24,
              }}
            >
              Proven & cost-effective
            </p>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "var(--font-mono)",
                marginBottom: 4,
              }}
            >
              ~$46,000
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                marginBottom: 24,
              }}
            >
              ~Rs. 15,339,160 LKR
            </div>
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: 16,
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
            >
              Monthly maintenance:{" "}
              <span
                style={{
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-primary)",
                }}
              >
                $800/mo
              </span>
            </div>
          </div>

          {/* BLE */}
          <div className="tier-card recommended">
            <div
              className="badge badge-gold"
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: "0.65rem",
              }}
            >
              ★ Recommended
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                marginBottom: 8,
              }}
            >
              Tier 2
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--gold-200)",
                marginBottom: 4,
              }}
            >
              BLE Beacons
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--gold-400)",
                marginBottom: 24,
              }}
            >
              Seamless & enterprise-grade
            </p>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
                marginBottom: 4,
              }}
              className="text-gradient-gold"
            >
              ~$54,000
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--gold-400)",
                fontFamily: "var(--font-mono)",
                marginBottom: 24,
              }}
            >
              ~Rs. 18,006,840 LKR
            </div>
            <div
              style={{
                borderTop: "1px solid var(--border-gold)",
                paddingTop: 16,
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
            >
              Monthly maintenance:{" "}
              <span
                style={{
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  color: "var(--gold-300)",
                }}
              >
                $1,250/mo
              </span>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                Includes 1 physical visit per month
              </div>
            </div>
          </div>

          {/* AR */}
          <div className="tier-card">
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 8,
              }}
            >
              Tier 3
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              AR + AI
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: 24,
              }}
            >
              Most immersive experience
            </p>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "var(--font-mono)",
                marginBottom: 4,
              }}
            >
              ~$65,500
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                marginBottom: 24,
              }}
            >
              ~Rs. 21,841,630 LKR
            </div>
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: 16,
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
            >
              Monthly maintenance:{" "}
              <span
                style={{
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-primary)",
                }}
              >
                $1,800/mo
              </span>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                Server & API costs billed separately
              </div>
            </div>
          </div>
        </div>

        {/* Detailed cost table */}
        <div
          className="glass-gold"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: 32,
            marginBottom: 40,
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
            Per-Feature Cost Breakdown
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ textAlign: "right" }}>QR Code</th>
                  <th style={{ textAlign: "right" }}>BLE Beacons</th>
                  <th style={{ textAlign: "right" }}>AR + AI</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.name}>
                    <td
                      style={{
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {row.qr}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                        color: "var(--gold-300)",
                      }}
                    >
                      {row.ble}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {row.ar}
                    </td>
                  </tr>
                ))}
                <tr className="highlight-row">
                  <td>Total — Phase 1</td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ~$46,000
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ~$54,000
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ~$65,500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Grouped cost table */}
        <div
          className="glass"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: 32,
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
            By Capability Area
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Feature Group</th>
                  <th style={{ textAlign: "right" }}>QR Code</th>
                  <th style={{ textAlign: "right" }}>BLE Beacons</th>
                  <th style={{ textAlign: "right" }}>AR + AI</th>
                </tr>
              </thead>
              <tbody>
                {groupRows.map((row) => (
                  <tr key={row.name}>
                    <td
                      style={{
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {row.qr}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                        color: "var(--gold-300)",
                      }}
                    >
                      {row.ble}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {row.ar}
                    </td>
                  </tr>
                ))}
                <tr className="highlight-row">
                  <td>Total Estimated Investment</td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ~$46,000
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ~$54,000
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ~$65,500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              marginTop: 16,
              fontStyle: "italic",
            }}
          >
            LKR figures use the prevailing rate of 1 USD = LKR 333.46 and will
            vary with the exchange rate at time of invoicing.
          </p>
        </div>
      </div>
    </section>
  );
}
