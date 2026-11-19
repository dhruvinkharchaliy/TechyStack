import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="28" height="28" rx="8" stroke="url(#flg)" strokeWidth="2.5"/>
                <path d="M10 21V11l6 6 6-6v10" stroke="url(#flg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#22d3ee"/><stop offset="1" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
              Techy<span>Stack</span>
            </Link>
            <p>Empowering businesses with cutting-edge web development, AI solutions, cloud infrastructure and digital transformation services.</p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">⌥</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#web">Web Development</Link></li>
              <li><Link to="/services#ai">AI Solutions</Link></li>
              <li><Link to="/services#cloud">Cloud & DevOps</Link></li>
              <li><Link to="/services#digital">Digital Transformation</Link></li>
              <li><Link to="/services#security">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/careers">Open Positions</Link></li>
              <li><Link to="/blog">Latest Articles</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TechyStack. All rights reserved.</span>
          <span>Crafted with precision. Powered by innovation.</span>
        </div>
      </div>
    </footer>
  );
}
