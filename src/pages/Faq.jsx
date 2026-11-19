import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const faqs = [
  { q: 'What services does TechyStack offer?', a: 'We provide web development, AI/ML solutions, cloud & DevOps, digital transformation and cybersecurity services — from initial consultation through ongoing support.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope. A marketing website typically takes 3–6 weeks, while enterprise platforms can run 3–6 months. We provide a detailed timeline during discovery.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We offer flexible engagement models — from fixed-price projects for startups to dedicated teams for enterprises.' },
  { q: 'What is your technology stack?', a: 'React, Next.js, Node.js, TypeScript, Python for AI/ML, AWS/Azure, and Kubernetes for container orchestration.' },
  { q: 'Do you provide post-launch support?', a: 'Yes — every project includes a warranty period, and we offer ongoing maintenance and support retainers.' },
  { q: 'How do I apply for a job at TechyStack?', a: 'Visit our Careers page, browse open positions and click Apply Now to submit your application through our portal.' },
];

export default function Faq() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know about working with TechyStack." />
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-body">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
