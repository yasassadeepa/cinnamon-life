"use client";

export default function PersonalizationSection() {
  const categories = [
    {
      number: "01",
      title: "Multilingual Capability",
      items: [
        "AI Concierge narration and tours in multiple languages",
        "Automatic language detection or selection at journey start",
        "Improved accessibility for international visitors",
      ],
    },
    {
      number: "02",
      title: "Loyalty & Discovery Integration",
      items: [
        "Personalised experiences based on Cinnamon Discovery tier",
        "Promotion of member-exclusive offers and benefits",
        "Strengthened engagement with Cinnamon Discovery ecosystem",
      ],
    },
    {
      number: "03",
      title: "Behaviour-Based Personalisation",
      items: [
        "Tailored recommendations based on interests and past engagement",
        "Context-aware suggestions throughout the property visit",
        "More premium, differentiated journey for returning visitors",
      ],
    },
    {
      number: "04",
      title: "Dining & Hospitality Extensions",
      items: [
        "Restaurant discovery and personalised dining recommendations",
        "Interactive menus with imagery, video, and wine pairings",
        "AI Dining Assistant for reservations and dietary guidance",
        "In-room AI Concierge for facilities, bookings, and spa",
      ],
    },
    {
      number: "05",
      title: "Events & Venue Personalisation",
      items: [
        "AI-assisted venue recommendations by event type",
        "Interactive guides for ballrooms, meeting rooms, and outdoor spaces",
        "Lead capture and routing for weddings, conferences, and exhibitions",
      ],
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Guest Experience</div>
          <h2 className="section-title">
            Personalised <br />
            <span style={{ color: "var(--brand-purple)" }}>Guest Journey</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48, fontSize: "0.95rem" }}>
            The platform is designed to grow with guest needs, extending the
            Concierge&apos;s intelligence throughout every touchpoint.
          </p>
        </div>

        {/* Right Column */}
        <div>
          {categories.map((cat, index) => (
            <div key={cat.title} style={{ marginBottom: 40 }}>
              {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 40 }} />}
              
              <div style={{ display: "flex", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--text-muted)", fontWeight: 300, paddingTop: 4 }}>
                  {cat.number}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 16 }}>
                    {cat.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {cat.items.map((item, i) => (
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
