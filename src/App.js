import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./composents/Accueil";
import Math from "./composents/Math/Math";

import QuizTest from "./composents/home/QuizTest";
import QuizTestarab from "./composents/home/QuizTestarab";

import C1 from "./composents/Math/Periode1/C1/C1";
import C1_new from "./composents/Math/Periode1/C1/v2/C1_new";
import C2 from "./composents/Math/Periode1/C2/C2";
import C3 from "./composents/Math/Periode1/C3/C3";
import C4 from "./composents/Math/Periode1/C4/C4";
import C5 from "./composents/Math/Periode1/C5/C5";
import G2 from "./composents/Math/Periode1/G2/G2";
import C5A3 from "./composents/Math/Periode1/C6/C5A3";
import C5A4 from "./composents/Math/Periode1/C6/C5A4";
import Kangaroo from "./composents/Math/Periode1/C6/Kangaroo";
import C5A5 from "./composents/Math/Periode1/C6/C5A5";
import C6 from "./composents/Math/Periode1/C6/C6";
import C7 from "./composents/Math/Periode1/C7/C7";
import M2A1 from "./composents/Math/Periode1/M2/M2A1";
import M2A2 from "./composents/Math/Periode1/M2/M2A2";
import M2A3 from "./composents/Math/Periode1/M2/M2A3";
import M2 from "./composents/Math/Periode1/M2/M2";
import G3 from "./composents/Math/Periode1/G3/G3";
import G1A2 from "./composents/Math/Periode1/G1/G1A2";
import G1 from "./composents/Math/Periode1/G1/G1";
import SousEtAddFraction from "./composents/Math/Periode3/C17/SousEtAddFraction";
import P2A1A from "./composents/Math/Periode2/C09/P2A1A";
import P2A1C from "./composents/Math/Periode2/C10/P2A1C";
import P2A1B from "./composents/Math/Periode2/C12/P2A1B";
import P3A3 from "./composents/Math/Periode2/C11/P3A3";
import P3A4 from "./composents/Math/Periode2/C13/P3A4";
import P3A6 from "./composents/Math/Periode2/G4/P3A6";
import P3A7 from "./composents/Math/Periode2/G5/P3A7";
import P3A8 from "./composents/Math/Periode2/M4/P3A8";
import Aire2 from "./composents/Math/Periode2/M3/Aire2";
import P3A5 from "./composents/Math/Periode2/C14_C15_C16/P3A5";
import Chap13 from "./composents/Math/Periode2/C16/Chap13";
import Test from "./composents/Math/Periode2/C11/DivisionEuclid";
import Fraction2 from "./composents/Math/Periode2/M5/Fraction2";
import Periode1 from "./composents/Math/Periode1";
import Periode2 from "./composents//Math/Periode2";
import Period3 from "./composents//Math/period3";
import CalculeAire from "./composents/C20/CalculeAire";
// import SousEtAddFraction from './composents/C17/SousEtAddFraction';
import PatageInegaux from "./composents/Math/Periode3/C19/PatageInegaux.js";
import NomberDecimaux from "./composents/C18/NomberDecimaux";

import Periode4 from "./composents/Math/Periode4/periode4.js";
import La_proportionnalité from "./composents/Math/Periode4/Proportionnalité/La_proportionnalité.js";

import Les_solides from "./composents/Math/Periode4/les solides/les_solides.js";

import Les_mesures_Agrairs from "./composents/Math/Periode4/MesureAgraires/MesureAgraire.js";

import Division from "./composents/Math/Periode2/C09/P2A1A.js";
import M3 from "./composents/Math/Periode2/M3/M3.js";

import Quiz2 from "./composents/Math/Quiz.js";
import V from "./composents/Modals/V.js";

import Annimation from "./composents/AnnimationSVG/Annimation.js";

import ProgressMap from "./composents/ProgressMap/Acc.js";

import SVG from "./composents/ProgressMap/Svg.js";
import Login from "./composents/Sign_in/Login.js";
import { AuthProvider } from "./composents/Sign_in/v2/context/AuthContext.js";
import ProtectedRoute from "./composents/Sign_in/v2/components/ProtectedRoute.js";
import SignIn from "./composents/Sign_in/v2/components/SignIn.js";
import SignUp from "./composents/Sign_in/v2/components/SignUp.js";

