import React from "react";
import { Route } from "react-router-dom";
import Accueil from "../composents/Accueil";
import QuizTest from "../composents/home/QuizTest";
import QuizTestarab from "../composents/home/QuizTestarab";

const HomeRoutes = (
    <>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/QuizTest" element={<QuizTest />} />
        <Route path="/QuizTestarab" element={<QuizTestarab />} />
    </>
);

export default HomeRoutes;
