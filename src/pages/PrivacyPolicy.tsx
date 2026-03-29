import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sections = [
    {
      title: '1. Introduction',
      content: (
        <p>
          Yonova Technologies Pvt. Ltd. ("we," "our," or "us") respects your privacy. This Privacy Policy
          explains how we handle information when you visit our website{' '}
          <a href="https://yonovatechnologies.com" target="_blank" rel="noopener noreferrer">
            yonovatechnologies.com
          </a>
          .<br /><br />
          Even though our website does not collect personal information, we aim to be transparent about
          privacy and data protection.
        </p>
      ),
    },
    {
      title: '2. Information Collection',
      content: (
        <ul>
          <li>Our website does not collect personal information such as names, email addresses, phone numbers, or payment details.</li>
          <li>We may use technical analytics (like cookies or Google Analytics) to monitor website performance, but no personal data is stored or shared.</li>
        </ul>
      ),
    },
    {
      title: '3. Use of Information',
      content: (
        <>
          <p>Any data collected for analytics purposes is used solely to:</p>
          <ul>
            <li>Understand website performance</li>
            <li>Improve user experience</li>
            <li>Monitor traffic patterns</li>
          </ul>
          <p>No personal data is used for marketing or shared with third parties.</p>
        </>
      ),
    },
    {
      title: '4. Cookies & Tracking',
      content: (
        <ul>
          <li>We may use cookies or other tracking tools to measure website traffic and performance.</li>
          <li>Cookies do not collect personal data.</li>
          <li>You can choose to disable cookies in your browser settings, though some features of the website may not work optimally.</li>
        </ul>
      ),
    },
    {
      title: '5. Third-Party Links',
      content: (
        <ul>
          <li>Our website may contain links to third-party websites.</li>
          <li>We are not responsible for the privacy practices or content of these websites.</li>
          <li>Please review the privacy policies of any linked site before providing information.</li>
        </ul>
      ),
    },
    {
      title: '6. Changes to this Privacy Policy',
      content: (
        <ul>
          <li>We may update this Privacy Policy from time to time.</li>
          <li>The “Effective Date” at the top reflects the latest version.</li>
          <li>We encourage visitors to review this policy periodically.</li>
        </ul>
      ),
    },
    {
      title: '7. Contact Us',
      content: (
        <p>
          If you have questions or concerns regarding this Privacy Policy, please contact us:<br /><br />
          <strong>Email:</strong>{' '}
          <a href="mailto:hello@yonovatechnologies.com">hello@yonovatechnologies.com</a><br />
          <strong>Address:</strong> Lalitpur, Nepal
        </p>
      ),
    },
  ];

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <motion.div
            className="privacy-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1>Privacy Policy</h1>
            <p className="privacy-company">Yonova Technologies Pvt. Ltd.</p>
            <p className="privacy-effective">Effective Date: March 27, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="privacy-body">
        <div className="container privacy-container">
          <div className="privacy-sections">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="privacy-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.05 * index },
                  },
                }}
              >
                <h2>{section.title}</h2>
                <div className="privacy-section-body">{section.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
