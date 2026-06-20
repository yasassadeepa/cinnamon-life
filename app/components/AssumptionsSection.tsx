"use client";

export default function AssumptionsSection() {
  const assumptions = [
    "ClanB to provide creative direction, content strategy, final copy, videos, artwork information, and all supporting creative assets.",
    "All 3D models and spatial assets are provided by Cinnamon Life / ClanB. No 3D production costs are included in this proposal.",
    "Costs for components that do not depend on entry-point technology are priced identically across the QR Code, BLE Beacons, and AR + AI tiers.",
    "Pricing for the QR Code tier is as stated; BLE Beacons and AR + AI tiers are optional upgrades confirmed at time of order.",
    "Pricing excludes creation of video content and photography beyond what is explicitly listed.",
    "QR code design, printing, and placement (up to 24 points) are included within the Core Tour Platform cost for the QR tier.",
    "If the BLE tier is selected, beacon hardware procurement and installation coordination are included in the upgrade cost.",
    "LKR figures use the prevailing rate of 1 USD = LKR 333.46 and will vary with the exchange rate at time of invoicing.",
    "The AI Knowledge Layer content population assumes source materials are provided by ClanB.",
    "Server and API costs for the AR + AI tier are billed transparently and are not covered under the managed services retainer.",
  ];

  return (
    <section className="section" style={{ background: "var(--bg-secondary)", paddingBottom: 120 }}>
      <div className="section-inner grid-2-col">
        {/* Left Column */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Important Notes</div>
          <h2 className="section-title">
            Key <br />
            <span style={{ color: "var(--brand-purple)" }}>Assumptions</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 40, fontSize: "0.95rem" }}>
            Please review the following assumptions that underpin this proposal.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <div style={{ borderTop: "2px solid var(--text-primary)", paddingTop: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {assumptions.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    padding: "24px 0",
                    borderBottom: "1px solid var(--border-medium)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      flexShrink: 0,
                      width: 28,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
