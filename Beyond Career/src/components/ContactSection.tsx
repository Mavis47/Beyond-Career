import { useState } from 'react';
import '../styles/contact.css';
import { z } from "zod";
import {toast} from "react-toastify";

const schema = z.object({
  name: z.string().min(1,"Name is required"),
  email: z.string().min(1,"Email is required"),
  message: z.string().min(1,"Message is required"),
});

export default function ContactSection() {

  const [form,setform] = useState({name: "",message: "",email: ""});

  // Form validation using zod
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setform({...form,[e.target.value]: e.target.value});
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);

    if(!result.success){
      toast.error(result.error.errors[0].message);
      return;
    }

    toast.success("Message sent successfully!");
    setform({ name: "", email: "", message: "" }); //Resetting form
  }


  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p className="subtitle">We’d love to hear from you. Reach out with questions, ideas, or just to say hello!</p>

      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={form.name} required onChange={handleInputs}/>
          <input type="email" placeholder="Your Email" value={form.email} required onChange={handleInputs}/>
          <textarea placeholder="Your Message"  required value={form.message} onChange={handleInputs}></textarea>
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
