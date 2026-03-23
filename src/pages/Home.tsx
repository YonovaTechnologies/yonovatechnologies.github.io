import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content glass"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="hero-title">
              Transform your data into <span className="gradient-text">actionable insights</span>
            </h1>
            <p className="hero-subtitle">
              Empower your business with Yonova Technologies. We create robust cloud data engineering solutions to accelerate your success.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary btn-lg">
                Find out how! <ArrowRight size={20} />
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hire Us For Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Hire Us For
          </motion.h2>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Server size={32} />
              </div>
              <h3>Cloud Solution</h3>
              <p>Design and implement scalable, secure, and efficient cloud architectures tailored to meet your business needs.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Database size={32} />
              </div>
              <h3>Data Engineering Service</h3>
              <p>Build robust data pipelines and systems to transform raw data into actionable insights for smarter decision-making.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Code size={32} />
              </div>
              <h3>Custom Cloud & Data Integration</h3>
              <p>Seamless integration of cloud infrastructure and data workflows for optimal performance and scalability.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-preview">
        <div className="container about-container">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title text-left">About Us</h2>
            <p className="lead">We provide cloud data engineering services. Our team delivers scalable, secure, and cost-effective solutions to help businesses thrive in the cloud.</p>
            
            <div className="mission-vision">
              <div className="mv-box">
                <h4>Mission</h4>
                <p>To deliver scalable, secure, and cost-effective cloud data engineering solutions that drive innovation, optimize performance, and empower businesses worldwide.</p>
              </div>
              <div className="mv-box">
                <h4>Vision</h4>
                <p>Our vision is to be a global leader in cloud data engineering, enabling businesses to achieve unprecedented growth through cutting-edge technology.</p>
              </div>
            </div>

            <Link to="/about" className="btn btn-outline mt-4">Read More About Us</Link>
          </motion.div>

          <motion.div 
            className="about-image-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="floating-card glass">
              <CheckCircle size={28} className="text-accent" />
              <div>
                <h5>Highly Motivated</h5>
                <span>Innovative Ideas</span>
              </div>
            </div>
            {/* Using a placeholder gradient block for now instead of an actual image */}
            <div className="about-image-placeholder"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content glass"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Let us together build a flourishing business</h2>
            <p>
              When you partner with us, you’re not just upgrading your technology — you’re enhancing your entire business. We are committed to providing the best solutions to help your team and organization grow. If you’re looking for a trusted partner to help you leverage cloud data engineering for better performance, scalability, and success, we’re here to make it happen!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Get A Quote Now</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
