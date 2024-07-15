import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div className={`level ${status}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <button onClick={handleClick} disabled={status === 'locked'}>
                {title}
                
                
            </button>
        </div>
    );
}

export default Level;

















// import React from 'react';
// import { motion } from 'framer-motion';
// import './Level.css';

// function Level({ title, status, onComplete }) {
// //   const icon = () => {
// //     switch (status) {
// //       case 'completed':
// //         return '✔️';
// //       case 'in-progress':
// //         return '⏳';
// //       case 'locked':
// //         return '🔒';
// //       default:
// //         return '';
// //     }
// //   };

//   return (
//     <div>


//     <motion.div 
//       className={`level ${status}`} 
//       initial={{ opacity: 0, scale: 0.8 }} 
//       animate={{ opacity: 1, scale: 1 }} 
//       transition={{ duration: 0.5 }}
//       onClick={status === 'in-progress' ? onComplete : null}
//     >
//       {/* <div className="icon">{icon()}</div> */}
//       {/* <div className="title">{title}</div> */}
//     </motion.div>
//     <span className="level-title">{title}</span>
//     </div>
//   );
// }

// export default Level;
