import '../styles/contact.css';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p className="subtitle">We’d love to hear from you. Reach out with questions, ideas, or just to say hello!</p>

      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"  required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Info and Socials */}
        <div className="contact-info">
          <h3>Our Info</h3>
          <p>📍 IIT Kharagpur, India</p>
          <p>📞 +917859027046</p>
          <p>✉️ contact@beyondcareer.in</p>

          <div className="social-links">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
