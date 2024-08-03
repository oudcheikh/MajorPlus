import React from "react";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import C1A1 from "./C1A1";
import C1A2 from "./C1A2";

export default function C1_new() {
    const slides = [C1A1, C1A2];

    return <SwipeableScreens slides={slides} currentSegment={0}></SwipeableScreens>;
}
