import "../styles/about.css";
import Tilt from "react-parallax-tilt";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Beyond Career</h2>

        <div className="mission-vision">
          <Tilt>
            <div className="card">
              <h3 className="career-heading">Our Mission</h3>
              <p>
                To empower students with the right guidance, mentorship, and
                opportunities to unlock their full potential and achieve their
                career goals.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div className="card">
              <h3 className="career-heading">Our Vision</h3>
              <p>
                To become the go-to platform for students across India to
                navigate their careers with clarity, confidence, and community.
              </p>
            </div>
          </Tilt>
        </div>

        <Tilt>
          <div className="card">
            <h3 className="career-heading">Our Story</h3>
            <p>
              Beyond Career was founded by a passionate group of students from
              <strong> IIT Kharagpur</strong> who experienced the challenges of
              career planning first-hand. Their shared vision to make career
              guidance accessible and meaningful led to the birth of this
              platform — by students, for students.
            </p>
          </div>
        </Tilt>

        <div className="core-values">
          <h3>Our Core Values</h3>
          <ul>
            <li className="tags">🎯 Student-Centric Approach</li>
            <li className="tags">🤝 Mentorship & Community</li>
            <li className="tags">🚀 Growth Mindset</li>
            <li className="tags">🔍 Transparency & Trust</li>
            <li className="tags">🌱 Innovation in Education</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
