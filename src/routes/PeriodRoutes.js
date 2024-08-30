import React from "react";
import { Route } from "react-router-dom";
import Periode1 from "../composents/Math/Periode1";
import Periode2 from "../composents/Math/Periode2";
import Period3 from "../composents/Math/period3";
import P2A1A from "../composents/Math/Periode2/C09/P2A1A";
import P2A1C from "../composents/Math/Periode2/C10/P2A1C";
import P2A1B from "../composents/Math/Periode2/C12/P2A1B";
import P3A3 from "../composents/Math/Periode2/C11/P3A3";
import P3A4 from "../composents/Math/Periode2/C13/P3A4";
import P3A5 from "../composents/Math/Periode2/C14_C15_C16/P3A5";
import P3A6 from "../composents/Math/Periode2/G4/P3A6";
import P3A7 from "../composents/Math/Periode2/G5/P3A7";
import P3A8 from "../composents/Math/Periode2/M4/P3A8";
import Aire2 from "../composents/Math/Periode2/M3/Aire2";
import Chap13 from "../composents/Math/Periode2/C16/Chap13";
import Fraction2 from "../composents/Math/Periode2/M5/Fraction2";
import PatageInegaux from "../composents/Math/Periode3/C19/PatageInegaux";
import NomberDecimaux from "../composents/C18/NomberDecimaux";
import Periode4 from "../composents/Math/Periode4/periode4";
import La_proportionnalité from "../composents/Math/Periode4/Proportionnalité/La_proportionnalité";
import Les_solides from "../composents/Math/Periode4/les solides/les_solides";
import Les_mesures_Agrairs from "../composents/Math/Periode4/MesureAgraires/MesureAgraire";
import Division from "../composents/Math/Periode2/C09/P2A1A";
import M3 from "../composents/Math/Periode2/M3/M3";

const PeriodRoutes = (
    <>
        <Route path="/Periode1" element={<Periode1 />} />
        <Route path="/Periode2" element={<Periode2 />} />
        <Route path="/Period3" element={<Period3 />} />
        <Route path="/P2A1A" element={<P2A1A />} />
        <Route path="/P2A1C" element={<P2A1C />} />
        {/* <Route path="/P2A1B" element={<P2A1B />} />
        <Route path="/P3A3" element={<P3A3 />} />
        <Route path="/P3A4" element={<P3A4 />} />
        <Route path="/P3A5" element={<P3A5 />} />
        <Route path="/P3A6" element={<P3A6 />} />
        <Route path="/P3A7" element={<P3A7 />} />
        <Route path="/P3A8" element={<P3A8 />} />
        <Route path="/Chap13" element={<Chap13 />} /> */}
        {/* <Route path="/Aire2" element={<Aire2 />} /> */}
        {/* <Route path="/Fraction2" element={<Fraction2 />} />
        <Route path="/PatageInegaux" element={<PatageInegaux />} />
        <Route path="/NomberDecimaux" element={<NomberDecimaux />} />
        <Route path="/Periode4" element={<Periode4 />} />
        <Route path="/La_proportionnalité" element={<La_proportionnalité />} />
        <Route path="/Les_solides" element={<Les_solides />} />
        <Route path="/Les_mesures_Agrairs" element={<Les_mesures_Agrairs />} />
        <Route path="/Division" element={<Division />} />
        <Route path="/M3" element={<M3 />} /> */}
    </>
);

export default PeriodRoutes;
