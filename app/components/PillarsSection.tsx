"use client";

const pillars = [
  {
    number: "01",
    title: "The Concierge",
    description:
      "A custom AI avatar that greets visitors, narrates their journey, and answers questions across architecture, interior design, art, dining, and venues.",
    highlights: [
      "Not a generic chatbot — a digital expert on Cinnamon Life",
      "Answers nuanced questions and guides guests proactively",
      "Adapts narration based on guest location in the property",
      "Powered by a dedicated AI Knowledge Layer",
    ],
  },
  {
    number: "02",
    title: "Guided Tours",
    description:
      "Four curated tour tracks give visitors a structured way to experience the property, supported by interactive maps, hotspots, 3D models, and narration.",
    highlights: [
      "Architecture Tour — design story, materials & iconic features",
      "Interior Design Tour — philosophy, furniture & spatial storytelling",
      "Art Tour — collection, artist stories & cultural context",
      "Signature Spaces Tour — key destinations within the property",
    ],
  },
  {
    number: "03",
    title: "The Design Archive",
    description:
      "Showcases Cinnamon Life's art collection — paintings, sculptures, and featured works — through storytelling, guided walkthroughs, and avatar narration.",
    highlights: [
      "Brings cultural and artistic identity to life",
      "Rich media storytelling for every artwork",
      "Avatar-narrated guided art walkthroughs",
      "Location-triggered storytelling at each artwork",
    ],
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-inner grid-2-col">
        {/* Left Column: Title */}
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <div className="section-label">Project Vision</div>
          <h2 className="section-title">
            Three Integrated <br />
            <span className="text-gradient-gold">Pillars</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 56, fontSize: "0.95rem" }}>
            Together, these pillars deliver an end-to-end guest experience — from
            first welcome to deep discovery.
          </p>
        </div>

        {/* Right Column: Content List */}
        <div>
          {pillars.map((pillar, index) => (
            <div key={pillar.number} style={{ marginBottom: 48 }}>
              {index !== 0 && <div className="divider-sharp" style={{ marginBottom: 48 }} />}
              
              <div style={{ display: "flex", gap: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "var(--text-muted)", fontWeight: 300, paddingTop: 4 }}>
                  {pillar.number}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 16 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 24 }}>
                    {pillar.description}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {pillar.highlights.map((h, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--brand-purple)" }}>—</span>
                        <span>{h}</span>
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
