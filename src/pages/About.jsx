import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

const values = [
  { icon: 'target', title: 'Excellence', desc: 'We never settle for mediocre. Every line of code and every pixel is crafted with care.' },
  { icon: 'handshake', title: 'Partnership', desc: 'We treat client goals as our own, working as an extension of your team.' },
  { icon: 'lightbulb', title: 'Innovation', desc: 'We continuously explore emerging technologies to keep our clients ahead of the curve.' },
  { icon: 'lock', title: 'Trust & Security', desc: 'Security and transparency are baked into everything we deliver.' },
];

const timeline = [
  { year: '2014', title: 'Founded', desc: 'TechyStack begins as a two-person freelance collective in Bengaluru.' },
  { year: '2017', title: 'First Enterprise Client', desc: 'Land our first Fortune 500 engagement, scaling the team to 15.' },
  { year: '2020', title: 'AI Practice Launch', desc: 'Launch dedicated AI/ML division as demand for intelligent systems surges.' },
  { year: '2023', title: 'Global Delivery', desc: 'Open remote delivery hubs and serve clients across 12 countries.' },
  { year: '2026', title: '200+ Projects', desc: 'Cross 200 delivered projects with a 98% client retention rate.' },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About TechyStack"
        subtitle="We are a team of engineers, designers and strategists on a mission to make technology work for everyone."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 50 }}>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: 18 }}>Who We Are</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 14 }}>
                TechyStack was founded on a simple belief: great technology should be accessible
                to every business, regardless of size. What started as a small development
                studio has grown into a full-service technology company.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: 24 }}>
                Today our 60+ person team delivers web platforms, AI-powered products, cloud
                infrastructure and digital transformation programmes for clients ranging from
                ambitious startups to established enterprises.
              </p>
              <Link to="/team" className="btn btn-primary">Meet Our Team</Link>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img src="https://picsum.photos/seed/about-techystack/800/600" alt="TechyStack office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our <span className="accent">Values</span></h2>
          </Reveal>
          <div className="grid grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card benefit-card">
                  <div className="icon"><Icon name={v.icon} size={30} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal className="section-head">
            <h2>Our <span className="accent">Journey</span></h2>
          </Reveal>
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <div className="why-item">
                <div className="num">{t.year}</div>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Want To Work With Us?</h2>
            <p>Let's discuss how TechyStack can accelerate your digital goals.</p>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
