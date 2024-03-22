
// Importer React et les hooks nécessaires
import React from 'react';


import ExerciceList from'./ortho2005.json'


import Orthographe2005 from './orthographe2005';

import   '../../../../../Styles/MajorStyles';


function Orth2005() {
  return (
    <Orthographe2005   
    quizzes={ExerciceList}
    
    />
  );
}


export default Orth2005;
