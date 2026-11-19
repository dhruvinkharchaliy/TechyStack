import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { teamMembers } from '../data/teamData';

const icons = {
  linkedin: 'in',
  twitter: '𝕏',
  github: '⌥',
  dribbble: '●',
};

function TeamModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={member.name}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ textAlign: 'center' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="team-avatar" style={{ width: 120, height: 120, marginBottom: 18 }}>
          <img src={member.image} alt={member.name} />
        </div>
        <h2 style={{ marginBottom: 4 }}>{member.name}</h2>
        <p style={{ color: 'var(--cyan)', fontWeight: 600, marginBottom: 6 }}>{member.role}</p>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 20 }}>{member.experience} of experience</p>
        <p style={{ textAlign: 'left', color: 'var(--muted)', marginBottom: 20 }}>{member.bio}</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
          {member.skills.map(s => <span key={s} className="tag">{s}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {member.linkedin && <a className="btn btn-outline btn-sm" href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {member.email && <a className="btn btn-primary btn-sm" href={`mailto:${member.email}`}>Email</a>}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="The passionate people behind TechyStack — engineers, designers and strategists dedicated to your success."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>The <span className="accent">People</span> Behind The Code</h2>
            <p>
              Our team brings together decades of combined experience across web development,
              artificial intelligence, cloud infrastructure and digital strategy. We believe
              great products come from great teams — and we're proud of ours.
            </p>
          </Reveal>

          <div className="grid grid-4">
            {teamMembers.map((m, i) => (
              <Reveal key={m.id} delay={(i % 4) * 80}>
                <div className="card team-card">
                  <div className="team-avatar">
                    <img src={m.image} alt={m.name} loading="lazy" />
                  </div>
                  <h3>{m.name}</h3>
                  <div className="team-role">{m.role}</div>
                  <p className="team-bio">{m.bio}</p>
                  <div className="social-links">
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`}>{icons.linkedin}</a>
                    )}
                    {m.twitter && (
                      <a href={m.twitter} target="_blank" rel="noreferrer" aria-label={`${m.name} on Twitter`}>{icons.twitter}</a>
                    )}
                    {m.github && (
                      <a href={m.github} target="_blank" rel="noreferrer" aria-label={`${m.name} on GitHub`}>{icons.github}</a>
                    )}
                    {m.email && (
                      <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`}>✉</a>
                    )}
                  </div>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: 16, width: '100%' }}
                    onClick={() => setSelected(m)}
                  >
                    View Profile
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
