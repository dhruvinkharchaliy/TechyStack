import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { getPostBySlug, getRelatedPosts } from '../data/blogData';

const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

function shareLinks(post) {
  const url = encodeURIComponent(`${window.location.origin}/blog/${post.slug}`);
  const text = encodeURIComponent(post.title);
  return [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { label: '𝕏 / Twitter', href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: 'Copy Link', action: 'copy' },
  ];
}

function Block({ block }) {
  switch (block.type) {
    case 'h2': return <h2>{block.text}</h2>;
    case 'h3': return <h3>{block.text}</h3>;
    case 'ul':
      return <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
    case 'quote': return <blockquote>{block.text}</blockquote>;
    case 'code': return <pre><code>{block.code}</code></pre>;
    default: return <p>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!post) {
    return (
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: 16 }}>Article Not Found</h1>
          <p style={{ color: 'var(--muted)', marginBottom: 28 }}>The article you're looking for doesn't exist or may have been moved.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const related = getRelatedPosts(post, 3);
  const shares = shareLinks(post);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
      alert('Link copied to clipboard!');
    } catch {
      alert('Could not copy link.');
    }
  };

  return (
    <>
      <PageHero title={post.title} subtitle={post.excerpt} />

      <section className="section" style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="article-header">
            <span className="blog-cat" style={{ fontSize: '.85rem' }}>{post.category}</span>
            <div className="article-author">
              <div className="author-avatar"><img src={post.authorImage} alt={post.author} /></div>
              <div style={{ textAlign: 'left' }}>
                <b>{post.author}</b>
                <div style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{post.authorRole}</div>
              </div>
              <div className="blog-meta" style={{ justifyContent: 'flex-start' }}>
                <span><Icon name="calendar" size={16} /> {fmtDate(post.date)}</span>
                <span><Icon name="clock" size={16} /> {post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="article-cover">
            <img src={post.image} alt={post.title} />
          </div>

          <article className="article-body">
            {post.content.map((b, i) => <Block key={i} block={b} />)}
          </article>

          <div className="share-row">
            <span style={{ color: 'var(--muted)', alignSelf: 'center', fontSize: '.9rem' }}>Share:</span>
            {shares.map(s =>
              s.action === 'copy'
                ? <button key={s.label} onClick={copyLink}>{s.label}</button>
                : <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            )}
          </div>

          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Link to="/blog" className="back-link">← Back to Blog</Link>
          </div>

          {related.length > 0 && (
            <>
              <Reveal className="section-head" style={{ marginBottom: 36 }}>
                <h2>Related <span className="accent">Articles</span></h2>
              </Reveal>
              <div className="grid grid-3">
                {related.map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="card blog-card">
                    <div className="thumb"><img src={p.image} alt={p.title} loading="lazy" /></div>
                    <div className="body">
                      <span className="blog-cat">{p.category}</span>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                      <div className="blog-meta">
                        <span><Icon name="user" size={16} /> {p.author}</span>
                        <span><Icon name="clock" size={16} /> {p.readTime}</span>
                      </div>
                      <span className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
