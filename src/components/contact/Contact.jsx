import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebookMessenger, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className=" container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-icons" />
            <h4>E-mail</h4>
            <h5>anmol.thapa59@gmail.com</h5>
            <a href="mailto:anmol.thapa59@gmail.com"> Send Message </a>
          </article>
          <article className="contact-option">
            <FaFacebookMessenger className="contact-icons" />
            <h4>Messenger</h4>
            <h5>Anmol Thapa</h5>
            <a href="https://m.me/boyanmol" target="_blank" rel="noreferrer">
              Send Message
            </a>
          </article>
          <article className="contact-option">
            <FaLinkedin className="contact-icons" />
            <h4>LinkedIn</h4>
            <h5>Anmol Thapa</h5>
            <a
              href="https://www.linkedin.com/in/anmol-thapa/"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your E-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
