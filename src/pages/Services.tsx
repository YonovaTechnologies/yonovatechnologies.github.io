
import { motion } from 'framer-motion';
import { Cloud, BarChart3, Database, GitBranch, Cpu, Bot, CheckCircle2 } from 'lucide-react';
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
      title: 'Data Engineering',
      description: 'Develop reliable and scalable data pipelines that collect, process, and transform data from multiple sources into structured datasets for analytics and reporting.',
      capabilities: [
        'Data pipeline development',
        'ETL / ELT pipeline design',
        'Data integration from multiple sources',
        'Data quality and validation frameworks',
        'Real-time and batch data processing'
      ],
      icon: <Database size={40} />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Data Warehousing and Analytics',
      description: 'Design modern cloud data warehouses and analytics platforms that centralize data, enabling fast reporting, dashboards, and actionable insights.',
      capabilities: [
        'Cloud data warehouse design (BigQuery)',
        'Data modeling and schema design',
        'Data aggregation and transformation',
        'Analytics and BI reporting',
        'Real-time and historical data analysis'
      ],
      icon: <BarChart3 size={40} />,
      color: 'blue'
    },
    {
      id: 3,
      title: 'DataOps',
      description: 'Implement automated workflows, orchestration, and monitoring systems to ensure reliable, efficient, and scalable data operations.',
      capabilities: [
        'Workflow automation and orchestration',
        'Data pipeline monitoring and alerts',
        'CI/CD for data pipelines',
        'Testing and validation frameworks',
        'Operational efficiency optimization'
      ],
      icon: <GitBranch size={40} />,
      color: 'cyan'
    },
    {
      id: 4,
      title: 'MLOps',
      description: 'Operationalize machine learning models by building automated pipelines for training, deployment, monitoring, and lifecycle management.',
      capabilities: [
        'ML pipeline development and automation',
        'Model training and deployment',
        'Model monitoring and performance tracking',
        'Feature engineering pipelines',
        'Scalable ML infrastructure'
      ],
      icon: <Cpu size={40} />,
      color: 'indigo'
    },
    {
      id: 5,
      title: 'Agentic AI',
      description: 'Develop intelligent AI agents that can autonomously analyze data, automate workflows, and support business decision-making.',
      capabilities: [
        'AI-powered autonomous agents',
        'Data-driven task automation',
        'Intelligent workflow orchestration',
        'Predictive and prescriptive analytics',
        'AI integration with existing systems'
      ],
      icon: <Bot size={40} />,
      color: 'purple'
    },
    {
      id: 6,
      title: 'Cloud Solution Architecture',
      description: 'Design scalable, secure, and cost-efficient cloud architectures to support modern data platforms, analytics systems, and AI solutions.',
      capabilities: [
        'Cloud platform architecture (GCP-focused)',
        'Data lake, lakehouse, and warehouse design',
        'Scalable analytics and AI infrastructure',
        'Cloud migration strategies',
        'Security, governance, and compliance'
      ],
      icon: <Cloud size={40} />,
      color: 'emerald'
    }
  ];

  return (
    <div className="services-page">
      {/* Services Detailed List */}
      <section className="section bg-light" style={{ paddingTop: '50px' }}>
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
                  <p className="service-desc">{service.description}</p>

                  <div className="capabilities-container">
                    <h3>Key capabilities</h3>
                    <ul className="capabilities-list">
                      {service.capabilities.map((cap, i) => (
                        <li key={i}>
                          <CheckCircle2 size={18} className="cap-icon" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
