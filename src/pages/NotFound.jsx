import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ paddingTop: 160, textAlign: "center", fontFamily: "Inter, sans-serif" }}>
      <p style={{ fontSize: 80, marginBottom: 16 }}>🧵</p>
      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 48, marginBottom: 12 }}>
        Thread Lost
      </h1>
      <p style={{ color: "#5a5a5a", marginBottom: 32 }}>
        This page doesn't exist — but our artisans do.
      </p>
      <Link
        to="/"
        style={{
          background: "#006A4E", color: "#fff", padding: "12px 28px",
          borderRadius: 4, fontWeight: 500, letterSpacing: "0.08em",
          textTransform: "uppercase", fontSize: 13,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
