import React, { useState } from 'react';
import './projects.css';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import data from '../../utils/projects.json';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique project types for filtering
  const projectTypes = ['all', ...new Set(data.map(project => project.type))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? data 
    : data.filter(project => project.type === activeFilter);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'frontend': return <FaCode className="type-icon" />;
      case 'backend': return <FaServer className="type-icon" />;
      case 'mobile': return <FaMobileAlt className="type-icon" />;
      default: return <FaCode className="type-icon" />;
    }
  };

  return (
    <section className="projects-wrapper" id='projects'>
      {/* Animated background elements */}
      <div className="projects-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="paddings innerWidth projects-container">
        {/* Header Section */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">My Technical Creations</span>
          <h2 className="section-title">Software Engineering Projects</h2>
          <p className="section-description">
            A showcase of my technical solutions that blend elegant design with robust functionality.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div 
          className="filter-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectTypes.map((type) => (
            <motion.button
              key={type}
              className={`filter-button ${activeFilter === type ? 'active' : ''}`}
              onClick={() => setActiveFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type === 'all' ? 'All Projects' : (
                <>
                  {getTypeIcon(type)}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="project-image"
                />
                {hoveredProject === i && (
                  <motion.div 
                    className="project-hover-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink className="link-icon" />
                    </a>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub className="link-icon" />
                      </a>
                    )}
                  </motion.div>
                )}
              </div>

              <div className="project-content">
                <div className="project-type">
                  {getTypeIcon(project.type)}
                  <span>{project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>
                </div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.detail}</p>
                
                <div className="project-tech-stack">
                  {project.tech && project.tech.split(',').map((tech, index) => (
                    <span key={index} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
              </div>

              {hoveredProject === i && (
                <motion.div 
                  className="project-hover-bg"
                  layoutId="hoverBg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;