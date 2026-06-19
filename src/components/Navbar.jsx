import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrollPosition } from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const scrolled = useScrollPosition();
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">আড়ং</span>
          <span className="logo-sub">AARONG</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/analytics" onClick={() => setMenuOpen(false)}>Analytics</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>Our Story</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-btn">
            <span>🛒</span>
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
          <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
