import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, BarChart3, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const servicesList = [
    {
      id: 1,
      title: 'Cloud Data Engineering',
      description: 'We build scalable data pipelines to move, process, and transform your data in the cloud, ensuring it\'s ready for analysis and seamless integration.',
      icon: <Database size={40} />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Data Analytics & BI',
      description: 'We turn raw data into actionable insights with custom dashboards and reports, enabling data-driven decisions and performance tracking.',
      icon: <BarChart3 size={40} />,
      color: 'rose'
    },
    {
      id: 3,
      title: 'Cloud Architecture for Data',
      description: 'We design secure, scalable cloud infrastructure for data systems, ensuring cost optimization, seamless growth, and high performance.',
      icon: <Cloud size={40} />,
      color: 'cyan'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Services</h1>
            <p>How can we help you achieve your goals?</p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="section bg-light">
        <div className="container">
          <div className="services-detailed-grid">
            {servicesList.map((service, index) => (
              <motion.div 
                key={service.id}
                className="service-detail-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.1 } }
                }}
              >
                <div className={`service-icon-large color-${service.color}`}>
                  {service.icon}
                </div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Link to="/contact" className="btn btn-outline mt-4">
                    Get In Touch <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
              When you partner with us, you’re not just upgrading your technology — you’re enhancing your entire business. We are committed to providing the best solutions to help your team and organization grow.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Partner With Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
