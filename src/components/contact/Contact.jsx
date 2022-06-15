import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebookMessenger, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8jwgl9t',
        'template_ovr2ame',
        form.current,
        'pHz3XPyG3e9_rLa9-'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
            <a href="https://linkedin.com/in/anmol-thapa/" target="_blank">
              Send Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
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
