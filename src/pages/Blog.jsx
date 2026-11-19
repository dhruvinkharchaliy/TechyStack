import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { blogPosts, blogCategories } from '../data/blogData';

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const featured = blogPosts.find(p => p.featured) || blogPosts[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts
      .filter(p => p.slug !== featured.slug)
      .filter(p => category === 'All' || p.category === category)
      .filter(p => !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [category, query, featured.slug]);

  const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <PageHero
        title="Insights, Ideas & Innovation"
        subtitle="Stories, tutorials and perspectives from the TechyStack team on technology, design and digital transformation."
      />

      <section className="section">
        <div className="container">
          {/* Featured article */}
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="featured-article">
              <div className="thumb">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="body">
                <span className="blog-cat">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p style={{ color: 'var(--muted)' }}>{featured.excerpt}</p>
                <div className="blog-meta">
                  <span><Icon name="user" size={16} /> {featured.author}</span>
                  <span><Icon name="calendar" size={16} /> {fmtDate(featured.date)}</span>
                  <span><Icon name="clock" size={16} /> {featured.readTime}</span>
                </div>
                <span className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }}>Read Article →</span>
              </div>
            </Link>
          </Reveal>

          {/* Search + filters */}
          <Reveal>
            <div className="search-bar">
              <span className="search-icon"><Icon name="search" size={18} /></span>
              <input
                className="form-control"
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="Search articles"
              />
            </div>
            <div className="filters">
              {blogCategories.map(c => (
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

          {/* Latest articles */}
          <Reveal className="section-head" style={{ marginBottom: 36 }}>
            <h2>Latest <span className="accent">Articles</span></h2>
          </Reveal>

          <div className="grid grid-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <Link to={`/blog/${p.slug}`} className="card blog-card">
                  <div className="thumb">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="body">
                    <span className="blog-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-meta">
                      <span><Icon name="user" size={16} /> {p.author}</span>
                      <span><Icon name="calendar" size={16} /> {fmtDate(p.date)}</span>
                      <span><Icon name="clock" size={16} /> {p.readTime}</span>
                    </div>
                    <span className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>Read More →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state">No articles match your search. Try a different keyword or category.</p>
          )}
        </div>
      </section>
    </>
  );
}
