import React from 'react';
import { motion } from 'framer-motion';
import './Level.css';


const Level = ({ id,path, title, status, backgroundImage, onClick }) => {
    const handleClick = () => {
        console.log("key")
        console.log(id)
        if (status === 'in-progress') {
            onClick();
        }
    };


  return (
    <div>
    <motion.div 
     className={title}
     
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      // onClick={() => progress.buttons[id].status === 'inProgress' && handleClick(path)}
      // disabled={progress.buttons[id].status === 'locked'}

    >
     
    </motion.div>
     <span className="level-title">{title}-------</span>
     </div>
  );
}

export default Level;
