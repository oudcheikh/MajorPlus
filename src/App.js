import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./composents/Sign_in/v2/context/AuthContext.js";
import ProtectedRoute from "./composents/Sign_in/v2/components/ProtectedRoute.js";
import Annimation from "./composents/AnnimationSVG/Annimation.js";
import SVG from "./composents/ProgressMap/Svg.js";
import ProgressMap from "./composents/ProgressMap/Acc.js";
import SignIn from "./composents/Sign_in/v2/components/SignIn.js";
import SignUp from "./composents/Sign_in/v2/components/SignUp.js";
import SignOut from "./composents/Sign_in/v2/components/SignOut.js";
import Acceuil from "./composents/_ReusableComponents/Accueil.js";
import Math from "./composents/Math/Math.js";
import C6 from "./composents/Math/Periode1/C6/C6.js";
import M2 from "./composents/Math/Periode1/M2/M2.js";
import G1 from "./composents/Math/Periode1/G1/G1.js";
import TopBarWithDrawer from './TopBarWithDrawer';
import ProgressTracker from './composents/ProgressTracker/ProgressTracker.js';
import { useLanguage } from './LanguageProvider';
import C1_new from './composents/Math/Periode1/C1/v2/C1_new.js';
import C2_new from './composents/Math/Periode1/C2/v2/C2_new.js';
import C3_new from './composents/Math/Periode1/C3/V2/C3_new.js';
import C4 from './composents/Math/Periode1/C4/C4.js';
import C5 from './composents/Math/Periode1/C5/C5.js';

import G3 from './composents/Math/Periode1/G3/G3.js';
import G2 from './composents/Math/Periode1/G2/G2.js';

import G3A2 from './composents/Math/Periode1/G3/G3A2.js';
import G1A3 from './composents/Math/Periode1/G1/G1A3.js';
import G1A4 from './composents/Math/Periode1/G1/G1A4.js';

import P2A1A from "./composents/Math/Periode2/C09/P2A1A.js";
import P2A1B from "./composents/Math/Periode2/C12/P2A1B.js";
import P3A3 from "./composents/Math/Periode2/C11/P3A3.js";
// import MesureAires from './composents/Math/Periode2/M5/MesuresAires.js'
import Triangle from './composents/Math/Periode2/G4/Triangles.js'

import ScoreBoard from './composents/Scorbord.js'
import Animation from './composents/Confetti/Victoire.js'
import Buuton3D from './composents/3DButton/Button.js';

// Import routes
import HomeRoutes from "./routes/HomeRoutes.js";
import MathRoutes from "./routes/MathRoutes.js";
import PeriodRoutes from "./routes/PeriodRoutes.js";
import Science from './composents/Science.js'
import EquilibrAlimantaire from './composents/Science/Chapitre1/EquilibreAlimantaire.js'
import EquilibrEnergitique from'./composents/Science/Chapitre2/EquilibreEnergitique.js'
import Desertfication from './composents/Science/Chapitre3/Desertification.js'
import Pollution from './composents/Science/Chapitre4/Pollution.js'
import EauEtSante from './composents/Science/Chapitre5/EauEtSante.js'
import Vaccination from './composents/Science/Chapitre6/Vaccination.js'
import Sida from './composents/Science/Chapitre7/Sida.js'


const initialState = [
    { title: 'les grands nombres', status: 'in-progress', isCurrent: true },
    { title: 'La comparaison', status: 'locked', isCurrent: false },
    { title: 'Les mesures', status: 'locked', isCurrent: false },
    { title: 'M1', status: 'locked', isCurrent: false },
    { title: 'C6', status: 'locked', isCurrent: false },
    { title: 'G2', status: 'locked', isCurrent: false },
    { title: 'G7', status: 'locked', isCurrent: false },
    { title: 'Chap13', status: 'locked', isCurrent: false },
    { title: 'Fractions', status: 'locked', isCurrent: false },
    { title: 'Calcul prix', status: 'locked', isCurrent: false },
    { title: 'Mesures d aires', status: 'locked', isCurrent: false },
    { title: 'Triangles', status: 'locked', isCurrent: false },

];


