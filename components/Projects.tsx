import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import Modal from './Modal';

interface ProjectsProps {
  id: string;
  title: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC<ProjectsProps> = ({ id, title }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id={id} title={title}>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.name}
            layoutId={`card-${project.name}`}
            variants={itemVariants}
            onClick={() => setSelectedProject(project)}
            className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col group cursor-pointer"
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
              <span className="font-mono text-xs text-slate-500">{project.date}</span>
            </div>
            <p className="text-sm text-slate-400 flex-grow mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-cyan-400/10 text-cyan-300 text-xs font-mono px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                <i className="fas fa-expand-alt mr-2"></i>View Details
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
