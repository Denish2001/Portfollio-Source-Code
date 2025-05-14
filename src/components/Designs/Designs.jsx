import React, { useState } from 'react';
import './Designs.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiFigma, FiImage } from 'react-icons/fi';
import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import designs from '../../utils/designs.json'; // Assuming you have a JSON file with your designs data

const Designs = () => {
  const [activeTab, setActiveTab] = useState('uiux');
  const [selectedProject, setSelectedProject] = useState(null);

  const getToolIcon = (tool) => {
    switch(tool.toLowerCase()) {
      case 'figma': return <FiFigma className="tool-icon" />;
      case 'adobe xd': return <SiAdobexd className="tool-icon" />;
      case 'illustrator': return <SiAdobeillustrator className="tool-icon" />;
      case 'photoshop': return <SiAdobephotoshop className="tool-icon" />;
      default: return <FiImage className="tool-icon" />;
    }
  };

  return (
    <section className="designs-wrapper" id="designs">
      {/* Animated background elements */}
      <div className="designs-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="paddings innerWidth designs-container">
        {/* Header Section */}
        <motion.div 
          className="designs-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">My Creative Works</span>
          <h2 className="section-title">Design Portfolio</h2>
          <p className="section-description">
            A collection of my UI/UX and graphic design projects that blend aesthetics with functionality.
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
            className={`tab-button ${activeTab === 'uiux' ? 'active' : ''}`}
            onClick={() => setActiveTab('uiux')}
          >
            UI/UX Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'graphic' ? 'active' : ''}`}
            onClick={() => setActiveTab('graphic')}
          >
            Graphic Design
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {designs[activeTab].map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: project.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="view-text">View Project</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <div className="project-tools">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="tool-tag">
                        {tag.toLowerCase().includes('figma') || 
                         tag.toLowerCase().includes('adobe') || 
                         tag.toLowerCase().includes('photoshop') || 
                         tag.toLowerCase().includes('illustrator') ? 
                         getToolIcon(tag) : null}
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="more-tags">+{project.tags.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="modal-content"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="close-modal"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>
                
                <div className="modal-image-container">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="modal-image"
                  />
                </div>
                
                <div className="modal-details">
                  <div className="modal-header">
                    <h3>{selectedProject.title}</h3>
                    <span className="project-category">{selectedProject.category}</span>
                  </div>
                  
                  <p className="project-description">{selectedProject.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag.toLowerCase().includes('figma') || 
                         tag.toLowerCase().includes('adobe') || 
                         tag.toLowerCase().includes('photoshop') || 
                         tag.toLowerCase().includes('illustrator') ? 
                         getToolIcon(tag) : null}
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Full Project <FiExternalLink />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Designs;
