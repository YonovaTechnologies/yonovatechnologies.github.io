import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Heart, BookOpen, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const coreValues = [
    {
      icon: <Award size={32} />,
      title: 'Committed to delivering the best',
      desc: 'We never compromise on the quality of our data engineering solutions.'
    },
    {
      icon: <Target size={32} />,
      title: 'Honest and transparent services',
      desc: 'Clear communication and full transparency in every project phase.'
    },
    {
      icon: <Heart size={32} />,
      title: 'We care for your business just like ours',
      desc: 'Your success is our success. We are deeply invested in your growth.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Keep learning and adapting',
      desc: 'We continuously evolve with the latest cloud and data technologies.'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Us</h1>
            <p>Elevating businesses with cutting-edge cloud data engineering.</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="about-intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="about-intro-text">
              <h2 className="section-title text-left">Who We Are</h2>
              <p className="lead">
                We are a team of experienced professionals in cloud data engineering, dedicated to helping businesses unlock their potential through innovative, scalable, and secure technology.
              </p>
              <p>
                If you’re looking for cutting-edge cloud data engineering solutions and scalable technology to elevate your business, we are here to help. Our team of experts brings years of experience in connecting the dots between your raw data and actionable business intelligence.
              </p>
            </div>
            <div className="about-intro-image">
              <div className="image-placeholder gradient-bg">
                <div className="glass floating-badge">
                  <h3>10+</h3>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section values-section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="subtitle">The principles that guide everything we do.</p>
          </motion.div>

          <motion.div 
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="value-card glass"
                variants={fadeInUp}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
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
            <MessageSquare size={48} className="cta-icon" />
            <h2>Have a Project in mind?</h2>
            <p>
              We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Connect With Us!</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
