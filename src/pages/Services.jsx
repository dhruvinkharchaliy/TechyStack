import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

const services = [
  {
    id: 'web',
    icon: 'code',
    title: 'Web Development',
    tagline: 'Fast, scalable web applications',
    desc: 'From marketing sites to complex web platforms, we build with React, Next.js, Node.js and TypeScript — optimised for performance, SEO and maintainability.',
    points: ['Custom web applications', 'E-commerce platforms', 'Headless CMS builds', 'API design & integration'],
  },
  {
    id: 'ai',
    icon: 'brain',
    title: 'AI Solutions',
    tagline: 'Intelligence embedded in your products',
    desc: 'We design and deploy production-grade AI — from LLM-powered assistants and recommendation engines to computer vision and predictive analytics.',
    points: ['LLM & chatbot development', 'Machine learning pipelines', 'Process automation', 'AI strategy consulting'],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Cloud & DevOps',
    tagline: 'Infrastructure that scales with you',
    desc: 'AWS, Azure and Kubernetes expertise with CI/CD pipelines, infrastructure-as-code and 24/7 monitoring so your systems stay fast and resilient.',
    points: ['Cloud migration', 'Kubernetes & containers', 'CI/CD pipelines', 'Observability & SRE'],
  },
  {
    id: 'digital',
    icon: 'chart',
    title: 'Digital Transformation',
    tagline: 'Modernise without disruption',
    desc: 'We help organisations replace legacy systems, unify data and adopt digital-first workflows — with minimal downtime and measurable ROI.',
    points: ['Legacy system modernisation', 'Data strategy & analytics', 'Workflow automation', 'Change management'],
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Cybersecurity',
    tagline: 'Enterprise-grade protection',
    desc: 'Penetration testing, security audits, compliance support and zero-trust architecture — because your data deserves more than hope.',
    points: ['Penetration testing', 'Security audits & hardening', 'Compliance (SOC2, GDPR)', 'Zero-trust implementation'],
  },
];

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Comprehensive technology solutions designed to accelerate your business." />
      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <div
                id={s.id}
                className="card service-card"
                style={{ marginBottom: 24, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'start', scrollMarginTop: 100 }}
              >
                <div className="icon-wrap" style={{ marginBottom: 0 }}><Icon name={s.icon} /></div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 2 }}>{s.title}</h2>
                  <p style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '.9rem', marginBottom: 12 }}>{s.tagline}</p>
                  <p style={{ color: 'var(--muted)', marginBottom: 14 }}>{s.desc}</p>
                  <div className="job-tags">
                    {s.points.map(p => <span key={p} className="tag">{p}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
