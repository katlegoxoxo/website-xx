import React from 'react';
import { motion } from 'framer-motion';
import type { EducationItem } from '../types';

interface CertificateModalProps {
  item: EducationItem;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } },
};

const CertificateModal: React.FC<CertificateModalProps> = ({ item, onClose }) => {
  if (!item.certificateUrl) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="bg-slate-800/80 border border-white/10 rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex-grow overflow-hidden">
            <img 
                src={item.certificateUrl} 
                alt={`${item.degree} Certificate`} 
                className="w-full h-full object-contain rounded-lg"
                style={{ maxHeight: 'calc(90vh - 120px)' }}
            />
        </div>
        <div className="p-4 text-center border-t border-white/10 flex-shrink-0">
            <h3 className="font-bold text-lg text-cyan-400">{item.degree}</h3>
            <p className="text-slate-400">{item.institution}</p>
        </div>
         <button onClick={onClose} className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors bg-slate-900/50 rounded-full w-8 h-8 flex items-center justify-center z-10">
            <i className="fas fa-times"></i>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;