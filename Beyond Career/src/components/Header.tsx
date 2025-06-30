import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-main-container">
      <nav className="navbar">
        
        <span className="brand">Beyond Career</span>

        {/* ── Hamburger ─────────────────────────────────── */}
        <button
          aria-label="Toggle navigation"
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* ── Nav Links ─────────────────────────────────── */}
        <ul className={`header-section ${open ? "show" : ""}`}>
          <li><a href="#home"        onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about"       onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#services"    onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#testimonials"onClick={() => setOpen(false)}>Testimonials</a></li>
          <li><a href="#contact"     onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
