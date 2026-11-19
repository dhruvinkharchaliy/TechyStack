import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | error

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // TODO(backend): POST to /api/contact once the backend is configured.
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a project in mind? Let's talk about how TechyStack can help."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div>
                <h2 style={{ fontSize: '1.7rem', marginBottom: 26 }}>Get In Touch</h2>
                <div className="contact-info-item">
                  <span className="icon"><Icon name="pin" /></span>
                  <div>
                    <h4>Headquarters</h4>
                    <p>TechyStack Tower, MG Road, Bengaluru, Karnataka 560001</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="icon"><Icon name="mail" /></span>
                  <div>
                    <h4>Email</h4>
                    <p>hello@techystack.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="icon"><Icon name="phone" /></span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 80 4567 8900</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="icon"><Icon name="clock" /></span>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon – Fri, 9:30 AM – 6:30 PM IST</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card" style={{ padding: 36 }}>
                <h3 style={{ marginBottom: 22 }}>Send Us A Message</h3>
                {status === 'success' && (
                  <div className="form-alert success">
                    Thanks! Your message has been noted. We'll get back to you shortly.
                  </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="c-name">Full Name <span className="req">*</span></label>
                      <input id="c-name" className="form-control" type="text" value={form.name} onChange={set('name')} />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-email">Email <span className="req">*</span></label>
                      <input id="c-email" className="form-control" type="email" value={form.email} onChange={set('email')} />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-subject">Subject</label>
                    <input id="c-subject" className="form-control" type="text" placeholder="Project inquiry, support, etc."
                      value={form.subject} onChange={set('subject')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-msg">Message <span className="req">*</span></label>
                    <textarea id="c-msg" className="form-control" rows={5} value={form.message} onChange={set('message')} />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">Send Message</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
