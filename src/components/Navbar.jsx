import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar({ currentPage, onNavigate, onThemeChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Team' },
    { id: 'academic', label: 'Academic' },
    { id: 'pyq', label: 'PYQ' },
    { id: 'organizer', label: 'Organizer' },
    { id: 'lectures', label: 'Lectures' },
    { id: 'doubt', label: 'Doubt Zone' },
    { id: 'whatsapp', label: 'WhatsApp' },
    { id: 'telegram', label: 'Telegram' },
    { id: 'suggestions', label: 'Suggestions' },
    { id: 'gate', label: 'GATE Database' },
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="top-ticker">
        <div className="ticker-track">
          <span>DSZ — DEBKANTA STUDY ZONE</span><span className="ticker-sep">·</span>
          <span>EST. 2025 · KOLKATA · ENGINEERING EXCELLENCE</span><span className="ticker-sep">·</span>
          <span>NOTES · PYQ · ORGANIZER · LECTURES · DOUBT ZONE · GATE DB</span><span className="ticker-sep">·</span>
          <span>DEVELOPED BY JEET PATHAK</span><span className="ticker-sep">·</span>
          <span>DSZ — DEBKANTA STUDY ZONE</span><span className="ticker-sep">·</span>
          <span>EST. 2025 · KOLKATA · ENGINEERING EXCELLENCE</span><span className="ticker-sep">·</span>
          <span>NOTES · PYQ · ORGANIZER · LECTURES · DOUBT ZONE · GATE DB</span><span className="ticker-sep">·</span>
          <span>ALL SYSTEMS OPERATIONAL</span><span className="ticker-sep">·</span>
        </div>
      </div>

      <nav className="navbar" id="navbar">
        <div className="logo-wrap">
          <div className="logo-mark">DSZ</div>
          <div className="logo-text"><em>D</em>SZ</div>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                onClick={() => handleNavClick(item.id)}
                className={currentPage === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="nav-pill"><div className="pulse-dot"></div>Online</div>
          <div 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={`mob-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <a 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{ '--i': index + 1 }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
