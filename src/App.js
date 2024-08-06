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