const initialState = {
    buttons: [
        { id: 0, status: "inProgress", title: "C1", path: "/C1", ClassTitre: "T1", chapitre: "les grands nombres" },
        { id: 1, status: "locked", title: "C2", path: "/C2", ClassTitre: "T2", chapitre: "la division" },
        { id: 2, status: "locked", title: "C3", path: "/C3", ClassTitre: "T3", chapitre: "les aires" },
        { id: 3, status: "locked", title: "C4", path: "/C4", ClassTitre: "T4", chapitre: "Multuplication" },
        { id: 4, status: "locked", title: "C5", path: "/C5", ClassTitre: "T5", chapitre: "Addition" },
        { id: 5, status: "locked", title: "C6", path: "/C6", ClassTitre: "T6", chapitre: "les surfaces" },
        { id: 6, status: "locked", title: "C7", path: "/C7", ClassTitre: "T7", chapitre: "la soustraction" },
        { id: 7, status: "locked", title: "C8", path: "/C8", ClassTitre: "T8", chapitre: "les angles" },
        { id: 8, status: "locked", title: "C9", path: "/C9", ClassTitre: "T9", chapitre: "les mesures agraires" },
        { id: 9, status: "locked", title: "C10", path: "/C10", ClassTitre: "T10", chapitre: "la proportionnalité" },
    ],
    lines: [
        {
            id: 0,
            status: "inactive",
            points: "M805 1078 c-60 -31 -370 -209 -543 -310 -84 -50 -157 -99 -162 -109 -8 -15 -3 -23 32 -47 71 -48 298 -180 581 -337 147 -82 266 -154 264 -159 -2  -6 -39 -31 -81 -56 -58 -34 -73 -46 -57 -48 47 -7 181 76 181 112 0 17 -17 27 -460 276 -179 100 -349 196 -377 212 -29 16 -53 33 -53 37 0 8 705 411 719 411 4 0 55 -27 112 -60 102 -59 134 -71 127 -48 -4 11 -224 148 -237 148 -3 -1 -24 -10 -46 -22z",
            svgClass: "svg1",
        },
        { id: 1, status: "inactive", points: "20,50 100,50 ", svgClass: "svg2" },
        { id: 2, status: "inactive", points: "80,10 80,90", svgClass: "svg3" },
        { id: 3, status: "inactive", points: "  140,60 30,20", svgClass: "svg4" },
        { id: 4, status: "inactive", points: "140,15 80,90", svgClass: "svg5" },
        { id: 5, status: "inactive", points: "20,50 140,70", svgClass: "svg6" },
        { id: 6, status: "inactive", points: "100,0 120,80", svgClass: "svg7" },
        { id: 7, status: "inactive", points: "100,60 20,30", svgClass: "svg8" },
        { id: 8, status: "inactive", points: "80,8 20,90", svgClass: "svg9" },
    ],
};

