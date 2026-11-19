export default function PageHero({ title, subtitle, banner = false, image }) {
  return (
    <section
      className={`page-hero ${banner ? 'banner' : ''}`}
      style={banner && image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
