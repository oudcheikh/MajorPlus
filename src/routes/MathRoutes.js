import React from "react";
import { Route } from "react-router-dom";
import Math from "../composents/Math/Math";
import C1 from "../composents/Math/Periode1/C1/C1";
import C1_new from "../composents/Math/Periode1/C1/v2/C1_new";
import C2 from "../composents/Math/Periode1/C2/C2";
import C3 from "../composents/Math/Periode1/C3/C3";
import C4 from "../composents/Math/Periode1/C4/C4";
import C5 from "../composents/Math/Periode1/C5/C5";
import C5A3 from "../composents/Math/Periode1/C6/C5A3";
import C5A4 from "../composents/Math/Periode1/C6/C5A4";
import Kangaroo from "../composents/Math/Periode1/C6/Kangaroo";
import C5A5 from "../composents/Math/Periode1/C6/C5A5";
import C6 from "../composents/Math/Periode1/C6/C6";
import C7 from "../composents/Math/Periode1/C7/C7";

const MathRoutes = (
    <>
        <Route path="/Math" element={<Math />} />
        <Route path="/C1" element={<C1 index={0} />} />
        <Route path="/C1_new" element={<C1_new />} />
        <Route path="/C2" element={<C2 index={1} />} />
        <Route path="/C3" element={<C3 index={2} />} />
        <Route path="/C4" element={<C4 index={3} />} />
        <Route path="/C5A1" element={<C5 />} />
        <Route path="/C5A3" element={<C5A3 />} />
        <Route path="/C5A4" element={<C5A4 />} />
        <Route path="/Kangaroo" element={<Kangaroo />} />
        <Route path="/C5A5" element={<C5A5 />} />
        <Route path="/C6" element={<C6 />} />
        <Route path="/C7" element={<C7 />} />
    </>
);

export default MathRoutes;
