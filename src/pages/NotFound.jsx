import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero title="404" subtitle="Oops — the page you're looking for doesn't exist." />
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
