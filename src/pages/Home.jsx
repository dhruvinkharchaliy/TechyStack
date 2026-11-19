import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import heroImage from '../assets/hero-image.jpg';
import teamImage from '../assets/team_image.webp';

const services = [
  { icon: 'code', title: 'Web Development', desc: 'High-performance websites and web apps built with modern frameworks.' },
  { icon: 'brain', title: 'AI Solutions', desc: 'Machine learning models and LLM integrations tailored to your business.' },
  { icon: 'cloud', title: 'Cloud & DevOps', desc: 'Scalable infrastructure, CI/CD pipelines and 24/7 monitoring.' },
  { icon: 'shield', title: 'Cybersecurity', desc: 'Penetration testing, audits and zero-trust security implementations.' },
];

const testimonials = [
  { quote: 'TechyStack rebuilt our platform and page load times dropped by 60%. Their team feels like an extension of ours.', who: 'Sarah Mitchell', role: 'CTO, Nexora Retail' },
  { quote: 'The AI chatbot they built for our support desk now resolves 70% of tickets automatically. Incredible ROI.', who: 'David Chen', role: 'Head of Operations, FinEdge' },
  { quote: 'Professional, responsive and genuinely innovative. Our digital transformation is finally on track.', who: 'Priya Kapoor', role: 'CEO, HealthBridge' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div>
            <div className="hero-badge"><span className="dot" /> Trusted by 200+ businesses worldwide</div>
            <h1>We Build <span className="accent">Digital Experiences</span> That Drive Growth</h1>
            <p className="lead">
              TechyStack is your technology partner for web development, AI solutions,
              cloud infrastructure and digital transformation — engineered for scale,
              designed for impact.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>200+</b><span>Projects Delivered</span></div>
              <div className="stat"><b>98%</b><span>Client Retention</span></div>
              <div className="stat"><b>12+</b><span>Years Experience</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb">
              <img src={heroImage} alt="TechyStack team in server room" />
            </div>
            <div className="float-card f1"><b>99.9%</b> Uptime SLA</div>
            <div className="float-card f2"><b>24/7</b> Expert Support</div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>What We <span className="accent">Do Best</span></h2>
            <p>End-to-end technology services for startups and enterprises alike.</p>
          </Reveal>
          <div className="grid grid-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card service-card">
                  <div className="icon-wrap"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul><li>Expert team</li><li>Agile delivery</li><li>Ongoing support</li></ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 50 }}>
            <Reveal>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img src={teamImage} alt="TechyStack team collaborating" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: 16 }}>
                A Team Of <span className="accent">Passionate Engineers</span> & Designers
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: 24 }}>
                From our first line of code to full-scale enterprise deployments, TechyStack
                combines deep technical expertise with a relentless focus on delivering
                measurable business outcomes.
              </p>
              <Link to="/about" className="btn btn-primary">More About Us</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>What Our <span className="accent">Clients Say</span></h2>
          </Reveal>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.who} delay={i * 100}>
                <div className="card testimonial">
                  <div className="stars">★★★★★</div>
                  <blockquote>"{t.quote}"</blockquote>
                  <div className="who"><b>{t.who}</b> · {t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Ready To Build Something Amazing?</h2>
            <p>Tell us about your project — we'll get back to you within 24 hours.</p>
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
