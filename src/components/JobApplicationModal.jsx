import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { jobs } from '../data/jobsData';

/**
 * Job application modal.
 *
 * NOTE: This currently simulates submission client-side only.
 * When the backend is ready, replace `handleSubmit` with a POST to
 * e.g. POST /api/applications (Node.js + Express + MongoDB) that stores
 * the application and the uploaded resume file (e.g. via multer).
 */
export default function JobApplicationModal({ job, onClose }) {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', position: job?.title || '',
    coverLetter: '',
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState('');
  const firstField = useRef(null);

  useEffect(() => {
    if (!job) return;

    firstField.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    const previousOverflow = document.body.style.overflow;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [job, onClose]);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!/^[+\d][\d\s\-()]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.';
    if (!form.position) errs.position = 'Please select a position.';
    if (!resume) errs.resume = 'Please attach your resume.';
    else if (resume.size > 5 * 1024 * 1024) errs.resume = 'Resume must be under 5 MB.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerMessage('');

    // TODO(backend): replace this simulated submission with:
    //   const fd = new FormData();
    //   fd.append('fullName', form.fullName); ... fd.append('resume', resume);
    //   const res = await fetch('/api/applications', { method: 'POST', body: fd });
    // Until the endpoint exists we show an honest message instead of
    // pretending the application was received.
    await new Promise(r => setTimeout(r, 700));

    setStatus('error');
    setServerMessage(
      'Applications are not yet connected to our backend. ' +
      'Your details were validated successfully — please try again once the careers API is live, ' +
      'or email your resume directly to careers@techystack.com.'
    );
  };

  if (!job) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Job application">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <h2 style={{ marginBottom: 4 }}>Apply for {job.title}</h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 24 }}>
          {job.department} · {job.location} · {job.isDemo ? 'Demo listing' : ''}
        </p>

        {status === 'success' ? (
          <div className="form-alert success">
            Application submitted successfully. Our team will review it and get back to you.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {status === 'error' && (
              <div className="form-alert error">{serverMessage}</div>
            )}

            <div className="form-group">
              <label htmlFor="app-name">Full Name <span className="req">*</span></label>
              <input id="app-name" ref={firstField} className="form-control" type="text"
                placeholder="Your full name" value={form.fullName} onChange={set('fullName')}
                aria-invalid={!!errors.fullName} />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="app-email">Email <span className="req">*</span></label>
              <input id="app-email" className="form-control" type="email"
                placeholder="you@example.com" value={form.email} onChange={set('email')}
                aria-invalid={!!errors.email} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="app-phone">Phone Number <span className="req">*</span></label>
              <input id="app-phone" className="form-control" type="tel"
                placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')}
                aria-invalid={!!errors.phone} />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="app-position">Position Applied For <span className="req">*</span></label>
              <select id="app-position" className="form-control" value={form.position} onChange={set('position')}
                aria-invalid={!!errors.position}>
                <option value="">Select a position…</option>
                {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
              </select>
              {errors.position && <span className="field-error">{errors.position}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="app-resume">Resume (PDF, max 5 MB) <span className="req">*</span></label>
              <input id="app-resume" className="form-control file-input" type="file"
                accept=".pdf,.doc,.docx" onChange={e => setResume(e.target.files?.[0] || null)}
                aria-invalid={!!errors.resume} />
              {errors.resume && <span className="field-error">{errors.resume}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="app-cover">Cover Letter <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span></label>
              <textarea id="app-cover" className="form-control" rows={4}
                placeholder="Tell us why you're a great fit…" value={form.coverLetter} onChange={set('coverLetter')} />
            </div>

            <button className="btn btn-primary btn-block" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
