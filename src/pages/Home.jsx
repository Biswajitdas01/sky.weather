import { Link } from "react-router-dom";
import { products, metrics } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content container">
          <p className="section-label">Est. 1978 · Dhaka, Bangladesh</p>
          <h1 className="hero-headline">
            Craft that carries<br />
            <em>centuries of soul</em>
          </h1>
          <p className="hero-sub">
            Aarong connects Bangladesh's 4,200+ artisans with the world.
            Every thread, every stitch — a livelihood preserved.
          </p>
          <div className="hero-ctas">
            <Link to="/products" className="btn-primary">Explore Collection</Link>
            <Link to="/about" className="btn-outline">Our Story</Link>
          </div>
        </div>
        <div className="hero-pattern" aria-hidden="true">
          <div className="pattern-grid">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="pattern-cell">✦</span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="metrics-strip">
        <div className="container metrics-inner">
          {metrics.map((m) => (
            <div key={m.label} className="metric-item">
              <span className="metric-icon">{m.icon}</span>
              <p className="metric-value">{m.value}</p>
              <p className="metric-label">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="featured container">
        <div className="section-header">
          <p className="section-label">Curated Selection</p>
          <h2>Featured Crafts</h2>
          <Link to="/products" className="see-all">View all →</Link>
        </div>
        <div className="products-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container banner-inner">
          <div className="banner-text">
            <p className="section-label">Jamdani — UNESCO Intangible Heritage</p>
            <h2>Woven in light,<br /><em>carried through time</em></h2>
            <p>
              Jamdani weaving is listed by UNESCO as an Intangible Cultural Heritage of Humanity.
              Each metre takes up to a week to weave, on looms unchanged for a thousand years.
            </p>
            <Link to="/products" className="btn-primary">Shop Jamdani</Link>
          </div>
          <div className="banner-visual">
            <div className="banner-emoji">🎨</div>
            <div className="banner-ring" />
          </div>
        </div>
      </section>

      {/* Craft Values */}
      <section className="values container">
        <p className="section-label" style={{ textAlign: "center" }}>Why Aarong</p>
        <h2 style={{ textAlign: "center", marginBottom: 48 }}>Trade, not aid</h2>
        <div className="values-grid">
          {[
            { icon: "🤝", title: "Fair Wages", body: "Every artisan earns above-market wages. BRAC monitors earnings and audits annually." },
            { icon: "🌿", title: "Sustainable Materials", body: "Natural dyes, organic cotton, handloom silk. We refuse synthetic shortcuts." },
            { icon: "📚", title: "Skills Preserved", body: "We run 14 training centres where dying craft techniques are taught to the next generation." },
          ].map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
