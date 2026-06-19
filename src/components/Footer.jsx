import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-text">আড়ং</span>
            <span className="logo-sub">AARONG</span>
          </div>
          <p>Celebrating Bangladesh's living craft heritage. Every purchase supports a family of artisans.</p>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/about">Our Story</Link>
        </div>

        <div className="footer-links">
          <h4>Crafts</h4>
          <a href="#">Jamdani Weaving</a>
          <a href="#">Kantha Embroidery</a>
          <a href="#">Dhakai Muslin</a>
          <a href="#">Terracotta</a>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <p>📍 Dhaka, Bangladesh</p>
          <p>✉️ craft@aarong.com</p>
          <p>📞 +880 2-9886150</p>
          <div className="social-row">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">in</a>
            <a href="#" aria-label="Twitter">tw</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2025 Aarong — BRAC. All rights reserved.</p>
        <p>Built with React · Powered by artisan heritage</p>
      </div>
    </footer>
  );
}
