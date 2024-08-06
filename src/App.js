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

// Import routes
import HomeRoutes from "./routes/HomeRoutes.js";
import MathRoutes from "./routes/MathRoutes.js";
import PeriodRoutes from "./routes/PeriodRoutes.js";

function App() {

    // const [progress, setProgress] = useState(initialState);

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
        // Function implementation
    };

    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Annimation />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signout" element={<SignOut />} />

                        <Route path="/SVG" element={<SVG />} />
                        <Route path="/ProgressMap" element={<ProgressMap />} />

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
