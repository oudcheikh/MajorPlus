import React from "react";
import C4A1 from "./C4A1";
import C4A2 from "./C4A2";
import C4A3 from "./C4A3";
import C4A4 from "./C4A4";
import C4Intro from "./C4Intro";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";

const C4_new = () => {
    const slides = [C4Intro, C4A1, C4A2, C4A3, C4A4];
    return (
        <div>
            <SwipeableScreens slides={slides} currentSegment={0}></SwipeableScreens>
        </div>
    );
};

export default C4_new;
