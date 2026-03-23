import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube } from 'lucide-react';
import './Contact.css';

const Contact = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>We are here to help! Send us a message.</p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="section-title">Get In Touch</h2>
              <p className="lead mb-4">Have questions or want to discuss a project? Feel free to reach out to us using the contact details below.</p>
              
              <div className="info-cards">
                <div className="info-card glass">
                  <div className="icon-box">
                    <MapPin size={24} />
                  </div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <p>Lalitpur, Nepal</p>
                  </div>
                </div>

                <div className="info-card glass">
                  <div className="icon-box">
                    <Phone size={24} />
                  </div>
                  <div className="info-text">
                    <h4>Phone Number</h4>
                    <p>+977 9841152337</p>
                  </div>
                </div>

                <div className="info-card glass">
                  <div className="icon-box">
                    <Mail size={24} />
                  </div>
                  <div className="info-text">
                    <h4>Email Address</h4>
                    <a href="mailto:hello@yonovatechnologies.com">hello@yonovatechnologies.com</a>
                  </div>
                </div>
              </div>

              <div className="social-connect mt-4">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><Facebook size={20} /></a>
                  <a href="#" className="social-icon"><Twitter size={20} /></a>
                  <a href="#" className="social-icon"><Youtube size={20} /></a>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="Google Map of Lalitpur, Nepal"
          src="https://maps.google.com/maps?q=Lalitpur,%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="map-overlay-container">
          <div className="map-overlay">
            <MapPin size={48} className="text-primary" />
            <h3>Lalitpur, Nepal</h3>
            <p>Yonova Technologies Headquarters</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
