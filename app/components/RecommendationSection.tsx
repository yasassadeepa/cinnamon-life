"use client";

export default function RecommendationSection() {
  const reasons = [
    {
      number: "01",
      title: "The Guest Experience is Fundamentally Superior",
      text: "With QR, the guest must notice, stop, open camera, aim, and scan. Every step is a friction point. With BLE, the guest simply walks — and the platform responds. The experience feels intelligent, welcoming, and effortless.",
    },
    {
      number: "02",
      title: "It Reflects the Positioning of Cinnamon Life",
      text: "A luxury hotel that asks guests to scan QR codes is using the same technology as a food court menu. BLE-triggered experiences are the standard in premium hotels, high-end retail, and airports — they communicate quality without saying a word.",
    },
    {
      number: "03",
      title: "Better Data, Better Insights",
      text: "BLE captures where guests go, how long they stay, and what they engage with — without requiring any action. QR analytics are limited to the binary fact of a scan. User behavior tracking is only available with BLE or AR tiers.",
    },
    {
      number: "04",
      title: "Foundation for Future Phases",
      text: "The BLE infrastructure installed for Phase 1 powers in-room concierge, loyalty recognition, dining recommendations, and personalised journeys in Phase 2.",
    },
    {
      number: "05",
      title: "Cost Delta is Justified",
      text: "The difference is approximately $8,000 in upfront investment. Given the total platform investment and long-term operational benefits, this premium is highly justifiable.",
    },
  ];

  return (
    <section
      style={{
        background: "var(--bg-secondary)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,163,90,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div className="badge badge-gold" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: "0.7rem" }}>★</span>
          Our Recommendation
        </div>
        <h2 className="section-title">
          Why <span className="text-gradient-gold">BLE Beacons</span> is the
          Best Choice
        </h2>
        <p
          className="section-subtitle"
          style={{ marginBottom: 56 }}
        >
          The QR method is the market baseline — most vendors are proposing it.
          BLE delivers a qualitatively different experience for a modest
          additional investment.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.number}
              className="card"
              style={{
                padding: "28px 32px",
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "rgba(196,163,90,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--gold-400)",
                  flexShrink: 0,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {r.number}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
