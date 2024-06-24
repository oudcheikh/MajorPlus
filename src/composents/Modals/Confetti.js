// Confetti.js
import React from 'react';
import { motion } from 'framer-motion';

const Confetti = ({ x, y, delay }) => {
  return (
    <motion.div
      className="confetti"
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x, y }}
      transition={{ duration: 1, delay, repeat: Infinity, repeatType: 'mirror' }}
    />
  );
};

export default Confetti;
