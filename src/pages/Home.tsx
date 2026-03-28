
import { motion } from 'framer-motion';
import { Database, GitBranch, Cpu, Bot, Cloud, BarChart2, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImg from '../assets/hero-illustration.png';

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
            <div className="hero-grid">
              <div className="text-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <div className="hero-tags" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '1.7rem', fontWeight: 700, color: '#1c4792' }}>
                  <span style={{ color: '#1c4792' }}>Data Engineering</span> | <span style={{ color: '#1c4792' }}>DataOps</span> | <span style={{ color: '#1c4792' }}>MlOps</span> | <span style={{ color: '#1c4792' }}>Agentic AI</span> | <span style={{ color: '#1c4792' }}>Cloud Solution Architecture</span>
                </div>
                <p className="hero-subtitle" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--secondary)', lineHeight: '1.4', textAlign: 'justify' }}>
                  Yonova Technologies helps organizations design, build, and manage scalable data and AI platforms using modern cloud technologies. Our expertise spans Data Engineering, DataOps, MLOps, Agentic AI, and Cloud Solutions Architecture, enabling businesses to transform raw data into reliable pipelines, intelligent automation, and data-driven insights.
                </p>
                <div className="hero-actions justify-start" style={{ marginTop: '0.5rem' }}>
                  <a href="#services" className="btn btn-primary btn-lg">
                    Find out how! <ArrowRight size={20} />
                  </a>
                  <Link to="/contact" className="btn btn-outline btn-lg">
                    Let's Talk
                  </Link>
                </div>
              </div>

              <div className="hero-image-wrapper">
                <img src={heroImg} alt="Data Engineering Consulting" className="hero-image" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hire Us For Section */}
      <section id="services" className="bg-light" style={{ padding: '50px 0' }}>
        <div className="container">

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Database size={32} />
              </div>
              <h3>Data Engineering Service</h3>
              <p>Build robust data pipelines and systems to transform raw data into actionable insights for smarter decision-making.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <BarChart2 size={32} />
              </div>
              <h3>Data Warehousing and Analytics Service</h3>
              <p>Build scalable data warehouses and analytics platforms that centralize data from multiple sources and enable advanced reporting, business intelligence, and data-driven insights.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <GitBranch size={32} />
              </div>
              <h3>DataOps Service</h3>
              <p>Implement automated data workflows and monitoring systems to ensure reliable, efficient, and scalable data pipeline operations.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Cpu size={32} />
              </div>
              <h3>MLOps Service</h3>
              <p>Operationalize machine learning models by building automated pipelines for model training, deployment, monitoring, and lifecycle management.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Bot size={32} />
              </div>
              <h3>Agentic AI Service</h3>
              <p>Develop intelligent AI agents that can autonomously analyze data, automate workflows, and support business decision-making.</p>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp}>
              <div className="icon-wrapper">
                <Cloud size={32} />
              </div>
              <h3>Cloud Solutions Architecture Service</h3>
              <p>Design scalable and secure cloud architectures that enable organizations to build modern data platforms, analytics systems, and AI solutions.</p>
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
            <div className="floating-card glass floating-card-1">
              <CheckCircle size={28} className="text-accent" />
              <div>
                <h5>Highly Motivated</h5>
                <span>Team Members</span>
              </div>
            </div>
            <div className="floating-card glass floating-card-2">
              <CheckCircle size={28} className="text-accent" />
              <div>
                <h5>GCP Certified</h5>
                <span>Professional Engineers</span>
              </div>
            </div>
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
