import "./About.css";

const timeline = [
  { year: "1978", event: "Founded by BRAC in Manikganj to support rural artisans" },
  { year: "1987", event: "First Dhaka outlet opened — 50 artisans, 3 craft categories" },
  { year: "2008", event: "Jamdani weaving recognised by UNESCO as Intangible Heritage" },
  { year: "2015", event: "Expanded to 21 outlets across Bangladesh; artisan base hits 4,000+" },
  { year: "2020", event: "Launched online store; survived COVID with zero artisan layoffs" },
  { year: "2025", event: "4,200+ artisan partners; ৳ 42 crore annual revenue target" },
];

const team = [
  { name: "Nihad Kabir", role: "CEO", emoji: "👩‍💼" },
  { name: "Faruq Ahmed", role: "Head of Craft", emoji: "🧵" },
  { name: "Sadia Islam", role: "Digital Director", emoji: "📊" },
  { name: "Ratan Das", role: "Supply Chain", emoji: "🌿" },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <p className="section-label">Our Story</p>
          <h1>
            Trade, not aid.<br />
            <em>Heritage, not charity.</em>
          </h1>
          <p>
            Aarong was born in 1978 not as a business but as a lifeline — a way to give
            skilled artisans in rural Bangladesh a market for their work, at a fair price,
            without middlemen. Forty-seven years later, that mission hasn't changed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission container">
        <div className="mission-grid">
          <div className="mission-text">
            <p className="section-label">Why We Exist</p>
            <h2>Craft as economic engine</h2>
            <p>
              Bangladesh's handloom and handicraft sector employs over 4.8 million people.
              Without markets, generations of skill disappear. Aarong provides those markets —
              in Bangladesh, and increasingly around the world.
            </p>
            <p>
              Through BRAC, every taka of profit goes back into health, education and livelihood
              programmes for the communities that make Aarong possible.
            </p>
          </div>
          <div className="mission-stats">
            {[
              { v: "4,200+", l: "Artisan partners" },
              { v: "48", l: "Districts reached" },
              { v: "৳ 1,200 cr", l: "Lifetime artisan income" },
              { v: "21", l: "Retail outlets" },
            ].map((s) => (
              <div key={s.l} className="mission-stat">
                <p className="stat-val">{s.v}</p>
                <p className="stat-lbl">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>Milestones</p>
          <h2 style={{ textAlign: "center", marginBottom: 56 }}>47 years of craft</h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className={`tl-item ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="tl-year">{t.year}</div>
                <div className="tl-dot" />
                <div className="tl-card">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section container">
        <p className="section-label" style={{ textAlign: "center" }}>Leadership</p>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>The people behind Aarong</h2>
        <div className="team-grid">
          {team.map((t) => (
            <div key={t.name} className="team-card">
              <div className="team-avatar">{t.emoji}</div>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
