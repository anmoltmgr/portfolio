import React from 'react';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer-logo">
        Anmol
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; anmol portfolio</small>
      </div>
    </footer>
  );
};
export default Footer;
