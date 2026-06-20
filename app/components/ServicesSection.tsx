"use client";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Infrastructure & Media Streaming",
      text: "High-concurrency AWS cloud for up to 50,000 interactions/month. Real-time media streaming for 3D assets, maps, and avatar voice. End-to-end encryption with PDPA/GDPR compliance.",
    },
    {
      number: "02",
      title: "SLA & Priority Support",
      text: "99.9% uptime guarantee with 24/7 automated monitoring. Dedicated Technical Account Manager. <2-hour response SLA for critical fixes; <12-hour for general updates.",
    },
    {
      number: "03",
      title: "AI Guardrail Tuning & Knowledge Optimisation",
      text: "Daily monitoring of chat logs to prevent AI hallucinations and ensure brand alignment. Ongoing prompt engineering, FAQ updates, and knowledge expansion.",
    },
    {
      number: "04",
      title: "Executive Guest Intelligence & Reporting",
      text: "Live analytics dashboard. Daily automated engagement reports with chat log access. Monthly Guest Intelligence Report for strategic decision-making.",
    },
  ];

  return (
    <section id="services" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Post-Launch Support</div>
          <h2 className="section-title">
            Managed Services <br />
            <span style={{ color: "var(--brand-purple)" }}>& SLA</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48, fontSize: "0.95rem" }}>
            Comprehensive monthly support covering infrastructure, AI tuning,
            and guest intelligence reporting.
          </p>
        </div>

        {/* Right Column */}
        <div>
          {services.map((s, index) => (
            <div key={s.title} style={{ marginBottom: 40 }}>
              {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 40 }} />}
              
              <div style={{ display: "flex", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--text-muted)", fontWeight: 300, paddingTop: 4 }}>
                  {s.number}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div style={{ 
            border: "1px solid var(--border-medium)", 
            padding: "24px", 
            marginTop: 48, 
            fontSize: "0.85rem", 
            color: "var(--text-secondary)",
            background: "var(--bg-primary)"
          }}>
            <strong style={{ color: "var(--text-primary)" }}>
              Out of scope:
            </strong>{" "}
            Creation of new tours, new floor maps, or any net-new platform
            features. These are quoted separately.
          </div>
        </div>
      </div>
    </section>
  );
}
