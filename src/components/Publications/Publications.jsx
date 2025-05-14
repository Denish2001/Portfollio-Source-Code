import React, { useState } from 'react';
import './Publications.css';
import { FiExternalLink } from 'react-icons/fi';
import { FaBookOpen, FaFlask } from 'react-icons/fa';
import { motion } from 'framer-motion';
import articles from '../../utils/Articles.json';
import research from '../../utils/Research.json';
import { Link } from 'react-router-dom';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="literary-wrapper" id="articles">
      {/* Animated background elements */}
      <div className="literary-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="paddings innerWidth literary-container">
        <motion.div 
          className="literary-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">My Written Works</span>
          <h2 className="section-title">Literary Contributions</h2>
          <p className="section-description">
            A collection of my articles and research papers that blend technical insight with creative expression.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="tab-navigation"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button 
            className={`tab-button ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => setActiveTab('articles')}
          >
            <FaBookOpen className="tab-icon" /> Articles
          </button>
          <button 
            className={`tab-button ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            <FaFlask className="tab-icon" /> Research Papers
          </button>
        </motion.div>

        {/* Content Area */}
        <motion.div 
          className="works-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {activeTab === 'articles' && (
            <div className="works-grid">
              {articles.map((item, index) => (
                <motion.div 
                  key={index}
                  className="work-card"
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="work-content">
                    <h3 className="work-title">{item.name}</h3>
                    <div className="work-meta">
                      <span className="work-author"><i>{item.by}</i></span>
                      <span className="work-date">{item.Date}</span>
                    </div>
                    <Link 
                      to={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="work-link"
                    >
                      Read Article <FiExternalLink className="link-icon" />
                    </Link>
                  </div>
                  {hoveredItem === index && (
                    <motion.div 
                      className="work-hover-bg"
                      layoutId="hoverBg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'research' && (
            <div className="works-grid">
              {research.map((item, index) => (
                <motion.div 
                  key={index}
                  className="work-card"
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredItem(index + 100)}
                  onHoverEnd={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="work-content">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-meta">
                      <span className="work-author"><i>{item.by}</i></span>
                      <span className="work-date">{item.Date}</span>
                    </div>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="work-link"
                    >
                      Read Paper <FiExternalLink className="link-icon" />
                    </a>
                  </div>
                  {hoveredItem === index + 100 && (
                    <motion.div 
                      className="work-hover-bg"
                      layoutId="hoverBg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;