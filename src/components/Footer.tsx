import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Cloud } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Cloud className="logo-icon" />
              <span className="logo-text">Yonova<span className="logo-highlight">Tech</span></span>
            </Link>
            <p className="footer-desc">
              Empowering your business with robust cloud data engineering solutions to accelerate your success.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <MapPin size={18} />
                <span>Lalitpur, Nepal</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+977 9841152337</span>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:hello@yonovatechnologies.com">hello@yonovatechnologies.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Yonova Technologies &copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
