import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import JobApplicationModal from '../components/JobApplicationModal';
import { jobs, jobCategories } from '../data/jobsData';

const benefits = [
  { icon: 'briefcase', title: 'Flexible Work', desc: 'Hybrid and remote-friendly policies — work where you do your best work.' },
  { icon: 'chart', title: 'Growth & Learning', desc: 'Annual learning budget, conferences and mentorship from senior engineers.' },
  { icon: 'heart', title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family, plus wellness stipends.' },
  { icon: 'wallet', title: 'Competitive Pay', desc: 'Market-leading salaries, performance bonuses and equity options.' },
  { icon: 'users', title: 'Great Culture', desc: 'Regular team offsites, hackathons and a genuinely supportive environment.' },
  { icon: 'cpu', title: 'Modern Stack', desc: 'Work with React, Node.js, AWS, AI/ML and the latest tools — no legacy debt.' },
];

const whyUs = [
  { title: 'Work on meaningful projects', desc: 'Ship products used by millions — not internal tools nobody sees.' },
  { title: 'Learn from the best', desc: 'Pair with senior engineers and designers on every engagement.' },
  { title: 'Grow fast', desc: 'Clear progression paths, quarterly reviews and real ownership early.' },
  { title: 'Enjoy the journey', desc: 'Flexible hours, team outings and a culture that values balance.' },
];

export default function Careers() {
  const [category, setCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);

  const filtered = useMemo(
    () => (category === 'All' ? jobs : jobs.filter(j => j.department === category || (category === 'Internship' && j.type === 'Internship'))),
    [category]
  );

  return (
    <>
      <PageHero
        title="Build Your Future With TechyStack"
        subtitle="Join a team that values craft, curiosity and continuous learning. Your next role starts here."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal className="section-head">
            <h2>Why Work <span className="accent">With Us</span></h2>
          </Reveal>
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="why-item">
                <div className="num">{i + 1}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>Benefits & <span className="accent">Perks</span></h2>
            <p>We invest in our people because great work comes from happy, healthy teams.</p>
          </Reveal>
          <div className="grid grid-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="card benefit-card">
                  <div className="icon"><Icon name={b.icon} size={30} /></div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="open-positions" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <Reveal className="section-head">
            <h2>Open <span className="accent">Positions</span></h2>
            <p>
              Explore our current openings. All listings shown are sample/demo data for
              demonstration — real vacancies will be published here soon.
            </p>
          </Reveal>

          <Reveal>
            <div className="filters">
              {jobCategories.map(c => (
                <button
                  key={c}
                  className={`filter-btn ${category === c ? 'active' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-3">
            {filtered.map((j, i) => (
              <Reveal key={j.id} delay={(i % 3) * 70}>
                <div className="card job-card">
                  <div className="job-tags">
                    <span className="tag">{j.department}</span>
                    <span className="tag type">{j.type}</span>
                    {j.isDemo && <span className="tag" style={{ color: '#fbbf24' }}>Demo</span>}
                  </div>
                  <h3>{j.title}</h3>
                  <p>{j.description}</p>
                  <div className="job-meta">
                    <span><Icon name="pin" size={16} /> {j.location}</span>
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: 'auto' }} onClick={() => setSelectedJob(j)}>
                    Apply Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state">No openings in this category right now. Check back soon!</p>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Ready To Join Our Team?</h2>
            <p>Explore open roles and take the next step in your career with TechyStack.</p>
            <a href="#open-positions" className="btn btn-primary">Explore Open Positions</a>
          </Reveal>
        </div>
      </section>

      <JobApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
}
