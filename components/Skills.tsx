import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import { motion, Variants } from 'framer-motion';

interface SkillsProps {
  id: string;
  title: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills: React.FC<SkillsProps> = ({ id, title }) => {
  return (
    <Section id={id} title={title}>
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SKILL_CATEGORIES.map(category => (
          <motion.div 
            key={category.title} 
            className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            variants={itemVariants}
          >
            <h3 className="font-bold text-lg mb-4 text-slate-200">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map(skill => (
                <div key={skill.name} className="flex items-center gap-3 bg-white/5 p-3 rounded-md hover:bg-white/10 transition-colors">
                  <i className={`${skill.icon} text-cyan-400 w-5 text-center`}></i>
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;