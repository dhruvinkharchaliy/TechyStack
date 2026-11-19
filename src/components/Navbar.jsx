import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const services = [
  { to: '/services#web', label: 'Web Development' },
  { to: '/services#ai', label: 'AI Solutions' },
  { to: '/services#cloud', label: 'Cloud & DevOps' },
  { to: '/services#digital', label: 'Digital Transformation' },
  { to: '/services#security', label: 'Cybersecurity' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  const closeAll = () => { setOpen(false); setServicesOpen(false); };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeAll}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="28" height="28" rx="8" stroke="url(#lg)" strokeWidth="2.5"/>
            <path d="M10 21V11l6 6 6-6v10" stroke="url(#lg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#22d3ee"/><stop offset="1" stopColor="#8b5cf6"/>
              </linearGradient>
            </defs>
          </svg>
          Techy<span>Stack</span>
        </Link>

        <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>

        <nav>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <li><NavLink to="/" end onClick={closeAll}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeAll}>About Us</NavLink></li>
            <li><NavLink to="/team" onClick={closeAll}>Our Team</NavLink></li>
            <li
              className={servicesOpen ? 'open' : ''}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="dropdown-toggle" onClick={() => setServicesOpen(o => !o)}>
                Services <span className="caret">▾</span>
              </button>
              <ul className="dropdown">
                {services.map(s => (
                  <li key={s.to}><Link to={s.to} onClick={closeAll}>{s.label}</Link></li>
                ))}
                <li><Link to="/services" onClick={closeAll}>View All Services →</Link></li>
              </ul>
            </li>
            <li><NavLink to="/careers" onClick={closeAll}>Careers</NavLink></li>
            <li><NavLink to="/blog" onClick={closeAll}>Blog</NavLink></li>
            <li><NavLink to="/contact" onClick={closeAll}>Contact Us</NavLink></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary btn-sm" onClick={closeAll}>Get Started</Link>
        </div>
      </div>
    </header>
  );
}