function App() {
    const [progress, setProgress] = useState(initialState);

    const [levels, setLevels] = useState([
        { id: 0, title: "C1", path: "/C1", status: "in-progress", backgroundImage: "path_to_image1" },
        { id: 1, title: "C2", path: "/C2", status: "locked", backgroundImage: "path_to_image2" },
        { id: 2, title: "C3", path: "/C3", status: "locked", backgroundImage: "path_to_image1" },
        { id: 3, title: "C4", path: "/C4", status: "locked", backgroundImage: "path_to_image2" },
    ]);

    const handleComplete = (index) => {
        const newLevels = [...levels];
        newLevels[index].status = "completed";
        

        if (newLevels[index + 1]) {
            newLevels[index + 1].status = "in-progress";
        }
        setLevels(newLevels);
    };

    const changer_etat = (index) => {
        console.log("----------------------------");

        console.log("c est de la fonction mere", index);
        const newButtons = [...progress.buttons];
        const newLines = [...progress.lines];
        newButtons[index] = { ...newButtons[index], status: "completed" };
        newLines[index] = { ...newLines[index], status: "active" };
        if (newButtons[index + 1]) {
            newButtons[index + 1] = { ...newButtons[index + 1], status: "inProgress" };
        }

        setProgress({ ...progress, buttons: newButtons, lines: newLines });

        const lines = document.querySelectorAll(".polyline");
        lines.forEach((line, i) => {
            if (newLines[i].status === "active") {
                line.classList.remove("inactive");
                line.classList.add("active");
            } else {
                line.classList.remove("active");
                line.classList.add("inactive");
            }
        });

        console.log(progress.buttons);
        console.log(progress.lines);
    };

    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Annimation />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />

                        <Route path="/Accueil" element={<Accueil />} />
                        <Route path="/SVG" element={<SVG initialState={progress} />} />
                        <Route path="/ProgressMap" element={<ProgressMap initialState={progress} />} />
                        <Route path="/C1" element={<C1 index={0} onComplete={changer_etat} />} />
                        <Route
                            path="/C1_new"
                            element={
                                <ProtectedRoute>
                                    <C1_new />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/C2" element={<C2 index={1} onComplete={changer_etat} />} />
                        <Route path="/C3" element={<C3 index={2} onComplete={changer_etat} />} />
                        <Route path="/C4" element={<C4 index={3} onComplete={changer_etat} />} />
                        <Route path="/QuizTest" element={<QuizTest />} />
                        <Route path="/QuizTestarab" element={<QuizTestarab />} />
                        <Route path="/SousEtAddFraction" element={<SousEtAddFraction />} />
                        <Route path="/C5A1" element={<C5 />} />
                        <Route path="/Math" element={<Math />} />
                        <Route path="/C5A3" element={<C5A3 />} />
                        <Route path="/C5A4" element={<C5A4 />} />
                        <Route path="/Kangaroo" element={<Kangaroo />} />
                        <Route path="/C5A5" element={<C5A5 />} />
                        <Route path="/C6" element={<C6 />} />
                        <Route path="/C7" element={<C7 />} />
                        <Route path="/M2A1" element={<M2A1 />} />
                        <Route path="/M2A2" element={<M2A2 />} />
                        <Route path="/M2A3" element={<M2A3 />} />
                        <Route path="/M2" element={<M2 />} />
                        <Route path="/G1" element={<G1 />} />
                        <Route path="/G2" element={<G2 />} />
                        <Route path="/G1A2" element={<G1A2 />} />
                        <Route path="/G3" element={<G3 />} />
                        <Route path="/G1" element={<G1 />} />
                        <Route path="/Periode1" element={<Periode1 />} />
                        <Route path="/Periode2" element={<Periode2 />} />
                        <Route path="/Period3" element={<Period3 />} />
                        <Route path="/P2A1A" element={<P2A1A />} />
                        <Route path="/P2A1C" element={<P2A1C />} />
                        <Route path="/P2A1B" element={<P2A1B />} />
                        <Route path="/P3A3" element={<P3A3 />} />
                        <Route path="/P3A4" element={<P3A4 />} />
                        <Route path="/P3A5" element={<P3A5 />} />
                        <Route path="/P3A6" element={<P3A6 />} />
                        <Route path="/P3A7" element={<P3A7 />} />
                        <Route path="/P3A8" element={<P3A8 />} />
                        <Route path="/Chap13" element={<Chap13 />} />
                        <Route path="/Aire2" element={<Aire2 />} />
                        <Route path="/Fraction2" element={<Fraction2 />} />
                        <Route path="/PatageInegaux" element={<PatageInegaux />} />
                        <Route path="/NomberDecimaux" element={<NomberDecimaux />} />
                        <Route path="/CalculeAire" element={<CalculeAire />} />
                        <Route path="/Periode4" element={<Periode4 />} />
                        <Route path="/La_proportionnalité" element={<La_proportionnalité />} />
                        <Route path="/Les_solides" element={<Les_solides />} />
                        <Route path="/Les_mesures_Agrairs" element={<Les_mesures_Agrairs />} />
                        <Route path="/Division" element={<Division />} />
                        <Route path="/M3" element={<M3 />} />
                        <Route path="/Quiz2" element={<Quiz2 />} />
                        <Route path="/V" element={<V />} />
                        <Route path="/Login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