function App() {
    const [progress, setProgress] = useState(initialState);
    const { toggleLanguage, t } = useLanguage();

    useEffect(() => {
        // Simule la récupération d'un utilisateur depuis le local storage
        const savedUser = localStorage.getItem('user');

        toggleLanguage('ar');

    }, []);
    const handleFinish = (index) => {
        const newProgress = progress.map((item, i) => {
            if (i === index) return { ...item, status: 'completed', isCurrent: false };
            if (i === index + 1) return { ...item, status: 'in-progress', isCurrent: true };
            return item;
        });
        setProgress(newProgress);
    };


    return (
        <AuthProvider>
            <Router>

                <div className="App">
                    <TopBarWithDrawer
                        // drawerOpen={drawerOpen}
                        // setDrawerOpen={setDrawerOpen}
                        toggleLanguage={toggleLanguage}
                        t={t}
                    //navigate={navigate}
                    />

                    <Routes>
                        <Route path="/" element={<Acceuil />} />
                        <Route path="/Math" element={<Math />} />

                        <Route path="/Science" element={<Science />} />
                        <Route path="/EquilibrAlimantaire" element={<EquilibrAlimantaire />} />
                        <Route path="/EquilibrEnergitique" element={<EquilibrEnergitique />} />
                        <Route path="/Desertfication" element={<Desertfication />} />
                        <Route path="/Pollution" element={<Pollution />} />
                        <Route path="/EauEtSante" element={<EauEtSante />} />
                        <Route path="/Vaccination" element={<Vaccination />} />
                        <Route path="/Sida" element={<Sida />} />

                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signout" element={<SignOut />} />



                        <Route path="/ProgressTracker" element={<ProgressTracker progress={progress} onFinish={handleFinish} />} />
                        <Route path="/C1_new/:periodeId/:exerciseId" element={<C1_new onFinish={() => handleFinish(0)} />} />


                        <Route path="/C2_new" element={<C2_new onFinish={() => handleFinish(1)} />} />
                        <Route path="/C3_new" element={<C3_new onFinish={() => handleFinish(2)} />} />

                        <Route path="/C5" element={<C5 onFinish={() => handleFinish(3)} />} />

                        <Route path="/C6" element={<C6 onFinish={() => handleFinish(3)} />} />
                        <Route path="/G1" element={<G1 onFinish={() => handleFinish(4)} />} />
                        <Route path="/G2" element={<G2 onFinish={() => handleFinish(4)} />} />
                        <Route path="/G3" element={<G3 onFinish={() => handleFinish(4)} />} />

                        <Route path="/M2" element={<M2 onFinish={() => handleFinish(5)} />} />

                        {/* Periode2 */}
                        <Route path="/P2A1A" element={<P2A1A onFinish={() => handleFinish(0)} />} />
                        <Route path="/P2A1B" element={<P2A1B onFinish={() => handleFinish(0)} />} />
                        <Route path="/P3A3" element={<P3A3 onFinish={() => handleFinish(0)} />} />

                        <Route path="/Buuton3D" element={<Buuton3D />} />


                        {/* Noscroll */}

                        <Route path="/G3A2" element={<G3A2 />} />
                        <Route path="/G1A3" element={<G1A3 />} />
                        <Route path="/G1A4" element={<G1A4 />} />


                        <Route path="/scoreboard" element={<ScoreBoard />} />
                        <Route path="/Animation" element={<Animation />} />

                        {/* Periode2 */}
                        {/* <Route path="/CalculPrix" element={<CalculPrix onFinish={() => handleFinish(9)} />} /> */}
                        {/* <Route path="/MesureAires" element={<MesureAires onFinish={() => handleFinish(10)} />} /> */}
                        <Route path="/Triangle" element={<Triangle onFinish={() => handleFinish(11)} />} />
                        {/* Periode2 */}
                        {/* <Route path="/MesureAires" element={<MesureAires onFinish={() => handleFinish(10)} />} />
 <Route path="/Triangle" element={<Triangle onFinish={() => handleFinish(11)} />} /> */}



                        {/* Protected Routes */}
                        <Route element={<ProtectedRoute />}>
                            {HomeRoutes}
                            {MathRoutes}
                            {PeriodRoutes}
                        </Route>
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
