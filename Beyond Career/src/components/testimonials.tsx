import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css";

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Success Stories</h2>
      <p className="subtitle">Real stories from real students</p>

      <Slider {...settings} className="testimonial-carousel">
        <div className="testimonial-card">
          <p>
            “Beyond Career helped me land my first internship. The mentors are
            super supportive!”
          </p>
          <h4>— Priya S., B.Tech CSE</h4>
        </div>

        <div className="testimonial-card">
          <p>
            “I had no direction. Beyond Career gave me clarity and amazing
            industry insights.”
          </p>
          <h4>— Rohan K., IIT Kharagpur</h4>
        </div>

        <div className="testimonial-card">
          <p>
            “Thanks to Beyond Career, I built my resume and cracked my dream
            job interview.”
          </p>
          <h4>— Aisha R., MCA Graduate</h4>
        </div>
      </Slider>

      <div className="stats">
        <div className="stat-box">
          <h3>500+</h3>
          <p>Students Mentored</p>
        </div>
        <div className="stat-box">
          <h3>150+</h3>
          <p>Internships Secured</p>
        </div>
        <div className="stat-box">
          <h3>30+</h3>
          <p>Industry Mentors</p>
        </div>
      </div>
    </section>
  );
}
