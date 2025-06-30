import HeroSection from '../components/Hero-Section';
import Header from './../components/Header';
import "./index.css";
import AboutSection from './../components/about';
import ServicesSection from '../components/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsSection from '../components/testimonials';
import ContactSection from '../components/ContactSection';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="assets/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <Header />
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  )
}
