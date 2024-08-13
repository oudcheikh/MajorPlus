import React, { useState } from "react";
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

import ProgressTracker from './composents/ProgressTracker/ProgressTracker.js';

import C1_new from './composents/Math/Periode1/C1/v2/C1_new.js';
import C2_new from './composents/Math/Periode1/C2/v2/C2_new.js';
import C3_new from './composents/Math/Periode1/C3/V2/C3_new.js';
import C4 from './composents/Math/Periode1/C4/C4.js';

import SecondComponent from './composents/ProgressTracker/SecondComponent';


import Buuton3D from './composents/3DButton/Button.js';

// Import routes
import HomeRoutes from "./routes/HomeRoutes.js";
import MathRoutes from "./routes/MathRoutes.js";
import PeriodRoutes from "./routes/PeriodRoutes.js";

const initialState = [
    { title: 'les grands nombres', status: 'in-progress', isCurrent: true },
    { title: 'La comparaison', status: 'locked', isCurrent: false },
    { title: 'Les mesures', status: 'locked', isCurrent: false },
    { title: 'M1', status: 'locked', isCurrent: false },
    { title: 'C6', status: 'locked', isCurrent: false },
    { title: 'G2', status: 'locked', isCurrent: false },
   
];

function App() {
    const [progress, setProgress] = useState(initialState);

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
                    <Routes>
                        <Route path="/" element={<Acceuil />} />
                        <Route path="/Math" element={<Math />} />

                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signout" element={<SignOut />} />

                       

                        <Route path="/ProgressTracker" element={<ProgressTracker progress={progress} onFinish={handleFinish} />} />
                        <Route path="/C1_new" element={<C1_new onFinish={() => handleFinish(0)} />} />
                        <Route path="/C6" element={<C6 />} />
                        <Route path="/M2" element={<M2 />} />
                        <Route path="/G1" element={<G1 />} />

                        <Route path="/C2_new" element={<C2_new onFinish={() => handleFinish(1)} />} />
                        <Route path="/C3_new" element={<C3_new onFinish={() => handleFinish(2)} />} />
                        <Route path="/C4" element={<C4 onFinish={() => handleFinish(3)} />} />


                        <Route path="/Buuton3D" element={<Buuton3D />} />

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
