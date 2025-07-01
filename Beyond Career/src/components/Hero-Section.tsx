import "../styles/Hero-Section.css";

export default function HeroSection() {

  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="heading-one">Redefining Career Journeys for Students</h1>
        <p className="paragraph-header">At Beyond Career, we're bridging the gap between ambition and opportunity.Get expert and —   <br />
        </p>
          <div className="dropping-texts">
            <div>Mentorship</div>
            <div>Internships</div>
            <div>Career guidance</div>
            <div>All in one place!</div>
          </div>
        
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
