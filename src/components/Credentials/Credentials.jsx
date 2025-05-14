import React, { useState } from 'react';
import './Credentials.css';
import { motion } from 'framer-motion';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import data from "../../utils/Education.json";
import AccData from "../../utils/Certifications.json";

const Credentials = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [expandedCert, setExpandedCert] = useState(null);

  const toggleCert = (index) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  return (
    <section className="certs-wrapper" id='cert'>
      <div className="innerWidth paddings certs-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="certs-header"
        >
          <span className="section-subtitle">My Qualifications</span>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="tab-switcher">
            <button 
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap className="tab-icon" /> Education
            </button>
            <button 
              className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              <FaCertificate className="tab-icon" /> Certifications
            </button>
          </div>
        </motion.div>

        {activeTab === 'education' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="education-grid"
          >
            {data.map((item, index) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={index} 
                className="education-card"
              >
                <div className="edu-image-container">
                  <img src={item.image} alt={item.School} className="edu-image" />
                  <div className="edu-level-badge">
                    <span>{item.level}</span>
                  </div>
                </div>
                <div className="edu-content">
                  <h3>{item.School}</h3>
                  <div className="edu-details">
                    <div className="detail-item">
                      <span className="detail-label">Period:</span>
                      <span>{item.Period}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Grade:</span>
                      <span>{item.Grade}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Major:</span>
                      <span>{item.Major}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'certifications' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="certifications-container"
          >
            {AccData.map((item, index) => (
              <motion.div 
                key={index}
                className={`cert-card ${expandedCert === index ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div 
                  className="cert-header"
                  onClick={() => toggleCert(index)}
                >
                  <div className="cert-title">
                    <FaCertificate className="cert-icon" />
                    <h3>{item.name}</h3>
                  </div>
                  <FiChevronDown className={`chevron ${expandedCert === index ? 'rotate' : ''}`} />
                </div>
                
                {expandedCert === index && (
                  <motion.div 
                    className="cert-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="detail-row">
                      <span className="detail-label">Issued by:</span>
                      <span>{item.by}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Issued on:</span>
                      <span>{item.date}</span>
                    </div>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        View Credential <FiExternalLink />
                      </a>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Credentials;