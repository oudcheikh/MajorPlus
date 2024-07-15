import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Level from './Level';
import Exercice1 from './Exercice1';
import Exercice2 from './Exercice2'; // Assurez-vous que vous avez bien le bon import

import './accueil.css';


function Application({ levels }) {
     const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
    };

    return (
        <div className="application">
            <div className="levels">
                {levels.map((level, index) => (
                    <Level
                        key={level.id} // Utilisez level.id comme clé unique
                        title={level.title}
                        status={level.status}
                        backgroundImage={level.backgroundImage}
                        path={level.path}
                        onClick={() => goTo(level.path)}
                        id={level.id}
                    />
                ))}
            </div>
          
        </div>
    );
}

export default Application;
