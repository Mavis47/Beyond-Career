import '../styles/services.css';

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <h2>What We Offer</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon">🎓</div>
          <h3>Career Guidance</h3>
          <p>Personalized career roadmaps and expert counseling to help you make confident decisions.</p>
        </div>

        <div className="service-card">
          <div className="icon">💼</div>
          <h3>Internship Opportunities</h3>
          <p>Connect with top startups and companies for meaningful, real-world internship experiences.</p>
        </div>

        <div className="service-card">
          <div className="icon">🧑‍🏫</div>
          <h3>Mentorship Programs</h3>
          <p>Get mentored by industry professionals, IITians, and domain experts to grow faster and smarter.</p>
        </div>

        <div className="service-card">
          <div className="icon">🌐</div>
          <h3>Community Engagement</h3>
          <p>Join a vibrant network of learners, mentors, alumni, and recruiters — learn, share, grow.</p>
        </div>
      </div>
    </section>
  );
}
